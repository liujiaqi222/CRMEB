(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-index-index"],
  {
    "0099": function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("99af");
      var n = a(e("f3f3")),
        o = e("86eb"),
        s = e("26cb"),
        r = e("6557"),
        c = e("2a39"),
        l = getApp(),
        d = {
          name: "bargain",
          props: { dataConfig: { type: Object, default: function () {} } },
          computed: (0, n.default)({}, (0, s.mapGetters)(["isLogin", "uid"])),
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.isShow = t.isShow.val),
                  (this.selectType = t.tabConfig.tabVal),
                  this.$set(this, "selectId", t.selectConfig.activeValue || ""),
                  this.$set(this, "type", t.titleInfo.type),
                  (this.salesOrder = 1 == t.goodsSort.type ? "desc" : ""),
                  (this.newsOrder = 2 == t.goodsSort.type ? "news" : ""),
                  (this.ids = t.ids ? t.ids.join(",") : ""),
                  (this.numConfig = t.numConfig.val),
                  this.productslist());
              },
            },
          },
          data: function () {
            return {
              bargList: [],
              name: this.$options.name,
              isIframe: l.globalData.isIframe,
              isShow: !0,
              selectType: 0,
              selectId: "",
              salesOrder: "",
              newsOrder: "",
              ids: "",
              page: 1,
              limit: this.$config.LIMIT,
              type: "",
              numConfig: 0,
            };
          },
          created: function () {},
          mounted: function () {},
          methods: {
            productslist: function () {
              var t = this,
                i = {};
              (i = t.selectType
                ? { page: t.page, limit: t.limit, type: t.type, ids: t.ids, selectType: t.selectType }
                : {
                    page: t.page,
                    limit: t.numConfig <= t.limit ? t.numConfig : t.limit,
                    type: t.type,
                    newsOrder: t.newsOrder,
                    salesOrder: t.salesOrder,
                    selectId: t.selectId,
                    selectType: t.selectType,
                  }),
                (0, c.getHomeProducts)(i)
                  .then(function (i) {
                    t.bargList = i.data.list;
                  })
                  .catch(function (i) {
                    t.$util.Tips({ title: i });
                  });
            },
            bargDetail: function (t) {
              var i = this;
              (0, r.goPage)(t).then(function (e) {
                i.isLogin
                  ? uni.navigateTo({
                      url: "/pages/activity/goods_bargain_details/index?id=".concat(t.id, "&bargain=").concat(i.uid),
                    })
                  : (0, o.toLogin)();
              });
            },
          },
        };
      i.default = d;
    },
    "0124": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { easyLoadimage: e("cad3").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "menu-main" },
            [
              t.isShow && t.menus.length
                ? e(
                    "v-uni-view",
                    { staticClass: "nav acea-row acea-row" },
                    [
                      t._l(t.menus, function (i, a) {
                        return [
                          e(
                            "v-uni-view",
                            {
                              key: a + "_0",
                              staticClass: "item",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.menusTap(i.info[1].value);
                                },
                              },
                            },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "pictrue" },
                                [e("easy-loadimage", { attrs: { mode: "widthFix", "image-src": i.img } })],
                                1
                              ),
                              e("v-uni-view", { staticClass: "menu-txt" }, [t._v(t._s(t.$t(i.info[0].value)))]),
                            ],
                            1
                          ),
                        ];
                      }),
                    ],
                    2
                  )
                : t._e(),
              !t.isShow && t.isIframe && t.menus.length
                ? e(
                    "v-uni-view",
                    { staticClass: "nav acea-row acea-row" },
                    [
                      t._l(t.menus, function (i, a) {
                        return [
                          e(
                            "v-uni-view",
                            {
                              key: a + "_0",
                              staticClass: "item",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.menusTap(i.info[1].value);
                                },
                              },
                            },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "pictrue" },
                                [e("v-uni-image", { attrs: { src: i.img } })],
                                1
                              ),
                              e("v-uni-view", { staticClass: "menu-txt" }, [t._v(t._s(i.info[0].value))]),
                            ],
                            1
                          ),
                        ];
                      }),
                    ],
                    2
                  )
                : t._e(),
              t.isIframe && !t.menus.length
                ? e(
                    "v-uni-view",
                    { staticClass: "nav acea-row acea-row" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "item" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "pictrue default" },
                            [e("v-uni-text", { staticClass: "iconfont icon-icon25201" })],
                            1
                          ),
                          e("v-uni-view", { staticClass: "menu-txt" }, [t._v(t._s(t.$t("默认")))]),
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
        o = [];
    },
    "013f": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("55f9"),
        n = e("d209");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("64d1");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "08bcd5d0", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "0164": function (t, i, e) {
      "use strict";
      var a = e("9e2f"),
        n = e.n(a);
      n.a;
    },
    "018b": function (t, i, e) {
      var a = e("db6f");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("16eeb412", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "02a3": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.promotionGood[data-v-49c0c95d]{padding:0 %?30?%;display:flex;flex-wrap:wrap;padding:%?15?% %?24?%}.promotionGood .item[data-v-49c0c95d]{width:%?215?%;display:flex;flex-direction:column;justify-content:center;padding:%?9?%}.promotionGood .item .pictrue[data-v-49c0c95d]{height:%?198?%;border-radius:%?12?%}.promotionGood .item .pictrue[data-v-49c0c95d] ,\n.promotionGood .item .pictrue[data-v-49c0c95d] uni-image,\n.promotionGood .item .pictrue[data-v-49c0c95d] .easy-loadimage,\n.promotionGood .item .pictrue[data-v-49c0c95d] uni-image{width:100%;height:%?198?%;border-radius:%?12?%}.promotionGood .item .pictrue uni-image[data-v-49c0c95d]{width:100%;height:100%;border-radius:%?12?%}.promotionGood .item .money[data-v-49c0c95d]{font-size:%?30?%;color:var(--view-priceColor);margin-top:%?10?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 auto}.promotionGood .item .money .rmb[data-v-49c0c95d]{font-weight:700;color:var(--view-priceColor);font-size:%?20?%;margin-right:%?2?%}.promotionGood .item .money .price[data-v-49c0c95d]{font-weight:700}.promotionGood .item .money .ot-price[data-v-49c0c95d]{color:#999;text-decoration:line-through;font-size:%?20?%;margin-left:%?4?%}',
          "",
        ]),
        (t.exports = i);
    },
    "03ad": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("f8dd"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "045a": function (t, i, e) {
      var a = e("c5a1");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("51731772", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "07d4": function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("a9e3");
      var a = e("26cb"),
        n = e("6557"),
        o = {
          computed: (0, a.mapGetters)(["uid"]),
          props: {
            status: { type: Number, default: 0 },
            bastList: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return {};
          },
          methods: {
            goDetail: function (t) {
              var i = this;
              (0, n.goPage)().then(function (e) {
                (0, n.goShopDetail)(t, i.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              });
            },
          },
        };
      i.default = o;
    },
    "0815": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("c40a"),
        n = e("99f5");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("5bf9");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "b482be3e", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "0a2a": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bac-col[data-v-429abae4]{width:100%;height:%?300?%;position:absolute;background-image:linear-gradient(135deg,#f97794 10%,#623aa2);top:0;background:linear-gradient(90deg,#f62c2c,#f96e29)}.swiperCon[data-v-429abae4]{margin:%?20?% 0!important}.swiperCon[data-v-429abae4] .swiper uni-swiper,\n.swiperCon[data-v-429abae4] .swiper .swiper-item,\n.swiperCon[data-v-429abae4] .swiper uni-image{height:%?190?%!important}.site-config[data-v-429abae4]{margin:%?40?% 0;font-size:%?24?%;text-align:center;color:#666}.site-config.fixed[data-v-429abae4]{position:fixed;bottom:69px;left:0;width:100%}.follow[data-v-429abae4]{position:fixed;top:0;left:0;width:100%;background-color:rgba(0,0,0,.36);height:%?80?%;font-size:%?28?%;color:#fff;padding:0 %?30?%;z-index:100000}.follow .iconfont[data-v-429abae4]{font-size:%?30?%;margin-left:%?29?%}.follow .bnt[data-v-429abae4]{width:%?160?%;height:%?50?%;background-color:#e93323;border-radius:%?25?%;font-size:%?24?%;text-align:center;line-height:%?50?%}.followCode .mask[data-v-429abae4]{z-index:10000}.followCode .pictrue[data-v-429abae4]{width:%?500?%;height:%?720?%;border-radius:12px;left:50%;top:50%;margin-left:%?-250?%;margin-top:%?-360?%;position:fixed;z-index:10001}.followCode .pictrue img[data-v-429abae4]{width:100%;height:100%}.privacy-wrapper[data-v-429abae4]{z-index:9999;position:fixed;left:0;top:0;width:100%;height:100%;background:#7f7f7f}.privacy-wrapper .privacy-box[data-v-429abae4]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?560?%;padding:%?50?% %?45?% 0;background:#fff;border-radius:%?20?%}.privacy-wrapper .privacy-box .title[data-v-429abae4]{text-align:center;font-size:%?32?%;text-align:center;color:#333;font-weight:700}.privacy-wrapper .privacy-box .content[data-v-429abae4]{margin-top:%?20?%;line-height:1.5;font-size:%?26?%;color:#666}.privacy-wrapper .privacy-box .content uni-navigator[data-v-429abae4]{display:inline-block;color:#e93323}.privacy-wrapper .privacy-box .btn-box[data-v-429abae4]{margin-top:%?40?%;text-align:center;font-size:%?30?%}.privacy-wrapper .privacy-box .btn-box .btn-item[data-v-429abae4]{height:%?82?%;line-height:%?82?%;background:linear-gradient(90deg,#f67a38,#f11b09);color:#fff;border-radius:%?41?%}.privacy-wrapper .privacy-box .btn-box .btn[data-v-429abae4]{padding:%?30?% 0}.sort-product[data-v-429abae4]{margin:%?20?%}.emptyBox[data-v-429abae4]{text-align:center;padding:%?150?% 0}.emptyBox .tips[data-v-429abae4]{color:#aaa;font-size:%?26?%}.emptyBox uni-image[data-v-429abae4]{width:%?414?%;height:%?304?%}.product-list[data-v-429abae4]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?0?%;padding:0 %?20?%}.product-list .product-item[data-v-429abae4]{position:relative;width:%?324?%;background:#fff;border-radius:%?10?%;margin-bottom:%?20?%}.product-list .product-item uni-image[data-v-429abae4]{width:100%;border-radius:%?10?% %?10?% 0 0}.product-list .product-item .info[data-v-429abae4]{padding:%?14?% %?16?%}.product-list .product-item .info .title[data-v-429abae4]{font-size:%?28?%}.product-list .product-item .info .price-box[data-v-429abae4]{font-size:%?34?%;font-weight:700;margin-top:8px;color:#fc4141}.product-list .product-item .info .price-box uni-text[data-v-429abae4]{font-size:%?26?%}.sticky-box[data-v-429abae4]{position:-webkit-sticky;position:sticky;z-index:998;flex-direction:row;margin:0;background:#f5f5f5;padding:%?24?% 0 %?24?% 0}',
          "",
        ]),
        (t.exports = i);
    },
    "0a55": function (t, i, e) {
      t.exports = e.p + "assets/img.beebfe54.png";
    },
    "0b3b": function (t, i, e) {
      var a = e("24f4");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("63d9fdaf", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0b61": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("4987"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "0cf4": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              t.isShow && t.bastList.length && !t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "goodList" },
                    [
                      t._l(t.bastList, function (i, a) {
                        return [
                          e(
                            "v-uni-view",
                            {
                              key: a + "_0",
                              staticClass: "item acea-row row-between-wrapper",
                              attrs: { "hover-class": "none" },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                },
                              },
                            },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "pictrue" },
                                [
                                  e("v-uni-image", { attrs: { src: i.image } }),
                                  i.activity && "1" === i.activity.type && t.$permission("seckill")
                                    ? e("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                        t._v(t._s(t.$t("秒杀"))),
                                      ])
                                    : t._e(),
                                  i.activity && "2" === i.activity.type
                                    ? e("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                        t._v(t._s(t.$t("砍价"))),
                                      ])
                                    : t._e(),
                                  i.activity && "3" === i.activity.type
                                    ? e("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                        t._v(t._s(t.$t("拼团"))),
                                      ])
                                    : t._e(),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                { staticClass: "underline" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "text" },
                                    [
                                      e("v-uni-view", { staticClass: "line1" }, [t._v(t._s(i.store_name))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money font-color" },
                                        [
                                          t._v(t._s(t.$t("￥"))),
                                          e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                        ],
                                        1
                                      ),
                                      i.base && i.vip_price && i.vip_price > 0
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "vip-money acea-row row-middle" },
                                            [
                                              t._v(t._s(t.$t("￥")) + t._s(i.vip_price || 0)),
                                              e("v-uni-image", {
                                                staticClass: "jvip",
                                                attrs: { src: "/static/images/jvip.png" },
                                              }),
                                              e("v-uni-text", { staticClass: "num" }, [
                                                t._v(t._s(t.$t("已售")) + t._s(i.sales) + t._s(i.unit_name)),
                                              ]),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      i.is_vip && i.vip_price && i.vip_price > 0
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "vip-money acea-row row-middle" },
                                            [
                                              t._v(t._s(t.$t("￥")) + t._s(i.vip_price || 0)),
                                              e("v-uni-image", { attrs: { src: "/static/images/vip.png" } }),
                                              e("v-uni-text", { staticClass: "num" }, [
                                                t._v(t._s(t.$t("已售")) + t._s(i.sales) + t._s(i.unit_name)),
                                              ]),
                                            ],
                                            1
                                          )
                                        : e(
                                            "v-uni-view",
                                            { staticClass: "vip-money acea-row row-middle" },
                                            [
                                              e("v-uni-text", { staticClass: "num" }, [
                                                t._v(t._s(t.$t("已售")) + t._s(i.sales) + t._s(i.unit_name)),
                                              ]),
                                            ],
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
                          ),
                        ];
                      }),
                    ],
                    2
                  )
                : t._e(),
              t.bastList.length && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "goodList" },
                    [
                      t._l(t.bastList, function (i, a) {
                        return [
                          e(
                            "v-uni-view",
                            {
                              key: a + "_0",
                              staticClass: "item acea-row row-between-wrapper",
                              attrs: { "hover-class": "none" },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                },
                              },
                            },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "pictrue" },
                                [
                                  e("v-uni-image", { attrs: { src: i.image } }),
                                  i.activity && "1" === i.activity.type && t.$permission("seckill")
                                    ? e("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                        t._v(t._s(t.$t("秒杀"))),
                                      ])
                                    : t._e(),
                                  i.activity && "2" === i.activity.type && t.$permission("bargain")
                                    ? e("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                        t._v(t._s(t.$t("砍价"))),
                                      ])
                                    : t._e(),
                                  i.activity && "3" === i.activity.type && t.$permission("combination")
                                    ? e("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                        t._v(t._s(t.$t("拼团"))),
                                      ])
                                    : t._e(),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                { staticClass: "underline" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "text" },
                                    [
                                      e("v-uni-view", { staticClass: "line1" }, [t._v(t._s(i.store_name))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money font-color" },
                                        [
                                          t._v(t._s(t.$t("￥"))),
                                          e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                        ],
                                        1
                                      ),
                                      i.base && i.vip_price && i.vip_price > 0
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "vip-money acea-row row-middle" },
                                            [
                                              t._v(t._s(t.$t("￥")) + t._s(i.vip_price || 0)),
                                              e("v-uni-image", {
                                                staticClass: "jvip",
                                                attrs: { src: "/static/images/jvip.png" },
                                              }),
                                              e("v-uni-text", { staticClass: "num" }, [
                                                t._v(t._s(t.$t("已售")) + t._s(i.sales) + t._s(i.unit_name)),
                                              ]),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      i.is_vip && i.vip_price && i.vip_price > 0
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "vip-money acea-row row-middle" },
                                            [
                                              t._v(t._s(t.$t("￥")) + t._s(i.vip_price || 0)),
                                              e("v-uni-image", { attrs: { src: "/static/images/vip.png" } }),
                                              e("v-uni-text", { staticClass: "num" }, [
                                                t._v(t._s(t.$t("已售")) + t._s(i.sales) + t._s(i.unit_name)),
                                              ]),
                                            ],
                                            1
                                          )
                                        : e(
                                            "v-uni-view",
                                            { staticClass: "vip-money acea-row row-middle" },
                                            [
                                              e("v-uni-text", { staticClass: "num" }, [
                                                t._v(t._s(t.$t("已售")) + t._s(i.sales) + t._s(i.unit_name)),
                                              ]),
                                            ],
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
                          ),
                        ];
                      }),
                    ],
                    2
                  )
                : t._e(),
              !t.bastList.length && t.isIframe
                ? e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("商品列表，暂无数据")))])
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    1125: function (t, i, e) {
      "use strict";
      var a = e("1856"),
        n = e.n(a);
      n.a;
    },
    1242: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("9c57"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "13cb": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("46ea"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "141d": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            {},
            [
              t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "live" },
                    [
                      t.isIframe && t.liveList.length > 0
                        ? e(
                            "v-uni-view",
                            [
                              t.titleInfo.length
                                ? e(
                                    "v-uni-view",
                                    { staticClass: "title-box" },
                                    [
                                      e("v-uni-text", { staticClass: "title" }, [t._v(t._s(t.$t(t.titleInfo[0].val)))]),
                                      e(
                                        "v-uni-navigator",
                                        { staticClass: "more" },
                                        [
                                          t._v(t._s(t.$t("查看更多"))),
                                          e("v-uni-text", { staticClass: "iconfont icon-jiantou" }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              e(
                                "v-uni-view",
                                { staticClass: "live-wrapper-a" },
                                t._l(t.liveList, function (i, a) {
                                  return e(
                                    "v-uni-navigator",
                                    {
                                      key: a,
                                      staticClass: "live-item-a",
                                      attrs: {
                                        url:
                                          "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=" +
                                          i.room_id +
                                          "&custom_params=" +
                                          t.custom_params,
                                        "hover-class": "none",
                                      },
                                    },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "img-box" },
                                        [
                                          102 == i.live_status
                                            ? e(
                                                "v-uni-view",
                                                { staticClass: "bgblue" },
                                                [
                                                  e("v-uni-view", { staticClass: "txt" }, [t._v(t._s(t.$t("预告")))]),
                                                  e("v-uni-view", { staticClass: "msg" }, [t._v(t._s(i.show_time))]),
                                                ],
                                                1
                                              )
                                            : t._e(),
                                          103 == i.live_status
                                            ? e(
                                                "v-uni-view",
                                                { staticClass: "label bggary" },
                                                [
                                                  e("v-uni-text", { staticClass: "iconfont icon-huifang" }),
                                                  e("v-uni-text", [t._v(t._s(t.$t("回放")))]),
                                                ],
                                                1
                                              )
                                            : t._e(),
                                          101 == i.live_status
                                            ? e(
                                                "v-uni-view",
                                                { staticClass: "label bgred" },
                                                [
                                                  e("v-uni-text", { staticClass: "iconfont icon-zhibozhong" }),
                                                  e("v-uni-text", [t._v(t._s(t.$t("进行中")))]),
                                                ],
                                                1
                                              )
                                            : t._e(),
                                          e("v-uni-image", { attrs: { src: i.share_img } }),
                                        ],
                                        1
                                      ),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "info" },
                                        [e("v-uni-view", { staticClass: "title line1" }, [t._v(t._s(t.$t(i.name)))])],
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
                      t.isIframe && !t.liveList.length
                        ? e(
                            "v-uni-view",
                            [
                              t.titleInfo.length
                                ? e(
                                    "v-uni-view",
                                    { staticClass: "title-box" },
                                    [
                                      e("v-uni-text", { staticClass: "title" }, [t._v(t._s(t.titleInfo[0].val))]),
                                      e(
                                        "v-uni-navigator",
                                        { staticClass: "more" },
                                        [
                                          t._v(t._s(t.$t("查看更多"))),
                                          e("v-uni-text", { staticClass: "iconfont icon-jiantou" }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              e(
                                "v-uni-view",
                                { staticClass: "live-wrapper-a" },
                                [e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("暂无数据")))])],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
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
    1856: function (t, i, e) {
      var a = e("5ee7");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("f13f6350", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1a71": function (t, i, e) {
      var a = e("2f16");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("87959e6e", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1ab8": function (t, i, e) {
      var a = e("3c04");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("b7be16f6", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1c41": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("4c6d"),
        n = e("956b");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("200b");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "298104d4", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "1cf9": function (t, i, e) {
      "use strict";
      var a = e("018b"),
        n = e.n(a);
      n.a;
    },
    "1daf": function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = e("26cb"),
        n = e("6557"),
        o = e("2a39"),
        s = getApp(),
        r = {
          name: "goodList",
          computed: (0, a.mapGetters)(["uid"]),
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.isShow = t.isShow.val),
                  (this.selectType = t.tabConfig.tabVal),
                  this.$set(this, "selectId", t.selectConfig.activeValue || ""),
                  this.$set(this, "type", t.selectSortConfig.activeValue),
                  (this.salesOrder = 1 == t.goodsSort.type ? "desc" : ""),
                  (this.newsOrder = 2 == t.goodsSort.type ? "news" : ""),
                  (this.ids = t.ids ? t.ids.join(",") : ""),
                  (this.numConfig = t.numConfig.val),
                  this.productslist());
              },
            },
          },
          data: function () {
            return {
              bastList: [],
              name: this.$options.name,
              isIframe: !1,
              isShow: !0,
              selectType: 0,
              selectId: "",
              salesOrder: "",
              newsOrder: "",
              ids: "",
              page: 1,
              limit: this.$config.LIMIT,
              type: "",
              numConfig: 0,
            };
          },
          created: function () {
            this.isIframe = s.globalData.isIframe;
          },
          mounted: function () {},
          methods: {
            productslist: function () {
              var t = this,
                i = {};
              (i = t.selectType
                ? { page: t.page, limit: t.limit, type: t.type, ids: t.ids, selectType: t.selectType }
                : {
                    page: t.page,
                    limit: t.numConfig <= t.limit ? t.numConfig : t.limit,
                    type: t.type,
                    newsOrder: t.newsOrder,
                    salesOrder: t.salesOrder,
                    selectId: t.selectId,
                    selectType: t.selectType,
                  }),
                (0, o.getHomeProducts)(i)
                  .then(function (i) {
                    t.bastList = i.data.list;
                  })
                  .catch(function (i) {
                    t.$util.Tips({ title: i });
                  });
            },
            goDetail: function (t) {
              var i = this;
              (0, n.goPage)().then(function (e) {
                (0, n.goShopDetail)(t, i.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              });
            },
          },
        };
      i.default = r;
    },
    "1df9": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { easyLoadimage: e("cad3").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              e(
                "v-uni-view",
                { staticClass: "productList", style: t.colorStyle },
                [
                  t.isShow && t.bastList.length
                    ? e(
                        "v-uni-view",
                        { staticClass: "index-wrapper acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "title acea-row row-between-wrapper" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "name line1" },
                                    [
                                      e("v-uni-text", { staticClass: "iconfont icon-jingpintuijian1" }),
                                      t._v(t._s(t.$t(t.titleInfo[0].val))),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "line1 txt-btn" }, [
                                    t._v(t._s(t.$t(t.titleInfo[1].val))),
                                  ]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "more",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                                1
                              ),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "item-box" },
                            t._l(t.bastList, function (i, a) {
                              return e(
                                "v-uni-view",
                                {
                                  key: a,
                                  staticClass: "item",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "pictrue" },
                                    [e("easy-loadimage", { attrs: { mode: "widthFix", "image-src": i.image } })],
                                    1
                                  ),
                                  e(
                                    "v-uni-view",
                                    { staticClass: "text" },
                                    [
                                      e("v-uni-view", { staticClass: "name line2" }, [t._v(t._s(i.store_name))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "type" },
                                        [
                                          i.activity && "1" == i.activity.type && t.$permission("seckill")
                                            ? e("v-uni-view", { staticClass: "type-sty" }, [t._v(t._s(t.$t("秒杀")))])
                                            : t._e(),
                                          i.activity && "2" == i.activity.type && t.$permission("bargain")
                                            ? e("v-uni-view", { staticClass: "type-sty" }, [t._v(t._s(t.$t("砍价")))])
                                            : t._e(),
                                          i.activity && "3" == i.activity.type && t.$permission("combination")
                                            ? e("v-uni-view", { staticClass: "type-sty" }, [t._v(t._s(t.$t("砍价")))])
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "vip acea-row" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "money font-color" },
                                            [
                                              t._v(t._s(t.$t("￥"))),
                                              e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                            ],
                                            1
                                          ),
                                          i.vip_price && i.vip_price > 0 && i.base
                                            ? e(
                                                "v-uni-view",
                                                { staticClass: "vip-money" },
                                                [
                                                  t._v(t._s(t.$t("￥")) + t._s(i.vip_price)),
                                                  e("v-uni-image", {
                                                    staticClass: "jvip",
                                                    attrs: { src: "/static/images/jvip.png" },
                                                  }),
                                                ],
                                                1
                                              )
                                            : t._e(),
                                          i.vip_price && i.vip_price > 0 && i.is_vip
                                            ? e(
                                                "v-uni-view",
                                                { staticClass: "vip-money" },
                                                [
                                                  t._v(t._s(t.$t("￥")) + t._s(i.vip_price)),
                                                  e("v-uni-image", { attrs: { src: "/static/images/vip.png" } }),
                                                ],
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
                      )
                    : t._e(),
                  !t.isShow && t.isIframe && t.bastList.length
                    ? e(
                        "v-uni-view",
                        { staticClass: "index-wrapper list acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "title acea-row row-between-wrapper" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "name line1" },
                                    [
                                      e("v-uni-text", { staticClass: "iconfont icon-jingpintuijian1" }),
                                      t._v(t._s(t.titleInfo[0].val)),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "more",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                                1
                              ),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "item-box" },
                            t._l(t.bastList, function (i, a) {
                              return e(
                                "v-uni-view",
                                {
                                  key: a,
                                  staticClass: "item",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "pictrue" },
                                    [e("v-uni-image", { attrs: { src: i.image } })],
                                    1
                                  ),
                                  e(
                                    "v-uni-view",
                                    { staticClass: "text" },
                                    [
                                      e("v-uni-view", { staticClass: "name line2" }, [t._v(t._s(i.store_name))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "type" },
                                        [
                                          i.activity && "1" == i.activity.type && t.$permission("seckill")
                                            ? e("v-uni-view", { staticClass: "type-sty" }, [t._v(t._s(t.$t("秒杀")))])
                                            : t._e(),
                                          i.activity && "2" == i.activity.type && t.$permission("bargain")
                                            ? e("v-uni-view", { staticClass: "type-sty" }, [t._v(t._s(t.$t("砍价")))])
                                            : t._e(),
                                          i.activity && "3" == i.activity.type && t.$permission("combination")
                                            ? e("v-uni-view", { staticClass: "type-sty" }, [t._v(t._s(t.$t("拼团")))])
                                            : t._e(),
                                          i.checkCoupon
                                            ? e("v-uni-view", { staticClass: "type-sty" }, [t._v(t._s(t.$t("ticket")))])
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money font-color" },
                                        [
                                          t._v(t._s(t.$t("￥"))),
                                          e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                        ],
                                        1
                                      ),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "vip acea-row row-between-wrapper" },
                                        [
                                          i.vip_price && i.vip_price > 0 && i.base
                                            ? e(
                                                "v-uni-view",
                                                { staticClass: "vip-money" },
                                                [
                                                  t._v(t._s(t.$t("￥")) + t._s(i.vip_price)),
                                                  e("v-uni-image", {
                                                    staticClass: "jvip",
                                                    attrs: { src: "/static/images/jvip.png" },
                                                  }),
                                                ],
                                                1
                                              )
                                            : t._e(),
                                          i.vip_price && i.vip_price > 0 && i.is_vip
                                            ? e(
                                                "v-uni-view",
                                                { staticClass: "vip-money" },
                                                [
                                                  t._v(t._s(t.$t("￥")) + t._s(i.vip_price)),
                                                  e("v-uni-image", { attrs: { src: "/static/images/vip.png" } }),
                                                ],
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
                      )
                    : t._e(),
                  t.isIframe && !t.bastList.length
                    ? [
                        t.isIframe && !t.fastList.length
                          ? e(
                              "v-uni-view",
                              { staticClass: "index-wrapper" },
                              [
                                e(
                                  "v-uni-view",
                                  { staticClass: "title acea-row row-between-wrapper" },
                                  [
                                    e(
                                      "v-uni-view",
                                      { staticClass: "text" },
                                      [
                                        e(
                                          "v-uni-view",
                                          { staticClass: "name line1" },
                                          [
                                            e("v-uni-text", { staticClass: "iconfont icon-jingpintuijian1" }),
                                            t._v(t._s(t.titleInfo[0].val)),
                                          ],
                                          1
                                        ),
                                        e("v-uni-view", { staticClass: "line1 txt-btn" }, [
                                          t._v(t._s(t.titleInfo[1].val)),
                                        ]),
                                      ],
                                      1
                                    ),
                                    e(
                                      "v-uni-navigator",
                                      {
                                        staticClass: "more",
                                        attrs: { "open-type": "switchTab", url: t.titleInfo[2].val },
                                      },
                                      [
                                        t._v(t._s(t.$t("更多"))),
                                        e("v-uni-text", { staticClass: "iconfont icon-jiantou" }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                e(
                                  "v-uni-view",
                                  { staticClass: "scroll-product" },
                                  [
                                    e("v-uni-view", { staticClass: "empty-img" }, [
                                      t._v(t._s(t.$t("精品推荐，暂无数据"))),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : t._e(),
                      ]
                    : t._e(),
                ],
                2
              ),
            ],
            1
          );
        },
        o = [];
    },
    "1e69": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return t.pageShow
            ? e(
                "v-uni-view",
                {
                  staticClass: "page",
                  class: 2 == t.bgTabVal ? "fullsize noRepeat" : 1 == t.bgTabVal ? "repeat ysize" : "noRepeat ysize",
                  style:
                    "background-color:" +
                    t.bgColor +
                    ";background-image: url(" +
                    t.bgPic +
                    ");min-height:" +
                    t.windowHeight +
                    "px;",
                },
                [
                  t.errorNetwork
                    ? e(
                        "v-uni-view",
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "error-network" },
                            [
                              e("v-uni-image", { attrs: { src: t.imgHost + "/statics/images/error-network.png" } }),
                              e("v-uni-view", { staticClass: "title" }, [t._v(t._s(t.$t("网络连接断开")))]),
                              e(
                                "v-uni-view",
                                { staticClass: "con" },
                                [
                                  e("v-uni-view", { staticClass: "label" }, [t._v(t._s(t.$t("请检查情况：")) + "：")]),
                                  e("v-uni-view", { staticClass: "item" }, [
                                    t._v("· " + t._s(t.$t("在设置中是否已开启网络权限："))),
                                  ]),
                                  e("v-uni-view", { staticClass: "item" }, [
                                    t._v("· " + t._s(t.$t("当前是否处于弱网环境"))),
                                  ]),
                                  e("v-uni-view", { staticClass: "item" }, [
                                    t._v("· " + t._s(t.$t("版本是否过低，升级试试吧"))),
                                  ]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "btn",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.reconnect.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("重新连接")))]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : e(
                        "v-uni-view",
                        { style: t.colorStyle },
                        [
                          e("skeleton", {
                            ref: "skeleton",
                            attrs: {
                              show: t.showSkeleton,
                              isNodes: t.isNodes,
                              loading: "chiaroscuro",
                              selector: "skeleton",
                              bgcolor: "#FFF",
                            },
                          }),
                          e(
                            "v-uni-view",
                            {
                              staticClass: "index skeleton",
                              style: { visibility: t.showSkeleton ? "hidden" : "visible" },
                            },
                            [
                              t._l(t.styleConfig, function (i, a) {
                                return e(
                                  "v-uni-view",
                                  { key: a },
                                  [
                                    e(i.name, {
                                      tag: "component",
                                      attrs: {
                                        index: a,
                                        dataConfig: i,
                                        tempArr: t.tempArr,
                                        iSshowH: t.iSshowH,
                                        isSortType: t.isSortType,
                                        isFixed: t.isFixed,
                                      },
                                      on: {
                                        changeBarg: function (i) {
                                          (arguments[0] = i = t.$handleEvent(i)), t.changeBarg.apply(void 0, arguments);
                                        },
                                        changeTab: function (i) {
                                          (arguments[0] = i = t.$handleEvent(i)), t.changeTab.apply(void 0, arguments);
                                        },
                                        detail: function (i) {
                                          (arguments[0] = i = t.$handleEvent(i)), t.goDetail.apply(void 0, arguments);
                                        },
                                        bindSortId: function (i) {
                                          (arguments[0] = i = t.$handleEvent(i)), t.bindSortId.apply(void 0, arguments);
                                        },
                                        bindHeight: function (i) {
                                          (arguments[0] = i = t.$handleEvent(i)), t.bindHeight.apply(void 0, arguments);
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                );
                              }),
                              1 == t.isSortType
                                ? e(
                                    "v-uni-view",
                                    { staticClass: "sort-product", style: { marginTop: t.sortMpTop + "px" } },
                                    [
                                      e(
                                        "v-uni-scroll-view",
                                        { staticStyle: { background: "#fff" }, attrs: { "scroll-x": "true" } },
                                        [
                                          t.sortList.children && t.sortList.children.length
                                            ? e(
                                                "v-uni-view",
                                                { staticClass: "sort-box" },
                                                t._l(t.sortList.children, function (i, a) {
                                                  return e(
                                                    "v-uni-view",
                                                    {
                                                      key: a,
                                                      staticClass: "sort-item",
                                                      class: { on: t.curSort == a },
                                                      on: {
                                                        click: function (e) {
                                                          (arguments[0] = e = t.$handleEvent(e)), t.changeSort(i, a);
                                                        },
                                                      },
                                                    },
                                                    [
                                                      i.pic
                                                        ? e("v-uni-image", { attrs: { src: i.pic, mode: "" } })
                                                        : e("v-uni-image", {
                                                            attrs: { src: "/static/images/sort-img.png", mode: "" },
                                                          }),
                                                      e("v-uni-view", { staticClass: "txt" }, [
                                                        t._v(t._s(t.$t(i.cate_name))),
                                                      ]),
                                                    ],
                                                    1
                                                  );
                                                }),
                                                1
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                      t.goodList.length
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "product-list" },
                                            t._l(t.goodList, function (i, a) {
                                              return e(
                                                "v-uni-view",
                                                {
                                                  staticClass: "product-item",
                                                  on: {
                                                    click: function (e) {
                                                      (arguments[0] = e = t.$handleEvent(e)), t.goGoodsDetail(i);
                                                    },
                                                  },
                                                },
                                                [
                                                  e("v-uni-image", { attrs: { src: i.image } }),
                                                  i.activity && "1" === i.activity.type && t.$permission("seckill")
                                                    ? e("span", { staticClass: "pictrue_log_big pictrue_log_class" }, [
                                                        t._v(t._s(t.$t("秒杀"))),
                                                      ])
                                                    : t._e(),
                                                  i.activity && "2" === i.activity.type && t.$permission("bargain")
                                                    ? e("span", { staticClass: "pictrue_log_big pictrue_log_class" }, [
                                                        t._v(t._s(t.$t("砍价"))),
                                                      ])
                                                    : t._e(),
                                                  i.activity && "3" === i.activity.type && t.$permission("combination")
                                                    ? e("span", { staticClass: "pictrue_log_big pictrue_log_class" }, [
                                                        t._v(t._s(t.$t("拼团"))),
                                                      ])
                                                    : t._e(),
                                                  i.checkCoupon
                                                    ? e("span", { staticClass: "pictrue_log_big pictrue_log_class" }, [
                                                        t._v(t._s(t.$t("券"))),
                                                      ])
                                                    : t._e(),
                                                  e(
                                                    "v-uni-view",
                                                    { staticClass: "info" },
                                                    [
                                                      e("v-uni-view", { staticClass: "title line2" }, [
                                                        t._v(t._s(i.store_name)),
                                                      ]),
                                                      e(
                                                        "v-uni-view",
                                                        { staticClass: "price-box" },
                                                        [
                                                          e("v-uni-text", [t._v(t._s(t.$t("￥")))]),
                                                          t._v(t._s(i.price)),
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
                                          )
                                        : t._e(),
                                      e("Loading", { attrs: { loaded: t.loaded, loading: t.loading } }),
                                      0 == t.goodList.length && t.loaded
                                        ? e(
                                            "v-uni-view",
                                            {},
                                            [
                                              e(
                                                "v-uni-view",
                                                { staticClass: "emptyBox" },
                                                [
                                                  e("v-uni-image", {
                                                    attrs: { src: t.imgHost + "/statics/images/no-thing.png" },
                                                  }),
                                                  e("v-uni-view", { staticClass: "tips" }, [
                                                    t._v(t._s(t.$t("暂无数据"))),
                                                  ]),
                                                ],
                                                1
                                              ),
                                              e("recommend", { attrs: { hostProduct: t.hostProduct } }),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  )
                                : t._e(),
                              e("couponWindow", {
                                attrs: {
                                  window: t.isCouponShow,
                                  couponImage: t.couponObj.image,
                                  couponList: t.couponObj.list,
                                },
                                on: {
                                  onColse: function (i) {
                                    (arguments[0] = i = t.$handleEvent(i)), t.couponClose.apply(void 0, arguments);
                                  },
                                },
                              }),
                              t.site_config.record_No
                                ? e(
                                    "v-uni-view",
                                    {
                                      staticClass: "site-config",
                                      on: {
                                        click: function (i) {
                                          (arguments[0] = i = t.$handleEvent(i)), t.goICP(1);
                                        },
                                      },
                                    },
                                    [t._v(t._s(t.site_config.record_No))]
                                  )
                                : t._e(),
                              t.site_config.network_security
                                ? e(
                                    "v-uni-view",
                                    {
                                      staticClass: "site-config",
                                      on: {
                                        click: function (i) {
                                          (arguments[0] = i = t.$handleEvent(i)), t.goICP(2);
                                        },
                                      },
                                    },
                                    [t._v(t._s(t.site_config.network_security))]
                                  )
                                : t._e(),
                              e("v-uni-view", { staticClass: "uni-p-b-98" }),
                            ],
                            2
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
    "1eda": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("8ca8"),
        n = e("1242");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("6489");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "2dbd6974", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "200b": function (t, i, e) {
      "use strict";
      var a = e("a4db"),
        n = e.n(a);
      n.a;
    },
    2111: function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = e("6557"),
        n = getApp(),
        o = 2 * uni.getSystemInfoSync().statusBarHeight + "rpx",
        s = 2 * uni.getSystemInfoSync().statusBarHeight + 170 + "rpx",
        r = {
          name: "headerSerch",
          props: { dataConfig: { type: Object, default: function () {} } },
          data: function () {
            return {
              logoConfig: "",
              hotWords: [],
              sysHeight: o,
              headH: s,
              name: this.$options.name,
              isShow: !0,
              isIframe: n.globalData.isIframe,
              titleInfo: [],
            };
          },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.logoConfig = t ? t.imgUrl.url : ""),
                  (this.hotWords = t.hotList.list || []),
                  (this.isShow = t.isShow.val),
                  (this.titleInfo = t.titleInfo && t.titleInfo.list.length ? t.titleInfo.list : []),
                  uni.setStorageSync("hotList", this.hotWords || []));
              },
            },
          },
          mounted: function () {},
          methods: {
            goPage: function () {
              (0, a.goPage)().then(function (t) {
                uni.navigateTo({ url: "/pages/goods/goods_search/index" });
              });
            },
          },
        };
      i.default = r;
    },
    2213: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("cbd0"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "225d": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.default[data-v-04b3f9c2]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.default .iconfont[data-v-04b3f9c2]{font-size:%?50?%}.combination[data-v-04b3f9c2]{width:100%;background-color:#fff;border-radius:%?14?%}.combination .conter[data-v-04b3f9c2]{width:%?690?%;height:%?320?%;background-color:#fff;border-radius:12px;margin:%?26?% auto 0 auto}.combination .conter .itemCon[data-v-04b3f9c2]{display:inline-block;width:%?174?%;margin-right:%?24?%}.combination .conter .itemCon .item[data-v-04b3f9c2]{width:100%}.combination .conter .itemCon .item .pictrue[data-v-04b3f9c2]{width:100%;height:%?174?%;border-radius:%?6?%}.combination .conter .itemCon .item .pictrue uni-image[data-v-04b3f9c2]{width:100%;height:100%;border-radius:%?6?%}.combination .conter .itemCon .item .name[data-v-04b3f9c2]{font-size:%?24?%;color:#333;margin-top:%?10?%}.combination .conter .itemCon .item .money .y_money[data-v-04b3f9c2]{font-size:%?20?%;color:#999;text-decoration:line-through}.combination .conter .itemCon .item .money .x_money[data-v-04b3f9c2]{color:#fd502f;font-size:%?24?%;font-weight:700;margin-top:%?3?%}.combination .conter .itemCon .item .money .x_money .num[data-v-04b3f9c2]{font-size:%?28?%}',
          "",
        ]),
        (t.exports = i);
    },
    2365: function (t, i, e) {
      "use strict";
      var a = e("0b3b"),
        n = e.n(a);
      n.a;
    },
    "245d": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              t.isIframe && !t.combinationList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "default" },
                    [e("v-uni-text", [t._v(t._s(t.$t("拼团模块，暂无数据")))])],
                    1
                  )
                : t._e(),
              t.combinationList.length && t.isShow && !t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "combination index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.$t("拼团活动")))]),
                              e("v-uni-view", { staticClass: "line1" }, [t._v(t._s(t.$t("享超值开团价")))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            {
                              staticClass: "more",
                              attrs: { url: "/pages/activity/goods_combination/index", "hover-class": "none" },
                            },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "conter" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.combinationList, function (i, a) {
                              return e(
                                "v-uni-view",
                                {
                                  key: a,
                                  staticClass: "itemCon",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "item" },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "pictrue" },
                                        [e("v-uni-image", { attrs: { src: i.image } })],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(i.title))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "price acea-row row-middle" },
                                            [
                                              e("v-uni-view", { staticClass: "label" }, [t._v(t._s(t.$t("拼团价")))]),
                                              e(
                                                "v-uni-view",
                                                { staticClass: "x_money" },
                                                [
                                                  t._v(t._s(t.$t("￥"))),
                                                  e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "bnt" }, [t._v(t._s(t.$t("参与拼团")))]),
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
                  )
                : t._e(),
              t.combinationList.length && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "combination index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.$t("拼团活动")))]),
                              e("v-uni-view", { staticClass: "line1" }, [t._v(t._s(t.$t("享超值开团价")))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            { staticClass: "more" },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "conter" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.combinationList, function (i, a) {
                              return e(
                                "v-uni-view",
                                {
                                  key: a,
                                  staticClass: "itemCon",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "item" },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "pictrue" },
                                        [e("v-uni-image", { attrs: { src: i.image } })],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(i.title))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "price acea-row row-middle" },
                                            [
                                              e("v-uni-view", { staticClass: "label" }, [t._v(t._s(t.$t("拼团价")))]),
                                              e(
                                                "v-uni-view",
                                                { staticClass: "x_money" },
                                                [
                                                  t._v(t._s(t.$t("￥"))),
                                                  e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "bnt" }, [t._v(t._s(t.$t("参与拼团")))]),
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
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "24f4": function (t, i, e) {
      var a = e("24fb"),
        n = e("1de5"),
        o = e("69a8");
      i = a(!1);
      var s = n(o);
      i.push([
        t.i,
        '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.popup-bg[data-v-1eeffcd8]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;left:%?0?%;right:0;bottom:0;width:%?750?%;background-color:rgba(0,0,0,.6);z-index:10000}.popup-content[data-v-1eeffcd8]{display:flex;flex-direction:column;align-items:center}.popup-content-show[data-v-1eeffcd8]{-webkit-animation:mymove-data-v-1eeffcd8 .5s;animation:mymove-data-v-1eeffcd8 .5s;-webkit-transform:scale(1);transform:scale(1)}@-webkit-keyframes mymove-data-v-1eeffcd8{0%{-webkit-transform:scale(0);transform:scale(0)\n    /*开始为原始大小*/}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes mymove-data-v-1eeffcd8{0%{-webkit-transform:scale(0);transform:scale(0)\n    /*开始为原始大小*/}100%{-webkit-transform:scale(1);transform:scale(1)}}.update-wrap[data-v-1eeffcd8]{width:%?580?%;border-radius:%?18?%;position:relative;display:flex;flex-direction:column;background-color:#fff;padding:%?170?% %?30?% 0}.update-wrap .top-img[data-v-1eeffcd8]{position:absolute;left:0;width:100%;height:%?256?%;top:%?-128?%}.update-wrap .content[data-v-1eeffcd8]{display:flex;flex-direction:column;align-items:center;padding-bottom:%?40?%}.update-wrap .content .title[data-v-1eeffcd8]{font-size:%?32?%;font-weight:700;color:#6526f3}.update-wrap .content .title-sub[data-v-1eeffcd8]{text-align:center;font-size:%?24?%;color:#666;padding:%?30?% 0}.update-wrap .content .btn[data-v-1eeffcd8]{width:%?460?%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:%?30?%;height:%?80?%;line-height:%?80?%;border-radius:100px;background-color:#6526f3;margin-top:%?20?%}.close-ioc[data-v-1eeffcd8]{width:%?70?%;height:%?70?%;margin-top:%?30?%}.sche-wrap[data-v-1eeffcd8]{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:%?10?% %?50?% 0}.sche-wrap .sche-wrap-text[data-v-1eeffcd8]{font-size:%?24?%;color:#666;margin-bottom:%?20?%}.sche-wrap .sche-bg[data-v-1eeffcd8]{position:relative;background-color:#ccc;height:%?30?%;border-radius:100px;width:%?480?%;display:flex;align-items:center}.sche-wrap .sche-bg .sche-bg-jindu[data-v-1eeffcd8]{position:absolute;left:0;top:0;height:%?30?%;min-width:%?40?%;border-radius:100px;background:url(' +
          s +
          ") #5775e7 100% %?4?% no-repeat;background-size:%?26?% %?26?%}.sche-wrap .down-text[data-v-1eeffcd8]{font-size:%?24?%;color:#5674e5;margin-top:%?16?%}",
        "",
      ]),
        (t.exports = i);
    },
    2594: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("c7b3"),
        n = e("b9bf");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("66de");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "31219173", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "25a8": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("1df9"),
        n = e("6c03");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("4ca5");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "4ca18626", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "28f9": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-36fbbaf4]{padding:0 %?30?%;margin-top:%?26?%}.recommend .pictrue[data-v-36fbbaf4]{width:%?338?%;height:%?206?%;background-color:#ccc;border-radius:%?8?%;margin-bottom:%?15?%}.recommend .pictrue uni-image[data-v-36fbbaf4]{width:100%;height:100%}.recommend .pictrue .iconfont[data-v-36fbbaf4]{font-size:%?50?%}.recommend .pictrue[data-v-36fbbaf4]:nth-last-child(1){margin-bottom:0}.recommend .pictrue[data-v-36fbbaf4]:nth-last-child(2){margin-bottom:0}',
          "",
        ]),
        (t.exports = i);
    },
    "2b44": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.default[data-v-5eb1bb30]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.default .iconfont[data-v-5eb1bb30]{font-size:%?50?%}.title .text[data-v-5eb1bb30]{display:flex;align-items:flex-end}.title .text .txt-btn[data-v-5eb1bb30]{margin-bottom:%?6?%;margin-left:6px}.coupon[data-v-5eb1bb30]{margin:%?20?% %?30?% %?20?% %?30?%;padding:%?0?% 0 %?20?% 0;background-color:#fff;border-radius:%?12?%}.coupon .conter[data-v-5eb1bb30]{margin-top:%?25?%;padding:0 %?20?%}.coupon .conter .itemCon[data-v-5eb1bb30]{background-size:100% 100%;width:%?226?%;height:%?108?%;display:inline-block;margin-right:%?24?%}.coupon .conter .itemCon .on .item[data-v-5eb1bb30]{background-color:rgba(233,51,35,.1)!important}.coupon .conter .itemCon .on .icon-youhuiquantoumingbeijing[data-v-5eb1bb30]{color:#f3f3f3!important}.coupon .conter .itemCon .no[data-v-5eb1bb30]{background:linear-gradient(135deg,var(--view-main-start),var(--view-main-over))}.coupon .conter .itemCon .no .icon-youhuiquantoumingbeijing[data-v-5eb1bb30]{color:hsla(0,0%,100%,.8)}.coupon .conter .itemCon .no .man[data-v-5eb1bb30]{background-color:var(--view-theme)}.coupon .conter .itemCon .no .bnt[data-v-5eb1bb30]{color:var(--view-theme)!important}.coupon .conter .itemCon .item[data-v-5eb1bb30]{width:100%;height:100%;position:relative;border-radius:%?10?%;background-color:#b9b9b9}.coupon .conter .itemCon .item .cir[data-v-5eb1bb30]{position:absolute;left:%?-6?%;top:%?-6?%;width:%?16?%;height:%?16?%;border-radius:50%;background:#fff;z-index:100}.coupon .conter .itemCon .item .cir2[data-v-5eb1bb30]{position:absolute;left:%?-6?%;bottom:%?-6?%;width:%?16?%;height:%?16?%;border-radius:50%;background:#fff;z-index:100}.coupon .conter .itemCon .item .icon-youhuiquantoumingbeijing[data-v-5eb1bb30]{position:absolute;right:0;width:%?88?%;height:100%;font-size:%?124?%;line-height:%?124?%;height:%?124?%;z-index:99}.coupon .conter .itemCon .item .text[data-v-5eb1bb30]{padding-left:%?20?%;color:#fff;font-size:%?22?%;width:%?168?%;padding-bottom:%?6?%;z-index:99}.coupon .conter .itemCon .item .text .money[data-v-5eb1bb30]{font-size:%?30?%;font-weight:700}.coupon .conter .itemCon .item .text .money .num[data-v-5eb1bb30]{font-size:%?44?%}.coupon .conter .itemCon .item .text .man[data-v-5eb1bb30]{width:-webkit-max-content;width:max-content;border-radius:%?20?%;padding:0 %?10?%}.coupon .conter .itemCon .item .bnt[data-v-5eb1bb30]{-webkit-writing-mode:vertical-lr;writing-mode:vertical-lr;font-size:%?22?%;margin:0 %?12?%;z-index:99;color:#818181}',
          "",
        ]),
        (t.exports = i);
    },
    "2c9f": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              t.isIframe && !t.spikeList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "default" },
                    [e("v-uni-text", [t._v(t._s(t.$t("秒杀模块，暂无数据")))])],
                    1
                  )
                : t._e(),
              t.spikeList.length && t.isShow && !t.isIframe && t.$permission("seckill")
                ? e(
                    "v-uni-view",
                    { staticClass: "seckill" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "acea-row row-middle" },
                            [
                              e("v-uni-view", { staticClass: "name" }, [t._v(t._s(t.$t("限时秒杀")))]),
                              e("v-uni-view", { staticClass: "point" }, [t._v(t._s(t.point) + " " + t._s(t.$t("场")))]),
                              e("countDown", {
                                attrs: {
                                  "is-day": !1,
                                  "tip-text": " ",
                                  "day-text": " ",
                                  "hour-text": " : ",
                                  "minute-text": " : ",
                                  "second-text": " ",
                                  datatime: t.datatime,
                                },
                              }),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            {
                              staticClass: "more acea-row row-center-wrapper",
                              attrs: { url: "/pages/activity/goods_seckill/index", "hover-class": "none" },
                            },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "conter" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.spikeList, function (i, a) {
                              return e(
                                "v-uni-view",
                                {
                                  key: a,
                                  staticClass: "itemCon",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "item" },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "pictrue" },
                                        [e("v-uni-image", { attrs: { src: i.image } })],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(i.title))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "x_money" },
                                            [
                                              t._v(t._s(t.$t("￥"))),
                                              e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "y_money" }, [
                                            t._v(t._s(t.$t("￥")) + t._s(i.ot_price)),
                                          ]),
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
                  )
                : t._e(),
              t.spikeList.length && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "seckill" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "acea-row row-middle" },
                            [
                              e("v-uni-view", { staticClass: "name" }, [t._v(t._s(t.$t("限时秒杀")))]),
                              e("v-uni-view", { staticClass: "point" }, [t._v(t._s(t.point) + " " + t._s(t.$t("场")))]),
                              e("countDown", {
                                attrs: {
                                  "is-day": !1,
                                  "tip-text": " ",
                                  "day-text": " ",
                                  "hour-text": " : ",
                                  "minute-text": " : ",
                                  "second-text": " ",
                                  datatime: t.datatime,
                                },
                              }),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            { staticClass: "more acea-row row-center-wrapper" },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "conter" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.spikeList, function (i, a) {
                              return e(
                                "v-uni-view",
                                {
                                  key: a,
                                  staticClass: "itemCon",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "item" },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "pictrue" },
                                        [e("v-uni-image", { attrs: { src: i.image } })],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(i.title))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "x_money" },
                                            [
                                              t._v(t._s(t.$t("￥"))),
                                              e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "y_money" }, [
                                            t._v(t._s(t.$t("￥")) + t._s(i.ot_price)),
                                          ]),
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
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "2ca8": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { easyLoadimage: e("cad3").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              t.isShow
                ? e(
                    "v-uni-view",
                    { staticClass: "specialArea acea-row row-between-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        {
                          staticClass: "assemble skeleton-rect",
                          attrs: { "hover-class": "none" },
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.activityOne.info[2].value);
                            },
                          },
                        },
                        [e("v-uni-image", { attrs: { src: t.activityOne.img, alt: "", srcset: "" } })],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "list acea-row row-column-between" },
                        t._l(t.activity, function (i, a) {
                          return e(
                            "v-uni-view",
                            {
                              key: a,
                              staticClass: "item skeleton-rect",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.gopage(i.info[2].value);
                                },
                              },
                            },
                            [e("easy-loadimage", { attrs: { mode: "widthFix", "image-src": i.img } })],
                            1
                          );
                        }),
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              !t.isShow && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "specialArea acea-row row-between-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        {
                          staticClass: "assemble",
                          attrs: { "hover-class": "none" },
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.activityOne.info[2].value);
                            },
                          },
                        },
                        [e("v-uni-image", { attrs: { src: t.activityOne.img, alt: "img" } })],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "list acea-row row-column-between" },
                        t._l(t.activity, function (i, a) {
                          return e(
                            "v-uni-view",
                            {
                              key: a,
                              staticClass: "item",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.gopage(i.info[2].value);
                                },
                              },
                            },
                            [e("v-uni-image", { attrs: { src: i.img, alt: "img" } })],
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
        o = [];
    },
    "2e2d": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { easyLoadimage: e("cad3").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "promotionGood", style: t.colorStyle },
            [
              t._l(t.benefit, function (i, a) {
                return [
                  e(
                    "v-uni-view",
                    {
                      key: a + "_0",
                      staticClass: "item",
                      attrs: { "hover-class": "none" },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                        },
                      },
                    },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "pictrue" },
                        [e("easy-loadimage", { attrs: { mode: "widthFix", "image-src": i.image } })],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "money" },
                        [
                          e("v-uni-text", { staticClass: "rmb" }, [t._v(t._s(t.$t("￥")))]),
                          e("v-uni-text", { staticClass: "price" }, [t._v(t._s(i.price))]),
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
          );
        },
        o = [];
    },
    "2e53": function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("99af");
      var n = e("6557"),
        o = e("2a39"),
        s = a(e("80f6")),
        r = getApp(),
        c = {
          name: "seckill",
          components: { countDown: s.default },
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.isShow = t.isShow.val),
                  (this.selectType = t.tabConfig.tabVal),
                  this.$set(this, "selectId", t.selectConfig.activeValue || ""),
                  this.$set(this, "type", t.titleInfo.type),
                  (this.salesOrder = 1 == t.goodsSort.type ? "desc" : ""),
                  (this.newsOrder = 2 == t.goodsSort.type ? "news" : ""),
                  (this.ids = t.ids ? t.ids.join(",") : ""),
                  (this.numConfig = t.numConfig.val),
                  this.productslist());
              },
            },
          },
          data: function () {
            return {
              datatime: 0,
              point: "",
              spikeList: [],
              name: this.$options.name,
              isIframe: r.globalData.isIframe,
              isShow: !0,
              selectType: 0,
              selectId: "",
              salesOrder: "",
              newsOrder: "",
              ids: "",
              page: 1,
              limit: this.$config.LIMIT,
              type: "",
              numConfig: 0,
            };
          },
          created: function () {},
          mounted: function () {},
          methods: {
            productslist: function () {
              var t = this,
                i = {};
              (i = t.selectType
                ? { page: t.page, limit: t.limit, type: t.type, ids: t.ids, selectType: t.selectType }
                : {
                    page: t.page,
                    limit: t.numConfig <= t.limit ? t.numConfig : t.limit,
                    type: t.type,
                    newsOrder: t.newsOrder,
                    salesOrder: t.salesOrder,
                    selectId: t.selectId,
                    selectType: t.selectType,
                  }),
                (0, o.getHomeProducts)(i)
                  .then(function (i) {
                    (t.spikeList = i.data.list), (t.point = i.data.time), (t.datatime = i.data.stop);
                  })
                  .catch(function (i) {
                    t.$util.Tips({ title: i });
                  });
            },
            goDetail: function (t) {
              var i = this;
              (0, n.goPage)(t).then(function (e) {
                uni.navigateTo({
                  url: "/pages/activity/goods_seckill_details/index?id="
                    .concat(t.id, "&time=")
                    .concat(i.datatime, "&status=1"),
                });
              });
            },
          },
        };
      i.default = c;
    },
    "2f16": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index-wrapper[data-v-31219173]{background-color:#fff;margin:%?20?% %?30?%;border-radius:%?12?%}.title .text[data-v-31219173]{display:flex}.title .text .name[data-v-31219173]{font-size:%?34?%;font-weight:700}.title .text .txt-btn[data-v-31219173]{display:flex;align-items:flex-end;margin-bottom:%?8?%;margin-left:%?12?%}.wrapper .newProducts[data-v-31219173]{white-space:nowrap;padding:%?0?% %?20?% %?0?% %?20?%;margin:%?20?% 0}.wrapper .newProducts .item[data-v-31219173]{display:inline-block;width:%?200?%;margin-right:%?20?%;border-radius:%?20?%}.wrapper .newProducts .item[data-v-31219173]:nth-last-child(1){margin-right:0}.wrapper .newProducts .item .img-box[data-v-31219173]{width:100%;height:%?200?%;position:relative}.wrapper .newProducts .item .img-box uni-image[data-v-31219173]{width:100%;height:100%;border-radius:%?12?% %?12?% 0 0}.wrapper .newProducts .item .img-box[data-v-31219173] ,\n.wrapper .newProducts .item .img-box[data-v-31219173] uni-image,\n.wrapper .newProducts .item .img-box[data-v-31219173] .easy-loadimage,\n.wrapper .newProducts .item .img-box[data-v-31219173] uni-image{width:100%;height:%?200?%;border-radius:%?12?% %?12?% 0 0}.wrapper .newProducts .item .pro-info[data-v-31219173]{font-size:%?28?%;color:#333;text-align:center;padding:%?19?% %?10?% 0 %?10?%}.wrapper .newProducts .item .money[data-v-31219173]{padding:0 %?10?% %?18?% %?10?%;text-align:center;font-size:%?30?%;font-weight:700}.wrapper .newProducts .item .money .rmb[data-v-31219173]{font-weight:700;color:var(--view-priceColor);font-size:10px}.empty-img[data-v-31219173]{width:%?640?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.empty-img .iconfont[data-v-31219173]{font-size:%?50?%}.font-color[data-v-31219173]{color:var(--view-priceColor)}',
          "",
        ]),
        (t.exports = i);
    },
    "32e3": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiperBg[data-v-bed49caa] .uni-swiper-slides{overflow:hidden;border-radius:%?10?%}.swiperBg[data-v-bed49caa]{background-color:#fff;position:relative;margin-top:%?-20?%;padding-top:%?4?%}.swiperBg .bag[data-v-bed49caa]{position:absolute;top:0;width:100%;height:%?140?%;background:linear-gradient(90deg,var(--view-main-start),var(--view-main-over));border-bottom-left-radius:%?40?%;border-bottom-right-radius:%?40?%}.swiperBg .colorBg[data-v-bed49caa]{position:absolute;left:0;top:0;height:%?130?%;width:100%}.swiperBg .swiper[data-v-bed49caa]{z-index:100;position:relative;min-height:%?200?%;padding:0 %?30?%;overflow:hidden\n  /* 设置圆角 */}.swiperBg .swiper.fillet[data-v-bed49caa]{border-radius:%?10?%}.swiperBg .swiper.fillet uni-image[data-v-bed49caa]{border-radius:%?10?%}.swiperBg .swiper uni-swiper[data-v-bed49caa],\n.swiperBg .swiper .swiper-item[data-v-bed49caa],\n.swiperBg .swiper uni-image[data-v-bed49caa]{width:100%;overflow:hidden;border-radius:%?10?%}.swiperBg .swiper uni-image[data-v-bed49caa]{-webkit-transform:scale(1);transform:scale(1)}.swiperBg .swiper uni-swiper-item.active uni-image[data-v-bed49caa]{-webkit-transform:scale(1);transform:scale(1)}.swiperBg .swiper.circular[data-v-bed49caa] .uni-swiper-dot{width:%?10?%!important;height:%?10?%!important;background:rgba(0,0,0,.4)!important}.swiperBg .swiper.circular[data-v-bed49caa] .uni-swiper-dot-active{background:#fff!important}.swiperBg .swiper.square[data-v-bed49caa] .uni-swiper-dot{width:%?20?%!important;height:%?5?%!important;border-radius:%?3?%;background:rgba(0,0,0,.4)!important}.swiperBg .swiper.square[data-v-bed49caa] .uni-swiper-dot-active{background:#fff!important}.item-img uni-image[data-v-bed49caa]{display:block;width:100%;border-radius:%?10?%}.empty-img[data-v-bed49caa]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%;position:relative}.empty-img .iconfont[data-v-bed49caa]{font-size:%?50?%}',
          "",
        ]),
        (t.exports = i);
    },
    "34d5": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.txtPic .ueditor[data-v-63c3e2cf]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#fff;text-align:center;line-height:%?300?%}.txtPic .ueditor .iconfont[data-v-63c3e2cf]{font-size:%?50?%}',
          "",
        ]),
        (t.exports = i);
    },
    "35eb": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("92a7"),
        n = e("9f7d");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("b3a8");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "04b3f9c2", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "369f": function (t, i, e) {
      "use strict";
      var a = e("76ad"),
        n = e.n(a);
      n.a;
    },
    "377b": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("be2e"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    3867: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("d793"),
        n = e("9a3d");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("ec44");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "63c3e2cf", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    3917: function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      e("26cb");
      var n = e("6557"),
        o = e("2a39"),
        s = a(e("d47f")),
        r = a(e("19b6")),
        c = getApp(),
        l = {
          name: "goodList",
          props: { dataConfig: { type: Object, default: function () {} } },
          mixins: [r.default],
          components: { goodLists: s.default },
          created: function () {},
          mounted: function () {},
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.isShow = t.isShow.val),
                  (this.selectType = t.tabConfig.tabVal),
                  this.$set(this, "selectId", t.selectConfig.activeValue || ""),
                  this.$set(this, "type", t.selectSortConfig.activeValue),
                  (this.salesOrder = 1 == t.goodsSort.type ? "desc" : ""),
                  (this.newsOrder = 2 == t.goodsSort.type ? "news" : ""),
                  (this.ids = t.ids ? t.ids.join(",") : ""),
                  (this.numConfig = t.numConfig.val),
                  (this.titleInfo = t.titleInfo.list),
                  this.productslist());
              },
            },
          },
          data: function () {
            return {
              circular: !0,
              interval: 3e3,
              duration: 500,
              bastList: [],
              name: this.$options.name,
              isShow: !0,
              isIframe: c.globalData.isIframe,
              selectType: 0,
              selectId: "",
              salesOrder: "",
              newsOrder: "",
              ids: "",
              page: 1,
              limit: this.$config.LIMIT,
              type: "",
              numConfig: 0,
              titleInfo: [],
            };
          },
          methods: {
            productslist: function () {
              var t = this,
                i = {};
              (i = t.selectType
                ? { page: t.page, limit: t.limit, type: t.type, ids: t.ids, selectType: t.selectType }
                : {
                    page: t.page,
                    limit: t.numConfig <= t.limit ? t.numConfig : t.limit,
                    type: t.type,
                    newsOrder: t.newsOrder,
                    salesOrder: t.salesOrder,
                    selectId: t.selectId,
                    selectType: t.selectType,
                  }),
                (0, o.getHomeProducts)(i)
                  .then(function (i) {
                    t.bastList = i.data.list;
                  })
                  .catch(function (i) {
                    t.$util.Tips({ title: i });
                  });
            },
            gopage: function (t) {
              uni.navigateTo({ url: t });
            },
            goDetail: function (t) {
              var i = this;
              (0, n.goPage)().then(function (e) {
                (0, n.goShopDetail)(t, i.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              });
            },
          },
        };
      i.default = l;
    },
    "3c04": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.default[data-v-6f6d4e02]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.default .iconfont[data-v-6f6d4e02]{font-size:%?50?%}.combination[data-v-6f6d4e02]{width:100%;background-color:#fff;border-radius:%?14?%}.combination .conter[data-v-6f6d4e02]{width:%?690?%;height:%?400?%;background-color:#fff;border-radius:12px;margin:%?26?% auto 0 auto}.combination .conter .itemCon[data-v-6f6d4e02]{display:inline-block;width:%?220?%;margin-right:%?24?%}.combination .conter .itemCon .item[data-v-6f6d4e02]{width:100%}.combination .conter .itemCon .item .pictrue[data-v-6f6d4e02]{width:100%;height:%?220?%;border-radius:%?6?%}.combination .conter .itemCon .item .pictrue uni-image[data-v-6f6d4e02]{width:100%;height:100%;border-radius:%?6?%}.combination .conter .itemCon .item .name[data-v-6f6d4e02]{font-size:%?24?%;color:#333;margin-top:%?10?%}.combination .conter .itemCon .item .money .bnt[data-v-6f6d4e02]{width:%?220?%;height:%?48?%;border-radius:0 0 %?14?% %?14?%;text-align:center;line-height:%?48?%;color:#fff;background:#e93323;margin-top:%?14?%;font-size:%?26?%}.combination .conter .itemCon .item .money .price[data-v-6f6d4e02]{margin-top:%?10?%}.combination .conter .itemCon .item .money .label[data-v-6f6d4e02]{height:%?40?%;line-height:%?40?%;padding:0 %?6?%;margin-right:%?6?%;font-size:%?18?%;font-weight:400;background:rgba(255,68,68,.1);color:#e93323;margin-right:%?10?%}.combination .conter .itemCon .item .money .y_money[data-v-6f6d4e02]{font-size:%?20?%;color:#999;text-decoration:line-through}.combination .conter .itemCon .item .money .x_money[data-v-6f6d4e02]{color:#fd502f;font-size:%?24?%;font-weight:700;margin-top:%?3?%}.combination .conter .itemCon .item .money .x_money .num[data-v-6f6d4e02]{font-size:%?28?%}',
          "",
        ]),
        (t.exports = i);
    },
    "3cd5": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("aa2c"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "3e92": function (t, i, e) {
      "use strict";
      var a = e("6f70"),
        n = e.n(a);
      n.a;
    },
    "3f72": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-15ede29e]{width:100%;height:%?210?%;background:#fff;background:linear-gradient(90deg,var(--view-main-start),var(--view-main-over));border-bottom-left-radius:%?60?%;border-bottom-right-radius:%?60?%}.header .serch-wrapper[data-v-15ede29e]{padding:%?20?% %?30?% 0 %?30?%}.header .serch-wrapper .logo[data-v-15ede29e]{margin-right:%?30?%;display:flex;align-items:flex-end}.header .serch-wrapper .logo uni-image[data-v-15ede29e]{width:%?144?%;height:%?50?%}.header .serch-wrapper .logo .swiger[data-v-15ede29e]{color:#fff;font-size:%?24?%;margin-left:%?20?%;margin-bottom:%?-2?%}.header .serch-wrapper .input[data-v-15ede29e]{display:flex;height:%?60?%;padding:0 0 0 %?30?%;background:#f7f7f7;border:1px solid #f1f1f1;color:#999;font-size:%?28?%;flex:1;z-index:99;margin:%?14?% 0}.header .serch-wrapper .input .iconfont[data-v-15ede29e]{margin-right:%?20?%;color:#555}.header .serch-wrapper .input.on[data-v-15ede29e]{width:100%}.header .serch-wrapper .input.fillet[data-v-15ede29e]{border-radius:%?40?%}.header .serch-wrapper .input.row-center[data-v-15ede29e]{padding:0}',
          "",
        ]),
        (t.exports = i);
    },
    4639: function (t, i, e) {
      "use strict";
      var a = e("598c"),
        n = e.n(a);
      n.a;
    },
    "46ea": function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var n = e("26cb"),
        o = e("6557"),
        s = a(e("19b6")),
        r = {
          computed: (0, n.mapGetters)(["uid"]),
          mixins: [s.default],
          props: {
            benefit: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return {};
          },
          methods: {
            goDetail: function (t) {
              var i = this;
              (0, o.goPage)().then(function (e) {
                (0, o.goShopDetail)(t, i.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              });
            },
          },
        };
      i.default = r;
    },
    4701: function (t, i, e) {
      var a = e("aff8");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("94f5102e", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    4987: function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = e("6557"),
        n = e("5743"),
        o = getApp(),
        s = {
          name: "scrollBox",
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.numConfig = t.numConfig.val),
                  (this.isShow = t.isShow.val),
                  (this.tabConfig = t.tabConfig ? t.tabConfig.tabVal : 0),
                  (this.selectConfig = t.selectConfig.activeValue || ""),
                  (this.titleInfo = t.titleInfo.list),
                  this.tabConfig ? (this.fastList = t.goodsList.list) : this.category());
              },
            },
          },
          created: function () {},
          mounted: function () {},
          data: function () {
            return {
              fastInfo: this.$t("上百种商品分类任您选择"),
              fastList: [],
              name: this.$options.name,
              isShow: !0,
              isIframe: o.globalData.isIframe,
              numConfig: 0,
              selectConfig: 0,
              tabConfig: 0,
              titleInfo: [],
            };
          },
          methods: {
            gopage: function (t) {
              (0, a.goPage)().then(function (i) {
                uni.navigateTo({ url: t });
              });
            },
            category: function () {
              var t = this;
              (0, n.category)({ pid: this.selectConfig, limit: this.numConfig }).then(function (i) {
                t.fastList = i.data;
              });
            },
          },
        };
      i.default = s;
    },
    "4a6f": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.specialArea[data-v-9e9aef14]{background:linear-gradient(180deg,#fff,#f5f5f5);padding:0 %?30?% 0 %?30?%;border-radius:%?12?%}.specialArea .assemble[data-v-9e9aef14]{width:%?336?%;height:%?300?%;position:relative}.specialArea .assemble uni-image[data-v-9e9aef14]{width:100%;height:100%;border-radius:%?5?%}.specialArea .assemble[data-v-9e9aef14] ,\n.specialArea .assemble[data-v-9e9aef14] uni-image,\n.specialArea .assemble[data-v-9e9aef14] .easy-loadimage,\n.specialArea .assemble[data-v-9e9aef14] uni-image{width:%?336?%;height:%?300?%;border-radius:%?5?%}.specialArea .assemble .text[data-v-9e9aef14]{position:absolute;top:%?37?%;left:%?22?%}.specialArea .name[data-v-9e9aef14]{font-size:%?30?%;color:#fff}.specialArea .infor[data-v-9e9aef14]{font-size:%?22?%;color:hsla(0,0%,100%,.8);margin-top:%?5?%}.specialArea .list[data-v-9e9aef14]{width:%?344?%;height:%?300?%}.specialArea .item[data-v-9e9aef14]{width:100%;height:%?146?%;position:relative}.specialArea .item img[data-v-9e9aef14]{width:100%;height:100%}.specialArea .item[data-v-9e9aef14] ,\n.specialArea .item[data-v-9e9aef14] uni-image,\n.specialArea .item[data-v-9e9aef14] .easy-loadimage,\n.specialArea .item[data-v-9e9aef14] uni-image{width:100%;height:%?146?%}.specialArea .item .text[data-v-9e9aef14]{position:absolute;top:%?23?%;left:%?28?%}.specialArea .item uni-image[data-v-9e9aef14]{width:100%;height:100%}.specialArea .item .text[data-v-9e9aef14]{position:absolute;top:%?23?%;left:%?28?%}',
          "",
        ]),
        (t.exports = i);
    },
    "4c36": function (t, i, e) {
      var a = e("b54d");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("25ad0436", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "4c6d": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            {},
            [
              e(
                "v-uni-view",
                { staticClass: "index-wrapper" },
                [
                  t.isShow && t.benefit.length
                    ? e(
                        "v-uni-view",
                        { staticClass: "wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "title acea-row row-between-wrapper" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "name line1" },
                                    [
                                      e("v-uni-text", { staticClass: "iconfont icon-cuxiaodanpin" }),
                                      t._v(t._s(t.$t(t.titleInfo[0].val))),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "line1 txt-btn" }, [
                                    t._v(t._s(t.$t(t.titleInfo[1].val))),
                                  ]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "more",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                                1
                              ),
                            ],
                            1
                          ),
                          e("promotionGood", { attrs: { benefit: t.benefit } }),
                        ],
                        1
                      )
                    : t._e(),
                  !t.isShow && t.isIframe && t.benefit.length
                    ? e(
                        "v-uni-view",
                        { staticClass: "wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "title acea-row row-between-wrapper" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "name line1" },
                                    [
                                      e("v-uni-text", { staticClass: "iconfont icon-cuxiaodanpin" }),
                                      t._v(t._s(t.titleInfo[0].val)),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "more",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[1].val);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                                1
                              ),
                            ],
                            1
                          ),
                          e("promotionGood", { attrs: { benefit: t.benefit } }),
                        ],
                        1
                      )
                    : t._e(),
                  t.isIframe && !t.benefit.length
                    ? e(
                        "v-uni-view",
                        { staticClass: "wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "title acea-row row-between-wrapper" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "name line1" },
                                    [
                                      e("v-uni-text", { staticClass: "iconfont icon-cuxiaodanpin" }),
                                      t._v(t._s(t.titleInfo[0].val)),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "more",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[1].val);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                                1
                              ),
                            ],
                            1
                          ),
                          e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("促销单品，暂无数据")))]),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    "4ca5": function (t, i, e) {
      "use strict";
      var a = e("59d3"),
        n = e.n(a);
      n.a;
    },
    "4eca": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("0cf4"),
        n = e("ee8b");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("c0f5");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "d8c59760", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "503b": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-182c8791] .uni-scroll-view-content,\n.scroll-view_x[data-v-182c8791]{display:flex;flex-wrap:nowrap}.hotList[data-v-182c8791]{background-color:#fff;margin:%?20?% %?30?%;border-radius:%?12?%}.hotList .hot-bg[data-v-182c8791]{width:100%;height:%?120?%;box-sizing:border-box;font-size:%?24?%;color:#282828;margin-top:%?15?%}.hotList .title .text[data-v-182c8791]{display:flex}.hotList .title .text .txt-btn[data-v-182c8791]{display:flex;align-items:flex-end;margin-bottom:%?8?%;margin-left:%?12?%}.hotList .list[data-v-182c8791]{border-radius:%?20?%;background-color:#fff;margin:%?0?% auto 0 auto;padding:%?20?% %?20?%;box-sizing:border-box;display:flex;justify-content:space-between;width:100%;white-space:nowrap}.hotList .list .item[data-v-182c8791]{width:%?200?%;background:var(--view-op-ten);border-radius:%?12?%;margin-right:%?20?%;display:inline-block}.hotList .list .item .rectangle[data-v-182c8791]{margin:0 auto;border-radius:%?30?%;text-align:center;margin-top:%?-30?%;font-size:%?24?%;color:#fff;z-index:99;position:relative;width:%?172?%;background-color:var(--view-theme)}.hotList .list .item .pictrue[data-v-182c8791]{width:%?180?%;height:%?180?%;position:relative;margin:%?8?%;border-radius:%?12?%}.hotList .list .item .pictrue uni-image[data-v-182c8791]{width:100%;height:100%;border-radius:%?12?%}.hotList .list .item .pictrue[data-v-182c8791] ,\n.hotList .list .item .pictrue[data-v-182c8791] uni-image,\n.hotList .list .item .pictrue[data-v-182c8791] .easy-loadimage,\n.hotList .list .item .pictrue[data-v-182c8791] uni-image{width:%?180?%;height:%?180?%;border-radius:%?12?%}.hotList .list .item .pictrue .numPic[data-v-182c8791]{width:%?50?%;height:%?50?%;border-radius:50%;position:absolute;top:%?7?%;left:%?7?%}.hotList .list .item .name[data-v-182c8791]{font-size:%?26?%;color:var(--view-theme);margin-top:%?12?%;padding:0 %?10?% %?10?% %?10?%}.hotList .list .item .money[data-v-182c8791]{font-size:%?20?%;font-weight:700;margin-top:%?4?%;text-align:center}.hotList .list .item .money .num[data-v-182c8791]{font-size:%?28?%}.empty-img[data-v-182c8791]{width:100%;height:%?340?%;line-height:%?340?%;background:#ccc;font-size:%?40?%;color:#000;border-radius:%?14?%;text-align:center;font-size:%?30?%}.font-color[data-v-182c8791]{color:var(--view-priceColor)}',
          "",
        ]),
        (t.exports = i);
    },
    5317: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("0124"),
        n = e("377b");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("597d");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "0aa3c079", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "54ff": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "recommend acea-row row-between-wrapper" },
            [
              t.isIframe && !t.recommendList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "pictrue acea-row row-center-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticStyle: { "text-align": "center" } },
                        [
                          e("v-uni-text", { staticClass: "iconfont icon-icon25201" }),
                          e("v-uni-view", [t._v(t._s(t.$t("广告位")))]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              t._l(t.recommendList, function (i, a) {
                return t.recommendList.length && t.isShow && !t.isIframe
                  ? e(
                      "v-uni-view",
                      {
                        key: a,
                        staticClass: "pictrue",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                          },
                        },
                      },
                      [e("v-uni-image", { attrs: { src: i.img } })],
                      1
                    )
                  : t._e();
              }),
              t._l(t.recommendList, function (i, a) {
                return t.recommendList.length && t.isIframe
                  ? e(
                      "v-uni-view",
                      {
                        key: a,
                        staticClass: "pictrue",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                          },
                        },
                      },
                      [e("v-uni-image", { attrs: { src: i.img } })],
                      1
                    )
                  : t._e();
              }),
            ],
            2
          );
        },
        n = [];
    },
    "55f9": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              t.isShow && t.tabTitle.length
                ? e(
                    "v-uni-view",
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "navTabBox", class: { isFixed: t.isFixed }, style: "color:" + t.txtColor + ";" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "longTab" },
                            [
                              e(
                                "v-uni-scroll-view",
                                {
                                  staticStyle: {
                                    "white-space": "nowrap",
                                    display: "flex",
                                    "align-items": "center",
                                    height: "50rpx",
                                  },
                                  attrs: {
                                    "scroll-x": "true",
                                    "scroll-with-animation": !0,
                                    "scroll-left": t.tabLeft,
                                    "show-scrollbar": "true",
                                  },
                                },
                                t._l(t.tabTitle, function (i, a) {
                                  return e(
                                    "v-uni-view",
                                    {
                                      key: a,
                                      staticClass: "longItem",
                                      class: a === t.tabClick ? "click" : "",
                                      style: "width:max-content",
                                      attrs: {
                                        url: "/pages/goods/goods_list/index?cid=" + i.id + "&title=" + i.cate_name,
                                        "data-index": a,
                                        id: "id" + a,
                                      },
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e = t.$handleEvent(e)), t.longClick(i, a);
                                        },
                                      },
                                    },
                                    [t._v(t._s(t.$t(i.cate_name)))]
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
                : t._e(),
              !t.isShow && t.tabTitle.length && t.isIframe
                ? e(
                    "v-uni-view",
                    [
                      e(
                        "v-uni-view",
                        {
                          staticClass: "navTabBox",
                          class: { isFixed: t.isFixed },
                          style: "color:" + t.txtColor + ";top:" + t.isTop,
                        },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "longTab" },
                            [
                              e(
                                "v-uni-scroll-view",
                                {
                                  staticStyle: { "white-space": "nowrap", display: "flex", "align-items": "center" },
                                  attrs: {
                                    "scroll-x": "true",
                                    "scroll-with-animation": !0,
                                    "scroll-left": t.tabLeft,
                                    "show-scrollbar": "true",
                                  },
                                },
                                [
                                  t._l(t.tabTitle, function (i, a) {
                                    return e(
                                      "v-uni-view",
                                      {
                                        key: a,
                                        staticClass: "longItem",
                                        class: a === t.tabClick ? "click" : "",
                                        style: "width:" + t.isWidth + "px",
                                        attrs: {
                                          url: "/pages/goods/goods_list/index?cid=" + i.id + "&title=" + i.cate_name,
                                          "data-index": a,
                                          id: "id" + a,
                                        },
                                        on: {
                                          click: function (e) {
                                            (arguments[0] = e = t.$handleEvent(e)), t.longClick(i, a);
                                          },
                                        },
                                      },
                                      [t._v(t._s(t.$t(i.cate_name)))]
                                    );
                                  }),
                                  e(
                                    "v-uni-view",
                                    {
                                      staticClass: "underlineBox",
                                      style: "transform:translateX(" + t.isLeft + "px);width:" + t.isWidth + "px",
                                    },
                                    [e("v-uni-view", { staticClass: "underline" })],
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
                : t.isIframe && !t.tabTitle.length
                ? e(
                    "v-uni-view",
                    { staticClass: "index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "scroll-product" },
                        [e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("暂无数据，请先添加分类")))])],
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
    5846: function (t, i, e) {
      "use strict";
      (function (t) {
        e("7a82");
        var a = e("ee27").default;
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0),
          e("a9e3"),
          e("99af"),
          e("d3b7"),
          e("159b"),
          e("4d63"),
          e("c607"),
          e("ac1f"),
          e("2c3e"),
          e("25f0"),
          e("466d"),
          e("841c"),
          e("b64b"),
          e("d81d"),
          e("4e82");
        var n,
          o = a(e("fc11")),
          s = a(e("f3f3")),
          r = a(e("19b6")),
          c = a(e("64ec")),
          l = e("5743"),
          d = a(e("fa8a")),
          u = e("26cb"),
          f = e("2a39"),
          v = e("6557"),
          p = e("39ed"),
          g = e("86eb"),
          m = e("00a0"),
          h = a(e("605de")),
          w = a(e("c986")),
          b = a(e("7992")),
          _ =
            (getApp(),
            (n = {
              computed: (0, u.mapGetters)(["isLogin", "uid"]),
              mixins: [r.default],
              components: (0, s.default)(
                { recommend: b.default, Loading: w.default, pageFoot: h.default, couponWindow: c.default },
                d.default
              ),
            }),
            (0, o.default)(n, "computed", (0, u.mapGetters)(["isLogin", "cartNum"])),
            (0, o.default)(n, "data", function () {
              return {
                imgHost: m.HTTP_REQUEST_URL,
                showSkeleton: !0,
                isNodes: 0,
                styleConfig: [],
                tempArr: [],
                goodType: 3,
                loading: !1,
                page: 1,
                limit: this.$config.LIMIT,
                iSshowH: !1,
                numConfig: 0,
                code: "",
                isCouponShow: !1,
                couponObj: {},
                couponObjs: { show: !1 },
                shareInfo: {},
                footConfig: {},
                isSortType: 0,
                sortList: "",
                sortAll: [],
                goodPage: 1,
                goodList: [],
                newData: {},
                sid: 0,
                curSort: 0,
                sortMpTop: 0,
                loaded: !1,
                hostProduct: [],
                hotScroll: !1,
                hotPage: 1,
                hotLimit: 10,
                domOffsetTop: 50,
                isFixed: !1,
                site_config: "",
                errorNetwork: !1,
                privacyStatus: !1,
                isHeaderSerch: !1,
                bgColor: "",
                bgPic: "",
                bgTabVal: "",
                pageShow: !0,
                windowHeight: 0,
                activeRouter: "",
                countNum: 0,
              };
            }),
            (0, o.default)(n, "onPullDownRefresh", function () {
              this.diyData();
            }),
            (0, o.default)(n, "created", function (i) {
              var e = this,
                a = this;
              this.$nextTick(function () {
                uni.getSystemInfoSync({
                  success: function (t) {
                    a.windowHeight = t.windowHeight;
                  },
                });
              });
              var n = getCurrentPages(),
                o = n[n.length - 1].route;
              (this.activeRouter = "/" + o),
                this.diyData(),
                this.getIndexData(),
                (0, l.siteConfig)()
                  .then(function (t) {
                    e.site_config = t.data;
                  })
                  .catch(function (i) {
                    t.error(i.msg);
                  }),
                this.isLogin &&
                  (this.getCoupon(),
                  (0, p.getCartCounts)().then(function (t) {
                    (e.countNum = t.data.count),
                      e.$store.commit("indexData/setCartNum", t.data.count > 99 ? ".." : t.data.count + ""),
                      t.data.count > 0
                        ? wx.setTabBarBadge({
                            index: Number(uni.getStorageSync("FOOTER_ADDCART")) || 2,
                            text: t.data.count + "",
                          })
                        : wx.hideTabBarRedDot({ index: Number(uni.getStorageSync("FOOTER_ADDCART")) || 2 });
                  }));
            }),
            (0, o.default)(n, "watch", {
              isLogin: {
                deep: !0,
                handler: function (t, i) {
                  var e = new Date().toLocaleDateString();
                  if (t) {
                    try {
                      var a = uni.getStorageSync("oldDate") || "";
                    } catch (n) {}
                    a != e && this.getCoupon();
                  }
                },
              },
            }),
            (0, o.default)(n, "onReady", function () {}),
            (0, o.default)(n, "methods", {
              reconnect: function () {
                var t = this;
                uni.showLoading({ title: this.$t("加载中") }),
                  this.diyData(),
                  this.getIndexData(),
                  getShare().then(function (i) {
                    t.shareInfo = i.data;
                  });
              },
              goICP: function (t) {
                var i = 1 == t ? this.site_config.icp_url : this.site_config.network_security_url;
                window.open(i);
              },
              bindHeighta: function (t) {},
              bindHeight: function (t) {
                uni.hideLoading(), (this.domOffsetTop = t.top);
              },
              goGoodsDetail: function (t) {
                (0, v.goShopDetail)(t, this.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              },
              get_host_product: function () {
                var t = this;
                t.hotScroll ||
                  (0, f.getProductHot)(t.hotPage, t.hotLimit).then(function (i) {
                    t.hotPage++,
                      (t.hotScroll = i.data.length < t.hotLimit),
                      (t.hostProduct = t.hostProduct.concat(i.data));
                  });
              },
              changeSort: function (t, i) {
                this.curSort != i &&
                  ((this.curSort = i),
                  (this.sid = t.id),
                  (this.goodList = []),
                  (this.goodPage = 1),
                  (this.loaded = !1),
                  this.getGoodsList());
              },
              bindSortId: function (t) {
                (this.isSortType = -99 == t ? 0 : 1),
                  this.getProductList(t),
                  0 == this.hostProduct.length && this.get_host_product();
              },
              getProductList: function (t) {
                var i = this;
                (this.curSort = 0),
                  (this.loaded = !1),
                  this.sortAll.length > 0
                    ? (this.sortAll.forEach(function (e, a) {
                        e.id == t && (i.$set(i, "sortList", e), (i.sid = e.children.length ? e.children[0].id : ""));
                      }),
                      (this.goodList = []),
                      (this.goodPage = 1),
                      this.$nextTick(function () {
                        "" != i.sortList && i.getGoodsList();
                      }))
                    : (0, f.getCategoryList)().then(function (e) {
                        (i.sortAll = e.data),
                          e.data.forEach(function (e, a) {
                            e.id == t && ((i.sortList = e), (i.sid = e.children.length ? e.children[0].id : ""));
                          }),
                          (i.goodList = []),
                          (i.goodPage = 1),
                          i.$nextTick(function () {
                            "" != i.sortList && i.getGoodsList();
                          });
                      });
              },
              getGoodsList: function () {
                var t = this;
                this.loading ||
                  this.loaded ||
                  ((this.loading = !0),
                  (0, f.getProductslist)({
                    sid: this.sid,
                    keyword: "",
                    priceOrder: "",
                    salesOrder: "",
                    news: 0,
                    page: this.goodPage,
                    limit: 10,
                    cid: this.sortList.id,
                  }).then(function (i) {
                    (t.loading = !1),
                      (t.loaded = i.data.length < 10),
                      t.goodPage++,
                      (t.goodList = t.goodList.concat(i.data));
                  }));
              },
              getNewCoupon: function () {
                var t = this,
                  i = uni.getStorageSync("oldUser") || 0;
                i ||
                  (0, l.getCouponNewUser)().then(function (i) {
                    var e = i.data;
                    e.show
                      ? e.list.length && ((t.isCouponShow = !0), (t.couponObj = e), uni.setStorageSync("oldUser", 1))
                      : uni.setStorageSync("oldUser", 1);
                  });
              },
              getCoupon: function () {
                var t = this,
                  i = uni.getStorageSync("tagDate") || "",
                  e = new Date().toLocaleDateString();
                i === e
                  ? this.getNewCoupon()
                  : (0, l.getCouponV2)().then(function (i) {
                      var e = i.data;
                      e.list.length
                        ? ((t.isCouponShow = !0),
                          (t.couponObj = e),
                          uni.setStorageSync("tagDate", new Date().toLocaleDateString()))
                        : t.getNewCoupon();
                    });
              },
              couponClose: function () {
                (this.isCouponShow = !1), uni.getStorageSync("oldUser") || this.getNewCoupon();
              },
              onLoadFun: function () {},
              getQueryString: function (t) {
                var i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                  e = new RegExp("(^|/)" + t + "/([^/]*)(/|$)", "i"),
                  a = window.location.search.substr(1).match(i),
                  n = window.location.pathname.substr(1).match(e);
                return null != a ? unescape(a[2]) : null != n ? unescape(n[2]) : null;
              },
              objToArr: function (t) {
                var i = Object.keys(t),
                  e = i.map(function (i) {
                    return t[i];
                  });
                return e;
              },
              diyData: function () {
                var t = this,
                  i = this;
                (0, l.getDiy)(0)
                  .then(function (e) {
                    uni.hideLoading(),
                      uni.setStorageSync("DIY_DATA", e.data),
                      setTimeout(function () {
                        t.isNodes++;
                      }, 0),
                      (t.errorNetwork = !1);
                    var a = e.data;
                    a.is_bg_color && (t.bgColor = a.color_picker),
                      a.is_bg_pic && ((t.bgPic = a.bg_pic), (t.bgTabVal = a.bg_tab_val)),
                      (t.pageShow = a.is_show),
                      uni.setNavigationBarTitle({ title: t.$t(e.data.title) });
                    var n = [],
                      o = i.objToArr(e.data.value);
                    o.forEach(function (e, a, o) {
                      "headerSerch" == e.name && (t.isHeaderSerch = !0),
                        "promotionList" == e.name &&
                          ((i.numConfig = e.numConfig.val),
                          (i.goodType = e.tabConfig.list[0].link.activeVal),
                          i.getGroomList()),
                        (n = o);
                    }),
                      n.sort(function (t, i) {
                        return t.timestamp - i.timestamp;
                      }),
                      (i.styleConfig = n),
                      setTimeout(function () {
                        t.showSkeleton = !1;
                      }, 300),
                      uni.stopPullDownRefresh({ success: function (t) {} });
                  })
                  .catch(function (t) {});
              },
              getIndexData: function () {},
              changeBarg: function (t) {
                this.isLogin
                  ? uni.navigateTo({
                      url: "/pages/activity/goods_bargain_details/index?id="
                        .concat(t.id, "&bargain=")
                        .concat(this.$store.state.app.uid),
                    })
                  : (0, g.toLogin)();
              },
              changeTab: function (t) {
                (this.goodType = t), (this.page = 1);
                this.getGroomList(!0);
              },
              getGroomList: function (t) {
                var i = this,
                  e = i.goodType;
                return (
                  !i.loadend &&
                  !i.loading &&
                  (t && i.$set(i, "iSshowH", !0),
                  void (0, f.getGroomList)(e, { page: i.page, limit: this.numConfig })
                    .then(function (t) {
                      var e = t.data;
                      i.$set(i, "iSshowH", !1);
                      e.list;
                      i.$set(i, "tempArr", e.list), (i.loading = !1);
                    })
                    .catch(function (t) {}))
                );
              },
              goRouter: function (t) {
                var i = getCurrentPages(),
                  e = i[i.length - 1].$page.fullPath;
                t.link != e &&
                  uni.switchTab({
                    url: t.link,
                    fail: function (i) {
                      uni.redirectTo({ url: t.link });
                    },
                  });
              },
              goDetail: function (t) {
                (0, v.goShopDetail)(t, this.$store.state.app.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              },
              onsollBotton: function () {
                0 == this.isSortType || this.getGoodsList();
              },
            }),
            (0, o.default)(n, "onReachBottom", function () {}),
            (0, o.default)(n, "onPageScroll", function (t) {
              var i = this;
              uni.$emit("scroll"),
                this.isHeaderSerch
                  ? (t.scrollTop > this.domOffsetTop && (this.isFixed = !0),
                    t.scrollTop < this.domOffsetTop &&
                      this.$nextTick(function () {
                        i.isFixed = !1;
                      }))
                  : (this.isFixed = !1);
            }),
            n);
        i.default = _;
      }).call(this, e("5a52")["default"]);
    },
    "597d": function (t, i, e) {
      "use strict";
      var a = e("90cd"),
        n = e.n(a);
      n.a;
    },
    "598c": function (t, i, e) {
      var a = e("28f9");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("47a365b8", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "59d3": function (t, i, e) {
      var a = e("c8c6");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("6d6a7d4f", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5b76": function (t, i, e) {
      var a = e("3f72");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("532082cc", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5be0": function (t, i, e) {
      "use strict";
      var a = e("d900"),
        n = e.n(a);
      n.a;
    },
    "5bf9": function (t, i, e) {
      "use strict";
      var a = e("6ab5"),
        n = e.n(a);
      n.a;
    },
    "5ca0": function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var n = a(e("19b6")),
        o = e("6557"),
        s = getApp(),
        r = {
          name: "news",
          props: { dataConfig: { type: Object, default: function () {} } },
          mixins: [n.default],
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t && ((this.img = t.imgUrl.url), (this.itemNew = t.newList.list), (this.isShow = t.isShow.val));
              },
            },
          },
          data: function () {
            return {
              indicatorDots: !1,
              autoplay: !0,
              duration: 500,
              img: "",
              itemNew: [],
              name: this.$options.name,
              isIframe: !1,
              isShow: !0,
            };
          },
          created: function () {
            this.isIframe = s.globalData.isIframe;
          },
          mounted: function () {},
          methods: {
            gopage: function (t) {
              var i = this;
              (0, o.goPage)().then(function (e) {
                i.$util.JumpPath(t);
              });
            },
          },
        };
      i.default = r;
    },
    "5d59": function (t, i, e) {
      var a = e("4a6f");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("0bacdc30", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5e10": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return t.show
            ? e(
                "v-uni-view",
                {
                  style: {
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: t.bgcolor,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    zIndex: 9998,
                  },
                },
                [
                  t._l(t.skeletonRectLists, function (i, a) {
                    return e("v-uni-view", {
                      key: a + "rect",
                      class: ["chiaroscuro" == t.loading ? "chiaroscuro" : ""],
                      style: {
                        width: 2 * i.width + "rpx",
                        height: 2 * i.height + "rpx",
                        backgroundColor: "rgb(194, 207, 214,.3)",
                        position: "absolute",
                        left: 2 * i.left + "rpx",
                        top: 2 * i.top + "rpx",
                      },
                    });
                  }),
                  t._l(t.skeletonCircleLists, function (i, a) {
                    return e("v-uni-view", {
                      key: a + "circle",
                      class: "chiaroscuro" == t.loading ? "chiaroscuro" : "",
                      style: {
                        width: 2 * i.width + "rpx",
                        height: 2 * i.height + "rpx",
                        backgroundColor: "rgb(194, 207, 214,.3)",
                        borderRadius: 2 * i.width + "rpx",
                        position: "absolute",
                        left: 2 * i.left + "rpx",
                        top: 2 * i.top + "rpx",
                        zIndex: 9998,
                      },
                    });
                  }),
                  "spin" == t.loading
                    ? e("v-uni-view", { staticClass: "spinbox" }, [e("v-uni-view", { staticClass: "spin" })], 1)
                    : t._e(),
                ],
                2
              )
            : t._e();
        },
        n = [];
    },
    "5e4d": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list[data-v-d0210158]{display:flex;margin:0 %?30?%}.product-box[data-v-d0210158]{display:flex;flex:1;flex-wrap:wrap;width:100%}.flow_item[data-v-d0210158]{margin:%?15?%;border-radius:%?20?%;background:#f4f4f4;overflow:hidden}.flow_item_con[data-v-d0210158]{padding:%?10?% %?20?% %?20?%}.flow_item_title[data-v-d0210158]{position:relative;font-size:%?32?%;font-weight:700;margin-bottom:%?5?%}.flow_item_des[data-v-d0210158]{font-size:%?24?%}.pl10[data-v-d0210158]{padding-left:%?10?%}.product-list[data-v-d0210158]{display:flex;width:calc(50% - %?16?%);margin:%?2?% %?8?%}.product-list .product-item[data-v-d0210158]{position:relative;width:100%;background:#fff;border-radius:%?10?%;margin-bottom:%?8?%;display:flex;flex-direction:column;justify-content:space-between}.product-list .product-item[data-v-d0210158] uni-image,\n.product-list .product-item[data-v-d0210158] .easy-loadimage,\n.product-list .product-item[data-v-d0210158] uni-image{width:100%;height:%?330?%;border-radius:%?10?% %?10?% 0 0}.product-list .product-item .info[data-v-d0210158]{flex:1;padding:%?14?% %?16?%;display:flex;flex-direction:column;justify-content:space-between}.product-list .product-item .info .title[data-v-d0210158]{font-size:%?28?%;height:%?76?%;line-height:%?38?%}.product-list .product-item .info .tag[data-v-d0210158]{border-radius:%?4?%;border:1px solid var(--view-theme);color:var(--view-theme);font-size:%?20?%;padding:%?0?% %?4?%;margin:%?10?% 0;margin-right:%?10?%;width:-webkit-max-content;width:max-content}.product-list .product-item .info .price-box[data-v-d0210158]{font-size:%?34?%;font-weight:700;margin-top:8px;color:var(--view-priceColor);display:flex;justify-content:space-between;align-items:center}.product-list .product-item .info .price-box uni-text[data-v-d0210158]{font-size:%?28?%}.product-list .product-item .info .price-box .sales[data-v-d0210158]{color:#999;font-size:%?24?%;font-weight:400}',
          "",
        ]),
        (t.exports = i);
    },
    "5eaf": function (t, i, e) {
      "use strict";
      var a = e("5ed7"),
        n = e.n(a);
      n.a;
    },
    "5ed7": function (t, i, e) {
      var a = e("02a3");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("1da7b6ba", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5ee7": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.new[data-v-9aefe936]{background-color:#fff;padding:%?20?% 0}.news[data-v-9aefe936]{height:%?60?%;padding:0 %?26?%;background-color:var(--view-op-point-four);margin:0 %?30?%;border-radius:%?60?%}.news.default[data-v-9aefe936]{text-align:center;line-height:%?77?%}.news .pictrue[data-v-9aefe936]{width:%?116?%;height:%?28?%;line-height:%?28?%;border-right:%?1?% solid #ddd;padding-right:%?23?%;box-sizing:initial}.news .pictrue uni-image[data-v-9aefe936]{width:100%;height:100%}.news .swiperTxt[data-v-9aefe936]{width:%?470?%;height:100%;line-height:%?60?%;overflow:hidden}.news .swiperTxt .text[data-v-9aefe936]{line-height:%?28?%;margin-bottom:%?4?%}.news .swiperTxt .text .label[data-v-9aefe936]{font-size:%?20?%;color:#ff4c48;width:%?64?%;height:%?30?%;border-radius:%?40?%;text-align:center;line-height:%?28?%;border:%?2?% solid #ff4947}.news .swiperTxt .text .newsTitle[data-v-9aefe936]{width:%?400?%;font-size:%?24?%;line-height:%?28?%;color:#666}.news .swiperTxt .iconfont[data-v-9aefe936]{font-size:%?28?%;color:#888}.news .swiperTxt uni-swiper[data-v-9aefe936]{height:100%}',
          "",
        ]),
        (t.exports = i);
    },
    "5f25": function (t, i, e) {
      "use strict";
      e("7a82"),
        Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0),
        e("ac1f"),
        e("00b4"),
        e("e25e"),
        e("c975");
      var a,
        n = e("4e39"),
        o = {
          name: "appUpdate",
          props: { tabbar: { type: Boolean, default: !1 }, getVer: { type: Boolean, default: !1 } },
          data: function () {
            return {
              popup_show: !1,
              platform: "",
              version: "1.0.0",
              need_update: !1,
              downing: !1,
              downstatus: 0,
              update_info: { os: "", version: "", info: "" },
              fileSize: 0,
              downSize: 0,
              viewObj: null,
            };
          },
          created: function () {
            (a = this), this.getVer || this.update();
          },
          computed: {
            lengthWidth: function () {
              var t = (this.downSize / this.fileSize) * 100;
              return (t = t ? t.toFixed(2) : 0), { width: t + "%" };
            },
            getHeight: function () {
              var t = 0;
              return this.tabbar && (t = 50), { bottom: t + "px", height: "auto" };
            },
          },
          methods: {
            update: function () {},
            getUpdateInfo: function () {
              var t = this;
              (0, n.getUpdateInfo)("ios" === this.platform ? 2 : 1)
                .then(function (i) {
                  if (Array.isArray(i.data)) return t.$emit("isNew");
                  var e = uni.getStorageSync("app_update_time") || "",
                    n = new Date().toLocaleDateString();
                  if (e === n || t.getVer) {
                    if (e !== n && t.getVer) {
                      if (!i.data.is_force) return;
                    } else if (e == n && !t.getVer && !i.data.is_force) return;
                  } else uni.setStorageSync("app_update_time", new Date().toLocaleDateString());
                  var o = i.data;
                  (a.update_info = o), a.update_info.platform && a.checkUpdate();
                })
                .catch(function (t) {
                  a.popup_show = !1;
                });
            },
            checkUpdate: function () {
              (a.need_update = a.compareVersion(a.version, a.update_info.version)),
                a.need_update
                  ? ((a.popup_show = !0),
                    a.tabbar &&
                      ((a.viewObj = new plus.nativeObj.View("viewObj", {
                        bottom: "0px",
                        left: "0px",
                        height: "50px",
                        width: "100%",
                        backgroundColor: "rgba(0,0,0,.6)",
                      })),
                      a.viewObj.show()))
                  : this.$emit("isNew");
            },
            closeUpdate: function () {
              a.update_info.is_force
                ? "android" == this.platform
                  ? plus.runtime.quit()
                  : plus.ios.import("UIApplication").sharedApplication().performSelector("exit")
                : ((a.popup_show = !1), a.viewObj && a.viewObj.hide());
            },
            nowUpdate: function () {
              if (a.downing) return !1;
              (a.downing = !0),
                /\.apk$/.test(a.update_info.url) || /\.wgt$/.test(a.update_info.url)
                  ? a.download_wgt()
                  : plus.runtime.openURL(a.update_info.url, function () {
                      plus.nativeUI.toast("打开错误");
                    });
            },
            download_wgt: function () {
              plus.nativeUI.showWaiting("下载更新文件...");
              var t = plus.downloader.createDownload(a.update_info.url, { method: "get" }, function (t, i) {});
              t.addEventListener("statechanged", function (t, i) {
                if (null === i);
                else if (200 == i)
                  switch (((a.downstatus = t.state), t.state)) {
                    case 3:
                      (a.downSize = t.downloadedSize), t.totalSize && (a.fileSize = t.totalSize);
                      break;
                    case 4:
                      a.installWgt(t.filename);
                      break;
                  }
                else
                  plus.nativeUI.closeWaiting(), plus.nativeUI.toast("下载出错"), (a.downing = !1), (a.downstatus = 0);
              }),
                t.start();
            },
            installWgt: function (t) {
              plus.nativeUI.showWaiting("安装更新文件..."),
                plus.runtime.install(
                  t,
                  {},
                  function () {
                    plus.nativeUI.closeWaiting(),
                      plus.nativeUI.alert("应用资源下载完成！", function () {
                        plus.runtime.restart();
                      });
                  },
                  function (t) {
                    plus.nativeUI.closeWaiting(), plus.nativeUI.alert("安装更新文件失败[" + t.code + "]：" + t.message);
                  }
                );
            },
            compareVersion: function (t, i) {
              if (!t || !i || "" == t || "" == i) return !1;
              for (var e = t.split(".", 4), a = i.split(".", 4), n = 0; n < e.length && n < a.length; n++) {
                var o = e[n],
                  s = parseInt(o),
                  r = a[n],
                  c = parseInt(r);
                if (c > s || r.length > o.length) return !0;
                if (c < s) return !1;
              }
              return a.length > e.length && 0 == i.indexOf(t);
            },
          },
        };
      i.default = o;
    },
    "615e": function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("d3b7"), e("159b"), e("14d9");
      var n = a(e("f3f3")),
        o = e("5743"),
        s = e("86eb"),
        r = e("26cb"),
        c = a(e("19b6")),
        l = getApp(),
        d = {
          name: "coupon",
          mixins: [c.default],
          props: { dataConfig: { type: Object, default: function () {} } },
          computed: (0, n.default)({}, (0, r.mapGetters)(["isLogin"])),
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t && ((this.numberConfig = t.numConfig.val), (this.isShow = t.isShow.val), this.getCoupon());
              },
            },
          },
          data: function () {
            return {
              couponList: [],
              numberConfig: 0,
              name: this.$options.name,
              isIframe: l.globalData.isIframe,
              isShow: !0,
            };
          },
          created: function () {},
          mounted: function () {},
          methods: {
            getCoupon: function () {
              var t = this,
                i = [];
              (0, o.getCouponsIndex)({ type: -1, num: this.numberConfig })
                .then(function (e) {
                  e.data.forEach(function (t, e, a) {
                    t.used || i.push(t);
                  }),
                    t.$set(t, "couponList", i);
                })
                .catch(function (i) {
                  return t.$util.Tips({ title: i });
                });
            },
            receiveCoupon: function (t) {
              var i = this;
              i.isLogin
                ? (0, o.setCouponReceive)(t.id)
                    .then(function () {
                      (t.is_use = !0), i.$set(i, "couponList", i.couponList), i.$util.Tips({ title: i.$t("领取成功") });
                    })
                    .catch(function (t) {
                      i.$util.Tips({ title: t });
                    })
                : (0, s.toLogin)();
            },
            gopage: function (t) {
              uni.navigateTo({ url: t });
            },
          },
        };
      i.default = d;
    },
    "615ef": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("245d"),
        n = e("03ad");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("c7c0");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "6f6d4e02", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "619f": function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = getApp(),
        n = {
          name: "titles",
          props: { dataConfig: { type: Object, default: function () {} }, sty: { type: String, default: "on" } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t && ((this.titleConfig = t.titleInfo.list), (this.isShow = t.isShow.val));
              },
            },
          },
          data: function () {
            return { titleConfig: {}, name: this.$options.name, isIframe: !1, isShow: !0 };
          },
          created: function () {
            this.isIframe = a.globalData.isIframe;
          },
          mounted: function () {},
          methods: {},
        };
      i.default = n;
    },
    6489: function (t, i, e) {
      "use strict";
      var a = e("045a"),
        n = e.n(a);
      n.a;
    },
    "64d1": function (t, i, e) {
      "use strict";
      var a = e("f22f"),
        n = e.n(a);
      n.a;
    },
    "66c9": function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = e("6557"),
        n = {
          name: "goodsWaterfall",
          props: { dataLists: { default: [] } },
          data: function () {
            return { lists: [], showLoad: !1, tmp_data: [] };
          },
          methods: {
            goGoodsDetail: function (t) {
              var i = this;
              (0, a.goPage)().then(function (e) {
                (0, a.goShopDetail)(t, i.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              });
            },
          },
          mounted: function () {
            this.tmp_data = this.dataLists;
          },
          watch: {
            dataLists: function () {
              (this.loaded = []), (this.loadErr = []), (this.tmp_data = this.dataLists);
            },
          },
        };
      i.default = n;
    },
    "66de": function (t, i, e) {
      "use strict";
      var a = e("1a71"),
        n = e.n(a);
      n.a;
    },
    6722: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("fc56"),
        n = e("0b61");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("ff83");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "b589b038", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    6973: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { style: t.colorStyle },
            [
              t.isShow && t.tabbar.length && !t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "uni-tabbar acea-row row-around row-middle" },
                    t._l(t.tabbar, function (i, a) {
                      return e(
                        "v-uni-view",
                        {
                          key: a,
                          staticClass: "uni-tabbar_item",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.changeTab(i);
                            },
                          },
                        },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "uni-tabbar_icon" },
                            [
                              i.link == t.pagePath
                                ? e("v-uni-image", { attrs: { mode: "aspectFit", src: i.imgList[0] } })
                                : e("v-uni-image", { attrs: { mode: "aspectFit", src: i.imgList[1] } }),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "uni-tabbar_label", class: { active: i.link == t.pagePath } },
                            [t._v(t._s(t.$t(i.name)))]
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  )
                : t._e(),
              t.isIframe && t.tabbar.length
                ? e(
                    "v-uni-view",
                    { staticClass: "uni-tabbar acea-row row-around row-middle" },
                    t._l(t.tabbar, function (i, a) {
                      return e(
                        "v-uni-view",
                        {
                          key: a,
                          staticClass: "uni-tabbar_item",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.changeTab(i);
                            },
                          },
                        },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "uni-tabbar_icon" },
                            [
                              i.link == t.pagePath
                                ? e("v-uni-image", { attrs: { mode: "aspectFit", src: i.imgList[0] } })
                                : e("v-uni-image", { attrs: { mode: "aspectFit", src: i.imgList[1] } }),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "uni-tabbar_label", class: { active: i.link == t.pagePath } },
                            [t._v(t._s(t.$t(i.name)))]
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  )
                : t._e(),
              t.isIframe && !t.tabbar.length
                ? e("v-uni-view", { staticClass: "empty-img uni-tabbar acea-row row-around row-middle" }, [
                    t._v(t._s(t.$t("暂无数据，请设置"))),
                  ])
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "69a8": function (t, i) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNkZENjdDNERGODkxMUVCQjk2NEZDQkE2OUQyMzFCQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNkZENjdDNURGODkxMUVCQjk2NEZDQkE2OUQyMzFCQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY2RkQ2N0MyREY4OTExRUJCOTY0RkNCQTY5RDIzMUJBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY2RkQ2N0MzREY4OTExRUJCOTY0RkNCQTY5RDIzMUJBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PexfhgAABUJJREFUeNq0WEtL9FYYzjnJZCYZ/bzNjFY/C3XjDSrShZaCfqWoRWppkQofIvojXCkoulG3IohLcenKhStFF142ulBXCiriprXWeh3nmqTvSd8jL+PozOcl8JDMJDl58l6e85wwJfuNIThABWh4LP+3AQ7AAiRx7yCyfkA218iH+wAG7r2EkIJkBIkYIAqI4HGCEHsxGRkFD8AE5ALyAB/wtyTD8EGCSByJhBF3uI9kQ4pliIaBBAKAInFcXFzs7ejosJuamhJ1dXXJ8vLyZEFBQfLi4sI+Ozuzt7e3ndXVVWdxcdE+Pz+/h3tuALdILIqknWzJMIyGH0kUA4K1tbXG4OBgsqurK6KqqkwFTYNNxhMvoszOzvLx8XFlf3+fkoriPU4mMpKISEkQUKbremB0dJT19/ffA4kwect7QsYm92s4hgdJsZGREXVsbMyJxWK3hNCjCLE0qcnFaHyElAQWFhYSDQ0NgsQl4gaJxHFAmwzKSbcJMjqCr6ysKJ2dnZ6rqytZT/HnakgSqQB8Kikp+ePw8PA3x3F+AtQBygC5AA/g2S4U5wEcrzUB+YCizc3NwpycnBDWoZdIw6P0iJOlgAZIze9bW1u/wgCfALWAEMCHD2DZ6gaSUgFeJGXOzMyYSMYn05guKvmAGsDPExMTgsiPSCSIgzHlBRuJkoaR4pi6R5GR6qlj53wNXRPY2dkJa5om6uMvrJMYY8xRXriRF2E4ji6VWpyTY3NCRoTPHBgYiAARWbCi8uOvIYIM5P2ObJRAIGCIaIljGnUNBe3bUCjUkkgkfoCTNaLgMLRMeaMNx+KoYaHd3V0/1qJGW9Ftwfb29gRERcq52FuvjcoTEXJ/Tk9P+6UeCaIa0Re1ubk5Sia55FsSoQFC8L29PZ1ojcVpRdfX18dQjKTEv9fmvuTJyYmc/UV0GCcXWDDpxYmyWu9IxM3G9fW1jkRcK8JJ2KzCwsI4ken32qScqOFwWJLhMjLSnSXAAjw4tHeqFyqyumEYGnWMkoyokdjp6ekDmbds6TREBAE9GAxq0m6IZ3KcdV0y6+vr9junSJIRRWtUVVWpxLa6ZCwkE11eXray9auvqBcNHaQBbvGhedzSICpswvTuu4UNu0nojPKGxBiZkMuEZzo6OrqvqKi4gOMz4ZM4YRa7u7uLgQrbKYLH3pCMDw19QUtLiwZEktQt0gdx0mbUElpUqF5BRNRJoXCQYF9LNjY2IuAgRVT+BPwrJEUjN9ioMZz4WAsHeg0h6QpERITLC/b09HAgEiPLGDcTPMUEuT0NSw0rLy9Prpd8VJi+kATHiAhnVwL4qqamxj81NXWP9uQGydjpHBlD2+CFNs8tKioShfYRjVeONNdZkKKrDHH/d4BfSktLPx8fH3fA+N8DvkFPraZdqhC/4YoSGHJfW1tbPgygYAojZN0jVwZ2SiQ0JO3HiIglT7CystJYWlq6hflPOshzXPI82BT2hAFScUAjEon4ent78+bn571kLR1LWarQBvAhEbdroFg/9PX1KZOTkzemaV7Bf38D/kEiCTrtsGccmYb5FnVjrK2t+YeHh3NhryeTSSmOFp2F8XpBxgQSZmtrKxsaGoo0NjaKQr3CaFxi4SZS5z+WwSJq1B+LN4b5y5ibm/NDa/oODg50WE9roJMqCCYHX8urq6sVUFa7u7s7DimRHXOJZK4x1WkdZMbFWJrPIWbKZxFPyqcR+X0miqmgy+H/xe0JR5CxVcnsTZesMh06ElFTvtHEyXcaua7O6Ke/SOqR2INnRtBWd5CQRdfh2Xqj/wQYAIEPjut4Tiq/AAAAAElFTkSuQmCC";
    },
    "6ab5": function (t, i, e) {
      var a = e("aaa9");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("b083450e", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6bb9": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("c19c"),
        n = e("c8a1");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("92a3");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "547ee792", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "6bff": function (t, i, e) {
      var a = e("225d");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("6dbe6705", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6c03": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("3917"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "6dc3": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { style: t.colorStyle, attrs: { id: "pageIndex" } },
            [
              e("skeletons", { attrs: { show: t.showSkeleton, loading: "chiaroscuro", bgcolor: "#FFF" } }),
              t.$wechat.isWeixin()
                ? e(
                    "v-uni-view",
                    { staticClass: "followMe" },
                    [
                      t.followHid && t.followUrl && !t.subscribe
                        ? e(
                            "v-uni-view",
                            { staticClass: "follow acea-row row-between-wrapper" },
                            [
                              e("v-uni-view", [t._v(t._s(t.$t("点击“立即关注”即可关注公众号")))]),
                              e(
                                "v-uni-view",
                                { staticClass: "acea-row row-middle" },
                                [
                                  e(
                                    "v-uni-view",
                                    {
                                      staticClass: "bnt",
                                      on: {
                                        click: function (i) {
                                          (arguments[0] = i = t.$handleEvent(i)), t.followTap.apply(void 0, arguments);
                                        },
                                      },
                                    },
                                    [t._v(t._s(t.$t("立即关注")))]
                                  ),
                                  e("span", {
                                    staticClass: "iconfont icon-guanbi",
                                    on: {
                                      click: function (i) {
                                        (arguments[0] = i = t.$handleEvent(i)), t.closeFollow.apply(void 0, arguments);
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      t.followCode
                        ? e(
                            "v-uni-view",
                            { staticClass: "followCode" },
                            [
                              e("v-uni-view", { staticClass: "pictrue" }, [e("img", { attrs: { src: t.followUrl } })]),
                              e("v-uni-view", {
                                staticClass: "mask",
                                on: {
                                  click: function (i) {
                                    (arguments[0] = i = t.$handleEvent(i)), t.closeFollowCode.apply(void 0, arguments);
                                  },
                                },
                              }),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    1
                  )
                : t._e(),
              e(
                "v-uni-view",
                {
                  staticClass: "skeleton",
                  style: { visibility: t.showSkeleton ? "hidden" : "visible" },
                  attrs: { id: "pageIndexs" },
                },
                [
                  e("headerSerch", {
                    staticClass: "mp-header skeleton",
                    attrs: { dataConfig: t.headerSerch.default },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("headerSerch", "default");
                      },
                    },
                  }),
                  e("swiperBg", {
                    attrs: { dataConfig: t.swiperBg.default },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("swiperBg", "default");
                      },
                    },
                  }),
                  e("menus", {
                    attrs: { dataConfig: t.menus.default },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("menus", "default");
                      },
                    },
                  }),
                  e("news", {
                    attrs: { dataConfig: t.news.default },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("news", "default");
                      },
                    },
                  }),
                  e("activity", {
                    attrs: { dataConfig: t.activity.default },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("activity", "default");
                      },
                    },
                  }),
                  e("alive", {
                    attrs: { dataConfig: t.alive.default },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("alive", "default");
                      },
                    },
                  }),
                  e("coupon", {
                    attrs: { dataConfig: t.coupon.default },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("coupon", "default");
                      },
                    },
                  }),
                  e("scrollBox", {
                    attrs: { dataConfig: t.scrollBox.default },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("scrollBox", "default");
                      },
                    },
                  }),
                  e("recommend", {
                    attrs: { dataConfig: t.goodList.aa },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("goodList", "aa");
                      },
                    },
                  }),
                  e("popular", {
                    attrs: { dataConfig: t.goodList.bb },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("goodList", "bb");
                      },
                    },
                  }),
                  e("mBanner", {
                    attrs: { dataConfig: t.swiperBg.aa },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("swiperBg", "aa");
                      },
                    },
                  }),
                  e("newGoods", {
                    attrs: { dataConfig: t.goodList.cc },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("goodList", "cc");
                      },
                    },
                  }),
                  e("promotion", {
                    attrs: { dataConfig: t.goodList.dd },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("goodList", "dd");
                      },
                    },
                  }),
                  e("tabNav", {
                    staticClass: "sticky-box",
                    style: "top:" + t.isTop + "px;",
                    attrs: { dataConfig: t.tabNav.default },
                    on: {
                      bindSortId: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindSortId.apply(void 0, arguments);
                      },
                      bindHeight: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindHeighta.apply(void 0, arguments);
                      },
                    },
                    nativeOn: {
                      click: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("tabNav", "default");
                      },
                    },
                  }),
                  !t.isIframe && t.tabNav.default && t.tabNav.default.isShow.val
                    ? e("indexGoods", {
                        attrs: { dataLists: t.goodLists },
                        nativeOn: {
                          click: function (i) {
                            (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("List");
                          },
                        },
                      })
                    : t._e(),
                  !t.isIframe && t.tabNav.default && t.tabNav.default.isShow.val && 0 == t.goodLists.length
                    ? e(
                        "v-uni-view",
                        {},
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "emptyBox" },
                            [
                              e("v-uni-image", { attrs: { src: t.imgHost + "/statics/images/no-thing.png" } }),
                              e("v-uni-view", { staticClass: "tips" }, [t._v(t._s(t.$t("暂无商品，去看点别的吧")))]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
              e("tabBar", {
                attrs: { dataConfig: t.tabBar.default, pagePath: "/pages/index/index" },
                nativeOn: {
                  click: function (i) {
                    (arguments[0] = i = t.$handleEvent(i)), t.bindEdit("tabBar", "default");
                  },
                },
              }),
              t.site_config.record_No
                ? e(
                    "v-uni-view",
                    {
                      staticClass: "site-config",
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)), t.goICP(1);
                        },
                      },
                    },
                    [t._v(t._s(t.site_config.record_No))]
                  )
                : t._e(),
              t.site_config.network_security
                ? e(
                    "v-uni-view",
                    {
                      staticClass: "site-config",
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)), t.goICP(2);
                        },
                      },
                    },
                    [t._v(t._s(t.site_config.network_security))]
                  )
                : t._e(),
              e("v-uni-view", { staticClass: "uni-p-b-98" }),
              e("couponWindow", {
                staticStyle: { position: "relative", "z-index": "10000" },
                attrs: { window: t.isCouponShow, couponImage: t.couponObj.image, couponList: t.couponObj.list },
                on: {
                  onColse: function (i) {
                    (arguments[0] = i = t.$handleEvent(i)), t.couponClose.apply(void 0, arguments);
                  },
                },
              }),
            ],
            1
          );
        },
        n = [];
    },
    "6e34": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return t.isShow
            ? e(
                "v-uni-view",
                { staticClass: "header" },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "serch-wrapper row-middle" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "logo" },
                        [
                          e("v-uni-image", {
                            staticClass: "skeleton-rect",
                            attrs: { src: t.logoConfig, mode: "heightFix" },
                          }),
                          e("v-uni-view", { staticClass: "swiger" }, [
                            t._v(t._s(t.titleInfo.length ? t.$t(t.titleInfo[0].val) : "")),
                          ]),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        {
                          staticClass: "input acea-row row-middle fillet skeleton-rect",
                          attrs: { "hover-class": "none" },
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)), t.goPage.apply(void 0, arguments);
                            },
                          },
                        },
                        [e("v-uni-text", { staticClass: "iconfont icon-sousuo" }), t._v(t._s(t.$t("搜索商品")))],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : t.isIframe
            ? e(
                "v-uni-view",
                { staticClass: "header" },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "serch-wrapper acea-row row-middle" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "logo" },
                        [
                          e("v-uni-image", { attrs: { src: t.logoConfig, mode: "heightFix" } }),
                          e("v-uni-view", { staticClass: "swiger" }, [
                            t._v(t._s(t.titleInfo.length ? t.titleInfo[0].val : "")),
                          ]),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        {
                          staticClass: "input acea-row row-middle fillet",
                          attrs: { "hover-class": "none" },
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)), t.goPage.apply(void 0, arguments);
                            },
                          },
                        },
                        [e("v-uni-text", { staticClass: "iconfont icon-sousuo" }), t._v(t._s(t.$t("搜索商品")))],
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
    "6f193": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { easyLoadimage: e("cad3").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { style: t.colorStyle },
            [
              t.isShow && t.hotList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "hotList skeleton-rect index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "name line1" },
                                [
                                  e("v-uni-text", { staticClass: "iconfont icon-shoufaxinpin" }),
                                  t._v(t._s(t.$t(t.titleInfo[0].val))),
                                ],
                                1
                              ),
                              e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.$t(t.titleInfo[1].val)))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            {
                              staticClass: "more",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                },
                              },
                            },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "list" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticClass: "scroll-view_x",
                              staticStyle: { width: "auto", overflow: "hidden" },
                              attrs: { "scroll-x": !0 },
                            },
                            [
                              t._l(t.hotList, function (i, a) {
                                return [
                                  e(
                                    "v-uni-view",
                                    {
                                      key: a + "_0",
                                      staticClass: "item",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e = t.$handleEvent(e)),
                                            t.gopage("/pages/goods_details/index?id=" + i.id);
                                        },
                                      },
                                    },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "pictrue" },
                                        [
                                          e("easy-loadimage", { attrs: { mode: "widthFix", "image-src": i.image } }),
                                          0 == a
                                            ? e("v-uni-image", {
                                                staticClass: "numPic",
                                                attrs: { src: "/static/images/one.png" },
                                              })
                                            : 1 == a
                                            ? e("v-uni-image", {
                                                staticClass: "numPic",
                                                attrs: { src: "/static/images/two.png" },
                                              })
                                            : 2 == a
                                            ? e("v-uni-image", {
                                                staticClass: "numPic",
                                                attrs: { src: "/static/images/three.png" },
                                              })
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "rectangle" }, [
                                        t._v(t._s(t.$t("热度 TOP")) + " " + t._s(a + 1)),
                                      ]),
                                      e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(i.store_name))]),
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
              !t.isShow && t.isIframe && t.hotList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "hotList index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "name line1" },
                                [
                                  e("v-uni-text", { staticClass: "iconfont icon-shoufaxinpin" }),
                                  t._v(t._s(t.titleInfo[0].val)),
                                ],
                                1
                              ),
                              e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            {
                              staticClass: "more",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                },
                              },
                            },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "list acea-row row-middle" },
                        [
                          t._l(t.hotList, function (i, a) {
                            return [
                              e(
                                "v-uni-view",
                                {
                                  key: a + "_0",
                                  staticClass: "item",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.gopage("/pages/goods_details/index?id=" + i.id);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "pictrue" },
                                    [
                                      e("v-uni-image", { attrs: { src: i.image } }),
                                      0 == a
                                        ? e("v-uni-image", {
                                            staticClass: "numPic",
                                            attrs: { src: "/static/images/one.png" },
                                          })
                                        : 1 == a
                                        ? e("v-uni-image", {
                                            staticClass: "numPic",
                                            attrs: { src: "/static/images/two.png" },
                                          })
                                        : 2 == a
                                        ? e("v-uni-image", {
                                            staticClass: "numPic",
                                            attrs: { src: "/static/images/three.png" },
                                          })
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(i.store_name))]),
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
              t.isIframe && !t.hotList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "hotList index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "name line1" },
                                [
                                  e("v-uni-text", { staticClass: "iconfont icon-shoufaxinpin" }),
                                  t._v(t._s(t.titleInfo[0].val)),
                                ],
                                1
                              ),
                              e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            {
                              staticClass: "more",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                },
                              },
                            },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("排行榜、暂无数据")))]),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        o = [];
    },
    "6f70": function (t, i, e) {
      var a = e("2b44");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("565374f4", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7031: function (t, i, e) {
      "use strict";
      e("7a82"),
        Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0),
        e("d401"),
        e("d3b7"),
        e("25f0"),
        e("c975"),
        e("ac1f"),
        e("5319");
      var a = e("6557"),
        n = getApp(),
        o = {
          name: "swiperBg",
          props: { dataConfig: { type: Object, default: function () {} }, sty: { type: String, default: "on" } },
          data: function () {
            return {
              indicatorDots: !1,
              circular: !0,
              autoplay: !0,
              interval: 3e3,
              duration: 500,
              bastBanner: [],
              name: this.$options.name,
              isIframe: !1,
              isShow: !0,
              imageH: 375,
            };
          },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                var e = this;
                t &&
                  ((this.bastBanner = t.imgList.list),
                  (this.isShow = t.isShow.val),
                  (this.imgUrls = t.imgList ? t.imgList.list : []),
                  (this.isShow = !t.isShow || t.isShow.val),
                  uni.getImageInfo({
                    src: this.imgUrls.length ? this.imgUrls[0].img : "",
                    success: function (t) {
                      t && t.height > 0 ? e.$set(e, "imageH", (t.height / t.width) * 690) : e.$set(e, "imageH", 375);
                    },
                    fail: function (t) {
                      e.$set(e, "imageH", 375);
                    },
                  }));
              },
            },
          },
          created: function () {
            this.isIframe = n.globalData.isIframe;
          },
          mounted: function () {},
          methods: {
            setDomain: function (t) {
              return (t = t ? t.toString() : ""), t.indexOf("https://") > -1 ? t : t.replace("http://", "https://");
            },
            goDetail: function (t) {
              var i = this;
              (0, a.goPage)().then(function (t) {
                i.$util.JumpPath(urls);
              });
            },
          },
        };
      i.default = o;
    },
    7032: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("cf2d"),
        n = e("be23");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("1125");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "9aefe936", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "721c": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("dba3"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "76ad": function (t, i, e) {
      var a = e("aef3");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("72cb7bd2", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7846: function (t, i, e) {
      "use strict";
      e("7a82"),
        Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0),
        e("d401"),
        e("d3b7"),
        e("25f0"),
        e("c975"),
        e("ac1f"),
        e("5319");
      var a = e("6557"),
        n = (uni.getSystemInfoSync().statusBarHeight, getApp()),
        o = {
          name: "swiperBg",
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                var e = this;
                t &&
                  ((this.imgUrls = t.imgList ? t.imgList.list : []),
                  (this.isShow = !t.isShow || t.isShow.val),
                  uni.getImageInfo({
                    src: this.imgUrls.length ? this.imgUrls[0].img : "",
                    success: function (t) {
                      t && t.height > 0 ? e.$set(e, "imageH", (t.height / t.width) * 690) : e.$set(e, "imageH", 320);
                    },
                    fail: function (t) {
                      e.$set(e, "imageH", 320);
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
            this.isIframe = n.globalData.isIframe;
          },
          mounted: function () {},
          methods: {
            goDetail: function (t) {
              var i = this;
              (0, a.goPage)().then(function (e) {
                var a = t.info[1].value;
                i.$util.JumpPath(a);
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
      i.default = o;
    },
    "7c52": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("2e2d"),
        n = e("13cb");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("5eaf");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "49c0c95d", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "7c95": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("66c9"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "7da4": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.menu-main[data-v-0aa3c079]{background-color:#fff}.nav[data-v-0aa3c079]{margin:0 %?30?%;border-radius:%?12?%}.nav .item[data-v-0aa3c079]{margin-top:%?26?%;width:20%;text-align:center;font-size:%?24?%}.nav .item .pictrue[data-v-0aa3c079]{width:%?90?%;height:%?90?%;margin:0 auto}.nav .item .pictrue.default[data-v-0aa3c079]{background-color:#ccc;border-radius:50%;text-align:center;line-height:%?90?%}.nav .item .pictrue.default .iconfont[data-v-0aa3c079]{font-size:%?40?%}.nav .item .pictrue[data-v-0aa3c079] ,\n.nav .item .pictrue[data-v-0aa3c079] uni-image,\n.nav .item .pictrue[data-v-0aa3c079] .easy-loadimage,\n.nav .item .pictrue[data-v-0aa3c079] uni-image{width:%?90?%;height:%?90?%;border-radius:50%}.nav .item .menu-txt[data-v-0aa3c079]{margin-top:%?15?%}.nav .item.four[data-v-0aa3c079]{width:25%}.nav .item.four .pictrue[data-v-0aa3c079]{width:%?90?%;height:%?90?%}',
          "",
        ]),
        (t.exports = i);
    },
    "7e26": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("d233"),
        n = e("7c95");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("f0fd");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "d0210158", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "7e81": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            a = t._self._c || i;
          return t.popup_show
            ? a(
                "v-uni-view",
                { staticClass: "wrap" },
                [
                  a(
                    "v-uni-view",
                    { staticClass: "popup-bg", style: t.getHeight },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "popup-content", class: { "popup-content-show": t.popup_show } },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "update-wrap" },
                            [
                              a("v-uni-image", { staticClass: "top-img", attrs: { src: e("0a55") } }),
                              a(
                                "v-uni-view",
                                { staticClass: "content" },
                                [
                                  a("v-uni-text", { staticClass: "title" }, [
                                    t._v(t._s(t.$t("发现新版本")) + t._s(t.update_info.version)),
                                  ]),
                                  a("v-uni-view", {
                                    staticClass: "title-sub",
                                    domProps: { innerHTML: t._s(t.update_info.info) },
                                  }),
                                  t.downstatus < 1
                                    ? a(
                                        "v-uni-button",
                                        {
                                          staticClass: "btn",
                                          on: {
                                            click: function (i) {
                                              (arguments[0] = i = t.$handleEvent(i)), t.nowUpdate();
                                            },
                                          },
                                        },
                                        [t._v(t._s(t.$t("立即升级")))]
                                      )
                                    : a(
                                        "v-uni-view",
                                        { staticClass: "sche-wrap" },
                                        [
                                          a(
                                            "v-uni-view",
                                            { staticClass: "sche-bg" },
                                            [a("v-uni-view", { staticClass: "sche-bg-jindu", style: t.lengthWidth })],
                                            1
                                          ),
                                          a("v-uni-text", { staticClass: "down-text" }, [
                                            t._v(
                                              t._s(t.$t("下载进度")) +
                                                ":" +
                                                t._s((t.downSize / 1024 / 1024).toFixed(2)) +
                                                "M/" +
                                                t._s((t.fileSize / 1024 / 1024).toFixed(2)) +
                                                "M"
                                            ),
                                          ]),
                                        ],
                                        1
                                      ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a("v-uni-image", {
                            staticClass: "close-ioc",
                            attrs: { src: e("9f69") },
                            on: {
                              click: function (i) {
                                (arguments[0] = i = t.$handleEvent(i)), t.closeUpdate();
                              },
                            },
                          }),
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
    "80b4": function (t, i, e) {
      var a = e("0a2a");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("d7ffda40", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "81c8": function (t, i, e) {
      "use strict";
      var a = e("f253"),
        n = e.n(a);
      n.a;
    },
    "837a": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("1e69"),
        n = e("f98f");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("1cf9");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "63b2549c", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    8632: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("6973"),
        n = e("c65f");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("369f");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "22156dd1", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "89c4": function (t, i) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAZCAYAAACFHfjcAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAQqADAAQAAAABAAAAGQAAAACEpl33AAAHdklEQVRYCd1ZC1BUVRj+7i4LC7uAD1BJJMACfGBApmYRUKZmJNj4KJpCa6wsHc0sa6YIqXQas1abHCtnksRHag9Lyd6gjvjExTcLBqsIvlmEBVz27u0/B/a267KwTjqD/jN3z7nn/Ofcc77z/9/5z1kBHohUsS5ctCpyBUF4SLJZCpQq5TQh4ulKD5reMipCRyOVKr7uBtEvxyYoZ5WUVmNfiQH3xkYifkAYFJL4GZSNWULENFNHfdwqdW6BEE+unwsos85eMgfm/bwPm7bthZ+fH3x9ffHI8ChkPJ4ArVqJrzbuwLr8A115vnpJkvRkzXpRFAv1JO0N1gUIqTRvgk3prWtotoZt/usIvvtdjzM156HVaqFWq+U+NL4qpKXEIu3hwaivNyNn+RYcOFYl13fVDIGis9lsCwgPJ0uWgZAMa+JEpfcyAYrEP3YbsCa/GNXnamEymVxAcJxkcHcNJo8agHGJMdh/9DR0qwthMF5wVOlyeQKjksCYRmAU2AcnMB6wiWodBFVmiaEGK7/bjX+qLqGlpQV1dXUyCJFhvRFBz+5iA8yNzbw9dcaBIpND1J3BmPNsEoYO6octhUfxyTcFaGi02L/TJVMad7zdVQSrYe12swWJbCWLSox8wNeCEBsdikVvTOR1h0ur8PbiTXAEwXGWyUP7492XR6O08gJe+WCTY1WXy7dZBgPDpBCUqsQ1Ww64BYGNPrJvN8Bi5k9sRHe3IDDdgv0n8eWmIm4Z7L0jUSoV6N3TvyOVm1pHBBquUCiy2Ue82E/Fmcsskd3B398fPj4+vIz9/FFkwKRR0eiuVeHzDQdkd5AVrsmUGS9eU+L8OiQqBJlpwzCof29YRRssLSJ26SvILffAVN+E+Ji+0M1Px9gZX6KpucWpcTd/X+Qvn46p76zjXMTy8z/dgsNlNVyvKG82FAqZ+tDYZIGxpharftzLF8mpM3ohMGbHxcWtUtgrLBYL54TMSSn4YuHz9mKeajVqqPz7QNLcgaDgIDBOsEvSiIFYrZsJf9LxRDS+3lg6fwIn1tSZK5H66krM+egH9O8XhKwZo3kXB0+cQe2VJiTfd5dLl6NGRKGyulYmZJqIkw57nTwvF8MzdPzJeCsPv+0qxaI5qYiJ6OWka38hq0jmQFjbiJFZwuVLtfBTNCPjieHQ+LVaxfQpSdCoyXhsIiaPG4aoiBDeR0iv7kilLbS57hzqza0Eau/cXRoZ2pOtAr7ddhBWq42rnaoxYWnedsRH94W27Zv5O45j7AMxLt2MfTAGW7cfcyl3V1Bz4QrW0g54vOIchsWGtatG44nzgmRDg7kBAQEB3B2KDlUhNiYcGalDKUaIRRGZ7Igh1IHNKnfy2rQxqD5vQurDcbws/WWdXNdZpvz0RXIFK2ZMfgCrNu+FmUyXyYmK80h5YbncPH/HMUxNuw89Av1wua6Rl/ftFYiBkb25K8iKHmbU3ioZ+Haa3KOArQVajdaJExrY9kgT11DkOGoEmScDweFJGBiK1OTBclkNgeKpMJ9/KWcjIkJ7YOvn0/Hpm+kYnzKYLMHbqYuqc3U4Un4Wj94fJZcza9hz+BQumYi4O5AAclPGJewZ1L8PZkwZibCQbsRDle5akUUoVPBSqZwUDpeeAR5rXW2ninZeyozn2yntuIiR87yPf+KTfzAhEinD7sbsZxKxbO0OsGjWLswF0skqv92m50VjRsbgK4pzOpMl88bDJklcrZGAr6y+jFkLv+dpe21pGy3xgiDzpaxjbrrautpyifsMC6+vR8Lv6AG1jxd3BRZwbdt5gj9s5VZkTcQhOtzZd7E/95Rh3tRkvpp+am8EURRbuL+8089NX7ABRiJUT4U4Qu+KArUuP3URgmT16Ck+ZvT0e1wvOiIYy956ksBwtsKjJ8/i7MV6RPbrKffX0HgV2/f/Q6Q5gBMn28bZVnujhSzCFQgWMdbW1kLAVQ+f/0jUkwHuPmSk2EHEK+S3vXpoeRO2UzxDp1kWXB0lXnCUrUSajBtGj4wG20luhtCcC3hANfjuEB6Q2EFgafFxz1a6+oIrUTIydSd19c2Yu3gzMsYlIPfDDB5Q+ai8UHyiivMGswpHYcCpvb3QbLFCz7jrBgtZw1J23hDE8vWf0YFr5ooNO7Hq+508fP4/35oyNg6vZ6Zg/S/FdPAq7LSrkOAAcokraOO2TvVvpAKBYKRFj2NnDYrDANGw7n1ix1kUGwTmrPiNrKHqur+XMCAUWXTYCtCq6aKm2CN2v+6P3OAGTqdPe9/sXtLWImbTeya7V8hZ8SsnL3u9u7RPkD8BMIYfsth2tyT37y5//G6zhHSyhNZ9mSbHLcJxklLZ6mRRQrYAIYmdItf/cpAmRtvpNcII7qnH4vHixPvpZuo0v8e4RW6olpI7ZDN3cJySCxD2SqthzVQBko7OEIHM1x3j+8cfGoi5zyXxM8OS3AKnOnv7rpLS6pewOIFSPQFQ4GgFjmN0CwRT4rdXFq85NOP3mLsw7kiii5focDrFSdIChbdVd9vfYjuixf/XsIg6OjSmUXmuQqXMvt3+1/gXd2aHuo/UDUAAAAAASUVORK5CYII=";
    },
    "8ab7": function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("e9c4"), e("a434");
      var a = e("6557"),
        n = getApp(),
        o = {
          name: "activity",
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                if (t) {
                  var e = JSON.parse(JSON.stringify(t.imgList.list));
                  (this.activityOne = t.imgList.list[0]),
                    e.splice(0, 1),
                    (this.activity = e),
                    (this.isShow = t.isShow.val);
                }
              },
            },
          },
          data: function () {
            return {
              activity: [],
              activityOne: {},
              name: this.$options.name,
              isShow: !0,
              isIframe: n.globalData.isIframe,
            };
          },
          created: function () {},
          methods: {
            gopage: function (t) {
              var i = this;
              (0, a.goPage)().then(function (e) {
                i.$util.JumpPath(t);
              });
            },
          },
        };
      i.default = o;
    },
    "8af7": function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index-wrapper[data-v-b589b038]{background-color:#fff;margin:%?20?% %?30?%;border-radius:%?12?%}.text[data-v-b589b038]{display:flex}.text .name[data-v-b589b038]{font-size:%?34?%;font-weight:700}.text .txt-btn[data-v-b589b038]{display:flex;align-items:flex-end;margin-bottom:%?8?%;margin-left:%?12?%}.scroll-product[data-v-b589b038]{white-space:nowrap;margin-top:%?30?%;padding:0 %?20?% %?20?% %?20?%}.scroll-product .item[data-v-b589b038]{display:inline-block;margin-right:%?24?%;border-radius:0 0 %?10?% %?10?%;background:linear-gradient(180deg,hsla(0,0%,100%,0),rgba(255,207,183,.65));color:#ff7e00}.scroll-product .item[data-v-b589b038]:nth-of-type(3n){color:#1db0fc;background:linear-gradient(180deg,hsla(0,0%,100%,0),rgba(187,221,255,.65))}.scroll-product .item[data-v-b589b038]:nth-of-type(3n-1){color:#ff448f;background:linear-gradient(180deg,hsla(0,0%,100%,0),rgba(253,199,255,.65))}.scroll-product .item[data-v-b589b038]:nth-last-child(1){margin-right:0}.scroll-product .item .img-box[data-v-b589b038]{width:%?160?%;height:%?160?%;margin:0 %?10?%;border-radius:10px}.scroll-product .item .img-box uni-image[data-v-b589b038]{width:100%;height:100%;border-radius:%?10?%}.scroll-product .item .img-box[data-v-b589b038] ,\n.scroll-product .item .img-box[data-v-b589b038] uni-image,\n.scroll-product .item .img-box[data-v-b589b038] .easy-loadimage,\n.scroll-product .item .img-box[data-v-b589b038] uni-image{width:%?160?%;height:%?160?%;border-radius:%?10?%}.scroll-product .item .pro-info[data-v-b589b038]{max-width:%?180?%;font-size:%?24?%;text-align:center;height:%?60?%;line-height:%?60?%;border-bottom:0;border-top:0;padding:0 %?10?%;font-weight:700}.empty-img[data-v-b589b038]{height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.empty-img .iconfont[data-v-b589b038]{font-size:%?50?%}.more[data-v-b589b038]{color:#999;font-size:%?24?%}',
          "",
        ]),
        (t.exports = i);
    },
    "8ca8": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticStyle: { "touch-action": "none" } },
            [
              t.isShow && t.logoConfig && !t.isIframe
                ? e(
                    "v-uni-view",
                    {
                      staticClass: "customerService",
                      style: "top:" + t.topConfig,
                      on: {
                        touchmove: function (i) {
                          i.stopPropagation(),
                            i.preventDefault(),
                            (arguments[0] = i = t.$handleEvent(i)),
                            t.setTouchMove.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      e(
                        "v-uni-navigator",
                        {
                          staticClass: "pictrue",
                          attrs: { url: "/pages/extension/customer_list/chat", "hover-class": "none" },
                        },
                        [e("v-uni-image", { attrs: { src: t.logoConfig } })],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              t.logoConfig && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "customerService borderService", style: "top:" + t.topConfig },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "pictrue" },
                        [e("v-uni-image", { attrs: { src: t.logoConfig } })],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              !t.logoConfig && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "customerService borderService", style: "top:" + t.topConfig },
                    [e("v-uni-view", { staticClass: "pictrue" }, [t._v(t._s(t.$t("客服")))])],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "90cd": function (t, i, e) {
      var a = e("7da4");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("4f8e57e4", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "917f3": function (t, i, e) {
      var a = e("8af7");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("4d13b026", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "92a3": function (t, i, e) {
      "use strict";
      var a = e("dc7c"),
        n = e.n(a);
      n.a;
    },
    "92a7": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              t.isIframe && !t.bargList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "default" },
                    [e("v-uni-text", [t._v(t._s(t.$t("砍价模块，暂无数据")))])],
                    1
                  )
                : t._e(),
              t.bargList.length && t.isShow && !t.isIframe && t.$permission("bargain")
                ? e(
                    "v-uni-view",
                    { staticClass: "combination index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper index-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.$t("砍价活动")))]),
                              e("v-uni-view", { staticClass: "line1" }, [t._v(t._s(t.$t("呼朋唤友来砍价")))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            {
                              staticClass: "more",
                              attrs: { url: "/pages/activity/goods_combination/index", "hover-class": "none" },
                            },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "conter" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.bargList, function (i, a) {
                              return e(
                                "v-uni-view",
                                {
                                  key: a,
                                  staticClass: "itemCon",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.bargDetail(i);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "item" },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "pictrue" },
                                        [e("v-uni-image", { attrs: { src: i.image } })],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(i.title))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "x_money" },
                                            [
                                              t._v(t._s(t.$t("￥"))),
                                              e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.min_price))]),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "y_money" }, [
                                            t._v(t._s(t.$t("￥")) + t._s(i.ot_price)),
                                          ]),
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
                  )
                : t._e(),
              t.bargList.length && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "combination index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper index-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.$t("砍价活动")))]),
                              e("v-uni-view", { staticClass: "line1" }, [t._v(t._s(t.$t("呼朋唤友来砍价")))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            { staticClass: "more" },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "conter" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.bargList, function (i, a) {
                              return e(
                                "v-uni-view",
                                {
                                  key: a,
                                  staticClass: "itemCon",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.bargDetail(i);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "item" },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "pictrue" },
                                        [e("v-uni-image", { attrs: { src: i.image } })],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(i.title))]),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "money" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "x_money" },
                                            [
                                              t._v("￥"),
                                              e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.min_price))]),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "y_money" }, [t._v("￥" + t._s(i.ot_price))]),
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
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    9518: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.navTabBox[data-v-08bcd5d0]{color:#e93323;padding:0 %?30?%}.navTabBox .longTab[data-v-08bcd5d0]{width:100%}.navTabBox .longTab .longItem[data-v-08bcd5d0]{height:%?50?%;display:inline-block;line-height:%?50?%;text-align:center;font-size:%?34?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:%?40?%}.navTabBox .longTab .longItem.click[data-v-08bcd5d0]{font-size:%?36?%;font-weight:700;color:var(--view-theme)}.navTabBox .longTab .underlineBox[data-v-08bcd5d0]{height:3px;width:20%;display:flex;align-content:center;justify-content:center;transition:.5s}.navTabBox .longTab .underlineBox .underline[data-v-08bcd5d0]{width:%?33?%;height:%?4?%;background-color:#e93323}.empty-img[data-v-08bcd5d0]{width:%?690?%;height:%?200?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?200?%}.empty-img .iconfont[data-v-08bcd5d0]{font-size:%?50?%}.sticky-box[data-v-08bcd5d0]{position:-webkit-sticky;position:sticky;z-index:998;flex-direction:row;margin:0;background:#f5f5f5;padding:%?10?% 0}.sticky-box[data-v-08bcd5d0] .uni-scroll-view-content{display:flex;align-items:center;width:-webkit-max-content;width:max-content}',
          "",
        ]),
        (t.exports = i);
    },
    "956b": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("eb87"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    9603: function (t, i, e) {
      "use strict";
      var a = e("cd89"),
        n = e.n(a);
      n.a;
    },
    "98f8": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("ac22"),
        n = e("afe8");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("3e92");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "5eb1bb30", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "99f5": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("619f"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "9a3d": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("a003"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    "9c57": function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = getApp(),
        n = {
          name: "customerService",
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.logoConfig = t.imgUrl.url),
                  (this.isShow = t.isShow.val),
                  (this.routineContact = t.routine_contact_type));
              },
            },
          },
          data: function () {
            return {
              logoConfig: "",
              topConfig: "200px",
              name: this.$options.name,
              isIframe: !1,
              isShow: !0,
              routineContact: "0",
            };
          },
          created: function () {
            this.isIframe = a.globalData.isIframe;
          },
          methods: {
            setTouchMove: function (t) {
              t.touches[0].clientY < 545 && t.touches[0].clientY > 66 && (this.topConfig = t.touches[0].clientY + "px");
            },
          },
        };
      i.default = n;
    },
    "9d1b": function (t, i, e) {
      var a = e("34d5");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("cbaf8616", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "9df0": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("5e10"),
        n = e("ae21");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("e098");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "034fba8e", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    "9e2f": function (t, i, e) {
      var a = e("503b");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("5ec92b0a", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "9f69": function (t, i) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOEQxNDdCNERFRDIxMUVCODY4OEU0MjZFMjZGRTNENCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOEQxNDdCNURFRDIxMUVCODY4OEU0MjZFMjZGRTNENCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4RDE0N0IyREVEMjExRUI4Njg4RTQyNkUyNkZFM0Q0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM4RDE0N0IzREVEMjExRUI4Njg4RTQyNkUyNkZFM0Q0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/3JaFAAAA9pJREFUeNrsm11IFUEUx0f7gBIqioggKvShrlGUZd1eVHoJoRc1ECqQW0I3CnwIlR7qMdekRIks+nirp75ewoIgspc+LEWwD9DIbggaRgkWZNftP9xz7bbM9e7uzGy7Nw/8XvY6Z8/fmd0zZ2Y2xzRNpskKQRiEwDqwCiwBC8EC8AN8B1/BJ/AOvAFPwWsdAeUoFrsbVIBSsF7Cz1vwGNwBD/wkdi6oJbZq6JCX4DK4Cn5JeeJiJagHQ6Y3NkT3cx2v24a7QL/5b6yf7u+J2CbTH9bkNHYnz+xycBOUMP9YF9gLPqt8QW0BnWAF85+NgHLQo0JsEeW+ecy/Nkk5/ZWM2E3gBZjP/G8/QTHocyN2KXgPFrPg2DjIB2OiH3NnaPgwYEK5LaK4mROx5+ilFETbTPHbGsbbwTMWfNsBnmcS+wGsyQKxQ2DtTMM4miVCGemIpuvZOeALPeTZYuOUVeLWnq2VEHqJXmjHFAZ6AGwDdyXfzrWiEm/A5YS81zLhrlQwyS+1+ByW8DWQ9JPs2Z2gwOV/z/rc3waVEr1RTqsUqqyA9E0HWiPhbKMgr/HllCoXvnib+5Zr18FKScE1qcM4pmDotQhqSCdDep+gfYei2jeWLN5DCgtqkeAKG+0OCdq1Ki72Q9xpRLFTp4KPCv7+tIaVjQh33KbBsV3BogW0U5qWcdq4805Nzs9keIZPCn4/rnHNqpNRnjQ9FFwHzguuH9G8QNer6k3sVLCViKnfYjzP5mmen9ZTHs5LMyE5CK55ME/O44XAN48m/3vAPcs1PlkY9qooyE1WBJqtBTxKswy63yOxcS52QvNNDNDAEtuTVpsCN1xOLZ3aRG66lTiFQk9YrtWBC4LioUKz2DGdebYpQ55tdjm1lMqz7RocGzaFNEsWD06sXUeOMxwKMDzq4Yjqqsdw2VOGBz0cUlnPigKuctBe5zMcS92Mli2SzyrqmXQ9HJeMryNVbFjCUZ/iISjqYdkyNJy64Mb3Xwdd5q8pwTrSLYl8yCcgzRnu4cQGSd9fS6lRif/cRVCouEzjQ28DOAwmJfxERWcq/qsdAX6hkWWXNaYWOqJdPL77tToLhH60btKJNqOrs6RXq+3svPM3V2vAhbZOv4EzbEYnrYe27INmPO4iu8cMkraMclSQDpHwJaZ8yirMzjD+U+wyVhawXi1LJzSTWG69LHFW0QyA0BKKl7kVy+0JS5ygGfGpSB5XMcXJZMVy62aJo31dPhPaRXF1u9k1n8lGWeLsv+EToQbFM2q7xexJcvs0ePyNQINMvEH5+uMKIfX1x+x3PYrMd19s/RZgAJ9yv76mYttEAAAAAElFTkSuQmCC";
    },
    "9f7d": function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("0099"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    a003: function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("a4d3"), e("e01a");
      var n = a(e("47fd")),
        o = (e("6557"), getApp()),
        s = {
          name: "picTxt",
          props: { dataConfig: { type: Object, default: function () {} } },
          components: { "jyf-parser": n.default },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t && ((this.description = t.richText.val), (this.isShow = t.isShow.val));
              },
            },
          },
          data: function () {
            return {
              description: "",
              name: this.$options.name,
              isIframe: o.globalData.isIframe,
              isShow: !0,
              tagStyle: { img: "width:100%;display:block;", table: "width:100%", video: "width: 100% !important;" },
            };
          },
          created: function () {},
          mounted: function () {},
          methods: {},
        };
      i.default = s;
    },
    a082: function (t, i, e) {
      "use strict";
      e("7a82"),
        Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0),
        e("a9e3"),
        e("caad6"),
        e("2532");
      var a = {
        name: "skeleton",
        props: {
          bgcolor: { type: String, value: "#FFF" },
          selector: { type: String, value: "skeleton" },
          loading: { type: String, value: "chiaroscuro" },
          show: { type: Boolean, value: !1 },
          isNodes: { type: Number, value: !1 },
        },
        data: function () {
          return {
            loadingAni: ["spin", "chiaroscuro"],
            systemInfo: {},
            skeletonRectLists: [
              { bottom: 35, dataset: {}, height: 25, id: "", left: 15, right: 65, top: 10, width: 50 },
              { bottom: 72, dataset: {}, height: 30, id: "", left: 15, right: 360, top: 42, width: 345 },
              { bottom: 232, dataset: {}, height: 145, id: "", left: 15, right: 360, top: 87, width: 345 },
              { bottom: 436, dataset: {}, height: 30, id: "", left: 15, right: 360, top: 406, width: 345 },
              { bottom: 596, dataset: {}, height: 150, id: "", left: 15, right: 183, top: 446, width: 168 },
              { bottom: 519, dataset: {}, height: 73, id: "", left: 188, right: 360, top: 446, width: 172 },
              { bottom: 596, dataset: {}, height: 73, id: "", left: 188, right: 360, top: 523, width: 172 },
              { bottom: 793, dataset: {}, height: 177, id: "", left: 15, right: 360, top: 616, width: 345 },
              { bottom: 1680, dataset: {}, height: 206, id: "", left: 15, right: 360, top: 1474, width: 345 },
            ],
            skeletonCircleLists: [
              { id: "", dataset: {}, left: 27, right: 72, top: 245, bottom: 270, width: 45, height: 45 },
              { id: "", dataset: {}, left: 96, right: 141, top: 245, bottom: 270, width: 45, height: 45 },
              { id: "", dataset: {}, left: 165, right: 210, top: 245, bottom: 270, width: 45, height: 45 },
              { id: "", dataset: {}, left: 234, right: 279, top: 245, bottom: 270, width: 45, height: 45 },
              { id: "", dataset: {}, left: 303, right: 348, top: 245, bottom: 270, width: 45, height: 45 },
              { id: "", dataset: {}, left: 27, right: 72, top: 327, bottom: 352, width: 45, height: 45 },
              { id: "", dataset: {}, left: 96, right: 141, top: 327, bottom: 352, width: 45, height: 45 },
              { id: "", dataset: {}, left: 165, right: 210, top: 327, bottom: 352, width: 45, height: 45 },
              { id: "", dataset: {}, left: 234, right: 279, top: 327, bottom: 352, width: 45, height: 45 },
              { id: "", dataset: {}, left: 303, right: 348, top: 327, bottom: 352, width: 45, height: 45 },
            ],
          };
        },
        watch: { isNodes: function (t) {} },
        mounted: function () {
          this.attachedAction();
        },
        methods: {
          attachedAction: function () {
            var t = uni.getSystemInfoSync();
            (this.systemInfo = { width: t.windowWidth, height: t.windowHeight }),
              (this.loading = this.loadingAni.includes(this.loading) ? this.loading : "spin");
          },
        },
      };
      i.default = a;
    },
    a23d: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.live[data-v-e35472f2]{background-color:#fff;margin:%?20?% %?30?% 0 %?30?%;border-radius:%?12?%;padding-bottom:%?15?%}.live-wrapper[data-v-e35472f2]{position:relative;width:100%;overflow:hidden;border-radius:%?16?%;background-color:#fff}.live-wrapper uni-image[data-v-e35472f2]{width:100%;height:%?400?%}.live-wrapper .live-top[data-v-e35472f2]{z-index:20;position:absolute;left:0;top:0;display:flex;align-items:center;justify-content:center;color:#fff;width:%?180?%;height:%?54?%;border-radius:%?0?% 0 %?18?% 0}.live-wrapper .live-top uni-image[data-v-e35472f2]{width:%?30?%;height:%?30?%;margin-right:%?10?%;display:block}.live-wrapper .live-title[data-v-e35472f2]{position:absolute;left:0;bottom:%?6?%;width:100%;height:%?70?%;line-height:%?70?%;text-align:center;font-size:%?30?%;color:#fff;background:rgba(0,0,0,.35)}.live-wrapper.mores[data-v-e35472f2]{width:100%}.live-wrapper.mores .item[data-v-e35472f2]{position:relative;width:%?320?%;display:inline-block;border-radius:%?16?%;overflow:hidden;margin-right:%?20?%}.live-wrapper.mores .item uni-image[data-v-e35472f2]{width:%?320?%;height:%?180?%;border-radius:%?16?%}.live-wrapper.mores .item .live-title[data-v-e35472f2]{height:%?40?%;line-height:%?40?%;text-align:center;font-size:%?22?%}.live-wrapper.mores .item .live-top[data-v-e35472f2]{width:%?120?%;height:%?36?%;font-size:%?22?%}.live-wrapper.mores .item .live-top uni-image[data-v-e35472f2]{width:%?20?%;height:%?20?%}.live-wrapper-a[data-v-e35472f2]{display:flex;width:%?690?%;padding:%?0?% %?30?% 0;overflow-x:scroll}.live-wrapper-a .live-item-a[data-v-e35472f2]{width:%?280?%;background:#fff;margin-right:%?20?%;border-radius:%?16?%}.live-wrapper-a .live-item-a[data-v-e35472f2]:last-child{margin-right:%?20?%}.live-wrapper-a .live-item-a .img-box[data-v-e35472f2]{position:relative;width:%?280?%;height:%?180?%}.live-wrapper-a .live-item-a .img-box uni-image[data-v-e35472f2]{width:100%;height:100%;border-radius:%?12?%;object-fit:cover}.live-wrapper-a .live-item-a .info[data-v-e35472f2]{flex:1;display:flex;flex-direction:column;justify-content:space-between;padding:%?15?% %?0?%}.live-wrapper-a .live-item-a .info .title[data-v-e35472f2]{font-size:%?28?%;color:#333}.live-wrapper-a .live-item-a .info .people[data-v-e35472f2]{display:flex;align-items:center;color:#999;font-size:%?24?%;margin-top:%?10?%}.live-wrapper-a .live-item-a .info .people uni-image[data-v-e35472f2]{width:%?32?%;height:%?32?%;border-radius:50%;margin-right:%?10?%}.live-wrapper-a .live-item-a .info .goods-wrapper[data-v-e35472f2]{display:flex}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item[data-v-e35472f2]{position:relative;width:%?96?%;height:%?96?%;margin-right:%?20?%;overflow:hidden;border-radius:%?16?%}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item[data-v-e35472f2]:last-child{margin-right:0}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item uni-image[data-v-e35472f2]{width:100%;height:100%;border-radius:%?16?%}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item .bg[data-v-e35472f2]{position:absolute;left:0;top:0;width:100%;height:100%;border-radius:%?16?%;background:rgba(0,0,0,.3)}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item uni-text[data-v-e35472f2]{position:absolute;left:0;bottom:0;width:100%;height:%?60?%;line-height:%?70?%;color:#fff;background:linear-gradient(180deg,transparent,rgba(0,0,0,.75))}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item .num[data-v-e35472f2]{display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);color:#fff;font-size:%?28?%}.live-wrapper-a .live-item-a .info .empty-goods[data-v-e35472f2]{width:%?96?%;height:%?96?%;border-radius:%?6?%;background-color:#b2b2b2;color:#fff;font-size:%?20?%;text-align:center;line-height:%?96?%}.live-wrapper-a.live-wrapper-c .live-item-a[data-v-e35472f2]{display:flex;flex-direction:column}.live-wrapper-a.live-wrapper-c .live-item-a .img-box[data-v-e35472f2]{width:100%;border-radius:8px 8px 0 0}.live-wrapper-a.live-wrapper-c .live-item-a .info[data-v-e35472f2]{display:flex;justify-content:space-between;align-items:center;flex-direction:row}.live-wrapper-a.live-wrapper-c .live-item-a .info .left[data-v-e35472f2]{width:69%}.live-wrapper-a.live-wrapper-c .live-item-a .info .goods-wrapper[data-v-e35472f2]{flex:1}.text[data-v-e35472f2]{display:flex;align-items:flex-end}.text .name[data-v-e35472f2]{font-size:%?32?%;font-weight:700}.text .txt-btn[data-v-e35472f2]{font-size:%?24?%;display:flex;align-items:flex-end;margin-left:%?12?%;color:#999;margin-bottom:%?4?%}.live-wrapper-b[data-v-e35472f2]{padding:%?0?% %?20?% 0;display:flex;justify-content:space-between;flex-wrap:wrap}.live-wrapper-b .live-item-b[data-v-e35472f2]{width:%?345?%;background-color:#fff;border-radius:%?16?%;overflow:hidden;margin-bottom:%?20?%;overflow:hidden}.live-wrapper-b .live-item-b .img-box[data-v-e35472f2]{position:relative}.live-wrapper-b .live-item-b .img-box uni-image[data-v-e35472f2]{width:100%;height:%?274?%}.live-wrapper-b .live-item-b .info[data-v-e35472f2]{display:flex;flex-direction:column;padding:%?20?%}.live-wrapper-b .live-item-b .info .title[data-v-e35472f2]{font-size:%?30?%;color:#333}.live-wrapper-b .live-item-b .info .people[data-v-e35472f2]{display:flex;margin-top:%?10?%;color:#999}.live-wrapper-b .live-item-b .info .people uni-image[data-v-e35472f2]{width:%?36?%;height:%?36?%;border-radius:50%;margin-right:%?10?%}.label[data-v-e35472f2]{display:flex;align-items:center;justify-content:center;position:absolute;left:%?10?%;top:%?10?%;border-radius:%?22?% 0 %?22?% %?22?%;font-size:%?24?%;color:#fff;z-index:1}.label uni-image[data-v-e35472f2]{margin-right:%?10?%}.label uni-text[data-v-e35472f2]{font-size:%?22?%}.bgred[data-v-e35472f2]{width:%?132?%;height:%?38?%;background:linear-gradient(270deg,#f5742f,#ff1717)}.bggary[data-v-e35472f2]{width:%?108?%;height:%?38?%;background:linear-gradient(270deg,#999,#666);line-height:%?38?%}.bggary .iconfont[data-v-e35472f2]{margin-right:%?8?%;font-size:%?24?%;color:#fff}.bgblue[data-v-e35472f2]{display:flex;align-items:center;position:absolute;left:%?4?%;top:%?10?%;border-radius:%?22?% 0 %?22?% %?22?%;font-size:%?24?%;color:#fff;z-index:1;width:%?220?%;height:%?38?%;background:rgba(0,0,0,.36);overflow:hidden}.bgblue .txt[data-v-e35472f2]{position:relative;left:%?-5?%;display:flex;align-items:center;justify-content:center;width:%?80?%;height:100%;text-align:center;background:linear-gradient(270deg,#2fa1f5,#0076ff)}.title-box[data-v-e35472f2]{display:flex;justify-content:space-between;align-items:center;padding:%?20?% %?20?%;font-size:%?32?%}.title-box .title[data-v-e35472f2]{font-size:%?34?%;font-weight:700}.title-box .more[data-v-e35472f2]{display:flex;align-items:center;justify-content:center;font-size:%?24?%;color:#999}.title-box .more .iconfont[data-v-e35472f2]{margin-left:%?9?%;font-size:%?26?%;vertical-align:%?3?%}.empty-img[data-v-e35472f2]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.empty-img .iconfont[data-v-e35472f2]{font-size:%?50?%}',
          "",
        ]),
        (t.exports = i);
    },
    a3d2: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiperBg[data-v-547ee792]{width:100%}.empty-img[data-v-547ee792]{width:%?690?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.empty-img .iconfont[data-v-547ee792]{font-size:%?50?%}.boutique[data-v-547ee792]{margin:0 %?30?%}.boutique uni-swiper[data-v-547ee792]{width:100%;position:relative}.boutique uni-image[data-v-547ee792]{width:100%;border-radius:%?10?%}.off[data-v-547ee792]{padding:%?0?% %?20?%;background-color:#fff}.boutique .wx-swiper-dot[data-v-547ee792]{width:%?7?%;height:%?7?%;border-radius:50%}.boutique .wx-swiper-dot-active[data-v-547ee792]{width:%?20?%;border-radius:%?5?%}.boutique .wx-swiper-dots.wx-swiper-dots-horizontal[data-v-547ee792]{margin-bottom:%?-8?%}',
          "",
        ]),
        (t.exports = i);
    },
    a4db: function (t, i, e) {
      var a = e("c262");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("80f9df6c", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    a990: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("6f193"),
        n = e("ab24");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("0164");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "182c8791", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    aa2c: function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = e("6557"),
        n = getApp(),
        o = {
          name: "adsRecommend",
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t && ((this.recommendList = t.imgList.list), (this.isShow = t.isShow.val));
              },
            },
          },
          data: function () {
            return { recommendList: [], name: this.$options.name, isIframe: n.globalData.isIframe, isShow: !0 };
          },
          created: function () {},
          mounted: function () {},
          methods: {
            goDetail: function (t) {
              (0, a.goPage)(t).then(function (i) {
                uni.navigateTo({ url: t.info[0].value });
              });
            },
          },
        };
      i.default = o;
    },
    aa3c: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("141d"),
        n = e("2213");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("5be0");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "e35472f2", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    aaa9: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.titles[data-v-b482be3e]{font-size:%?35?%;color:#282828;text-align:center;width:100%}.title[data-v-b482be3e]{padding:%?30?% 0}.title .text[data-v-b482be3e]{display:flex}.title .text .name[data-v-b482be3e]{font-size:%?32?%;font-weight:700}.title .text .txt-btn[data-v-b482be3e]{display:flex;align-items:flex-end;margin-bottom:%?6?%;margin-left:%?12?%}.index-wrapper[data-v-b482be3e]{background-color:#fff;margin:%?20?% %?30?%;border-radius:%?12?%}.off[data-v-b482be3e]{border-radius:%?12?% %?12?% 0 0!important;margin-bottom:0!important}',
          "",
        ]),
        (t.exports = i);
    },
    ab24: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("e49e"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    ac22: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { style: t.colorStyle },
            [
              t.isIframe && !t.couponList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "default" },
                    [e("v-uni-text", [t._v(t._s(t.$t("优惠券，暂无数据")))])],
                    1
                  )
                : t._e(),
              t.couponList.length && t.isShow && !t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "index-wrapper coupon" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper skeleton-rect" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.$t("优惠券")))]),
                              e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.$t("领取今日好券")))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            {
                              staticClass: "more",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)),
                                    t.gopage("/pages/users/user_get_coupon/index");
                                },
                              },
                            },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "conter skeleton-rect" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.couponList, function (i, a) {
                              return e(
                                "v-uni-view",
                                { key: a, staticClass: "itemCon" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "item acea-row row-between-wrapper", class: i.is_use ? "on" : "no" },
                                    [
                                      e("v-uni-view", { staticClass: "iconfont icon-youhuiquantoumingbeijing" }),
                                      e("v-uni-view", { staticClass: "cir" }),
                                      e("v-uni-view", { staticClass: "cir2" }),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "text" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "money line1" },
                                            [
                                              t._v(t._s(t.$t("￥"))),
                                              e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.coupon_price))]),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "man line1" }, [
                                            t._v(t._s(t.$t("满")) + t._s(i.use_min_price) + t._s(t.$t("可用"))),
                                          ]),
                                        ],
                                        1
                                      ),
                                      !0 === i.is_use
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "bnt" },
                                            [e("v-uni-text", [t._v(t._s(t.$t("已领取")))])],
                                            1
                                          )
                                        : !1 === i.is_use
                                        ? e(
                                            "v-uni-view",
                                            {
                                              staticClass: "bnt",
                                              on: {
                                                click: function (e) {
                                                  (arguments[0] = e = t.$handleEvent(e)), t.receiveCoupon(i);
                                                },
                                              },
                                            },
                                            [e("v-uni-text", [t._v(t._s(t.$t("领取")))])],
                                            1
                                          )
                                        : 2 === i.is_use
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "bnt" },
                                            [e("v-uni-text", [t._v(t._s(t.$t("已过期")))])],
                                            1
                                          )
                                        : t._e(),
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
                  )
                : t._e(),
              t.couponList.length && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "index-wrapper coupon" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.$t("优惠券")))]),
                              e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.$t("领取今日好券")))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            {
                              staticClass: "more",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)),
                                    t.gopage("/pages/users/user_get_coupon/index");
                                },
                              },
                            },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "conter" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.couponList, function (i, a) {
                              return e(
                                "v-uni-view",
                                { key: a, staticClass: "itemCon" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "item acea-row row-between-wrapper", class: i.is_use ? "on" : "no" },
                                    [
                                      e("v-uni-view", { staticClass: "iconfont icon-youhuiquantoumingbeijing" }),
                                      e("v-uni-view", { staticClass: "cir" }),
                                      e("v-uni-view", { staticClass: "cir2" }),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "text" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "money line1" },
                                            [
                                              t._v(t._s(t.$t("￥"))),
                                              e("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.coupon_price))]),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "man line1" }, [
                                            t._v(t._s(t.$t("满")) + t._s(i.use_min_price) + t._s(t.$t("可用"))),
                                          ]),
                                        ],
                                        1
                                      ),
                                      !0 === i.is_use
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "bnt" },
                                            [e("v-uni-text", [t._v(t._s(t.$t("已领取")))])],
                                            1
                                          )
                                        : !1 === i.is_use
                                        ? e(
                                            "v-uni-view",
                                            {
                                              staticClass: "bnt",
                                              on: {
                                                click: function (e) {
                                                  (arguments[0] = e = t.$handleEvent(e)), t.receiveCoupon(i);
                                                },
                                              },
                                            },
                                            [e("v-uni-text", [t._v(t._s(t.$t("领取")))])],
                                            1
                                          )
                                        : 2 === i.is_use
                                        ? e(
                                            "v-uni-view",
                                            { staticClass: "bnt" },
                                            [e("v-uni-text", [t._v(t._s(t.$t("已过期")))])],
                                            1
                                          )
                                        : t._e(),
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
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    ae21: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("a082"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    aef3: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.borderShow[data-v-22156dd1]{position:fixed}.borderShow .uni-tabbar[data-v-22156dd1]::after{content:" ";position:absolute;left:0;top:0;width:100%;height:100%;border:1px dashed #007aff;box-sizing:border-box}.uni-tabbar[data-v-22156dd1]{position:fixed;bottom:0;left:0;z-index:999;width:100%;padding:%?6?% 0;padding-bottom:calc(%?6?% + constant(safe-area-inset-bottom));padding-bottom:calc(%?6?% + env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-around}.uni-tabbar .uni-tabbar_item[data-v-22156dd1]{width:100%;font-size:%?20?%;text-align:center}.uni-tabbar .uni-tabbar_icon[data-v-22156dd1]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.uni-tabbar .uni-tabbar_icon uni-image[data-v-22156dd1]{width:100%;height:100%}.uni-tabbar .uni-tabbar_label[data-v-22156dd1]{font-size:%?24?%;color:#282828}.uni-tabbar .uni-tabbar_label.active[data-v-22156dd1]{color:var(--view-theme)}',
          "",
        ]),
        (t.exports = i);
    },
    af29: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("e015"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    af69: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this.$createElement,
            i = this._self._c || t;
          return this.isDiy && this.loading
            ? i("diy", { ref: "diy" })
            : !this.isDiy && this.loading
            ? i("visualization", { ref: "vis" })
            : this._e();
        },
        n = [];
    },
    afe8: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("615e"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    aff8: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.goodList .item[data-v-7e142dc2]{position:relative;padding-left:%?30?%}.goodList .item .pictrue[data-v-7e142dc2]{width:%?180?%;height:%?180?%;position:relative}.goodList .item .pictrue uni-image[data-v-7e142dc2]{width:100%;height:100%;border-radius:%?20?%}.goodList .item .pictrue .numPic[data-v-7e142dc2]{position:absolute;left:%?7?%;top:%?7?%;width:%?40?%;height:%?40?%;border-radius:50%}.goodList .item .underline[data-v-7e142dc2]{padding:%?30?% %?30?% %?30?% 0;border-bottom:1px solid #f5f5f5}.goodList .item:nth-last-child(1) .underline[data-v-7e142dc2]{border-bottom:0}.goodList .item .text[data-v-7e142dc2]{font-size:%?30?%;color:#222;width:%?489?%}.goodList .item .text .money[data-v-7e142dc2]{font-size:%?26?%;font-weight:700;margin-top:%?50?%}.goodList .item .text .money .num[data-v-7e142dc2]{font-size:%?34?%}.goodList .item .text .vip-money[data-v-7e142dc2]{font-size:%?24?%;color:#282828;font-weight:700;margin-top:%?15?%}.goodList .item .text .vip-money uni-image[data-v-7e142dc2]{width:%?64?%;height:%?26?%;margin-right:%?8?%;margin-left:%?8?%}.goodList .item .text .vip-money .num[data-v-7e142dc2]{font-size:%?22?%;color:#aaa;font-weight:400;margin-top:%?-2?%;white-space:nowrap}.goodList .item .text .vip-money .num uni-text[data-v-7e142dc2]{white-space:nowrap}.goodList .item .text .vip-money .num ~ .num[data-v-7e142dc2]{margin-left:%?22?%}.goodList .item .iconfont[data-v-7e142dc2]{position:absolute;right:%?30?%;width:%?50?%;height:%?50?%;border-radius:50%;font-size:%?30?%;bottom:%?38?%}',
          "",
        ]),
        (t.exports = i);
    },
    b3a8: function (t, i, e) {
      "use strict";
      var a = e("6bff"),
        n = e.n(a);
      n.a;
    },
    b54d: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.empty-img[data-v-d8c59760]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.empty-img .iconfont[data-v-d8c59760]{font-size:%?50?%}.goodList .item[data-v-d8c59760]{position:relative;padding-left:%?30?%;box-shadow:2px 1px 6px 1px rgba(0,0,0,.03)}.goodList .item .pictrue[data-v-d8c59760]{width:%?180?%;height:%?180?%;position:relative}.goodList .item .pictrue uni-image[data-v-d8c59760]{width:100%;height:100%;border-radius:%?20?%}.goodList .item .pictrue .numPic[data-v-d8c59760]{position:absolute;left:%?7?%;top:%?7?%;width:%?40?%;height:%?40?%;border-radius:50%}.goodList .item .underline[data-v-d8c59760]{padding:%?30?% %?30?% %?30?% 0;border-bottom:1px solid #f5f5f5}.goodList .item:nth-last-child(1) .underline[data-v-d8c59760]{border-bottom:0}.goodList .item .text[data-v-d8c59760]{font-size:%?30?%;color:#222;width:%?489?%}.goodList .item .text .money[data-v-d8c59760]{font-size:%?26?%;font-weight:700;margin-top:%?50?%}.goodList .item .text .money .num[data-v-d8c59760]{font-size:%?34?%}.goodList .item .text .vip-money[data-v-d8c59760]{font-size:%?24?%;color:#282828;font-weight:700;margin-top:%?15?%}.goodList .item .text .vip-money .jvip[data-v-d8c59760]{width:%?46?%;height:%?22?%}.goodList .item .text .vip-money uni-image[data-v-d8c59760]{width:%?64?%;height:%?26?%;margin-right:%?8?%;margin-left:%?8?%}.goodList .item .text .vip-money .num[data-v-d8c59760]{font-size:%?22?%;color:#aaa;font-weight:400;margin-top:%?-2?%}.goodList .item .text .vip-money .num ~ .num[data-v-d8c59760]{margin-left:%?22?%}.goodList .item .iconfont[data-v-d8c59760]{position:absolute;right:%?30?%;width:%?50?%;height:%?50?%;border-radius:50%;font-size:%?30?%;bottom:%?38?%}',
          "",
        ]),
        (t.exports = i);
    },
    b583: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("7e81"),
        n = e("cd85");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("2365");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "1eeffcd8", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    b9bf: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("cca1"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    be23: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("5ca0"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    be2e: function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = e("6557"),
        n = getApp(),
        o = {
          name: "menus",
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t && ((this.menus = t.imgList.list), (this.isShow = t.isShow.val));
              },
            },
          },
          data: function () {
            return { menus: [], name: this.$options.name, isIframe: !1, isShow: !0 };
          },
          created: function () {
            this.isIframe = n.globalData.isIframe;
          },
          mounted: function () {},
          methods: {
            menusTap: function (t) {
              var i = this;
              (0, a.goPage)().then(function (e) {
                i.$util.JumpPath(t);
              });
            },
          },
        };
      i.default = o;
    },
    bee5: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("2111"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    c0f5: function (t, i, e) {
      "use strict";
      var a = e("4c36"),
        n = e.n(a);
      n.a;
    },
    c17f: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("af69"),
        n = e("721c");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "505f1cd8", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    c19c: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "swiperBg" },
            [
              t.isShow && t.bastBanner.length && !t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "boutique", class: { off: "off" === t.sty } },
                    [
                      e(
                        "v-uni-swiper",
                        {
                          style: "height:" + t.imageH + "rpx;",
                          attrs: {
                            autoplay: "true",
                            "indicator-dots": "true",
                            circular: t.circular,
                            interval: t.interval,
                            duration: t.duration,
                            "indicator-color": "rgba(255,255,255,0.6)",
                            "indicator-active-color": "#fff",
                          },
                        },
                        [
                          t._l(t.bastBanner, function (i, a) {
                            return [
                              e(
                                "v-uni-swiper-item",
                                { key: a },
                                [
                                  e(
                                    "v-uni-view",
                                    {
                                      staticStyle: { width: "100%", height: "100%" },
                                      attrs: { "hover-class": "none" },
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                        },
                                      },
                                    },
                                    [
                                      e("v-uni-image", {
                                        staticClass: "slide-image",
                                        style: "height:" + t.imageH + "rpx;",
                                        attrs: { src: i.img },
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
              t.bastBanner.length && t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "boutique", style: "height:" + t.imageH + "rpx;" },
                    [
                      e(
                        "v-uni-swiper",
                        {
                          style: "height:" + t.imageH + "rpx;",
                          attrs: {
                            autoplay: "true",
                            "indicator-dots": "true",
                            circular: t.circular,
                            interval: t.interval,
                            duration: t.duration,
                            "indicator-color": "rgba(255,255,255,0.6)",
                            "indicator-active-color": "#fff",
                          },
                        },
                        [
                          t._l(t.bastBanner, function (i, a) {
                            return [
                              e(
                                "v-uni-swiper-item",
                                { key: a },
                                [
                                  e(
                                    "v-uni-view",
                                    {
                                      staticStyle: { width: "100%", height: "100%" },
                                      attrs: { "hover-class": "none" },
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                        },
                                      },
                                    },
                                    [
                                      e("v-uni-image", {
                                        staticClass: "slide-image",
                                        style: "height:" + t.imageH + "rpx;",
                                        attrs: { src: i.img },
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
              t.isIframe && !t.bastBanner.length
                ? [e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("暂无图片，请上传图片")))])]
                : t._e(),
            ],
            2
          );
        },
        n = [];
    },
    c262: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index-wrapper[data-v-298104d4]{background-color:#fff;margin:%?20?% %?30?% %?5?% %?30?%;border-radius:%?12?%}.text[data-v-298104d4]{display:flex}.text .name[data-v-298104d4]{font-size:%?34?%;font-weight:700}.text .txt-btn[data-v-298104d4]{display:flex;align-items:flex-end;margin-bottom:%?8?%;margin-left:%?12?%}.empty-img[data-v-298104d4]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.empty-img .iconfont[data-v-298104d4]{font-size:%?50?%}',
          "",
        ]),
        (t.exports = i);
    },
    c3bf: function (t, i, e) {
      var a = e("5e4d");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("35f57722", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c40a: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "index-wrapper", class: { off: "off" === t.sty } },
            [
              t.isIframe && !t.titleConfig.length
                ? e("v-uni-view", { staticClass: "titles" }, [t._v(t._s(t.$t("暂无标题")))])
                : t._e(),
              t.isShow && t.titleConfig.length && !t.isIframe
                ? e(
                    "v-uni-view",
                    { staticClass: "title acea-row row-between-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "text" },
                        [
                          e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.titleConfig[0].val))]),
                          e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.$t("诚意推荐品质商品")))]),
                        ],
                        1
                      ),
                      e(
                        "v-uni-navigator",
                        { staticClass: "more", attrs: { "hover-class": "none", url: t.titleConfig[1].val } },
                        [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              t.isIframe && t.titleConfig.length
                ? e(
                    "v-uni-view",
                    { staticClass: "title acea-row row-between-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "text" },
                        [
                          e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.titleConfig[0].val))]),
                          e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.$t("诚意推荐品质商品")))]),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "more" },
                        [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
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
    c5a1: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.borderShow[data-v-2dbd6974]{position:fixed}.borderShow .borderService[data-v-2dbd6974]::after{content:" ";position:absolute;left:0;top:0;width:100%;height:100%;border:1px dashed #007aff;box-sizing:border-box}.customerService[data-v-2dbd6974], .customerService-sty[data-v-2dbd6974]{position:fixed!important;right:%?20?%;z-index:40}.customerService .pictrue[data-v-2dbd6974], .customerService-sty .pictrue[data-v-2dbd6974]{width:%?86?%;height:%?86?%;text-align:center;line-height:%?86?%;color:#fff;border-radius:50%;background-color:#ccc}.customerService .pictrue uni-image[data-v-2dbd6974], .customerService-sty .pictrue uni-image[data-v-2dbd6974]{width:100%;height:100%;border-radius:50%}.customerService-sty[data-v-2dbd6974]{background-color:transparent!important}',
          "",
        ]),
        (t.exports = i);
    },
    c5cf: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("54ff"),
        n = e("3cd5");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("4639");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "36fbbaf4", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    c65f: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("cbd1"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    c7a5: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("8ab7"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    c7b3: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { easyLoadimage: e("cad3").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            {},
            [
              e(
                "v-uni-view",
                { staticClass: "index-wrapper", style: t.colorStyle },
                [
                  t.isShow && t.firstList.length
                    ? e(
                        "v-uni-view",
                        { staticClass: "wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "title acea-row row-between-wrapper" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "name line1" },
                                    [
                                      e("v-uni-text", { staticClass: "iconfont icon-shoufaxinpin" }),
                                      t._v(t._s(t.$t(t.titleInfo[0].val))),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "line1 txt-btn" }, [
                                    t._v(t._s(t.$t(t.titleInfo[1].val))),
                                  ]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "more",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                                1
                              ),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "newProducts" },
                            [
                              e(
                                "v-uni-scroll-view",
                                {
                                  staticClass: "scroll-view_x",
                                  staticStyle: { width: "auto", overflow: "hidden" },
                                  attrs: { "scroll-x": !0 },
                                },
                                [
                                  t._l(t.firstList, function (i, a) {
                                    return [
                                      e(
                                        "v-uni-view",
                                        {
                                          key: a + "_0",
                                          staticClass: "item",
                                          on: {
                                            click: function (e) {
                                              (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                            },
                                          },
                                        },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "img-box" },
                                            [
                                              e("easy-loadimage", {
                                                attrs: { mode: "widthFix", "image-src": i.image },
                                              }),
                                              i.activity && "1" === i.activity.type && t.$permission("seckill")
                                                ? e(
                                                    "v-uni-text",
                                                    { staticClass: "pictrue_log_medium pictrue_log_class" },
                                                    [t._v(t._s(t.$t("秒杀")))]
                                                  )
                                                : t._e(),
                                              i.activity && "2" === i.activity.type
                                                ? e(
                                                    "v-uni-text",
                                                    { staticClass: "pictrue_log_medium pictrue_log_class" },
                                                    [t._v(t._s(t.$t("砍价")))]
                                                  )
                                                : t._e(),
                                              i.activity && "3" === i.activity.type
                                                ? e(
                                                    "v-uni-text",
                                                    { staticClass: "pictrue_log_medium pictrue_log_class" },
                                                    [t._v(t._s(t.$t("拼团")))]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "pro-info line1" }, [
                                            t._v(t._s(i.store_name)),
                                          ]),
                                          e(
                                            "v-uni-view",
                                            { staticClass: "money font-color" },
                                            [
                                              e("v-uni-text", { staticClass: "rmb" }, [t._v(t._s(t.$t("￥")))]),
                                              t._v(t._s(i.price)),
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
                  !t.isShow && t.isIframe && t.firstList.length
                    ? e(
                        "v-uni-view",
                        { staticClass: "wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "title acea-row row-between-wrapper" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "name line1" },
                                    [
                                      e("v-uni-text", { staticClass: "iconfont icon-shoufaxinpin" }),
                                      t._v(t._s(t.titleInfo[0].val)),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "more",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                                1
                              ),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "newProducts" },
                            [
                              e(
                                "v-uni-scroll-view",
                                {
                                  staticClass: "scroll-view_x",
                                  staticStyle: { width: "auto", overflow: "hidden" },
                                  attrs: { "scroll-x": !0 },
                                },
                                [
                                  t._l(t.firstList, function (i, a) {
                                    return [
                                      e(
                                        "v-uni-view",
                                        {
                                          key: a + "_0",
                                          staticClass: "item",
                                          on: {
                                            click: function (e) {
                                              (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                            },
                                          },
                                        },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "img-box" },
                                            [
                                              e("v-uni-image", { attrs: { src: i.image } }),
                                              i.activity && "1" === i.activity.type && t.$permission("seckill")
                                                ? e(
                                                    "v-uni-text",
                                                    { staticClass: "pictrue_log_medium pictrue_log_class" },
                                                    [t._v(t._s(t.$t("秒杀")))]
                                                  )
                                                : t._e(),
                                              i.activity && "2" === i.activity.type
                                                ? e(
                                                    "v-uni-text",
                                                    { staticClass: "pictrue_log_medium pictrue_log_class" },
                                                    [t._v(t._s(t.$t("砍价")))]
                                                  )
                                                : t._e(),
                                              i.activity && "3" === i.activity.type
                                                ? e(
                                                    "v-uni-text",
                                                    { staticClass: "pictrue_log_medium pictrue_log_class" },
                                                    [t._v(t._s(t.$t("拼团")))]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "pro-info line1" }, [
                                            t._v(t._s(i.store_name)),
                                          ]),
                                          e(
                                            "v-uni-view",
                                            { staticClass: "money font-color" },
                                            [
                                              e("v-uni-text", { staticClass: "rmb" }, [t._v(t._s(t.$t("￥")))]),
                                              t._v(t._s(i.price)),
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
                  t.isIframe && !t.firstList.length
                    ? e(
                        "v-uni-view",
                        { staticClass: "wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "title acea-row row-between-wrapper" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "name line1" },
                                    [
                                      e("v-uni-text", { staticClass: "iconfont icon-shoufaxinpin" }),
                                      t._v(t._s(t.titleInfo[0].val)),
                                    ],
                                    1
                                  ),
                                  e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                                ],
                                1
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "more",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.gopage(t.titleInfo[2].val);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                                1
                              ),
                            ],
                            1
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "newProducts" },
                            [e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("首发新品，暂无数据")))])],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    c7c0: function (t, i, e) {
      "use strict";
      var a = e("1ab8"),
        n = e.n(a);
      n.a;
    },
    c8a1: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("7031"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    c8c6: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.productList[data-v-4ca18626]{background-color:#fff;margin:%?20?% %?30?%;border-radius:%?12?%}.title[data-v-4ca18626]{display:flex;margin:0;width:100%;margin:0 %?20?%}.title .text[data-v-4ca18626]{display:flex}.title .text .name[data-v-4ca18626]{font-size:%?34?%;font-weight:700}.title .text .txt-btn[data-v-4ca18626]{display:flex;align-items:flex-end;margin-bottom:%?8?%;margin-left:%?12?%}.productList .item[data-v-4ca18626]{width:100%;padding:%?25?% 0;background-color:#fff;border-radius:%?10?%;display:flex}.productList .item .pictrue[data-v-4ca18626]{position:relative;width:%?180?%;height:%?180?%}.productList .item .pictrue uni-image[data-v-4ca18626]{width:100%;height:100%;border-radius:%?10?%}.productList .item .pictrue[data-v-4ca18626] ,\n.productList .item .pictrue[data-v-4ca18626] uni-image,\n.productList .item .pictrue[data-v-4ca18626] .easy-loadimage,\n.productList .item .pictrue[data-v-4ca18626] uni-image{width:%?180?%;height:%?180?%;border-radius:%?10?%}.productList .item[data-v-4ca18626]:nth-child(even){border-top:%?1?% solid #eee;border-bottom:%?1?% solid #eee}.productList .item .text[data-v-4ca18626]{width:%?460?%;padding:%?0?% %?17?% %?0?% %?17?%;font-size:%?30?%;color:#222;display:flex;flex-direction:column;justify-content:space-between}.productList .item .text .name[data-v-4ca18626]{font-size:%?28?%}.productList .item .text .type[data-v-4ca18626]{display:flex}.productList .item .text .type .type-sty[data-v-4ca18626]{padding:0 %?5?%;border:1px solid var(--view-theme);color:var(--view-theme);font-size:%?24?%;border-radius:%?4?%}.productList .item .text .money[data-v-4ca18626]{font-size:%?26?%;font-weight:700}.productList .item .text .money .num[data-v-4ca18626]{font-size:%?34?%;color:var(--view-priceColor)}.productList .item .text .vip[data-v-4ca18626]{font-size:%?22?%;color:var(--view-priceColor);margin-top:%?7?%;display:flex;align-items:center}.productList .item .text .vip .vip-money[data-v-4ca18626]{font-size:%?24?%;color:#282828;font-weight:700;display:flex;align-items:center}.productList .item .text .vip .vip-money uni-image[data-v-4ca18626]{width:%?64?%;height:%?26?%;margin-left:%?4?%;margin-top:%?4?%}.empty-img[data-v-4ca18626]{width:%?690?%;height:%?300?%;border-radius:%?10?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.empty-img .iconfont[data-v-4ca18626]{font-size:%?50?%}.font-color[data-v-4ca18626]{color:var(--view-priceColor)}.item-box[data-v-4ca18626]{margin:0 auto}',
          "",
        ]),
        (t.exports = i);
    },
    cbd0: function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("e9c4");
      var a = e("5743"),
        n = getApp().globalData,
        o = {
          name: "alive",
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.numConfig = t.numConfig.val),
                  (this.titleInfo = t.titleInfo.list),
                  (this.isShow = t.isShow.val),
                  this.getLiveList());
              },
            },
          },
          data: function () {
            return {
              isIframe: !1,
              liveList: [],
              numConfig: 0,
              limit: this.$config.LIMIT,
              name: this.$options.name,
              titleInfo: [],
              isShow: !0,
              custom_params: "",
            };
          },
          created: function () {
            this.isIframe = n.isIframe;
          },
          mounted: function () {
            this.custom_params = encodeURIComponent(JSON.stringify({ spid: this.$store.state.app.uid }));
          },
          methods: {
            getLiveList: function () {
              var t = this;
              (0, a.getLiveList)(1, this.numConfig <= this.limit ? this.numConfig : this.limit)
                .then(function (i) {
                  t.liveList = i.data;
                })
                .catch(function (t) {});
            },
          },
        };
      i.default = o;
    },
    cbd1: function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var n = e("5743"),
        o = e("6557"),
        s = a(e("19b6")),
        r = getApp(),
        c = {
          name: "tabBar",
          props: { pagePath: null, dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t && (this.isShow = t.isShow.val);
              },
            },
          },
          mixins: [s.default],
          data: function () {
            return {
              name: this.$options.name,
              page: "/pages/index/index",
              tabbar: this.$Cache.get("TAB_BAR") ? JSON.parse(this.$Cache.get("TAB_BAR")) : [],
              isShow: !0,
              isIframe: r.globalData.isIframe,
            };
          },
          mounted: function () {
            this.tabbar.length || this.getDiyData();
          },
          methods: {
            getDiyData: function () {
              var t = this;
              (0, n.getDiy)()
                .then(function (i) {
                  var e = i.data.tabBar.default.tabBarList.list;
                  t.$Cache.set("TAB_BAR", e), (t.tabbar = e);
                })
                .catch(function (t) {
                  uni.showToast({ title: t, icon: "none" });
                });
            },
            changeTab: function (t) {
              var i = this;
              (0, o.goPage)().then(function (e) {
                (i.page = t.link),
                  uni.switchTab({
                    url: i.page,
                    fail: function () {
                      uni.navigateTo({ url: i.page });
                    },
                  });
              });
            },
          },
        };
      i.default = c;
    },
    cc9d: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("2e53"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    cca1: function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var n = a(e("f3f3")),
        o = e("6557"),
        s = e("26cb"),
        r = e("2a39"),
        c = a(e("19b6")),
        l = getApp(),
        d = {
          name: "goodList",
          mixins: [c.default],
          props: { dataConfig: { type: Object, default: function () {} } },
          computed: (0, n.default)({}, (0, s.mapGetters)(["uid"])),
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.isShow = t.isShow.val),
                  (this.selectType = t.tabConfig.tabVal),
                  this.$set(this, "selectId", t.selectConfig.activeValue || ""),
                  this.$set(this, "type", t.selectSortConfig.activeValue),
                  (this.salesOrder = 1 == t.goodsSort.type ? "desc" : ""),
                  (this.newsOrder = 2 == t.goodsSort.type ? "news" : ""),
                  (this.ids = t.ids ? t.ids.join(",") : ""),
                  (this.numConfig = t.numConfig.val),
                  (this.titleInfo = t.titleInfo.list),
                  this.productslist());
              },
            },
          },
          created: function () {},
          mounted: function () {},
          data: function () {
            return {
              firstList: [],
              firstInfo: this.$t("多个优质商品最新上架"),
              name: this.$options.name,
              isShow: !0,
              isIframe: l.globalData.isIframe,
              selectType: 0,
              selectId: "",
              salesOrder: "",
              newsOrder: "",
              ids: "",
              page: 1,
              limit: this.$config.LIMIT,
              type: "",
              numConfig: 0,
              titleInfo: [],
            };
          },
          methods: {
            productslist: function () {
              var t = this,
                i = {};
              (i = t.selectType
                ? { page: t.page, limit: t.limit, type: t.type, ids: t.ids, selectType: t.selectType }
                : {
                    page: t.page,
                    limit: t.numConfig <= t.limit ? t.numConfig : t.limit,
                    type: t.type,
                    newsOrder: t.newsOrder,
                    salesOrder: t.salesOrder,
                    selectId: t.selectId,
                    selectType: t.selectType,
                  }),
                (0, r.getHomeProducts)(i)
                  .then(function (i) {
                    t.firstList = i.data.list;
                  })
                  .catch(function (i) {
                    t.$util.Tips({ title: i });
                  });
            },
            gopage: function (t) {
              var i = this;
              (0, o.goPage)().then(function (e) {
                i.$util.JumpPath(t);
              });
            },
            goDetail: function (t) {
              var i = this;
              (0, o.goPage)().then(function (e) {
                (0, o.goShopDetail)(t, i.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              });
            },
          },
        };
      i.default = d;
    },
    cd85: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("5f25"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    cd89: function (t, i, e) {
      var a = e("fa42");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("48967e38", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cf2d: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "new", style: t.colorStyle },
            [
              t.isIframe && !t.itemNew.length
                ? e("v-uni-view", { staticClass: "news default" }, [t._v(t._s(t.$t("暂无新闻，请上传新闻")))])
                : t._e(),
              t.isShow && t.itemNew.length
                ? e(
                    "v-uni-view",
                    { staticClass: "news acea-row row-between-wrapper skeleton-rect" },
                    [
                      e("v-uni-view", { staticClass: "pictrue" }, [e("v-uni-image", { attrs: { src: t.img } })], 1),
                      e(
                        "v-uni-view",
                        { staticClass: "swiperTxt" },
                        [
                          e(
                            "v-uni-swiper",
                            {
                              attrs: {
                                "indicator-dots": t.indicatorDots,
                                autoplay: t.autoplay,
                                interval: "2500",
                                duration: t.duration,
                                vertical: "true",
                                circular: "true",
                                "disable-touch": "true",
                              },
                            },
                            [
                              t._l(t.itemNew, function (i, a) {
                                return [
                                  e(
                                    "v-uni-swiper-item",
                                    { key: a + "_0", attrs: { catchtouchmove: "catchTouchMove" } },
                                    [
                                      e(
                                        "v-uni-view",
                                        {
                                          staticClass: "acea-row row-between-wrapper",
                                          attrs: { "hover-class": "none" },
                                          on: {
                                            click: function (e) {
                                              (arguments[0] = e = t.$handleEvent(e)), t.gopage(i.chiild[1].val);
                                            },
                                          },
                                        },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "text acea-row row-between-wrapper" },
                                            [
                                              e("v-uni-view", { staticClass: "newsTitle line1" }, [
                                                t._v(t._s(i.chiild[0].val)),
                                              ]),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "iconfont icon-xiangyou" }),
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
              !t.isShow && t.isIframe && t.itemNew.length
                ? e(
                    "v-uni-view",
                    { staticClass: "news acea-row row-between-wrapper" },
                    [
                      e("v-uni-view", { staticClass: "pictrue" }, [e("v-uni-image", { attrs: { src: t.img } })], 1),
                      e(
                        "v-uni-view",
                        { staticClass: "swiperTxt" },
                        [
                          e(
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
                              t._l(t.itemNew, function (i, a) {
                                return [
                                  e(
                                    "v-uni-swiper-item",
                                    { key: a + "_0", attrs: { catchtouchmove: "catchTouchMove" } },
                                    [
                                      e(
                                        "v-uni-view",
                                        {
                                          staticClass: "acea-row row-between-wrapper",
                                          attrs: { "hover-class": "none" },
                                          on: {
                                            click: function (e) {
                                              (arguments[0] = e = t.$handleEvent(e)), t.gopage(i.chiild[1].val);
                                            },
                                          },
                                        },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "text acea-row row-between-wrapper" },
                                            [
                                              e("v-uni-view", { staticClass: "newsTitle line1" }, [
                                                t._v(t._s(i.chiild[0].val)),
                                              ]),
                                            ],
                                            1
                                          ),
                                          e("v-uni-view", { staticClass: "iconfont icon-xiangyou" }),
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
    d209: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("f793"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    d233: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { easyLoadimage: e("cad3").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              e(
                "v-uni-view",
                { staticClass: "list" },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "product-box" },
                    t._l(t.tmp_data, function (i, a) {
                      return e(
                        "v-uni-view",
                        {
                          key: a,
                          staticClass: "product-list",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.goGoodsDetail(i);
                            },
                          },
                        },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "product-item" },
                            [
                              e("easy-loadimage", { attrs: { mode: "widthFix", "image-src": i.image } }),
                              e(
                                "v-uni-view",
                                { staticClass: "info" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "title line2" },
                                    [
                                      i.activity && "1" === i.activity.type && t.$permission("seckill")
                                        ? e("v-uni-text", { staticClass: "tag" }, [t._v(t._s(t.$t("秒杀")))])
                                        : t._e(),
                                      i.activity && "2" === i.activity.type && t.$permission("bargain")
                                        ? e("v-uni-text", { staticClass: "tag" }, [t._v(t._s(t.$t("砍价")))])
                                        : t._e(),
                                      i.activity && "3" === i.activity.type && t.$permission("combination")
                                        ? e("v-uni-text", { staticClass: "tag" }, [t._v(t._s(t.$t("拼团")))])
                                        : t._e(),
                                      i.checkCoupon
                                        ? e("v-uni-text", { staticClass: "tag" }, [t._v(t._s(t.$t("券")))])
                                        : t._e(),
                                      t._v(t._s(i.store_name)),
                                    ],
                                    1
                                  ),
                                  e(
                                    "v-uni-view",
                                    { staticClass: "price-box" },
                                    [
                                      e(
                                        "v-uni-view",
                                        [e("v-uni-text", [t._v(t._s(t.$t("￥")))]), t._v(t._s(i.price))],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "sales" }, [
                                        t._v(t._s(t.$t("已售")) + " " + t._s(i.sales)),
                                      ]),
                                    ],
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
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    d2e4: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '.box[data-v-034fba8e]{z-index:1000}.spinbox[data-v-034fba8e]{position:fixed;display:flex;justify-content:center;align-items:center;height:100%;width:100%;z-index:10000}.spin[data-v-034fba8e]{display:inline-block;width:%?64?%;height:%?64?%}.spin[data-v-034fba8e]:after{content:" ";display:block;width:%?46?%;height:%?46?%;margin:%?1?%;border-radius:50%;border:%?5?% solid #409eff;border-color:#409eff transparent #409eff transparent;-webkit-animation:spin-data-v-034fba8e 1.2s linear infinite;animation:spin-data-v-034fba8e 1.2s linear infinite}@-webkit-keyframes spin-data-v-034fba8e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-034fba8e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.chiaroscuro[data-v-034fba8e]{width:100%;height:100%;background:#c2cfd6;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-name:blink-data-v-034fba8e;animation-name:blink-data-v-034fba8e;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes blink-data-v-034fba8e{0%{opacity:.4}50%{opacity:1}100%{opacity:.4}}@keyframes blink-data-v-034fba8e{0%{opacity:.4}50%{opacity:1}100%{opacity:.4}}@-webkit-keyframes flush-data-v-034fba8e{0%{left:-100%}50%{left:0}100%{left:100%}}@keyframes flush-data-v-034fba8e{0%{left:-100%}50%{left:0}100%{left:100%}}.shine[data-v-034fba8e]{-webkit-animation:flush-data-v-034fba8e 2s linear infinite;animation:flush-data-v-034fba8e 2s linear infinite;position:absolute;top:0;bottom:0;width:100%;background:linear-gradient(270deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.85) 50%,hsla(0,0%,100%,0))}',
          "",
        ]),
        (t.exports = i);
    },
    d47f: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("f2c1"),
        n = e("ed1d");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("f1cd");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "7e142dc2", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    d793: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { jyfParser: e("47fd").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "txtPic" },
            [
              t.isIframe && !t.description
                ? e(
                    "v-uni-view",
                    { staticClass: "ueditor acea-row row-center-wrapper" },
                    [e("v-uni-text", { staticClass: "iconfont icon-icon_im_keyboard" })],
                    1
                  )
                : t._e(),
              t.description && t.isShow && !t.isIframe
                ? e("jyf-parser", { ref: "article", attrs: { html: t.description, "tag-style": t.tagStyle } })
                : t._e(),
              t.description && t.isIframe
                ? e("jyf-parser", { ref: "article", attrs: { html: t.description, "tag-style": t.tagStyle } })
                : t._e(),
            ],
            1
          );
        },
        o = [];
    },
    d89f: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("7846"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    d900: function (t, i, e) {
      var a = e("a23d");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("1fd246be", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    da73: function (t, i, e) {
      "use strict";
      var a = e("80b4"),
        n = e.n(a);
      n.a;
    },
    db6f: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.pictrue_log_class[data-v-63b2549c]{background-color:var(--view-theme)}.page[data-v-63b2549c]{padding-bottom:50px}.ysize[data-v-63b2549c]{background-size:100%}.fullsize[data-v-63b2549c]{background-size:100% 100%}.repeat[data-v-63b2549c]{background-repeat:repeat}.noRepeat[data-v-63b2549c]{background-repeat:no-repeat}.privacy-wrapper[data-v-63b2549c]{z-index:999;position:fixed;left:0;top:0;width:100%;height:100%;background:#7f7f7f}.privacy-wrapper .privacy-box[data-v-63b2549c]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?560?%;padding:%?50?% %?45?% 0;background:#fff;border-radius:%?20?%}.privacy-wrapper .privacy-box .title[data-v-63b2549c]{text-align:center;font-size:%?32?%;text-align:center;color:#333;font-weight:700}.privacy-wrapper .privacy-box .content[data-v-63b2549c]{margin-top:%?20?%;line-height:1.5;font-size:%?26?%;color:#666}.privacy-wrapper .privacy-box .content uni-navigator[data-v-63b2549c]{display:inline-block;color:#e93323}.privacy-wrapper .privacy-box .btn-box[data-v-63b2549c]{margin-top:%?40?%;text-align:center;font-size:%?30?%}.privacy-wrapper .privacy-box .btn-box .btn-item[data-v-63b2549c]{height:%?82?%;line-height:%?82?%;background:linear-gradient(90deg,#f67a38,#f11b09);color:#fff;border-radius:%?41?%}.privacy-wrapper .privacy-box .btn-box .btn[data-v-63b2549c]{padding:%?30?% 0}.error-network[data-v-63b2549c]{position:fixed;left:0;top:0;display:flex;flex-direction:column;align-items:center;width:100%;height:100%;padding-top:%?40?%;background:#fff}.error-network uni-image[data-v-63b2549c]{width:%?414?%;height:%?336?%}.error-network .title[data-v-63b2549c]{position:relative;top:%?-40?%;font-size:%?32?%;color:#666}.error-network .con[data-v-63b2549c]{font-size:%?24?%;color:#999}.error-network .con .label[data-v-63b2549c]{margin-bottom:%?20?%}.error-network .con .item[data-v-63b2549c]{margin-bottom:%?20?%}.error-network .btn[data-v-63b2549c]{display:flex;align-items:center;justify-content:center;width:%?508?%;height:%?86?%;margin-top:%?100?%;border:1px solid #d74432;color:#e93323;font-size:%?30?%;border-radius:%?120?%}.sort-product[data-v-63b2549c]{margin-top:%?20?%}.sort-product .sort-box[data-v-63b2549c]{display:flex;width:100%;border-radius:%?16?%;padding:%?30?% 0}.sort-product .sort-box .sort-item[data-v-63b2549c]{width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0}.sort-product .sort-box .sort-item uni-image[data-v-63b2549c]{width:%?90?%;height:%?90?%;border-radius:50%}.sort-product .sort-box .sort-item .txt[data-v-63b2549c]{color:#272727;font-size:%?24?%;margin-top:%?10?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:%?140?%;text-align:center}.sort-product .sort-box .sort-item .pictrues[data-v-63b2549c]{width:%?90?%;height:%?90?%;background:#f8f8f8;border-radius:50%;margin:0 auto}.sort-product .sort-box .sort-item .icon-gengduo1[data-v-63b2549c]{color:#333}.sort-product .sort-box .sort-item.on .txt[data-v-63b2549c]{color:#fc4141}.sort-product .sort-box .sort-item.on uni-image[data-v-63b2549c]{border:1px solid #fc4141}.sort-product .product-list[data-v-63b2549c]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?30?%;padding:0 %?20?%}.sort-product .product-list .product-item[data-v-63b2549c]{position:relative;width:%?344?%;background:#fff;border-radius:%?10?%;margin-bottom:%?20?%;display:flex;flex-direction:column}.sort-product .product-list .product-item uni-image[data-v-63b2549c]{width:100%;height:%?344?%;border-radius:%?10?% %?10?% 0 0}.sort-product .product-list .product-item .info[data-v-63b2549c]{flex:1;padding:%?14?% %?16?%;display:flex;flex-direction:column;justify-content:space-between}.sort-product .product-list .product-item .info .title[data-v-63b2549c]{font-size:%?28?%}.sort-product .product-list .product-item .info .price-box[data-v-63b2549c]{font-size:%?34?%;font-weight:700;margin-top:8px;color:#fc4141}.sort-product .product-list .product-item .info .price-box uni-text[data-v-63b2549c]{font-size:%?26?%}.emptyBox[data-v-63b2549c]{text-align:center;padding-top:%?20?%}.emptyBox .tips[data-v-63b2549c]{color:#aaa;font-size:%?26?%;padding-bottom:%?20?%}.emptyBox uni-image[data-v-63b2549c]{width:%?414?%;height:%?304?%}.site-config[data-v-63b2549c]{margin-top:%?40?%;font-size:%?24?%;text-align:center;color:#666}.site-config.fixed[data-v-63b2549c]{position:fixed;bottom:69px;left:0;width:100%}',
          "",
        ]),
        (t.exports = i);
    },
    dba3: function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("c975");
      var n = a(e("837a")),
        o = a(e("e089")),
        s = (a(e("00e9")), e("4e39")),
        r = e("d1ea"),
        c = {
          data: function () {
            return { isDiy: uni.getStorageSync("is_diy"), shareInfo: {}, loading: !1 };
          },
          components: { diy: n.default, visualization: o.default },
          onLoad: function (t) {
            uni.hideTabBar(), t.agent_id && this.$Cache.set("agent_id", t.agent_id), this.setOpenShare();
          },
          onShow: function () {
            this.getVersion(0), this.$Cache.get("agent_id") && this.bindAgent();
          },
          onHide: function () {
            this.$Cache.clear("agent_id");
          },
          methods: {
            bindAgent: function (t) {
              var i = this;
              (0, r.spreadAgent)({ agent_id: this.$Cache.get("agent_id") }).then(function (t) {
                i.$Cache.clear("agent_id"), uni.showToast({ icon: "none", title: t.msg, duration: 3e3 });
              });
            },
            getVersion: function (t) {
              var i = this;
              uni.$emit("uploadFooter"),
                (0, s.getVersion)(t)
                  .then(function (t) {
                    (i.version = t.data.version),
                      (i.isDiy = t.data.is_diy),
                      (i.loading = !0),
                      uni.setStorageSync("is_diy", t.data.is_diy),
                      (uni.getStorageSync("DIY_VERSION") && t.data.version == uni.getStorageSync("DIY_VERSION")) ||
                        (uni.getStorageSync("DIY_VERSION") &&
                          (uni.setStorageSync("DIY_VERSION", t.data.version),
                          i.isDiy ? i.$refs.diy.reconnect() : i.$refs.vis.reconnect()),
                        uni.setStorageSync("DIY_VERSION", t.data.version));
                  })
                  .catch(function (t) {
                    i.$util.Tips({ title: t });
                  });
            },
            setOpenShare: function () {
              var t = this,
                i = this;
              (0, s.getShare)().then(function (e) {
                var a = e.data;
                t.shareInfo = a;
                var n = location.href;
                if (
                  (t.$store.state.app.uid &&
                    (n =
                      -1 === n.indexOf("?")
                        ? n + "?spread=" + t.$store.state.app.uid
                        : n + "&spread=" + t.$store.state.app.uid),
                  i.$wechat.isWeixin())
                ) {
                  var o = { desc: a.synopsis, title: a.title, link: n, imgUrl: a.img };
                  i.$wechat.wechatEvevt(["updateAppMessageShareData", "updateTimelineShareData"], o);
                }
              });
            },
          },
          onReachBottom: function () {
            this.isDiy && this.$refs.diy.onsollBotton();
          },
          onPageScroll: function (t) {
            uni.$emit("scroll");
          },
        };
      i.default = c;
    },
    dc7c: function (t, i, e) {
      var a = e("a3d2");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("69149892", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    dcff: function (t, i, e) {
      var a = e("d2e4");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("42f2b380", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e015: function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("d3b7"), e("159b"), e("99af");
      var n = a(e("64ec")),
        o = a(e("7e26")),
        s = a(e("f872")),
        r = a(e("f92d")),
        c = a(e("5317")),
        l = a(e("7032")),
        d = a(e("f90b")),
        u = a(e("6722")),
        f = a(e("25a8")),
        v = a(e("a990")),
        p = a(e("6bb9")),
        g = a(e("2594")),
        m = a(e("1c41")),
        h = a(e("aa3c")),
        w = a(e("c5cf")),
        b = a(e("98f8")),
        _ = a(e("f616")),
        x = a(e("615ef")),
        C = a(e("35eb")),
        y = a(e("4eca")),
        k = a(e("3867")),
        S = a(e("0815")),
        I = a(e("1eda")),
        $ = a(e("8632")),
        L = a(e("013f")),
        A = a(e("b583")),
        O = a(e("c986")),
        T = e("4e39"),
        j = e("5743"),
        z = e("26cb"),
        E = e("2a39"),
        D = e("6557"),
        M = (e("86eb"), e("00a0")),
        B = a(e("19b6")),
        P = a(e("9df0")),
        R = getApp(),
        N = uni.getSystemInfoSync().statusBarHeight,
        U = {
          computed: (0, z.mapGetters)(["isLogin", "uid"]),
          components: {
            couponWindow: n.default,
            headerSerch: s.default,
            swiperBg: r.default,
            menus: c.default,
            news: l.default,
            activity: d.default,
            scrollBox: u.default,
            recommend: f.default,
            popular: v.default,
            mBanner: p.default,
            newGoods: g.default,
            promotion: m.default,
            alive: h.default,
            adsRecommend: w.default,
            coupon: b.default,
            seckill: _.default,
            combination: x.default,
            bargain: C.default,
            goodList: y.default,
            picTxt: k.default,
            titles: S.default,
            customerService: I.default,
            tabBar: $.default,
            tabNav: L.default,
            Loading: O.default,
            skeletons: P.default,
            indexGoods: o.default,
            appUpdate: A.default,
          },
          mixins: [B.default],
          data: function () {
            return {
              imgHost: M.HTTP_REQUEST_URL,
              showSkeleton: !0,
              isNodes: 0,
              isSortType: 0,
              sortList: {},
              sortAll: [],
              goodPage: 1,
              goodLists: [],
              curSort: 0,
              sortMpTop: 0,
              loaded: !1,
              hostProduct: [],
              hotScroll: !1,
              hotPage: 1,
              hotLimit: 10,
              followHid: !0,
              followUrl: "",
              followCode: !1,
              navH: N,
              subscribe: !1,
              iShidden: !1,
              goodType: 3,
              loading: !1,
              loadend: !1,
              loadTitle: this.$t("下拉加载更多"),
              page: 1,
              limit: this.$config.LIMIT,
              numConfig: 0,
              couponObj: {},
              isCouponShow: !1,
              shareInfo: {},
              site_config: "",
              isIframe: R.globalData.isIframe,
              headerSerch: {},
              swiperBg: {},
              menus: {},
              news: {},
              activity: {},
              alive: {},
              scrollBox: {},
              titles: {},
              goodList: {},
              tabBar: {},
              customerService: {},
              picTxt: {},
              bargain: {},
              combination: {},
              adsRecommend: {},
              seckill: {},
              coupon: {},
              tabNav: {},
              isBorader: "",
              domOffsetTop: 50,
              isTop: 0,
              privacyStatus: !1,
              isFixed: !1,
            };
          },
          created: function () {
            var t = this;
            uni.hideTabBar();
            R.globalData.isIframe &&
              ((this.showSkeleton = !1),
              setTimeout(function () {
                var t;
                document.getElementById("pageIndexs").children.forEach(function (i) {
                  i.addEventListener("click", function (e) {
                    e.stopPropagation(),
                      e.preventDefault(),
                      i !== t && (i.classList.add("borderShow"), t && t.classList.remove("borderShow"), (t = i));
                  });
                });
              }, 1e3)),
              R.globalData.isIframe && uni.hideTabBar(),
              this.getFollow(),
              this.diyData(),
              this.getIndexData(),
              (0, j.siteConfig)()
                .then(function (i) {
                  t.site_config = i.data;
                })
                .catch(function (i) {
                  return t.$util.Tips({ title: i.msg });
                }),
              (this.isTop = 0),
              R.globalData.isIframe || (this.isLogin && this.getCoupon());
          },
          methods: {
            bindEdit: function (t, i) {
              R.globalData.isIframe && window.parent.postMessage({ name: t, dataName: i, params: {} }, "*");
            },
            getFollow: function () {
              var t = this;
              (0, T.follow)()
                .then(function (i) {
                  t.followUrl = i.data.path;
                })
                .catch(function (i) {
                  return t.$util.Tips({ title: i.msg });
                });
            },
            followTap: function () {
              (this.followCode = !0), (this.followHid = !1);
            },
            closeFollow: function () {
              this.followHid = !1;
            },
            closeFollowCode: function () {
              (this.followCode = !1), (this.followHid = !0);
            },
            closeTip: function () {
              this.$Cache.set(TIPS_KEY, !0), (this.iShidden = !0);
            },
            bindHeighta: function (t) {
              this.domOffsetTop = t.top;
            },
            getCoupon: function () {
              var t = this,
                i = uni.getStorageSync("tagDate") || "",
                e = new Date().toLocaleDateString();
              i === e
                ? this.getNewCoupon()
                : (0, j.getCouponV2)().then(function (i) {
                    var e = i.data;
                    e.list.length
                      ? ((t.isCouponShow = !0),
                        (t.couponObj = e),
                        uni.setStorageSync("tagDate", new Date().toLocaleDateString()))
                      : t.getNewCoupon();
                  });
            },
            getNewCoupon: function () {
              var t = this,
                i = uni.getStorageSync("oldUser") || 0;
              i ||
                (0, j.getCouponNewUser)().then(function (i) {
                  var e = i.data;
                  e.show
                    ? e.list.length && ((t.isCouponShow = !0), (t.couponObj = e), uni.setStorageSync("oldUser", 1))
                    : uni.setStorageSync("oldUser", 1);
                });
            },
            couponClose: function () {
              (this.isCouponShow = !1), uni.getStorageSync("oldUser") || this.getNewCoupon();
            },
            goICP: function (t) {
              var i = 1 == t ? this.site_config.icp_url : this.site_config.network_security_url;
              window.open(i);
            },
            onLoadFun: function () {},
            reconnect: function () {
              this.diyData(), this.getIndexData();
            },
            diyData: function () {
              var t = this,
                i = this;
              (0, j.getDiy)()
                .then(function (e) {
                  var a = e.data;
                  (i.headerSerch = a.headerSerch),
                    (i.swiperBg = a.swiperBg),
                    (i.menus = a.menus),
                    (i.news = a.news),
                    (i.activity = a.activity),
                    (i.alive = a.alive),
                    (i.scrollBox = a.scrollBox),
                    (i.titles = a.titles),
                    (i.goodList = a.goodList),
                    (i.tabNav = a.tabNav),
                    (i.tabBar = a.tabBar),
                    (i.customerService = a.customerService),
                    (i.picTxt = a.picTxt),
                    (i.bargain = a.bargain),
                    (i.combination = a.combination),
                    (i.adsRecommend = a.adsRecommend),
                    (i.seckill = a.seckill),
                    (i.coupon = a.coupon),
                    t.$Cache.set("TAB_BAR", a.tabBar.default.tabBarList),
                    setTimeout(function () {
                      t.showSkeleton = !1;
                    }, 300),
                    uni.setStorageSync("VIS_DATA", e.data);
                })
                .catch(function (t) {});
            },
            getIndexData: function () {
              var t = this;
              (0, j.getIndexData)().then(function (i) {
                (t.subscribe = i.data.subscribe),
                  localStorage.setItem("itemName", i.data.site_name),
                  uni.setNavigationBarTitle({ title: i.data.site_name });
              });
            },
            get_host_product: function () {
              var t = this;
              t.hotScroll ||
                (0, E.getProductHot)(t.hotPage, t.hotLimit).then(function (i) {
                  t.hotPage++,
                    (t.hotScroll = i.data.length < t.hotLimit),
                    (t.hostProduct = t.hostProduct.concat(i.data));
                });
            },
            bindSortId: function (t) {
              (this.isSortType = -99 == t ? 0 : 1), this.getProductList(t);
            },
            getProductList: function (t) {
              (this.curSort = 0), (this.loaded = !1), (this.goodPage = 1), this.getGoodsList(t);
            },
            getGoodsList: function (t) {
              var i = this;
              this.loading ||
                this.loaded ||
                ((this.loading = !0),
                (0, E.getProductslist)({
                  keyword: "",
                  priceOrder: "",
                  salesOrder: "",
                  news: 0,
                  page: this.goodPage,
                  limit: 10,
                  cid: t,
                }).then(function (t) {
                  (i.goodLists = t.data), (i.loading = !1), (i.loaded = t.data.length < 10), i.goodPage++;
                }));
            },
            goGoodsDetail: function (t) {
              var i = this;
              (0, D.goPage)().then(function (e) {
                (0, D.goShopDetail)(t, i.uid).then(function (i) {
                  uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                });
              });
            },
          },
          onReachBottom: function () {},
          onPageScroll: function (t) {},
        };
      i.default = U;
    },
    e089: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("6dc3"),
        n = e("af29");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("da73");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "429abae4", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    e098: function (t, i, e) {
      "use strict";
      var a = e("dcff"),
        n = e.n(a);
      n.a;
    },
    e49e: function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var n = a(e("19b6")),
        o = (e("26cb"), e("6557")),
        s = e("2a39"),
        r = getApp(),
        c = {
          name: "goodList",
          mixins: [n.default],
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.isShow = t.isShow.val),
                  (this.selectType = t.tabConfig.tabVal),
                  this.$set(
                    this,
                    "selectId",
                    t.selectConfig && t.selectConfig.activeValue ? t.selectConfig.activeValue : ""
                  ),
                  this.$set(
                    this,
                    "type",
                    t.selectSortConfig && t.selectSortConfig.activeValue ? t.selectSortConfig.activeValue : ""
                  ),
                  (this.salesOrder = 1 == t.goodsSort.type ? "desc" : ""),
                  (this.newsOrder = 2 == t.goodsSort.type ? "news" : ""),
                  (this.ids = t.ids ? t.ids.join(",") : ""),
                  (this.numConfig = t.numConfig.val),
                  (this.titleInfo = t.titleInfo.list),
                  this.productslist());
              },
            },
          },
          created: function () {},
          mounted: function () {},
          data: function () {
            return {
              hotList: [],
              name: this.$options.name,
              isShow: !0,
              isIframe: r.globalData.isIframe,
              selectType: 0,
              selectId: "",
              salesOrder: "",
              newsOrder: "",
              ids: "",
              page: 1,
              limit: this.$config.LIMIT,
              type: "",
              numConfig: 0,
              titleInfo: [],
            };
          },
          methods: {
            productslist: function () {
              var t = this,
                i = {};
              (i = t.selectType
                ? { page: t.page, limit: t.limit, type: t.type, ids: t.ids, selectType: t.selectType }
                : {
                    page: t.page,
                    limit: t.numConfig <= t.limit ? t.numConfig : t.limit,
                    type: t.type,
                    newsOrder: t.newsOrder,
                    salesOrder: t.salesOrder,
                    selectId: t.selectId,
                    selectType: t.selectType,
                  }),
                (0, s.getHomeProducts)(i)
                  .then(function (i) {
                    t.hotList = i.data.list;
                  })
                  .catch(function (i) {
                    t.$util.Tips({ title: i });
                  });
            },
            gopage: function (t) {
              var i = this;
              (0, o.goPage)().then(function (e) {
                i.$util.JumpPath(t);
              });
            },
          },
        };
      i.default = c;
    },
    eb87: function (t, i, e) {
      "use strict";
      e("7a82");
      var a = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      e("26cb");
      var n = e("6557"),
        o = e("2a39"),
        s = a(e("7c52")),
        r = getApp(),
        c = {
          name: "goodList",
          props: { dataConfig: { type: Object, default: function () {} } },
          components: { promotionGood: s.default },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.isShow = t.isShow.val),
                  (this.selectType = t.tabConfig.tabVal),
                  this.$set(this, "selectId", t.selectConfig.activeValue || ""),
                  this.$set(this, "type", t.selectSortConfig.activeValue),
                  (this.salesOrder = 1 == t.goodsSort.type ? "desc" : ""),
                  (this.newsOrder = 2 == t.goodsSort.type ? "news" : ""),
                  (this.ids = t.ids ? t.ids.join(",") : ""),
                  (this.numConfig = t.numConfig.val),
                  (this.titleInfo = t.titleInfo.list),
                  this.productslist());
              },
            },
          },
          created: function () {
            this.isIframe = r.globalData.isIframe;
          },
          mounted: function () {},
          data: function () {
            return {
              benefit: [],
              salesInfo: this.$t("库存商品优惠促销活动"),
              name: this.$options.name,
              isShow: !0,
              isIframe: r.globalData.isIframe,
              selectType: 0,
              selectId: "",
              salesOrder: "",
              newsOrder: "",
              ids: "",
              page: 1,
              limit: this.$config.LIMIT,
              type: "",
              numConfig: 0,
              titleInfo: [],
            };
          },
          methods: {
            productslist: function () {
              var t = this,
                i = {};
              (i = t.selectType
                ? { page: t.page, limit: t.limit, type: t.type, ids: t.ids, selectType: t.selectType }
                : {
                    page: t.page,
                    limit: t.numConfig <= t.limit ? t.numConfig : t.limit,
                    type: t.type,
                    newsOrder: t.newsOrder,
                    salesOrder: t.salesOrder,
                    selectId: t.selectId,
                    selectType: t.selectType,
                  }),
                (0, o.getHomeProducts)(i)
                  .then(function (i) {
                    t.benefit = i.data.list;
                  })
                  .catch(function (i) {
                    t.$util.Tips({ title: i });
                  });
            },
            gopage: function (t) {
              var i = this;
              (0, n.goPage)().then(function (e) {
                i.$util.JumpPath(t);
              });
            },
          },
        };
      i.default = c;
    },
    eba3: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "swiperBg", style: { marginTop: t.mt + "rpx" } },
            [
              t.isIframe || (t.imgUrls.length && t.isShow) ? e("v-uni-view", { staticClass: "bag" }) : t._e(),
              t.isShow && t.imgUrls.length
                ? [
                    t.imgUrls.length
                      ? e(
                          "v-uni-view",
                          { staticClass: "swiper square" },
                          [
                            e(
                              "v-uni-swiper",
                              {
                                staticClass: "skeleton-rect",
                                style: "height:" + t.imageH + "rpx;",
                                attrs: {
                                  "indicator-dots": "true",
                                  autoplay: !0,
                                  circular: t.circular,
                                  interval: t.interval,
                                  duration: t.duration,
                                  "indicator-color": "rgba(255,255,255,0.6)",
                                  "indicator-active-color": "#fff",
                                  current: t.swiperCur,
                                },
                                on: {
                                  change: function (i) {
                                    (arguments[0] = i = t.$handleEvent(i)), t.swiperChange.apply(void 0, arguments);
                                  },
                                },
                              },
                              [
                                t._l(t.imgUrls, function (i, a) {
                                  return [
                                    e(
                                      "v-uni-swiper-item",
                                      { key: a + "_0", class: { active: a == t.swiperCur } },
                                      [
                                        e(
                                          "v-uni-view",
                                          {
                                            staticClass: "slide-navigator acea-row row-between-wrapper",
                                            on: {
                                              click: function (e) {
                                                (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                              },
                                            },
                                          },
                                          [
                                            e("v-uni-image", {
                                              staticClass: "slide-image",
                                              style: "height:" + t.imageH + "rpx;",
                                              attrs: { src: i.img, mode: "widthFix" },
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
                  ]
                : t._e(),
              !t.isShow && t.isIframe && t.imgUrls.length && t.imageH
                ? [
                    t.imgUrls.length && t.imageH
                      ? e(
                          "v-uni-view",
                          { staticClass: "swiper square", style: "height:" + t.imageH + "rpx;" },
                          [
                            e(
                              "v-uni-swiper",
                              {
                                style: "height:" + t.imageH + "rpx;",
                                attrs: {
                                  "indicator-dots": "true",
                                  autoplay: !0,
                                  circular: t.circular,
                                  interval: t.interval,
                                  duration: t.duration,
                                  "indicator-color": "rgba(255,255,255,0.6)",
                                  "indicator-active-color": "#fff",
                                },
                              },
                              [
                                t._l(t.imgUrls, function (i, a) {
                                  return [
                                    e(
                                      "v-uni-swiper-item",
                                      [
                                        e(
                                          "v-uni-view",
                                          {
                                            staticClass: "slide-navigator acea-row row-between-wrapper",
                                            on: {
                                              click: function (e) {
                                                (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                                              },
                                            },
                                          },
                                          [
                                            e("v-uni-image", {
                                              staticClass: "slide-image",
                                              style: "height:" + t.imageH + "rpx;",
                                              attrs: { src: i.img, mode: "widthFix" },
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
                  ]
                : t._e(),
              !t.isIframe || (t.imgUrls.length && t.imageH)
                ? t._e()
                : [e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("暂无图片，请上传图片")))])],
            ],
            2
          );
        },
        n = [];
    },
    ec44: function (t, i, e) {
      "use strict";
      var a = e("9d1b"),
        n = e.n(a);
      n.a;
    },
    ed1d: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("07d4"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    ee8b: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("1daf"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    f0fd: function (t, i, e) {
      "use strict";
      var a = e("c3bf"),
        n = e.n(a);
      n.a;
    },
    f1cd: function (t, i, e) {
      "use strict";
      var a = e("4701"),
        n = e.n(a);
      n.a;
    },
    f22f: function (t, i, e) {
      var a = e("9518");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("6b2ee3c4", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f253: function (t, i, e) {
      var a = e("32e3");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = e("4f06").default;
      n("37328ed5", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f2c1: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {});
      var a = function () {
          var t = this,
            i = t.$createElement,
            a = t._self._c || i;
          return a(
            "v-uni-view",
            { staticClass: "goodList" },
            [
              a(
                "v-uni-scroll-view",
                { staticStyle: { height: "100%" }, attrs: { "scroll-y": "true", "scroll-with-animation": "true" } },
                [
                  t._l(t.bastList, function (i, n) {
                    return [
                      a(
                        "v-uni-view",
                        {
                          key: n + "_0",
                          staticClass: "item acea-row row-between-wrapper",
                          attrs: { "hover-class": "none" },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.goDetail(i);
                            },
                          },
                        },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "pictrue" },
                            [
                              a("v-uni-image", { attrs: { src: i.image } }),
                              i.activity && "1" === i.activity.type && t.$permission("seckill")
                                ? a("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                    t._v(t._s(t.$t("秒杀"))),
                                  ])
                                : t._e(),
                              i.activity && "2" === i.activity.type && t.$permission("bargain")
                                ? a("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                    t._v(t._s(t.$t("砍价"))),
                                  ])
                                : t._e(),
                              i.activity && "3" === i.activity.type && t.$permission("combination")
                                ? a("span", { staticClass: "pictrue_log pictrue_log_class" }, [
                                    t._v(t._s(t.$t("拼团"))),
                                  ])
                                : t._e(),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            { staticClass: "underline" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "text" },
                                [
                                  a("v-uni-view", { staticClass: "line1" }, [t._v(t._s(i.store_name))]),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "money font-color" },
                                    [
                                      t._v(t._s(t.$t("￥"))),
                                      a("v-uni-text", { staticClass: "num" }, [t._v(t._s(i.price))]),
                                    ],
                                    1
                                  ),
                                  i.is_vip && i.vip_price && i.vip_price > 0
                                    ? a(
                                        "v-uni-view",
                                        { staticClass: "vip-money acea-row row-middle" },
                                        [
                                          t._v(t._s(t.$t("￥")) + t._s(i.vip_price || 0)),
                                          a("v-uni-image", { attrs: { src: e("89c4") } }),
                                          a("v-uni-text", { staticClass: "num" }, [
                                            t._v(t._s(t.$t("已售")) + t._s(i.sales) + t._s(t.$t(i.unit_name))),
                                          ]),
                                        ],
                                        1
                                      )
                                    : a(
                                        "v-uni-view",
                                        { staticClass: "vip-money acea-row row-middle" },
                                        [
                                          a("v-uni-text", { staticClass: "num" }, [
                                            t._v(t._s(t.$t("已售")) + t._s(i.sales) + t._s(t.$t(i.unit_name))),
                                          ]),
                                        ],
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
                      ),
                    ];
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
    f616: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("2c9f"),
        n = e("cc9d");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("9603");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "2c01d8d0", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    f793: function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0), e("a9e3");
      var a = e("2a39"),
        n = getApp(),
        o = {
          name: "tabNav",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isFixed: { type: Boolean | String | Number, default: !1 },
          },
          data: function () {
            return {
              tabTitle: [],
              isIframe: n.globalData.isIframe,
              tabLeft: 0,
              isWidth: 0,
              tabClick: 0,
              isLeft: 0,
              bgColor: "",
              mbConfig: 0,
              txtColor: "#333333",
              fixedTop: 0,
              isTop: 0,
              navHeight: 0,
              isShow: !0,
            };
          },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t && (this.isShow = t.isShow.val);
              },
            },
          },
          created: function () {
            var t = this;
            t.getAllCategory(),
              uni.getSystemInfoSync({
                success: function (i) {
                  t.isWidth = 100;
                },
              });
          },
          methods: {
            longClick: function (t, i) {
              this.tabTitle.length > 4 && (this.tabLeft = (i - 2) * this.isWidth),
                (this.tabClick = i),
                (this.isLeft = i * this.isWidth),
                this.$emit("bindSortId", t.id);
            },
            getAllCategory: function () {
              var t = this,
                i = this;
              (0, a.getCategoryList)().then(function (e) {
                t.$emit("bindSortId", e.data[0].id), (i.tabTitle = e.data);
              });
            },
          },
        };
      i.default = o;
    },
    f7ce: function (t, i, e) {
      "use strict";
      var a = e("5d59"),
        n = e.n(a);
      n.a;
    },
    f872: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("6e34"),
        n = e("bee5");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("ff8a");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "15ede29e", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    f8dd: function (t, i, e) {
      "use strict";
      e("7a82"), Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
      var a = e("6557"),
        n = e("2a39"),
        o = getApp(),
        s = {
          name: "combination",
          props: { dataConfig: { type: Object, default: function () {} } },
          watch: {
            dataConfig: {
              immediate: !0,
              handler: function (t, i) {
                t &&
                  ((this.isShow = t.isShow.val),
                  (this.selectType = t.tabConfig.tabVal),
                  this.$set(this, "selectId", t.selectConfig.activeValue || ""),
                  this.$set(this, "type", t.titleInfo.type),
                  (this.salesOrder = 1 == t.goodsSort.type ? "desc" : ""),
                  (this.newsOrder = 2 == t.goodsSort.type ? "news" : ""),
                  (this.ids = t.ids ? t.ids.join(",") : ""),
                  (this.numConfig = t.numConfig.val),
                  this.productslist());
              },
            },
          },
          data: function () {
            return {
              combinationList: [],
              name: this.$options.name,
              isIframe: o.globalData.isIframe,
              isShow: !0,
              selectType: 0,
              selectId: "",
              salesOrder: "",
              newsOrder: "",
              ids: "",
              page: 1,
              limit: this.$config.LIMIT,
              type: "",
              numConfig: 0,
            };
          },
          created: function () {},
          mounted: function () {},
          methods: {
            productslist: function () {
              var t = this,
                i = {};
              (i = t.selectType
                ? { page: t.page, limit: t.limit, type: t.type, ids: t.ids, selectType: t.selectType }
                : {
                    page: t.page,
                    limit: t.numConfig <= t.limit ? t.numConfig : t.limit,
                    type: t.type,
                    newsOrder: t.newsOrder,
                    salesOrder: t.salesOrder,
                    selectId: t.selectId,
                    selectType: t.selectType,
                  }),
                (0, n.getHomeProducts)(i)
                  .then(function (i) {
                    t.combinationList = i.data.list;
                  })
                  .catch(function (i) {
                    t.$util.Tips({ title: i });
                  });
            },
            goDetail: function (t) {
              (0, a.goPage)(t).then(function (i) {
                uni.navigateTo({ url: "/pages/activity/goods_combination_details/index?id=".concat(t.id) });
              });
            },
          },
        };
      i.default = s;
    },
    f90b: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("2ca8"),
        n = e("c7a5");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("f7ce");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "9e9aef14", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    f92d: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("eba3"),
        n = e("d89f");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(o);
      e("81c8");
      var s = e("f0c5"),
        r = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "bed49caa", null, !1, a["a"], void 0);
      i["default"] = r.exports;
    },
    f98f: function (t, i, e) {
      "use strict";
      e.r(i);
      var a = e("5846"),
        n = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(o);
      i["default"] = n.a;
    },
    fa42: function (t, i, e) {
      var a = e("24fb");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.default[data-v-2c01d8d0]{width:%?690?%;height:%?300?%;border-radius:%?14?%;margin:%?26?% auto 0 auto;background-color:#ccc;text-align:center;line-height:%?300?%}.default .iconfont[data-v-2c01d8d0]{font-size:%?50?%}.seckill[data-v-2c01d8d0]{width:%?690?%;height:%?410?%;margin:0 auto;padding-top:%?35?%;background-color:#fff}.seckill .title .name[data-v-2c01d8d0]{font-size:%?32?%;color:#282828;font-weight:700}.seckill .title .point[data-v-2c01d8d0]{font-size:%?30?%;font-weight:700;color:#fc4141;margin-left:%?16?%}.seckill .title[data-v-2c01d8d0] .time{font-size:%?24?%}.seckill .title[data-v-2c01d8d0] .time .styleAll{width:%?35?%;height:%?35?%;background-color:rgba(252,60,62,.09);border-radius:%?6?%;color:#e93323;text-align:center}.seckill .title[data-v-2c01d8d0] .time .red ~ .red{color:#333;padding:0 %?4?%}.seckill .title .more[data-v-2c01d8d0]{font-size:%?26?%!important;color:#333}.seckill .title .more .iconfont[data-v-2c01d8d0]{margin-left:%?8?%;font-size:%?26?%!important;vertical-align:%?2?%}.seckill .conter[data-v-2c01d8d0]{width:100%;height:%?320?%;background-color:#fff;border-radius:12px;margin-top:%?26?%}.seckill .conter .itemCon[data-v-2c01d8d0]{display:inline-block;width:%?174?%;margin-right:%?24?%}.seckill .conter .itemCon .item[data-v-2c01d8d0]{width:100%}.seckill .conter .itemCon .item .pictrue[data-v-2c01d8d0]{width:100%;height:%?174?%;border-radius:%?6?%}.seckill .conter .itemCon .item .pictrue uni-image[data-v-2c01d8d0]{width:100%;height:100%;border-radius:%?6?%}.seckill .conter .itemCon .item .name[data-v-2c01d8d0]{font-size:%?24?%;color:#333;margin-top:%?10?%}.seckill .conter .itemCon .item .money .y_money[data-v-2c01d8d0]{font-size:%?20?%;color:#999;text-decoration:line-through}.seckill .conter .itemCon .item .money .x_money[data-v-2c01d8d0]{color:#fd502f;font-size:%?24?%;font-weight:700;margin-top:%?3?%}.seckill .conter .itemCon .item .money .x_money .num[data-v-2c01d8d0]{font-size:%?28?%}',
          "",
        ]),
        (t.exports = i);
    },
    fc56: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return o;
        }),
        e.d(i, "a", function () {
          return a;
        });
      var a = { easyLoadimage: e("cad3").default },
        n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            [
              t.isShow && t.fastList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "index-wrapper skeleton-rect" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.$t(t.titleInfo[0].val)))]),
                              e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.$t(t.titleInfo[1].val)))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            { staticClass: "more", attrs: { "open-type": "switchTab", url: t.titleInfo[2].val } },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "scroll-product" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticClass: "scroll-view_x",
                              staticStyle: { width: "auto", overflow: "hidden" },
                              attrs: { "scroll-x": !0 },
                            },
                            [
                              t._l(t.fastList, function (i, a) {
                                return [
                                  e(
                                    "v-uni-view",
                                    {
                                      key: a + "_0",
                                      staticClass: "item",
                                      attrs: { "hover-class": "none" },
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e = t.$handleEvent(e)),
                                            t.gopage(
                                              "/pages/goods/goods_list/index?sid=" + i.id + "&title=" + i.cate_name
                                            );
                                        },
                                      },
                                    },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "img-box" },
                                        [e("easy-loadimage", { attrs: { mode: "widthFix", "image-src": i.pic } })],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "pro-info line1" }, [
                                        t._v(t._s(t.$t(i.cate_name))),
                                      ]),
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
              !t.isShow && t.isIframe && t.fastList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.titleInfo[0].val))]),
                              e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            { staticClass: "more", attrs: { "open-type": "switchTab", url: t.titleInfo[2].val } },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "scroll-product" },
                        [
                          e(
                            "v-uni-scroll-view",
                            {
                              staticClass: "scroll-view_x",
                              staticStyle: { width: "auto", overflow: "hidden" },
                              attrs: { "scroll-x": !0 },
                            },
                            [
                              t._l(t.fastList, function (i, a) {
                                return [
                                  e(
                                    "v-uni-view",
                                    {
                                      key: a + "_0",
                                      staticClass: "item",
                                      attrs: { "hover-class": "none" },
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e = t.$handleEvent(e)),
                                            t.gopage(
                                              "/pages/goods/goods_list/index?sid=" + i.id + "&title=" + i.cate_name
                                            );
                                        },
                                      },
                                    },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "img-box" },
                                        [e("v-uni-image", { attrs: { src: i.pic } })],
                                        1
                                      ),
                                      e("v-uni-view", { staticClass: "pro-info line1" }, [t._v(t._s(i.cate_name))]),
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
              t.isIframe && !t.fastList.length
                ? e(
                    "v-uni-view",
                    { staticClass: "index-wrapper" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "title acea-row row-between-wrapper" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              e("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.titleInfo[0].val))]),
                              e("v-uni-view", { staticClass: "line1 txt-btn" }, [t._v(t._s(t.titleInfo[1].val))]),
                            ],
                            1
                          ),
                          e(
                            "v-uni-navigator",
                            { staticClass: "more", attrs: { "open-type": "switchTab", url: t.titleInfo[2].val } },
                            [t._v(t._s(t.$t("更多"))), e("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "scroll-product" },
                        [e("v-uni-view", { staticClass: "empty-img" }, [t._v(t._s(t.$t("快速选择，暂无数据")))])],
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
        o = [];
    },
    ff83: function (t, i, e) {
      "use strict";
      var a = e("917f3"),
        n = e.n(a);
      n.a;
    },
    ff8a: function (t, i, e) {
      "use strict";
      var a = e("5b76"),
        n = e.n(a);
      n.a;
    },
  },
]);
