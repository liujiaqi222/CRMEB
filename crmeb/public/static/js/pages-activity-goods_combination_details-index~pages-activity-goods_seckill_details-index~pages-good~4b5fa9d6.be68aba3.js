(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-activity-goods_combination_details-index~pages-activity-goods_seckill_details-index~pages-good~4b5fa9d6"],
  {
    "0704": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticClass: "product-bg" },
            [
              t.isPlay
                ? n(
                    "v-uni-swiper",
                    {
                      attrs: {
                        "indicator-dots": t.indicatorDots,
                        "indicator-active-color": "var(--view-theme)",
                        autoplay: t.autoplay,
                        circular: t.circular,
                        interval: t.interval,
                        duration: t.duration,
                      },
                      on: {
                        change: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.change.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      t.videoline
                        ? n(
                            "v-uni-swiper-item",
                            [
                              n(
                                "v-uni-view",
                                { staticClass: "item" },
                                [
                                  n(
                                    "v-uni-view",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !t.controls,
                                          expression: "!controls",
                                        },
                                      ],
                                      staticStyle: { width: "100%", height: "100%" },
                                    },
                                    [
                                      n("v-uni-video", {
                                        staticStyle: { width: "100%", height: "100%" },
                                        attrs: {
                                          id: "myVideo",
                                          src: encodeURI(t.videoline),
                                          "object-fit": "contain",
                                          controls: !0,
                                          "show-center-play-btn": !0,
                                          "show-mute-btn": "true",
                                          "auto-pause-if-navigate": !0,
                                          "custom-cache": !1,
                                          "enable-progress-gesture": !1,
                                          poster: t.imgUrls[0],
                                        },
                                        on: {
                                          pause: function (e) {
                                            (arguments[0] = e = t.$handleEvent(e)),
                                              t.videoPause.apply(void 0, arguments);
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  n(
                                    "v-uni-view",
                                    {
                                      directives: [
                                        { name: "show", rawName: "v-show", value: t.controls, expression: "controls" },
                                      ],
                                      staticClass: "poster",
                                    },
                                    [n("v-uni-image", { staticClass: "image", attrs: { src: t.imgUrls[0] } })],
                                    1
                                  ),
                                  n(
                                    "v-uni-view",
                                    {
                                      directives: [
                                        { name: "show", rawName: "v-show", value: t.controls, expression: "controls" },
                                      ],
                                      staticClass: "stop",
                                      on: {
                                        click: function (e) {
                                          e.stopPropagation(),
                                            (arguments[0] = e = t.$handleEvent(e)),
                                            t.bindPause.apply(void 0, arguments);
                                        },
                                      },
                                    },
                                    [n("v-uni-image", { staticClass: "image", attrs: { src: i("e1bd") } })],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      t._l(t.imgUrls, function (e, i) {
                        return [
                          (t.videoline ? i >= 1 : i >= 0)
                            ? n(
                                "v-uni-swiper-item",
                                [
                                  n("v-uni-image", {
                                    staticClass: "slide-image",
                                    attrs: { src: e },
                                    on: {
                                      click: function (e) {
                                        e.stopPropagation(), (arguments[0] = e = t.$handleEvent(e)), t.openImage(i);
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ];
                      }),
                    ],
                    2
                  )
                : t._e(),
            ],
            1
          );
        },
        a = [];
    },
    "138b": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("c49f"),
        a = i("b129");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      i("7971");
      var o = i("f0c5"),
        s = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "db860c98", null, !1, n["a"], void 0);
      e["default"] = s.exports;
    },
    "3a6e": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("40c7"),
        a = i("ab7c");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      i("c4a7");
      var o = i("f0c5"),
        s = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "82513238", null, !1, n["a"], void 0);
      e["default"] = s.exports;
    },
    "3d2e": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("e29f"),
        a = i("f2df");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      i("5079");
      var o = i("f0c5"),
        s = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "b7f0a252", null, !1, n["a"], void 0);
      e["default"] = s.exports;
    },
    "3f8e": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3"), i("c975");
      var n = {
        name: "homeIdex",
        props: {
          navH: { type: String | Number, default: "" },
          returnShow: { type: Boolean, default: !0 },
          goodList: { type: Boolean, default: !1 },
          currentPage: { type: Boolean, default: !1 },
          goodsShow: { type: Boolean, default: !1 },
          sysHeight: { type: String | Number, default: "" },
        },
        data: function () {
          return {
            selectNavList: [
              { name: this.$t("首页"), icon: "icon-shouye8", url: "/pages/index/index", after: "dialog_after" },
              {
                name: this.$t("搜索"),
                icon: "icon-sousuo6",
                url: "/pages/goods/goods_search/index",
                after: "dialog_after",
              },
              {
                name: this.$t("购物车"),
                icon: "icon-gouwuche7",
                url: "/pages/order_addcart/order_addcart",
                after: "dialog_after",
              },
              {
                name: this.$t("我的收藏"),
                icon: "icon-shoucang3",
                url: "/pages/users/user_goods_collection/index",
                after: "dialog_after",
              },
              { name: this.$t("个人中心"), icon: "icon-gerenzhongxin1", url: "/pages/user/index" },
            ],
          };
        },
        methods: {
          linkPage: function (t) {
            -1 ==
            [
              "/pages/goods_cate/goods_cate",
              "/pages/order_addcart/order_addcart",
              "/pages/user/index",
              "/pages/index/index",
            ].indexOf(t)
              ? uni.navigateTo({ url: t })
              : uni.switchTab({ url: t });
          },
        },
        created: function () {},
        beforeDestroy: function () {},
      };
      e.default = n;
    },
    "40c7": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.showBox
            ? i(
                "v-uni-view",
                {
                  staticClass: "previewImg",
                  on: {
                    touchmove: function (e) {
                      e.stopPropagation(), e.preventDefault(), (arguments[0] = e = t.$handleEvent(e));
                    },
                  },
                },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "mask",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.close.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-swiper",
                        {
                          staticClass: "mask-swiper",
                          attrs: { current: t.currentIndex, circular: t.circular, duration: t.duration },
                          on: {
                            change: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.changeSwiper.apply(void 0, arguments);
                            },
                          },
                        },
                        t._l(t.list, function (e, n) {
                          return i(
                            "v-uni-swiper-item",
                            { key: n, staticClass: "flex flex-column justify-center align-center" },
                            [
                              i("v-uni-image", {
                                staticClass: "mask-swiper-img",
                                attrs: { src: e.image, mode: "widthFix" },
                              }),
                              i(
                                "v-uni-view",
                                { staticClass: "mask_sku" },
                                [
                                  i("v-uni-text", { staticClass: "sku_name" }, [t._v(t._s(e.suk))]),
                                  i("v-uni-text", { staticClass: "sku_price" }, [
                                    t._v(t._s(t.$t("￥")) + t._s(e.price)),
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
                    ],
                    1
                  ),
                  t.list.length > 0
                    ? i("v-uni-view", { staticClass: "pagebox" }, [
                        t._v(t._s(Number(t.currentIndex) + 1) + " / " + t._s(t.list.length)),
                      ])
                    : t._e(),
                ],
                1
              )
            : t._e();
        },
        a = [];
    },
    "451f": function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.previewImg[data-v-82513238]{position:fixed;top:0;left:0;z-index:300;width:100%;height:100%}.previewImg .mask[data-v-82513238]{display:flex;justify-content:center;align-items:center;background-color:#000;opacity:1;z-index:8;width:100%;height:100%}.previewImg .mask-swiper[data-v-82513238]{width:100%;height:100%}.previewImg .mask-swiper-img[data-v-82513238]{width:100%}.previewImg .pagebox[data-v-82513238]{position:absolute;width:100%;bottom:%?20?%;z-index:300;color:#fff;text-align:center}.mask_sku[data-v-82513238]{color:#fff;max-width:80%;z-index:300;text-align:center;display:flex;flex-direction:column;align-items:center;margin-top:%?30?%}.mask_sku .sku_name[data-v-82513238]{font-size:12px;border:1px solid #fff;padding:%?10?% %?30?% %?10?%;border-radius:40px;box-sizing:border-box}.mask_sku .sku_price[data-v-82513238]{padding-top:10px}.font12[data-v-82513238]{font-size:%?24?%}.share_btn[data-v-82513238]{position:absolute;top:%?70?%;right:%?50?%;font-size:%?40?%;color:#fff;z-index:300}.flex-column[data-v-82513238]{flex-direction:column}.justify-center[data-v-82513238]{justify-content:center}.align-center[data-v-82513238]{align-items:center}',
          "",
        ]),
        (t.exports = e);
    },
    47059: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3"), i("acd8");
      var n = i("f9f0"),
        a =
          (getApp(),
          {
            name: "kefuIcon",
            props: {
              ids: { type: Number, default: 0 },
              routineContact: { type: Number, default: 0 },
              storeInfo: { type: Object, default: function () {} },
              goodsCon: { type: Number, default: 0 },
            },
            data: function () {
              return { top: "480" };
            },
            mounted: function () {
              this.top = parseFloat(window.innerHeight) - 200;
            },
            methods: {
              goCustomer: function () {
                (0, n.getCustomer)("/pages/extension/customer_list/chat?productId=".concat(this.ids));
              },
              setTouchMove: function (t) {
                t.touches[0].clientY < 480 && t.touches[0].clientY > 66 && (this.top = t.touches[0].clientY);
              },
            },
            created: function () {},
          });
      e.default = a;
    },
    "47fd": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("8713"),
        a = i("5f12");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      i("be15");
      var o = i("f0c5"),
        s = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "ad63bb64", null, !1, n["a"], void 0);
      e["default"] = s.exports;
    },
    5079: function (t, e, i) {
      "use strict";
      var n = i("a2c8"),
        a = i.n(n);
      a.a;
    },
    "54f8": function (t, e, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e) {
          var i = ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
          if (!i) {
            if (Array.isArray(t) || (i = (0, n.default)(t)) || (e && t && "number" === typeof t.length)) {
              i && (t = i);
              var a = 0,
                r = function () {};
              return {
                s: r,
                n: function () {
                  return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
                },
                e: function (t) {
                  throw t;
                },
                f: r,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var o,
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
              (c = !0), (o = t);
            },
            f: function () {
              try {
                s || null == i["return"] || i["return"]();
              } finally {
                if (c) throw o;
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
      var n = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i("dde1"));
    },
    5986: function (t, e, i) {
      "use strict";
      var n = i("d00a"),
        a = i.n(n);
      a.a;
    },
    "59bc": function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cartf[data-v-db860c98]{width:%?96?%;height:%?96?%;background:hsla(0,0%,100%,.8);box-shadow:0 %?3?% %?16?% rgba(0,0,0,.08);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:50%;font-size:%?47?%;color:#666;position:fixed;right:%?15?%;z-index:9}',
          "",
        ]),
        (t.exports = e);
    },
    "5f12": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("de0d"),
        a = i.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = a.a;
    },
    "64e6": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("d645"),
        a = i.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = a.a;
    },
    "6abe": function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dialog_nav[data-v-b7f0a252]{position:absolute;right:%?14?%;width:%?240?%;background:#fff;box-shadow:0 0 %?16?% rgba(0,0,0,.08);z-index:310;border-radius:%?14?%}.dialog_nav[data-v-b7f0a252]::before{content:"";width:0;height:0;border-left:%?15?% solid transparent;border-right:%?15?% solid transparent;border-bottom:%?30?% solid #fff;position:absolute;top:%?-20?%;right:%?32?%;border-bottom-color:#f2f2f2}.dialog_nav[data-v-b7f0a252]::after{content:"";width:0;height:0;border-left:%?15?% solid transparent;border-right:%?15?% solid transparent;border-bottom:%?30?% solid #fff;position:absolute;top:%?-20?%;right:%?32?%}.dialog_nav.dialogIndex[data-v-b7f0a252]{left:%?14?%}.dialog_nav.dialogIndex[data-v-b7f0a252]::before{left:%?-160?%!important}.dialog_nav.dialogGoods[data-v-b7f0a252]::before{left:%?-170?%}.dialog_nav_item[data-v-b7f0a252]{width:100%;height:%?84?%;line-height:%?84?%;padding:0 %?20?% 0;box-sizing:border-box;border-bottom:#eee;font-size:%?28?%;color:#333;position:relative;display:flex}.dialog_nav_item .iconfont[data-v-b7f0a252]{font-size:%?32?%;margin-right:%?26?%}.dialog_after[data-v-b7f0a252] ::after{content:"";position:absolute;width:90px;height:1px;background-color:#eee;bottom:0;right:0}',
          "",
        ]),
        (t.exports = e);
    },
    7429: function (t, e, i) {
      var n = i("db40");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("5d16f60e", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7971: function (t, e, i) {
      "use strict";
      var n = i("e8b9"),
        a = i.n(n);
      a.a;
    },
    "7a6b": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticClass: "evaluateWtapper" },
            t._l(t.reply, function (e, a) {
              return n(
                "v-uni-view",
                { key: a, staticClass: "evaluateItem" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "pic-text acea-row row-middle" },
                    [
                      n("v-uni-view", { staticClass: "pictrue" }, [n("v-uni-image", { attrs: { src: e.avatar } })], 1),
                      n(
                        "v-uni-view",
                        { staticClass: "acea-row row-middle" },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "acea-row row-middle", staticStyle: { "margin-right": "15rpx" } },
                            [
                              n("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(e.nickname))]),
                              e.is_money_level > 0
                                ? n(
                                    "v-uni-view",
                                    { staticClass: "vipImg" },
                                    [n("v-uni-image", { attrs: { src: i("2135") } })],
                                    1
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                          n("v-uni-view", { staticClass: "start", class: "star" + e.star }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n("v-uni-view", { staticClass: "time" }, [t._v(t._s(e.add_time) + " " + t._s(e.suk))]),
                  n("v-uni-view", { staticClass: "evaluate-infor" }, [t._v(t._s(e.comment))]),
                  n(
                    "v-uni-view",
                    { staticClass: "imgList acea-row" },
                    t._l(e.pics, function (e, i) {
                      return n(
                        "v-uni-view",
                        { key: i, staticClass: "pictrue" },
                        [
                          n("v-uni-image", {
                            staticClass: "image",
                            attrs: { src: e },
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)), t.getpreviewImage(a, i);
                              },
                            },
                          }),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  e.merchant_reply_content
                    ? n(
                        "v-uni-view",
                        { staticClass: "reply" },
                        [
                          n("v-uni-text", { staticClass: "font-num" }, [t._v(t._s(t.$t("店小二")))]),
                          t._v("：" + t._s(e.merchant_reply_content)),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              );
            }),
            1
          );
        },
        a = [];
    },
    "84d8": function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getBargainDetail = function (t, e) {
          return a.default.get("bargain/detail/".concat(t, "?bargainUid=").concat(e));
        }),
        (e.getBargainList = function (t) {
          return a.default.get("bargain/list", t, { noAuth: !0 });
        }),
        (e.getBargainPoster = function (t) {
          return a.default.post("bargain/poster", t);
        }),
        (e.getBargainPosterData = function (t) {
          return a.default.get("bargain/poster_info/" + t);
        }),
        (e.getBargainUserCancel = function (t) {
          return a.default.post("bargain/user/cancel", t);
        }),
        (e.getBargainUserList = function (t) {
          return a.default.get("bargain/user/list", t);
        }),
        (e.getCombinationBannerList = function (t) {
          return a.default.get("combination/banner_list", t, { noAuth: !0 });
        }),
        (e.getCombinationDetail = function (t) {
          return a.default.get("combination/detail/" + t);
        }),
        (e.getCombinationList = function (t) {
          return a.default.get("combination/list", t, { noAuth: !0 });
        }),
        (e.getCombinationPink = function (t) {
          return a.default.get("combination/pink/" + t);
        }),
        (e.getCombinationPoster = function (t) {
          return a.default.post("combination/poster", t);
        }),
        (e.getCombinationPosterData = function (t) {
          return a.default.get("combination/poster_info/" + t);
        }),
        (e.getIntegralOrderList = function (t) {
          return a.default.get("store_integral/order/list", t);
        }),
        (e.getIntegralProductDetail = function (t) {
          return a.default.get("store_integral/detail/" + t, {}, { noAuth: !0 });
        }),
        (e.getLogisticsDetails = function (t) {
          return a.default.get("store_integral/order/express/".concat(t));
        }),
        (e.getPink = function (t) {
          return a.default.get("pink", t, { noAuth: !0 });
        }),
        (e.getPresellList = function (t) {
          return a.default.get("advance/list", t);
        }),
        (e.getSeckillDetail = function (t, e) {
          return a.default.get("seckill/detail/" + t, e);
        }),
        (e.getSeckillIndexTime = function () {
          return a.default.get("seckill/index", {}, { noAuth: !0 });
        }),
        (e.getSeckillList = function (t, e) {
          return a.default.get("seckill/list/" + t, e, { noAuth: !0 });
        }),
        (e.getStoreIntegralList = function (t) {
          return a.default.get("store_integral/list", t);
        }),
        (e.integralOrderConfirm = function (t) {
          return a.default.post("store_integral/order/confirm", t);
        }),
        (e.integralOrderCreate = function (t) {
          return a.default.post("store_integral/order/create", t);
        }),
        (e.integralOrderDetails = function (t) {
          return a.default.get("store_integral/order/detail/".concat(t));
        }),
        (e.orderDel = function (t) {
          return a.default.post("store_integral/order/del", t);
        }),
        (e.orderTake = function (t) {
          return a.default.post("store_integral/order/take", t);
        }),
        (e.postBargainHelp = function (t) {
          return a.default.post("bargain/help", t);
        }),
        (e.postBargainHelpCount = function (t) {
          return a.default.post("bargain/help/count", t);
        }),
        (e.postBargainHelpList = function (t) {
          return a.default.post("bargain/help/list", t);
        }),
        (e.postBargainHelpPrice = function (t) {
          return a.default.post("bargain/help/price", t);
        }),
        (e.postBargainShare = function (t) {
          return a.default.post("bargain/share", { bargainId: t });
        }),
        (e.postBargainStart = function (t) {
          return a.default.post("bargain/start", { bargainId: t });
        }),
        (e.postBargainStartUser = function (t) {
          return a.default.post("bargain/start/user", t);
        }),
        (e.postCombinationRemove = function (t) {
          return a.default.post("combination/remove", t);
        }),
        (e.scombinationCode = function (t) {
          return a.default.get("combination/code/" + t);
        }),
        (e.seckillCode = function (t, e) {
          return a.default.get("seckill/code/" + t, e);
        }),
        i("99af");
      var a = n(i("fb81"));
    },
    8713: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
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
        a = [];
    },
    "9b07": function (t, e) {
      function i(t) {
        for (var e = {}, i = t.split(","), n = i.length; n--; ) e[i[n]] = !0;
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
    "9bdc": function (t, e, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("a9e3"),
        i("c975"),
        i("d81d");
      var n = {
        name: "cusPreviewImg",
        props: {
          list: {
            type: Array,
            required: !0,
            default: function () {
              return [];
            },
          },
          circular: { type: Boolean, default: !0 },
          duration: { type: Number, default: 500 },
        },
        data: function () {
          return { currentIndex: 0, showBox: !1 };
        },
        watch: { list: function (t) {} },
        methods: {
          changeSwiper: function (t) {
            (this.currentIndex = t.target.current), this.$emit("changeSwitch", t.target.current);
          },
          open: function (t) {
            t &&
              this.list.length &&
              ((this.currentIndex = this.list
                .map(function (t) {
                  return t.suk;
                })
                .indexOf(t)),
              (this.showBox = !0));
          },
          close: function () {
            this.showBox = !1;
          },
          shareFriend: function () {
            this.$emit("shareFriend");
          },
        },
      };
      e.default = n;
    },
    "9e3f": function (t, e, i) {
      "use strict";
      var n = i("ee56"),
        a = i.n(n);
      a.a;
    },
    a2c8: function (t, e, i) {
      var n = i("6abe");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("40b1b826", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    a6d3: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var n = {
        props: {
          reply: {
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
          getpreviewImage: function (t, e) {
            uni.previewImage({ urls: this.reply[t].pics, current: this.reply[t].pics[e] });
          },
        },
      };
      e.default = n;
    },
    ab5b: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("7a6b"),
        a = i("c368");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      i("5986");
      var o = i("f0c5"),
        s = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "231c52f6", null, !1, n["a"], void 0);
      e["default"] = s.exports;
    },
    ab7c: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("9bdc"),
        a = i.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = a.a;
    },
    b129: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("47059"),
        a = i.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = a.a;
    },
    b31a: function (t, e, i) {
      var n = i("451f");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("4e63b4dc", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    be15: function (t, e, i) {
      "use strict";
      var n = i("7429"),
        a = i.n(n);
      a.a;
    },
    bffb: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("0704"),
        a = i("64e6");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      i("9e3f");
      var o = i("f0c5"),
        s = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "f6e19cc2", null, !1, n["a"], void 0);
      e["default"] = s.exports;
    },
    c368: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("a6d3"),
        a = i.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = a.a;
    },
    c49f: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("v-uni-text", {
            staticClass: "acea-row row-center-wrapper cartf iconfont icon-kefu3",
            style: { top: t.top + "px" },
            on: {
              click: function (e) {
                (arguments[0] = e = t.$handleEvent(e)), t.goCustomer.apply(void 0, arguments);
              },
              touchmove: function (e) {
                e.stopPropagation(),
                  e.preventDefault(),
                  (arguments[0] = e = t.$handleEvent(e)),
                  t.setTouchMove.apply(void 0, arguments);
              },
            },
          });
        },
        a = [];
    },
    c4a7: function (t, e, i) {
      "use strict";
      var n = i("b31a"),
        a = i.n(n);
      a.a;
    },
    c602: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.product-bg[data-v-f6e19cc2]{width:100%;height:%?750?%;position:relative}.product-bg uni-swiper[data-v-f6e19cc2]{width:100%;height:100%;position:relative}.product-bg .slide-image[data-v-f6e19cc2]{width:100%;height:100%}.product-bg .pages[data-v-f6e19cc2]{position:absolute;background-color:#fff;height:%?34?%;padding:0 %?10?%;border-radius:%?3?%;right:%?30?%;bottom:%?30?%;line-height:%?34?%;font-size:%?24?%;color:#050505}#myVideo[data-v-f6e19cc2]{width:100%;height:100%}.goods-video[data-v-f6e19cc2]{width:100%;height:100%}.product-bg .item[data-v-f6e19cc2]{position:relative;width:100%;height:100%}.product-bg .item .poster[data-v-f6e19cc2]{position:absolute;top:0;left:0;height:%?750?%;width:100%;z-index:9}.product-bg .item .poster .image[data-v-f6e19cc2]{width:100%;height:100%}.product-bg .item .stop[data-v-f6e19cc2]{position:absolute;top:50%;left:50%;width:%?136?%;height:%?136?%;margin-top:%?-68?%;margin-left:%?-68?%;z-index:9}.product-bg .item .stop .image[data-v-f6e19cc2]{width:100%;height:100%}',
          "",
        ]),
        (t.exports = e);
    },
    d00a: function (t, e, i) {
      var n = i("e5f9");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("d8b4dcfa", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d645: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var n = {
        props: {
          imgUrls: {
            type: Array,
            default: function () {
              return [];
            },
          },
          videoline: { type: String, value: "" },
        },
        data: function () {
          return {
            indicatorDots: !0,
            circular: !0,
            autoplay: !0,
            interval: 3e3,
            duration: 500,
            currents: "1",
            controls: !0,
            isPlay: !0,
            videoContext: "",
          };
        },
        mounted: function () {
          this.videoline && this.imgUrls.shift(), (this.videoContext = uni.createVideoContext("myVideo", this));
        },
        methods: {
          videoPause: function (t) {},
          videoIsPause: function () {
            (this.videoContext = uni.createVideoContext("myVideo", this)), this.videoContext.pause();
          },
          bindPause: function () {
            this.$set(this, "controls", !1), this.videoContext.play(), (this.autoplay = !1);
          },
          change: function (t) {
            this.$set(this, "currents", t.detail.current + 1);
          },
          openImage: function (t) {
            this.$emit("showSwiperImg", t);
          },
        },
      };
      e.default = n;
    },
    db40: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
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
                    for (var i, n = "", a = 0; (i = e[a]); a++) {
                      if ("/" == i && "/" != e[a - 1] && "/" != e[a + 1]) break;
                      n += Math.random() > 0.5 ? i.toUpperCase() : i;
                    }
                    return (n += e.substr(a)), (this[t] = n);
                  }
                  if (((this[t] = e), e.includes("data:image"))) {
                    var r = e.match(/data:image\/(\S+?);(\S+?),(.+)/);
                    if (!r) return;
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
                n = (0, _createForOfIteratorHelper2.default)(t);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var a = e.value;
                  if ("text" == a.type) i += a.text;
                  else {
                    for (var r in ((i += "<" + a.name), a.attrs || {})) i += " " + r + '="' + a.attrs[r] + '"';
                    a.children && a.children.length
                      ? (i += ">" + this._Dom2Str(a.children) + "</" + a.name + ">")
                      : (i += ">");
                  }
                }
              } catch (o) {
                n.e(o);
              } finally {
                n.f();
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
                for (var n in cfg.userAgentStyles) i += "".concat(n, "{").concat(cfg.userAgentStyles[n], "}");
                for (n in this.tagStyle) i += "".concat(n, "{").concat(this.tagStyle[n], "}");
                (i += "</style>"), (t = i + t);
              }
              return t;
            },
            setContent: function (t, e) {
              var i = this;
              if (t) {
                var n = document.createElement("div");
                e
                  ? this.rtf
                    ? this.rtf.appendChild(n)
                    : (this.rtf = n)
                  : (this.rtf && this.rtf.parentNode.removeChild(this.rtf), (this.rtf = n)),
                  (n.innerHTML = this._handleHtml(t, e));
                for (var a, r = this.rtf.getElementsByTagName("style"), o = 0; (a = r[o++]); )
                  (a.innerHTML = a.innerHTML.replace(/body/g, "#rtf" + this._uid)), a.setAttribute("scoped", "true");
                !this._observer &&
                  this.lazyLoad &&
                  IntersectionObserver &&
                  (this._observer = new IntersectionObserver(
                    function (t) {
                      for (var e, n = 0; (e = t[n++]); )
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
                for (var u, l = this.rtf.getElementsByTagName("img"), d = 0, f = 0; (u = l[d]); d++) {
                  u.style.maxWidth = "100%";
                  var p = u.getAttribute("src");
                  this.domain &&
                    p &&
                    ("/" == p[0]
                      ? "/" == p[1]
                        ? (u.src = (this.domain.includes("://") ? this.domain.split("://")[0] : "") + ":" + p)
                        : (u.src = this.domain + p)
                      : p.includes("://") || (u.src = this.domain + "/" + p)),
                    u.hasAttribute("ignore") ||
                      "A" == u.parentElement.nodeName ||
                      ((u.i = f++),
                      s.imgList.push(u.src || u.getAttribute("data-src")),
                      (u.onclick = function () {
                        var t = !0;
                        (this.ignore = function () {
                          return (t = !1);
                        }),
                          s.$emit("imgtap", this),
                          t && uni.previewImage({ current: this.i, urls: s.imgList });
                      })),
                    (u.onerror = function () {
                      s.$emit("error", { source: "img", target: this });
                    }),
                    s.lazyLoad &&
                      this._observer &&
                      u.src &&
                      0 != u.i &&
                      (u.setAttribute("data-src", u.src), u.removeAttribute("src"), this._observer.observe(u));
                }
                var h,
                  g = this.rtf.getElementsByTagName("a"),
                  v = (0, _createForOfIteratorHelper2.default)(g);
                try {
                  for (v.s(); !(h = v.n()).done; ) {
                    var m = h.value;
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
                } catch (A) {
                  v.e(A);
                } finally {
                  v.f();
                }
                var b = this.rtf.getElementsByTagName("video");
                s.videoContexts = b;
                for (var _, x = 0; (_ = b[x++]); )
                  (_.style.maxWidth = "100%"),
                    (_.style.height = "auto"),
                    (_.onerror = function () {
                      s.$emit("error", { source: "video", target: this });
                    }),
                    (_.onplay = function () {
                      if (s.autopause) for (var t, e = 0; (t = s.videoContexts[e++]); ) t != this && t.pause();
                    });
                var w,
                  y,
                  k = this.rtf.getElementsByTagName("audios"),
                  C = (0, _createForOfIteratorHelper2.default)(k);
                try {
                  for (C.s(); !(w = C.n()).done; ) {
                    var I = w.value;
                    I.onerror = function () {
                      s.$emit("error", { source: "audio", target: this });
                    };
                  }
                } catch (A) {
                  C.e(A);
                } finally {
                  C.f();
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
    e1bd: function (t, e, i) {
      t.exports = i.p + "static/images/stop.png";
    },
    e29f: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [{ name: "show", rawName: "v-show", value: t.currentPage, expression: "currentPage" }],
              staticClass: "animated dialog_nav",
              class: [t.goodList ? "dialogIndex" : "", t.goodsShow ? "dialogGoods" : "", (t.currentPage, "")],
              style: { top: t.navH + 15 + "rpx" },
            },
            t._l(t.selectNavList, function (e, n) {
              return i(
                "v-uni-view",
                {
                  key: n,
                  staticClass: "dialog_nav_item",
                  class: e.after,
                  on: {
                    click: function (i) {
                      (arguments[0] = i = t.$handleEvent(i)), t.linkPage(e.url);
                    },
                  },
                },
                [
                  i("v-uni-text", { staticClass: "iconfont", class: e.icon }),
                  i("v-uni-text", { staticClass: "pl-20" }, [t._v(t._s(e.name))]),
                ],
                1
              );
            }),
            1
          );
        },
        a = [];
    },
    e5f9: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.vipImg[data-v-231c52f6]{width:%?68?%;height:%?27?%}.vipImg uni-image[data-v-231c52f6]{width:100%;height:100%;margin-left:%?10?%}.evaluateWtapper .evaluateItem[data-v-231c52f6]{background-color:#fff;padding-bottom:%?25?%}.evaluateWtapper .evaluateItem ~ .evaluateItem[data-v-231c52f6]{border-top:%?1?% solid #f5f5f5}.evaluateWtapper .evaluateItem .pic-text[data-v-231c52f6]{font-size:%?26?%;color:#282828;height:%?95?%;padding:0 %?30?%}.evaluateWtapper .evaluateItem .pic-text .pictrue[data-v-231c52f6]{width:%?60?%;height:%?60?%;margin-right:%?20?%;border-radius:50%}.evaluateWtapper .evaluateItem .pic-text .pictrue uni-image[data-v-231c52f6]{width:100%;height:100%;border-radius:50%}.evaluateWtapper .evaluateItem .pic-text .name[data-v-231c52f6]{max-width:%?450?%;font-size:%?30?%}.evaluateWtapper .evaluateItem .time[data-v-231c52f6]{font-size:%?24?%;color:#82848f;padding:0 %?30?%}.evaluateWtapper .evaluateItem .evaluate-infor[data-v-231c52f6]{font-size:%?28?%;color:#282828;margin-top:%?19?%;padding:0 %?30?%}.evaluateWtapper .evaluateItem .imgList[data-v-231c52f6]{padding:0 %?30?% 0 %?15?%;margin-top:%?25?%}.evaluateWtapper .evaluateItem .imgList .pictrue[data-v-231c52f6]{width:%?156?%;height:%?156?%;margin:0 0 %?15?% %?15?%}.evaluateWtapper .evaluateItem .imgList .pictrue uni-image[data-v-231c52f6]{width:100%;height:100%;background-color:#f7f7f7}.evaluateWtapper .evaluateItem .reply[data-v-231c52f6]{font-size:%?26?%;color:#454545;background-color:#f7f7f7;border-radius:%?5?%;margin:%?20?% %?30?% 0 %?30?%;padding:%?20?%;position:relative}.evaluateWtapper .evaluateItem .reply[data-v-231c52f6]::before{content:"";width:0;height:0;border-left:%?20?% solid transparent;border-right:%?20?% solid transparent;border-bottom:%?30?% solid #f7f7f7;position:absolute;top:%?-14?%;left:%?40?%}',
          "",
        ]),
        (t.exports = e);
    },
    e8b9: function (t, e, i) {
      var n = i("59bc");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("13aad228", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ee56: function (t, e, i) {
      var n = i("c602");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("3e8eaa88", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f2df: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("3f8e"),
        a = i.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = a.a;
    },
  },
]);
