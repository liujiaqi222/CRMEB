(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-points_mall-integral_goods_details"],
  {
    "0be89": function (t, e, i) {
      "use strict";
      i("7a82");
      var a = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var o = a(i("fc11"));
      i("a9e3"), i("a4d3"), i("e01a"), i("ac1f"), i("5319"), i("14d9"), i("99af");
      var r,
        n = i("26cb"),
        s = i("84d8"),
        c = a(i("bffb")),
        u = a(i("dabf")),
        d = a(i("ab5b")),
        l = a(i("138b")),
        h = a(i("47fd")),
        p = a(i("80f6")),
        f = (i("4e39"), i("86eb")),
        v = (i("d1ea"), a(i("19b6"))),
        b = a(i("3a6e")),
        m = a(i("3d2e")),
        g = getApp(),
        w = uni.getSystemInfoSync().statusBarHeight + "px",
        x =
          ((r = {
            computed: (0, n.mapGetters)(["isLogin"]),
            mixins: [v.default],
            data: function () {
              return {
                dataShow: 0,
                id: 0,
                time: 0,
                countDownHour: "00",
                countDownMinute: "00",
                countDownSecond: "00",
                storeInfo: [],
                imgUrls: [],
                parameter: { navbar: "1", return: "1", title: this.$t("抢购详情页"), color: !1 },
                attribute: { cartAttr: !1, productAttr: [], productSelect: {} },
                productValue: [],
                isOpen: !1,
                attr: this.$t("请选择"),
                attrValue: "",
                status: 1,
                isAuto: !1,
                isShowAuth: !1,
                iShidden: !1,
                limitNum: 1,
                iSplus: !1,
                replyCount: 0,
                reply: [],
                replyChance: 0,
                navH: "",
                navList: [this.$t("商品"), this.$t("详情")],
                opacity: 0,
                scrollY: 0,
                topArr: [],
                toView: "",
                height: 0,
                heightArr: [],
                lock: !1,
                scrollTop: 0,
                tagStyle: { img: "width:100%;display:block;", table: "width:100%", video: "width:100%" },
                datatime: "",
                navActive: 0,
                meunHeight: 0,
                backH: "",
                posters: !1,
                weixinStatus: !1,
                posterImageStatus: !1,
                storeImage: "",
                PromotionCode: "",
                posterImage: "",
                actionSheetHidden: !1,
                cart_num: 1,
                homeTop: 20,
                returnShow: !0,
                H5ShareBox: !1,
                routineContact: 0,
                skuArr: [],
                selectSku: {},
                currentPage: !1,
                sysHeight: w,
              };
            },
            components: {
              productConSwiper: c.default,
              productWindow: u.default,
              userEvaluation: d.default,
              kefuIcon: l.default,
              "jyf-parser": h.default,
              countDown: p.default,
              cusPreviewImg: b.default,
              homeList: m.default,
            },
          }),
          (0, o.default)(r, "computed", (0, n.mapGetters)(["isLogin"])),
          (0, o.default)(r, "watch", {
            isLogin: {
              handler: function (t, e) {
                t && this.getIntegralProductDetail();
              },
              deep: !0,
            },
          }),
          (0, o.default)(r, "onLoad", function (t) {
            var e = this,
              i = getCurrentPages();
            (e.returnShow = 1 !== i.length),
              uni.getSystemInfoSync({
                success: function (t) {
                  (e.height = t.windowHeight), t.statusBarHeight;
                },
              }),
              (e.navH = 96),
              t.id && ((this.id = t.id), (this.datatime = Number(t.time)), (this.status = t.status)),
              this.isLogin ? this.getIntegralProductDetail() : (0, f.toLogin)(),
              this.$nextTick(function () {});
          }),
          (0, o.default)(r, "onNavigationBarButtonTap", function (t) {
            this.currentPage = !this.currentPage;
          }),
          (0, o.default)(r, "methods", {
            moreNav: function () {
              this.currentPage = !this.currentPage;
            },
            iptCartNum: function (t) {
              this.$set(this.attribute.productSelect, "cart_num", t), this.$set(this, "cart_num", t);
            },
            returns: function () {
              return history.back();
            },
            onLoadFun: function (t) {
              this.isAuto && ((this.isAuto = !1), (this.isShowAuth = !1), this.getIntegralProductDetail());
            },
            getIntegralProductDetail: function () {
              var t = this,
                e = this;
              (0, s.getIntegralProductDetail)(e.id)
                .then(function (i) {
                  t.dataShow = 1;
                  var a = i.data.storeInfo.title;
                  for (var o in ((t.storeInfo = i.data.storeInfo),
                  (t.imgUrls = i.data.storeInfo.images),
                  (t.storeInfo.description = t.storeInfo.description.replace(
                    /<img/gi,
                    '<img style="max-width:100%;height:auto;float:left;display:block" '
                  )),
                  (t.attribute.productAttr = i.data.productAttr),
                  (t.productValue = i.data.productValue),
                  (t.attribute.productSelect.num = i.data.storeInfo.num),
                  (t.replyCount = i.data.replyCount),
                  (t.reply = i.data.reply ? [i.data.reply] : []),
                  (t.replyChance = i.data.replyChance),
                  (e.routineContact = Number(i.data.routine_contact_type)),
                  i.data.productValue)) {
                    var r = i.data.productValue[o];
                    e.skuArr.push(r);
                  }
                  t.$set(t, "selectSku", e.skuArr[0]),
                    uni.setNavigationBarTitle({ title: a.substring(0, 7) + "..." }),
                    (t.PromotionCode = i.data.storeInfo.code_base),
                    (e.storeImage = e.storeInfo.image),
                    e.DefaultSelect();
                })
                .catch(function (t) {
                  e.$util.Tips({ title: t }, { tab: 3 });
                });
            },
            setShare: function () {
              this.$wechat.isWeixin() &&
                this.$wechat
                  .wechatEvevt(
                    [
                      "updateAppMessageShareData",
                      "updateTimelineShareData",
                      "onMenuShareAppMessage",
                      "onMenuShareTimeline",
                    ],
                    {
                      desc: this.storeInfo.info,
                      title: this.storeInfo.title,
                      link: location.href,
                      imgUrl: this.storeInfo.image,
                    }
                  )
                  .then(function (t) {})
                  .catch(function (t) {});
            },
            DefaultSelect: function () {
              var t = this.attribute.productAttr,
                e = [];
              for (var i in this.productValue)
                if (this.productValue[i].quota > 0) {
                  e = this.attribute.productAttr.length ? i.split(",") : [];
                  break;
                }
              for (var a = 0; a < t.length; a++) this.$set(t[a], "index", e[a]);
              var o = this.productValue[e.join(",")];
              o && t.length
                ? (this.$set(this.attribute.productSelect, "store_name", this.storeInfo.title),
                  this.$set(this.attribute.productSelect, "image", o.image),
                  this.$set(this.attribute.productSelect, "price", o.price),
                  this.$set(this.attribute.productSelect, "stock", o.stock),
                  this.$set(this.attribute.productSelect, "unique", o.unique),
                  this.$set(this.attribute.productSelect, "quota", o.quota),
                  this.$set(this.attribute.productSelect, "quota_show", o.quota_show),
                  this.$set(this.attribute.productSelect, "product_stock", o.product_stock),
                  this.$set(this.attribute.productSelect, "cart_num", 1),
                  this.$set(this, "attrValue", e.join(",")),
                  (this.attrValue = e.join(",")))
                : !o && t.length
                ? (this.$set(this.attribute.productSelect, "store_name", this.storeInfo.title),
                  this.$set(this.attribute.productSelect, "image", this.storeInfo.image),
                  this.$set(this.attribute.productSelect, "price", this.storeInfo.price),
                  this.$set(this.attribute.productSelect, "quota", 0),
                  this.$set(this.attribute.productSelect, "quota_show", 0),
                  this.$set(this.attribute.productSelect, "product_stock", 0),
                  this.$set(this.attribute.productSelect, "stock", 0),
                  this.$set(this.attribute.productSelect, "unique", ""),
                  this.$set(this.attribute.productSelect, "cart_num", 0),
                  this.$set(this, "attrValue", ""),
                  this.$set(this, "attrTxt", this.$t("请选择")))
                : o ||
                  t.length ||
                  (this.$set(this.attribute.productSelect, "store_name", this.storeInfo.title),
                  this.$set(this.attribute.productSelect, "image", this.storeInfo.image),
                  this.$set(this.attribute.productSelect, "price", this.storeInfo.price),
                  this.$set(this.attribute.productSelect, "stock", this.storeInfo.stock),
                  this.$set(this.attribute.productSelect, "quota", this.storeInfo.quota),
                  this.$set(this.attribute.productSelect, "product_stock", this.storeInfo.product_stock),
                  this.$set(this.attribute.productSelect, "unique", this.storeInfo.unique || ""),
                  this.$set(this.attribute.productSelect, "cart_num", 1),
                  this.$set(this.attribute.productSelect, "quota", o.quota),
                  this.$set(this.attribute.productSelect, "product_stock", o.product_stock),
                  this.$set(this, "attrValue", ""),
                  this.$set(this, "attrTxt", this.$t("请选择")));
            },
            selecAttr: function () {
              this.attribute.cartAttr = !0;
            },
            onMyEvent: function () {
              this.$set(this.attribute, "cartAttr", !1), this.$set(this, "isOpen", !1);
            },
            ChangeCartNum: function (t) {
              var e = this.productValue[this.attrValue];
              if (
                (this.cart_num &&
                  ((e.cart_num = this.cart_num), (this.attribute.productSelect.cart_num = this.cart_num)),
                void 0 !== e || this.attribute.productAttr.length || (e = this.attribute.productSelect),
                void 0 !== e)
              ) {
                e.stock, e.quota_show, e.quota, e.product_stock;
                var i = this.attribute.productSelect;
                this.storeInfo.num;
                if ((void 0 == e.cart_num && (e.cart_num = 1), t))
                  i.cart_num < this.attribute.productSelect.quota &&
                    (i.cart_num++,
                    this.$set(this.attribute.productSelect, "cart_num", i.cart_num),
                    this.$set(this, "cart_num", i.cart_num),
                    this.$set(this.attribute.productSelect, "cart_num", i.cart_num));
                else {
                  if (1 == i.cart_num) return;
                  i.cart_num--,
                    this.$set(this, "cart_num", i.cart_num),
                    this.$set(this.attribute.productSelect, "cart_num", i.cart_num);
                }
              }
            },
            attrVal: function (t) {
              this.attribute.productAttr[t.indexw].index = this.attribute.productAttr[t.indexw].attr_values[t.indexn];
            },
            ChangeAttr: function (t) {
              this.$set(this, "cart_num", 1);
              var e = this.productValue[t];
              this.$set(this, "selectSku", e),
                e
                  ? (this.$set(this.attribute.productSelect, "image", e.image),
                    this.$set(this.attribute.productSelect, "price", e.price),
                    this.$set(this.attribute.productSelect, "stock", e.stock),
                    this.$set(this.attribute.productSelect, "unique", e.unique),
                    this.$set(this.attribute.productSelect, "cart_num", 1),
                    this.$set(this.attribute.productSelect, "quota", e.quota),
                    this.$set(this.attribute.productSelect, "quota_show", e.quota_show),
                    this.$set(this, "attrValue", t),
                    (this.attrTxt = this.$t("已选择")))
                  : (this.$set(this.attribute.productSelect, "image", this.storeInfo.image),
                    this.$set(this.attribute.productSelect, "price", this.storeInfo.price),
                    this.$set(this.attribute.productSelect, "stock", 0),
                    this.$set(this.attribute.productSelect, "unique", ""),
                    this.$set(this.attribute.productSelect, "cart_num", 0),
                    this.$set(this.attribute.productSelect, "quota", 0),
                    this.$set(this.attribute.productSelect, "quota_show", 0),
                    this.$set(this, "attrValue", ""),
                    (this.attrTxt = this.$t("已选择")));
            },
            scroll: function (t) {
              var e = t.detail.scrollTop,
                i = e / 200;
              if (((i = i > 1 ? 1 : i), (this.opacity = i), (this.currentPage = !1), (this.scrollY = e), this.lock))
                this.lock = !1;
              else
                for (var a = 0; a < this.topArr.length; a++)
                  if (e < this.topArr[a] - g.globalData.navHeight / 2 + this.heightArr[a]) {
                    this.navActive = a;
                    break;
                  }
            },
            tap: function (t, e) {
              var i = t.id;
              e = e;
              (this.toView = i),
                (this.navActive = e),
                (this.lock = !0),
                (this.scrollTop = e > 0 ? this.topArr[e] - g.globalData.navHeight / 2 : this.topArr[e]);
            },
            showImg: function (t) {
              this.$refs.cusPreviewImg.open(this.selectSku.suk);
            },
            listenerActionSheet: function () {
              if (((this.currentPage = !1), !1 === this.isLogin)) (0, f.toLogin)();
              else {
                if (this.posterImage) return void (this.posters = !0);
                !0 === this.$wechat.isWeixin() && (this.weixinStatus = !0),
                  this.downloadFilePromotionCode(),
                  (this.posters = !0);
              }
            },
            changeSwitch: function (t) {
              var e = this.skuArr[t];
              this.$set(this, "selectSku", e);
              var i = e.suk.split(",");
              this.$set(this.attribute.productAttr[0], "index", i[0]),
                2 == i.length
                  ? (this.$set(this.attribute.productAttr[0], "index", i[0]),
                    this.$set(this.attribute.productAttr[1], "index", i[1]))
                  : 3 == i.length
                  ? (this.$set(this.attribute.productAttr[0], "index", i[0]),
                    this.$set(this.attribute.productAttr[1], "index", i[1]),
                    this.$set(this.attribute.productAttr[2], "index", i[2]))
                  : 4 == i.length &&
                    (this.$set(this.attribute.productAttr[0], "index", i[0]),
                    this.$set(this.attribute.productAttr[1], "index", i[1]),
                    this.$set(this.attribute.productAttr[2], "index", i[2]),
                    this.$set(this.attribute.productAttr[3], "index", i[3])),
                e &&
                  (this.$set(this.attribute.productSelect, "image", e.image),
                  this.$set(this.attribute.productSelect, "price", e.price),
                  this.$set(this.attribute.productSelect, "stock", e.stock),
                  this.$set(this.attribute.productSelect, "unique", e.unique),
                  this.$set(this.attribute.productSelect, "vipPrice", e.vipPrice),
                  this.$set(this, "attrTxt", this.$t("已选择")),
                  this.$set(this, "attrValue", e.suk));
            },
            goCat: function () {
              this.currentPage = !1;
              var t = this.productValue[this.attrValue];
              return (
                this.isOpen ? (this.attribute.cartAttr = !0) : (this.attribute.cartAttr = !this.attribute.cartAttr),
                !0 === this.attribute.cartAttr && 0 == this.isOpen
                  ? (this.isOpen = !0)
                  : this.attribute.productAttr.length && void 0 === t && 1 == this.isOpen
                  ? g.$util.Tips({ title: this.$t("请选择属性") })
                  : this.cart_num <= 0
                  ? g.$util.Tips({ title: this.$t("请选择数量") })
                  : ((this.isOpen = !1),
                    void uni.navigateTo({
                      url: "/pages/points_mall/integral_order?unique="
                        .concat(t.unique, "&num=")
                        .concat(this.cart_num || 1),
                    }))
              );
            },
          }),
          r);
      e.default = x;
    },
    2135: function (t, e, i) {
      t.exports = i.p + "static/images/svip.gif";
    },
    "23c2": function (t, e, i) {
      "use strict";
      var a = i("8074"),
        o = i.n(a);
      o.a;
    },
    "3a73": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("0be89"),
        o = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      e["default"] = o.a;
    },
    4207: function (t, e, i) {
      "use strict";
      var a = i("fcf1"),
        o = i.n(a);
      o.a;
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
                o = 0,
                r = 0;
              e > 0
                ? ((i = !0 === t.isDay ? Math.floor(e / 86400) : 0),
                  (a = Math.floor(e / 3600) - 24 * i),
                  (o = Math.floor(e / 60) - 24 * i * 60 - 60 * a),
                  (r = Math.floor(e) - 24 * i * 60 * 60 - 60 * a * 60 - 60 * o),
                  a <= 9 && (a = "0" + a),
                  o <= 9 && (o = "0" + o),
                  r <= 9 && (r = "0" + r),
                  (t.day = i),
                  (t.hour = a),
                  (t.minute = o),
                  (t.second = r))
                : ((t.day = "00"), (t.hour = "00"), (t.minute = "00"), (t.second = "00"));
            }
            e(), setInterval(e, 1e3);
          },
        },
      };
      e.default = a;
    },
    "5f5e": function (t, e, i) {
      var a = i("df7d");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var o = i("4f06").default;
      o("3da908b0", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "73c7": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return o;
      }),
        i.d(e, "c", function () {
          return r;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = { jyfParser: i("47fd").default },
        o = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            { style: t.colorStyle },
            [
              a(
                "v-uni-view",
                { staticClass: "product-con" },
                [
                  a(
                    "v-uni-view",
                    { staticClass: "navbar", style: { height: t.navH + "rpx", opacity: t.opacity } },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "navbarH", style: "height:" + t.navH + "rpx;" },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "navbarCon acea-row row-center-wrapper" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "header acea-row row-center-wrapper" },
                                [a("v-uni-view", { staticClass: "item line1" }, [t._v(t._s(t.storeInfo.title))])],
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
                  a(
                    "v-uni-view",
                    {
                      staticClass: "home-nav acea-row row-center-wrapper",
                      class: [t.opacity > 0.5 ? "on" : ""],
                      style: { top: t.homeTop + "rpx" },
                      attrs: { id: "home" },
                    },
                    [
                      a("v-uni-view", {
                        staticClass: "iconfont icon-fanhui2",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)), t.returns.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "v-uni-view",
                    {
                      staticClass: "home-nav right acea-row row-center-wrapper",
                      class: [t.opacity > 0.5 ? "on" : ""],
                      style: { top: t.homeTop + "rpx" },
                      attrs: { id: "home" },
                    },
                    [
                      a("v-uni-view", {
                        staticClass: "iconfont icon-gengduo2",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)), t.moreNav.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  a("homeList", {
                    attrs: {
                      navH: t.navH,
                      returnShow: t.returnShow,
                      currentPage: t.currentPage,
                      sysHeight: t.sysHeight,
                    },
                  }),
                  a(
                    "v-uni-scroll-view",
                    {
                      style: "height:" + t.height + "px;",
                      attrs: { "scroll-top": t.scrollTop, "scroll-y": "true", "scroll-with-animation": "true" },
                      on: {
                        scroll: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.scroll.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      a(
                        "v-uni-view",
                        { attrs: { id: "past0" } },
                        [
                          a("productConSwiper", { attrs: { imgUrls: t.imgUrls } }),
                          a(
                            "v-uni-view",
                            { staticClass: "nav acea-row row-between-wrapper" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "share acea-row row-between row-bottom" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "money font-color" },
                                    [
                                      a("v-uni-image", { attrs: { src: i("e310"), mode: "" } }),
                                      a("v-uni-text", {
                                        staticClass: "num",
                                        domProps: { textContent: t._s(t.storeInfo.price || 0) },
                                      }),
                                      t._v(t._s(t.$t("积分"))),
                                    ],
                                    1
                                  ),
                                  a("v-uni-view"),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            { staticClass: "wrapper" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "introduce acea-row row-between" },
                                [a("v-uni-view", { staticClass: "infor" }, [t._v(t._s(t.storeInfo.title))])],
                                1
                              ),
                              t.storeInfo.num > 0
                                ? a("v-uni-view", { staticClass: "limit_good" }, [
                                    t._v(
                                      t._s(t.$t("最多可兑换")) +
                                        ": " +
                                        t._s(t.storeInfo.num) +
                                        t._s(t.$t(t.storeInfo.unit_name))
                                    ),
                                  ])
                                : t._e(),
                              a(
                                "v-uni-view",
                                { staticClass: "label acea-row row-middle" },
                                [
                                  a("v-uni-view", { staticClass: "stock delete-line" }, [
                                    t._v(t._s(t.$t("划线价")) + "：" + t._s(t.storeInfo.product_price)),
                                  ]),
                                  a("v-uni-view", { staticClass: "stock" }, [
                                    t._v(t._s(t.$t("限量")) + ":\n\t\t\t\t\t\t\t\t" + t._s(t.storeInfo.quota_show)),
                                  ]),
                                  a("v-uni-view", { staticClass: "stock" }, [
                                    t._v(t._s(t.$t("已兑换")) + "：" + t._s(t.storeInfo.sales)),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          t.attribute.productAttr.length
                            ? a(
                                "v-uni-view",
                                {
                                  staticClass: "attribute acea-row row-between-wrapper",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.selecAttr.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "flex" },
                                    [
                                      a(
                                        "v-uni-view",
                                        { staticStyle: { display: "flex", "align-items": "center", width: "90%" } },
                                        [
                                          a("v-uni-view", { staticClass: "attr-txt" }, [t._v(t._s(t.attr) + "：")]),
                                          a(
                                            "v-uni-view",
                                            { staticClass: "atterTxt line1", staticStyle: { width: "82%" } },
                                            [t._v(t._s(t.attrValue))]
                                          ),
                                        ],
                                        1
                                      ),
                                      a("v-uni-view", { staticClass: "iconfont icon-jiantou" }),
                                    ],
                                    1
                                  ),
                                  t.skuArr.length > 1
                                    ? a(
                                        "v-uni-view",
                                        {
                                          staticClass: "acea-row row-between-wrapper",
                                          staticStyle: { "margin-top": "7px", "padding-left": "70px" },
                                        },
                                        [
                                          a(
                                            "v-uni-view",
                                            { staticClass: "flexs" },
                                            t._l(t.skuArr.slice(0, 4), function (t, e) {
                                              return a("v-uni-image", {
                                                key: e,
                                                staticClass: "attrImg",
                                                attrs: { src: t.image },
                                              });
                                            }),
                                            1
                                          ),
                                          a("v-uni-view", { staticClass: "switchTxt" }, [
                                            t._v(t._s(t.$t("共")) + t._s(t.skuArr.length) + t._s(t.$t("种规格可选"))),
                                          ]),
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
                      ),
                      a(
                        "v-uni-view",
                        { staticClass: "product-intro", attrs: { id: "past2" } },
                        [
                          a("v-uni-view", { staticClass: "title" }, [t._v(t._s(t.$t("产品介绍")))]),
                          a(
                            "v-uni-view",
                            { staticClass: "conter" },
                            [
                              a("jyf-parser", {
                                ref: "article",
                                attrs: { html: t.storeInfo.description, "tag-style": t.tagStyle },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-uni-view",
                    { staticClass: "footer acea-row row-between-wrapper" },
                    [
                      a(
                        "v-uni-navigator",
                        {
                          staticClass: "item",
                          attrs: { "hover-class": "none", "open-type": "switchTab", url: "/pages/index/index" },
                        },
                        [
                          a("v-uni-view", { staticClass: "iconfont icon-shouye6" }),
                          a("v-uni-view", { staticClass: "p_center" }, [t._v(t._s(t.$t("首页")))]),
                        ],
                        1
                      ),
                      t.attribute.productSelect.quota > 0 && t.attribute.productSelect.product_stock > 0
                        ? a(
                            "v-uni-view",
                            { staticClass: "bnt acea-row" },
                            [
                              a(
                                "v-uni-view",
                                {
                                  staticClass: "buy bnts",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goCat.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("立即兑换")))]
                              ),
                            ],
                            1
                          )
                        : a(
                            "v-uni-view",
                            { staticClass: "bnt acea-row" },
                            [a("v-uni-view", { staticClass: "bnts no-goods" }, [t._v(t._s(t.$t("无法兑换")))])],
                            1
                          ),
                    ],
                    1
                  ),
                ],
                1
              ),
              a("product-window", {
                attrs: { attr: t.attribute, limitNum: 1 },
                on: {
                  myevent: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.onMyEvent.apply(void 0, arguments);
                  },
                  ChangeAttr: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.ChangeAttr.apply(void 0, arguments);
                  },
                  ChangeCartNum: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.ChangeCartNum.apply(void 0, arguments);
                  },
                  attrVal: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.attrVal.apply(void 0, arguments);
                  },
                  iptCartNum: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.iptCartNum.apply(void 0, arguments);
                  },
                  getImg: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.showImg.apply(void 0, arguments);
                  },
                },
              }),
              a("cus-previewImg", {
                ref: "cusPreviewImg",
                attrs: { list: t.skuArr },
                on: {
                  changeSwitch: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.changeSwitch.apply(void 0, arguments);
                  },
                  shareFriend: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.listenerActionSheet.apply(void 0, arguments);
                  },
                },
              }),
              a("kefuIcon", { attrs: { ids: t.storeInfo.product_id, routineContact: t.routineContact } }),
            ],
            1
          );
        },
        r = [];
    },
    7562: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("73c7"),
        o = i("3a73");
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return o[t];
            });
          })(r);
      i("23c2");
      var n = i("f0c5"),
        s = Object(n["a"])(o["default"], a["b"], a["c"], !1, null, "643e2bcd", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    7683: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("9874"),
        o = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      e["default"] = o.a;
    },
    8074: function (t, e, i) {
      var a = i("dcf1");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var o = i("4f06").default;
      o("72b00833", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "80f6": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("f1fa"),
        o = i("e044");
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return o[t];
            });
          })(r);
      i("e6e8");
      var n = i("f0c5"),
        s = Object(n["a"])(o["default"], a["b"], a["c"], !1, null, "13279574", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    9874: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3"), i("14d9");
      var a = {
        props: {
          attr: { type: Object, default: function () {} },
          limitNum: { type: Number, value: 0 },
          isShow: { type: Number, value: 0 },
          iSbnt: { type: Number, value: 0 },
          iSplus: { type: Number, value: 0 },
          iScart: { type: Number, value: 0 },
          is_vip: { type: Number, value: 0 },
        },
        data: function () {
          return {};
        },
        mounted: function () {},
        methods: {
          getpreviewImage: function () {
            uni.previewImage({
              urls: this.attr.productSelect.image.split(","),
              current: this.attr.productSelect.image,
            });
          },
          goCat: function () {
            this.$emit("goCat");
          },
          bindCode: function (t) {
            this.$emit("iptCartNum", this.attr.productSelect.cart_num);
          },
          closeAttr: function () {
            this.$emit("myevent");
          },
          CartNumDes: function () {
            this.$emit("ChangeCartNum", !1);
          },
          CartNumAdd: function () {
            this.$emit("ChangeCartNum", !0);
          },
          tapAttr: function (t, e) {
            this.$emit("attrVal", { indexw: t, indexn: e }),
              this.$set(this.attr.productAttr[t], "index", this.attr.productAttr[t].attr_values[e]);
            var i = this.getCheckedValue().join(",");
            this.$emit("ChangeAttr", i);
          },
          showImg: function () {
            this.$emit("getImg");
          },
          getCheckedValue: function () {
            for (var t = this.attr.productAttr, e = [], i = 0; i < t.length; i++)
              for (var a = 0; a < t[i].attr_values.length; a++)
                t[i].index === t[i].attr_values[a] && e.push(t[i].attr_values[a]);
            return e;
          },
        },
      };
      e.default = a;
    },
    c2f9: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.vip-money[data-v-13aac904]{color:#282828;font-size:%?28?%;font-weight:700;margin-left:%?6?%}.vipImg[data-v-13aac904]{width:%?68?%;height:%?27?%}.vipImg uni-image[data-v-13aac904]{width:100%;height:100%}.product-window[data-v-13aac904]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:100;border-radius:%?16?% %?16?% 0 0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);padding-bottom:%?140?%;padding-bottom:calc(140rpx+ constant(safe-area-inset-bottom));padding-bottom:calc(%?140?% + env(safe-area-inset-bottom))}.product-window.on[data-v-13aac904]{-webkit-transform:translateZ(0);transform:translateZ(0)}.product-window.join[data-v-13aac904]{padding-bottom:%?30?%}.product-window.joinCart[data-v-13aac904]{padding-bottom:%?30?%;z-index:10000}.product-window .textpic[data-v-13aac904]{padding:0 %?130?% 0 %?30?%;margin-top:%?29?%;position:relative}.product-window .textpic .pictrue[data-v-13aac904]{width:%?150?%;height:%?150?%}.product-window .textpic .pictrue uni-image[data-v-13aac904]{width:100%;height:100%;border-radius:%?10?%}.product-window .textpic .text[data-v-13aac904]{width:%?410?%;font-size:%?32?%;color:#202020}.product-window .textpic .text .money[data-v-13aac904]{font-size:%?24?%;margin-top:%?40?%}.product-window .textpic .text .money .num[data-v-13aac904]{font-size:%?36?%}.product-window .textpic .text .money .stock[data-v-13aac904]{color:#999;margin-left:%?6?%}.product-window .textpic .iconfont[data-v-13aac904]{position:absolute;right:%?30?%;top:%?-5?%;font-size:%?35?%;color:#8a8a8a}.product-window .rollTop[data-v-13aac904]{max-height:%?520?%;overflow:auto;margin-top:%?36?%}.product-window .productWinList .item ~ .item[data-v-13aac904]{margin-top:%?36?%}.product-window .productWinList .item .title[data-v-13aac904]{font-size:%?30?%;color:#999;padding:0 %?30?%}.product-window .productWinList .item .listn[data-v-13aac904]{padding:0 %?30?% 0 %?16?%}.product-window .productWinList .item .listn .itemn[data-v-13aac904]{border:1px solid #f2f2f2;font-size:%?26?%;color:#282828;padding:%?7?% %?33?%;border-radius:%?25?%;margin:%?20?% 0 0 %?14?%;background-color:#f2f2f2}.product-window .productWinList .item .listn .itemn.on[data-v-13aac904]{color:var(--view-theme);background:var(--view-minorColorT);border-color:var(--view-theme)}.product-window .productWinList .item .listn .itemn.limit[data-v-13aac904]{color:#999;text-decoration:line-through}.product-window .cart[data-v-13aac904]{margin-top:%?36?%;padding:0 %?30?%}.product-window .cart .title[data-v-13aac904]{font-size:%?30?%;color:#999}.product-window .cart .carnum[data-v-13aac904]{height:%?54?%;margin-top:%?24?%}.product-window .cart .carnum .iconfont[data-v-13aac904]{font-size:%?25?%}.product-window .cart .carnum uni-view[data-v-13aac904]{width:%?84?%;text-align:center;height:100%;line-height:%?54?%;color:#282828;font-size:%?45?%}.product-window .cart .carnum .reduce[data-v-13aac904]{border-right:0;border-radius:%?6?% 0 0 %?6?%;line-height:%?48?%;font-size:%?60?%}.product-window .cart .carnum .reduce.on[data-v-13aac904]{color:#dedede}.product-window .cart .carnum .plus[data-v-13aac904]{border-left:0;border-radius:0 %?6?% %?6?% 0;line-height:%?46?%;color:#dedede}.product-window .cart .carnum .plus.on[data-v-13aac904]{color:#282828}.product-window .cart .carnum .num[data-v-13aac904]{background:#f2f2f2;color:#282828;font-size:%?28?%}.product-window .joinBnt[data-v-13aac904]{font-size:%?30?%;width:%?620?%;height:%?86?%;border-radius:%?50?%;text-align:center;line-height:%?86?%;color:#fff;margin:%?21?% auto 0 auto}.product-window .joinBnt.on[data-v-13aac904]{background-color:#bbb;color:#fff}',
          "",
        ]),
        (t.exports = e);
    },
    cbdd: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return o;
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
                  staticClass: "product-window",
                  class:
                    (!0 === t.attr.cartAttr ? "on" : "") +
                    " " +
                    (t.iSbnt ? "join" : "") +
                    " " +
                    (t.iScart ? "joinCart" : ""),
                },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "textpic acea-row row-between-wrapper" },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "pictrue",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.showImg();
                            },
                          },
                        },
                        [i("v-uni-image", { attrs: { src: t.attr.productSelect.image } })],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "text" },
                        [
                          i("v-uni-view", { staticClass: "line1" }, [t._v(t._s(t.attr.productSelect.store_name))]),
                          i(
                            "v-uni-view",
                            { staticClass: "money font-color" },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "acea-row row-middle" },
                                [
                                  i("v-uni-text", { staticClass: "num" }, [
                                    t._v(t._s(t.attr.productSelect.price) + t._s(t.$t("积分"))),
                                  ]),
                                ],
                                1
                              ),
                              t.isShow
                                ? i("v-uni-text", { staticClass: "stock" }, [
                                    t._v(t._s(t.$t("库存")) + ": " + t._s(t.attr.productSelect.stock)),
                                  ])
                                : t._e(),
                              t.limitNum
                                ? i("v-uni-text", { staticClass: "stock" }, [
                                    t._v(t._s(t.$t("剩余")) + ": " + t._s(t.attr.productSelect.quota)),
                                  ])
                                : t._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      i("v-uni-view", {
                        staticClass: "iconfont icon-guanbi",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)), t.closeAttr.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "rollTop" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "productWinList" },
                        t._l(t.attr.productAttr, function (e, a) {
                          return i(
                            "v-uni-view",
                            { key: a, staticClass: "item" },
                            [
                              i("v-uni-view", { staticClass: "title" }, [t._v(t._s(e.attr_name))]),
                              i(
                                "v-uni-view",
                                { staticClass: "listn acea-row row-middle" },
                                t._l(e.attr_value, function (o, r) {
                                  return i(
                                    "v-uni-view",
                                    {
                                      key: r,
                                      staticClass: "itemn",
                                      class: e.index === o.attr ? "on" : "",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e = t.$handleEvent(e)), t.tapAttr(a, r);
                                        },
                                      },
                                    },
                                    [t._v(t._s(o.attr))]
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
                ],
                1
              ),
              i("v-uni-view", {
                staticClass: "mask",
                attrs: { hidden: !1 === t.attr.cartAttr },
                on: {
                  touchmove: function (e) {
                    e.preventDefault(), (arguments[0] = e = t.$handleEvent(e));
                  },
                  click: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)), t.closeAttr.apply(void 0, arguments);
                  },
                },
              }),
            ],
            1
          );
        },
        o = [];
    },
    dabf: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("cbdd"),
        o = i("7683");
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return o[t];
            });
          })(r);
      i("4207");
      var n = i("f0c5"),
        s = Object(n["a"])(o["default"], a["b"], a["c"], !1, null, "13aac904", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    dcf1: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.generate-posters[data-v-643e2bcd]{width:100%;height:%?170?%;background-color:#fff;position:fixed;left:0;bottom:0;z-index:300;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);border-top:%?1?% solid #eee}.generate-posters.on[data-v-643e2bcd]{-webkit-transform:translateZ(0);transform:translateZ(0)}.generate-posters .item[data-v-643e2bcd]{flex:1;text-align:center;font-size:%?30?%}.generate-posters .item .iconfont[data-v-643e2bcd]{font-size:%?80?%;color:#5eae72}.generate-posters .item .iconfont.icon-haibao[data-v-643e2bcd]{color:#5391f1}.navbar .header[data-v-643e2bcd]{width:%?400?%;height:%?96?%;font-size:%?30?%;color:#050505;background-color:#fff}.icon-xiangzuo[data-v-643e2bcd]{top:%?30?%!important}.navbar .header .item[data-v-643e2bcd]{position:relative;margin:0 %?25?%}.navbar[data-v-643e2bcd]{position:fixed;background-color:#fff;top:0;left:0;z-index:99;width:100%}.navbar .navbarH[data-v-643e2bcd]{position:relative}.navbar .navbarH .navbarCon[data-v-643e2bcd]{position:absolute;bottom:0;height:%?100?%;width:100%}.icon-xiangzuo[data-v-643e2bcd]{\n  /* color: #000;\n\tposition: fixed;\n\tfont-size: 40rpx;\n\twidth: 100rpx;\n\theight: 56rpx;\n\tline-height: 54rpx;\n\tz-index: 1000;\n\tleft: 33rpx; */}.product-con .nav[data-v-643e2bcd]{width:100%;height:%?100?%;padding:0 %?30?%;box-sizing:border-box;background-color:#fff}.product-con .nav .money[data-v-643e2bcd]{font-size:%?28?%;color:#e93323;font-weight:700}.product-con .nav .money uni-image[data-v-643e2bcd]{width:%?34?%;height:%?34?%}.product-con .nav .money .num[data-v-643e2bcd]{font-size:%?48?%;padding-left:%?16?%}.product-con .nav .money .y-money[data-v-643e2bcd]{font-size:%?26?%;margin-left:%?10?%;text-decoration:line-through}.product-con .nav .timeItem[data-v-643e2bcd]{font-size:%?20?%;color:#fff;text-align:center}.product-con .nav .timeItem .timeCon[data-v-643e2bcd]{margin-top:%?10?%}.product-con .nav .timeItem .timeCon .num[data-v-643e2bcd]{padding:0 %?7?%;font-size:%?22?%;color:#ff3d3d;background-color:#fff;border-radius:%?2?%}.product-con .nav .timeState[data-v-643e2bcd]{font-size:%?28?%;color:#fff}.product-con .nav .iconfont[data-v-643e2bcd]{color:#fff;font-size:%?30?%;margin-left:%?20?%}.product-con .wrapper[data-v-643e2bcd]{padding:0 %?32?% %?32?% %?32?%;width:100%;box-sizing:border-box}.product-con .wrapper .introduce[data-v-643e2bcd]{margin:0}.limit_good[data-v-643e2bcd]{font-size:%?16?%;margin:%?10?% %?0?%;color:red}.product-con .wrapper .introduce .iconfont[data-v-643e2bcd]{font-size:%?37?%;color:#515151}.product-con .wrapper .label[data-v-643e2bcd]{display:flex;justify-content:space-between;margin:%?18?% 0 0 0;font-size:%?24?%;color:#82848f}.product-con .footer[data-v-643e2bcd]{padding:0 %?20?% 0 %?30?%;position:fixed;bottom:0;width:100%;box-sizing:border-box;background-color:#fff;z-index:277;border-top:%?1?% solid #f0f0f0;height:%?100?%;display:flex;align-items:center;flex-wrap:nowrap;height:calc(100rpx+ constant(safe-area-inset-bottom));height:calc(%?100?% + env(safe-area-inset-bottom))}.product-con .footer .item[data-v-643e2bcd]{width:%?100?%;font-size:%?18?%;color:#666}.product-con .footer .item .iconfont[data-v-643e2bcd]{text-align:center;font-size:%?40?%}.product-con .footer .item .iconfont.icon-shoucang1[data-v-643e2bcd]{color:var(--view-theme)}.product-con .footer .item .iconfont.icon-gouwuche1[data-v-643e2bcd]{font-size:%?40?%;position:relative}.product-con .footer .item .iconfont.icon-gouwuche1 .num[data-v-643e2bcd]{color:#fff;position:absolute;font-size:%?18?%;padding:%?2?% %?8?% %?3?%;border-radius:%?200?%;top:%?-10?%;right:%?-10?%}.product-con .footer .bnt[data-v-643e2bcd]{width:100%;height:%?76?%}.product-con .footer .bnt .bnts[data-v-643e2bcd]{width:100%;text-align:center;line-height:%?76?%;color:#fff;font-size:%?28?%}.product-con .footer .bnt .joinCart[data-v-643e2bcd]{border-radius:%?50?% 0 0 %?50?%;background-image:linear-gradient(90deg,#fea10f 0,#fa8013)}.product-con .footer .bnt .buy[data-v-643e2bcd]{border-radius:%?50?%;background-color:var(--view-theme)}.product-con .footer .bnt .no-goods[data-v-643e2bcd]{border-radius:%?50?%;background-color:#ccc}.product-con .conter[data-v-643e2bcd]{display:block}.product-con .conter img[data-v-643e2bcd]{display:block}.bg-color-hui[data-v-643e2bcd]{background:#bbb!important}.canvas[data-v-643e2bcd]{width:750px;height:1190px}.poster-pop[data-v-643e2bcd]{width:%?450?%;height:%?714?%;position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:300;top:50%;margin-top:%?-377?%}.poster-pop uni-image[data-v-643e2bcd]{width:100%;height:100%;display:block}.poster-pop .close[data-v-643e2bcd]{width:%?46?%;height:%?75?%;position:fixed;right:0;top:%?-73?%;display:block}.poster-pop .save-poster[data-v-643e2bcd]{background-color:#df2d0a;font-size:：22rpx;color:#fff;text-align:center;height:%?76?%;line-height:%?76?%;width:100%}.poster-pop .keep[data-v-643e2bcd]{color:#fff;text-align:center;font-size:%?25?%;margin-top:%?10?%}[data-v-643e2bcd] .mask{z-index:99!important}.mask1[data-v-643e2bcd]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000;opacity:.5;z-index:288}.home-nav[data-v-643e2bcd]{top:%?20?%!important}.home-nav[data-v-643e2bcd]{color:#333;position:fixed;width:%?56?%;left:%?33?%;height:%?56?%;font-size:%?33?%;z-index:99;background:hsla(0,0%,100%,.3);border:1px solid rgba(0,0,0,.1);border-radius:%?40?%}.home-nav.right[data-v-643e2bcd]{right:%?33?%;left:unset}.home-nav.on[data-v-643e2bcd]{background:unset;color:#333}.home-nav.homeIndex[data-v-643e2bcd]{border-color:hsla(0,0%,100%,0)}.home-nav .iconfont[data-v-643e2bcd]{width:%?58?%;text-align:center}.home-nav .line[data-v-643e2bcd]{width:%?1?%;height:%?34?%;background:#b3b3b3}.home-nav .icon-xiangzuo[data-v-643e2bcd]{width:auto;font-size:%?28?%}.share-box[data-v-643e2bcd]{z-index:1000;position:fixed;left:0;top:0;width:100%;height:100%}.share-box uni-image[data-v-643e2bcd]{width:100%;height:100%}.df[data-v-643e2bcd]{display:flex;align-items:center;flex-wrap:nowrap;width:100%}.attrImg[data-v-643e2bcd]{width:%?66?%;height:%?66?%;border-radius:%?6?%;display:block;margin-right:%?14?%}.switchTxt[data-v-643e2bcd]{height:%?60?%;flex:1;line-height:%?60?%;box-sizing:border-box;background:#eee;padding:0 %?10?%;border-radius:%?8?%;text-align:center}.attribute[data-v-643e2bcd]{padding:%?10?% %?30?%}.attribute .line1[data-v-643e2bcd]{width:%?600?%}.flex[data-v-643e2bcd]{display:flex;justify-content:space-between;width:100%}.flexs[data-v-643e2bcd]{display:flex}.attr-txt[data-v-643e2bcd]{display:flex;flex-wrap:nowrap;width:%?130?%}.delete-line[data-v-643e2bcd]{text-decoration:line-through}',
          "",
        ]),
        (t.exports = e);
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
        o = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      e["default"] = o.a;
    },
    e310: function (t, e, i) {
      t.exports = i.p + "pages/points_mall/static/my-point.png";
    },
    e6e8: function (t, e, i) {
      "use strict";
      var a = i("5f5e"),
        o = i.n(a);
      o.a;
    },
    f1fa: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return o;
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
        o = [];
    },
    fcf1: function (t, e, i) {
      var a = i("c2f9");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var o = i("4f06").default;
      o("38665082", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
