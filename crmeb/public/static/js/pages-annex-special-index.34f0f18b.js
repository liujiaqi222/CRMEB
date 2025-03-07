(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-annex-special-index"],
  {
    "1f21": function (t, i, e) {
      "use strict";
      e.r(i);
      var o = e("a293"),
        a = e.n(o);
      for (var n in o)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return o[t];
            });
          })(n);
      i["default"] = a.a;
    },
    7267: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return o;
      }),
        e.d(i, "c", function () {
          return a;
        }),
        e.d(i, "a", function () {});
      var o = function () {
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
                              t._l(t.styleConfig, function (i, o) {
                                return e(
                                  "v-uni-view",
                                  { key: o },
                                  [
                                    e(i.name, {
                                      tag: "component",
                                      attrs: {
                                        index: o,
                                        dataConfig: i,
                                        tempArr: t.tempArr,
                                        iSshowH: t.iSshowH,
                                        isSortType: t.isSortType,
                                        isFixed: t.isFixed,
                                        isSpe: 1,
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
                                                t._l(t.sortList.children, function (i, o) {
                                                  return e(
                                                    "v-uni-view",
                                                    {
                                                      key: o,
                                                      staticClass: "sort-item",
                                                      class: { on: t.curSort == o },
                                                      on: {
                                                        click: function (e) {
                                                          (arguments[0] = e = t.$handleEvent(e)), t.changeSort(i, o);
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
                                            t._l(t.goodList, function (i, o) {
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
        a = [];
    },
    a293: function (t, i, e) {
      "use strict";
      e("7a82");
      var o = e("ee27").default;
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0),
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
      var a,
        n = o(e("fc11")),
        s = o(e("f3f3")),
        r = o(e("19b6")),
        c = o(e("64ec")),
        d = e("5743"),
        u = o(e("fa8a")),
        l = e("26cb"),
        g = e("2a39"),
        p = e("6557"),
        b = (e("39ed"), e("86eb")),
        f = e("00a0"),
        h = o(e("605de")),
        v = o(e("c986")),
        w = o(e("7992")),
        m =
          (getApp(),
          (a = {
            computed: (0, l.mapGetters)(["isLogin", "uid"]),
            mixins: [r.default],
            components: (0, s.default)(
              { recommend: w.default, Loading: v.default, pageFoot: h.default, couponWindow: c.default },
              u.default
            ),
          }),
          (0, n.default)(a, "computed", (0, l.mapGetters)(["isLogin", "cartNum"])),
          (0, n.default)(a, "data", function () {
            return {
              imgHost: f.HTTP_REQUEST_URL,
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
          (0, n.default)(a, "onPullDownRefresh", function () {
            this.diyData();
          }),
          (0, n.default)(a, "onLoad", function (t) {
            var i = this;
            this.$nextTick(function () {
              uni.getSystemInfoSync({
                success: function (t) {
                  i.windowHeight = t.windowHeight;
                },
              });
            });
            t.state, t.scope;
            (this.pageId = t.id),
              uni.setNavigationBarTitle({ title: this.$t("专题栏") }),
              uni.getLocation({
                type: "wgs84",
                success: function (t) {
                  try {
                    uni.setStorageSync("user_latitude", t.latitude), uni.setStorageSync("user_longitude", t.longitude);
                  } catch (i) {}
                },
              }),
              this.diyData(),
              this.getIndexData();
            var e = getCurrentPages(),
              o = e[e.length - 1].route;
            this.activeRouter = "/" + o + "?id=" + this.pageId;
          }),
          (0, n.default)(a, "watch", {
            isLogin: {
              deep: !0,
              handler: function (t, i) {
                var e = new Date().toLocaleDateString();
                if (t) {
                  try {
                    var o = uni.getStorageSync("oldDate") || "";
                  } catch (a) {}
                  o != e && this.getCoupon();
                }
              },
            },
          }),
          (0, n.default)(a, "onReady", function () {}),
          (0, n.default)(a, "methods", {
            reconnect: function () {
              uni.showLoading({ title: this.$t("加载中") }), this.diyData(), this.getIndexData();
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
              (0, p.goShopDetail)(t, this.uid).then(function (i) {
                uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
              });
            },
            get_host_product: function () {
              var t = this;
              t.hotScroll ||
                (0, g.getProductHot)(t.hotPage, t.hotLimit).then(function (i) {
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
                  ? (this.sortAll.forEach(function (e, o) {
                      e.id == t && (i.$set(i, "sortList", e), (i.sid = e.children.length ? e.children[0].id : ""));
                    }),
                    (this.goodList = []),
                    (this.goodPage = 1),
                    this.$nextTick(function () {
                      "" != i.sortList && i.getGoodsList();
                    }))
                  : (0, g.getCategoryList)().then(function (e) {
                      (i.sortAll = e.data),
                        e.data.forEach(function (e, o) {
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
                (0, g.getProductslist)({
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
                (0, d.getCouponNewUser)().then(function (i) {
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
                : (0, d.getCouponV2)().then(function (i) {
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
                o = window.location.search.substr(1).match(i),
                a = window.location.pathname.substr(1).match(e);
              return null != o ? unescape(o[2]) : null != a ? unescape(a[2]) : null;
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
              (0, d.getDiy)(this.pageId)
                .then(function (e) {
                  uni.hideLoading(),
                    uni.setStorageSync("DIY_DATA", e.data),
                    setTimeout(function () {
                      t.isNodes++;
                    }, 0),
                    (t.errorNetwork = !1);
                  var o = e.data;
                  o.is_bg_color && (t.bgColor = o.color_picker),
                    o.is_bg_pic && ((t.bgPic = o.bg_pic), (t.bgTabVal = o.bg_tab_val)),
                    (t.pageShow = o.is_show),
                    uni.setNavigationBarTitle({ title: t.$t(e.data.title) });
                  var a = [],
                    n = i.objToArr(e.data.value);
                  n.forEach(function (e, o, n) {
                    "headerSerch" == e.name && (t.isHeaderSerch = !0),
                      "promotionList" == e.name &&
                        ((i.numConfig = e.numConfig.val),
                        (i.goodType = e.tabConfig.list[0].link.activeVal),
                        i.getGroomList()),
                      (a = n);
                  }),
                    a.sort(function (t, i) {
                      return t.timestamp - i.timestamp;
                    }),
                    (i.styleConfig = a),
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
                : (0, b.toLogin)();
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
                void (0, g.getGroomList)(e, { page: i.page, limit: this.numConfig })
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
              (0, p.goShopDetail)(t, this.$store.state.app.uid).then(function (i) {
                uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
              });
            },
            onsollBotton: function () {
              0 == this.isSortType || this.getGoodsList();
            },
          }),
          (0, n.default)(a, "onReachBottom", function () {}),
          (0, n.default)(a, "onPageScroll", function (t) {
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
          a);
      i.default = m;
    },
    aa33: function (t, i, e) {
      var o = e("24fb");
      (i = o(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.pictrue_log_class[data-v-abb9eb9a]{background-color:var(--view-theme)}.page[data-v-abb9eb9a]{padding-bottom:50px}.ysize[data-v-abb9eb9a]{background-size:100%}.fullsize[data-v-abb9eb9a]{background-size:100% 100%}.repeat[data-v-abb9eb9a]{background-repeat:repeat}.noRepeat[data-v-abb9eb9a]{background-repeat:no-repeat}.privacy-wrapper[data-v-abb9eb9a]{z-index:999;position:fixed;left:0;top:0;width:100%;height:100%;background:#7f7f7f}.privacy-wrapper .privacy-box[data-v-abb9eb9a]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?560?%;padding:%?50?% %?45?% 0;background:#fff;border-radius:%?20?%}.privacy-wrapper .privacy-box .title[data-v-abb9eb9a]{text-align:center;font-size:%?32?%;text-align:center;color:#333;font-weight:700}.privacy-wrapper .privacy-box .content[data-v-abb9eb9a]{margin-top:%?20?%;line-height:1.5;font-size:%?26?%;color:#666}.privacy-wrapper .privacy-box .content uni-navigator[data-v-abb9eb9a]{display:inline-block;color:#e93323}.privacy-wrapper .privacy-box .btn-box[data-v-abb9eb9a]{margin-top:%?40?%;text-align:center;font-size:%?30?%}.privacy-wrapper .privacy-box .btn-box .btn-item[data-v-abb9eb9a]{height:%?82?%;line-height:%?82?%;background:linear-gradient(90deg,#f67a38,#f11b09);color:#fff;border-radius:%?41?%}.privacy-wrapper .privacy-box .btn-box .btn[data-v-abb9eb9a]{padding:%?30?% 0}.error-network[data-v-abb9eb9a]{position:fixed;left:0;top:0;display:flex;flex-direction:column;align-items:center;width:100%;height:100%;padding-top:%?40?%;background:#fff}.error-network uni-image[data-v-abb9eb9a]{width:%?414?%;height:%?336?%}.error-network .title[data-v-abb9eb9a]{position:relative;top:%?-40?%;font-size:%?32?%;color:#666}.error-network .con[data-v-abb9eb9a]{font-size:%?24?%;color:#999}.error-network .con .label[data-v-abb9eb9a]{margin-bottom:%?20?%}.error-network .con .item[data-v-abb9eb9a]{margin-bottom:%?20?%}.error-network .btn[data-v-abb9eb9a]{display:flex;align-items:center;justify-content:center;width:%?508?%;height:%?86?%;margin-top:%?100?%;border:1px solid #d74432;color:#e93323;font-size:%?30?%;border-radius:%?120?%}.sort-product[data-v-abb9eb9a]{margin-top:%?20?%}.sort-product .sort-box[data-v-abb9eb9a]{display:flex;width:100%;border-radius:%?16?%;padding:%?30?% 0}.sort-product .sort-box .sort-item[data-v-abb9eb9a]{width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0}.sort-product .sort-box .sort-item uni-image[data-v-abb9eb9a]{width:%?90?%;height:%?90?%;border-radius:50%}.sort-product .sort-box .sort-item .txt[data-v-abb9eb9a]{color:#272727;font-size:%?24?%;margin-top:%?10?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:%?140?%;text-align:center}.sort-product .sort-box .sort-item .pictrues[data-v-abb9eb9a]{width:%?90?%;height:%?90?%;background:#f8f8f8;border-radius:50%;margin:0 auto}.sort-product .sort-box .sort-item .icon-gengduo1[data-v-abb9eb9a]{color:#333}.sort-product .sort-box .sort-item.on .txt[data-v-abb9eb9a]{color:#fc4141}.sort-product .sort-box .sort-item.on uni-image[data-v-abb9eb9a]{border:1px solid #fc4141}.sort-product .product-list[data-v-abb9eb9a]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?30?%;padding:0 %?20?%}.sort-product .product-list .product-item[data-v-abb9eb9a]{position:relative;width:%?344?%;background:#fff;border-radius:%?10?%;margin-bottom:%?20?%;display:flex;flex-direction:column}.sort-product .product-list .product-item uni-image[data-v-abb9eb9a]{width:100%;height:%?344?%;border-radius:%?10?% %?10?% 0 0}.sort-product .product-list .product-item .info[data-v-abb9eb9a]{flex:1;padding:%?14?% %?16?%;display:flex;flex-direction:column;justify-content:space-between}.sort-product .product-list .product-item .info .title[data-v-abb9eb9a]{font-size:%?28?%}.sort-product .product-list .product-item .info .price-box[data-v-abb9eb9a]{font-size:%?34?%;font-weight:700;margin-top:8px;color:#fc4141}.sort-product .product-list .product-item .info .price-box uni-text[data-v-abb9eb9a]{font-size:%?26?%}.emptyBox[data-v-abb9eb9a]{text-align:center;padding-top:%?20?%}.emptyBox .tips[data-v-abb9eb9a]{color:#aaa;font-size:%?26?%;padding-bottom:%?20?%}.emptyBox uni-image[data-v-abb9eb9a]{width:%?414?%;height:%?304?%}.site-config[data-v-abb9eb9a]{margin-top:%?40?%;font-size:%?24?%;text-align:center;color:#666}.site-config.fixed[data-v-abb9eb9a]{position:fixed;bottom:69px;left:0;width:100%}',
          "",
        ]),
        (t.exports = i);
    },
    aa54: function (t, i, e) {
      "use strict";
      e.r(i);
      var o = e("7267"),
        a = e("1f21");
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(n);
      e("c808");
      var s = e("f0c5"),
        r = Object(s["a"])(a["default"], o["b"], o["c"], !1, null, "abb9eb9a", null, !1, o["a"], void 0);
      i["default"] = r.exports;
    },
    c808: function (t, i, e) {
      "use strict";
      var o = e("d5f7"),
        a = e.n(o);
      a.a;
    },
    d5f7: function (t, i, e) {
      var o = e("aa33");
      o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
      var a = e("4f06").default;
      a("32ecc6a0", o, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
