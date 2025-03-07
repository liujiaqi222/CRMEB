(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/visualization/index"],
  {
    "5be5": function (n, t, e) {
      "use strict";
      (function (n, o) {
        var i = e("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a = e("4e39"),
          c = e("4cfb"),
          s = e("5743"),
          u = e("26cb"),
          l = e("2a39"),
          r = e("6557"),
          d = (e("86eb"), e("00a0")),
          f = i(e("19b6")),
          h = getApp(),
          g = n.getSystemInfoSync().statusBarHeight,
          p = {
            computed: (0, u.mapGetters)(["isLogin", "uid"]),
            components: {
              couponWindow: function () {
                e.e("components/couponWindow/index")
                  .then(
                    function () {
                      return resolve(e("64ec"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              headerSerch: function () {
                e.e("pages/index/visualization/components/headerSerch")
                  .then(
                    function () {
                      return resolve(e("f872"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              swiperBg: function () {
                e.e("pages/index/visualization/components/swiperBg")
                  .then(
                    function () {
                      return resolve(e("f92d"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              menus: function () {
                e.e("pages/index/visualization/components/menus")
                  .then(
                    function () {
                      return resolve(e("5317"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              news: function () {
                e.e("pages/index/visualization/components/news")
                  .then(
                    function () {
                      return resolve(e("7032"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              activity: function () {
                e.e("pages/index/visualization/components/activity")
                  .then(
                    function () {
                      return resolve(e("f90b"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              scrollBox: function () {
                e.e("pages/index/visualization/components/scrollBox")
                  .then(
                    function () {
                      return resolve(e("6722"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              recommend: function () {
                e.e("pages/index/visualization/components/recommend")
                  .then(
                    function () {
                      return resolve(e("25a8"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              popular: function () {
                e.e("pages/index/visualization/components/popular")
                  .then(
                    function () {
                      return resolve(e("a990"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              mBanner: function () {
                e.e("pages/index/visualization/components/mBanner")
                  .then(
                    function () {
                      return resolve(e("6bb9"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              newGoods: function () {
                e.e("pages/index/visualization/components/newGoods")
                  .then(
                    function () {
                      return resolve(e("2594"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              promotion: function () {
                e.e("pages/index/visualization/components/promotion")
                  .then(
                    function () {
                      return resolve(e("1c41"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              alive: function () {
                e.e("pages/index/visualization/components/alive")
                  .then(
                    function () {
                      return resolve(e("aa3c"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              adsRecommend: function () {
                e.e("pages/index/visualization/components/adsRecommend")
                  .then(
                    function () {
                      return resolve(e("c5cf"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              coupon: function () {
                e.e("pages/index/visualization/components/coupon")
                  .then(
                    function () {
                      return resolve(e("98f8"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              seckill: function () {
                e.e("pages/index/visualization/components/seckill")
                  .then(
                    function () {
                      return resolve(e("f616"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              combination: function () {
                e.e("pages/index/visualization/components/combination")
                  .then(
                    function () {
                      return resolve(e("615e"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              bargain: function () {
                e.e("pages/index/visualization/components/bargain")
                  .then(
                    function () {
                      return resolve(e("35eb"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              goodList: function () {
                e.e("pages/index/visualization/components/goodList")
                  .then(
                    function () {
                      return resolve(e("4eca"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              picTxt: function () {
                e.e("pages/index/visualization/components/picTxt")
                  .then(
                    function () {
                      return resolve(e("3867"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              titles: function () {
                e.e("pages/index/visualization/components/titles")
                  .then(
                    function () {
                      return resolve(e("0815"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              customerService: function () {
                e.e("pages/index/visualization/components/customerService")
                  .then(
                    function () {
                      return resolve(e("1eda"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              tabBar: function () {
                Promise.all([e.e("common/vendor"), e.e("pages/index/visualization/components/tabBar")])
                  .then(
                    function () {
                      return resolve(e("8632"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              tabNav: function () {
                e.e("pages/index/visualization/components/tabNav")
                  .then(
                    function () {
                      return resolve(e("013f"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              Loading: function () {
                e.e("components/Loading/index")
                  .then(
                    function () {
                      return resolve(e("c986"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              skeletons: function () {
                e.e("pages/index/visualization/components/skeleton")
                  .then(
                    function () {
                      return resolve(e("9df0"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              indexGoods: function () {
                e.e("components/indexGoods/index")
                  .then(
                    function () {
                      return resolve(e("7e26"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              appUpdate: function () {
                e.e("components/update/app-update")
                  .then(
                    function () {
                      return resolve(e("b583"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
            },
            mixins: [f.default],
            data: function () {
              return {
                imgHost: d.HTTP_REQUEST_URL,
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
                navH: g,
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
                isIframe: h.globalData.isIframe,
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
              n.hideTabBar();
              this.diyData(),
                this.getIndexData(),
                this.$Cache.get(c.TIPS_KEY) && (this.iShidden = !0),
                this.getTempIds(),
                (0, s.siteConfig)()
                  .then(function (n) {
                    t.site_config = n.data;
                  })
                  .catch(function (n) {
                    return t.$util.Tips({ title: n.msg });
                  });
              var e = n.createSelectorQuery().in(this);
              e
                .select(".mp-header")
                .boundingClientRect(function (n) {
                  t.isTop = n.top;
                })
                .exec(),
                h.globalData.isIframe || (this.isLogin && this.getCoupon());
            },
            methods: {
              bindEdit: function (n, t) {
                h.globalData.isIframe && window.parent.postMessage({ name: n, dataName: t, params: {} }, "*");
              },
              getFollow: function () {
                var n = this;
                (0, a.follow)()
                  .then(function (t) {
                    n.followUrl = t.data.path;
                  })
                  .catch(function (t) {
                    return n.$util.Tips({ title: t.msg });
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
                this.$Cache.set(c.TIPS_KEY, !0), (this.iShidden = !0);
              },
              bindHeighta: function (n) {
                this.domOffsetTop = n.top - 110;
              },
              getCoupon: function () {
                var t = this,
                  e = n.getStorageSync("tagDate") || "",
                  o = new Date().toLocaleDateString();
                e === o
                  ? this.getNewCoupon()
                  : (0, s.getCouponV2)().then(function (e) {
                      var o = e.data;
                      o.list.length
                        ? ((t.isCouponShow = !0),
                          (t.couponObj = o),
                          n.setStorageSync("tagDate", new Date().toLocaleDateString()))
                        : t.getNewCoupon();
                    });
              },
              getNewCoupon: function () {
                var t = this,
                  e = n.getStorageSync("oldUser") || 0;
                e ||
                  (0, s.getCouponNewUser)().then(function (e) {
                    var o = e.data;
                    o.show
                      ? o.list.length && ((t.isCouponShow = !0), (t.couponObj = o), n.setStorageSync("oldUser", 1))
                      : n.setStorageSync("oldUser", 1);
                  });
              },
              couponClose: function () {
                (this.isCouponShow = !1), n.getStorageSync("oldUser") || this.getNewCoupon();
              },
              getTempIds: function () {
                (0, s.getTempIds)().then(function (n) {
                  n.data && o.setStorageSync(c.SUBSCRIBE_MESSAGE, JSON.stringify(n.data));
                });
              },
              goICP: function (n) {
                var t = 1 == n ? this.site_config.icp_url : this.site_config.network_security_url;
                window.open(t);
              },
              onLoadFun: function () {},
              reconnect: function () {
                this.diyData(), this.getIndexData();
              },
              diyData: function () {
                var t = this,
                  e = this;
                (0, s.getDiy)()
                  .then(function (o) {
                    var i = o.data;
                    (e.headerSerch = i.headerSerch),
                      (e.swiperBg = i.swiperBg),
                      (e.menus = i.menus),
                      (e.news = i.news),
                      (e.activity = i.activity),
                      (e.alive = i.alive),
                      (e.scrollBox = i.scrollBox),
                      (e.titles = i.titles),
                      (e.goodList = i.goodList),
                      (e.tabNav = i.tabNav),
                      (e.tabBar = i.tabBar),
                      (e.customerService = i.customerService),
                      (e.picTxt = i.picTxt),
                      (e.bargain = i.bargain),
                      (e.combination = i.combination),
                      (e.adsRecommend = i.adsRecommend),
                      (e.seckill = i.seckill),
                      (e.coupon = i.coupon),
                      t.$Cache.set("TAB_BAR", i.tabBar.default.tabBarList),
                      setTimeout(function () {
                        t.showSkeleton = !1;
                      }, 300),
                      n.setStorageSync("VIS_DATA", o.data);
                  })
                  .catch(function (n) {});
              },
              getIndexData: function () {
                var t = this;
                (0, s.getIndexData)().then(function (e) {
                  (t.subscribe = e.data.subscribe), n.setNavigationBarTitle({ title: e.data.site_name });
                });
              },
              get_host_product: function () {
                var n = this;
                n.hotScroll ||
                  (0, l.getProductHot)(n.hotPage, n.hotLimit).then(function (t) {
                    n.hotPage++,
                      (n.hotScroll = t.data.length < n.hotLimit),
                      (n.hostProduct = n.hostProduct.concat(t.data));
                  });
              },
              bindSortId: function (n) {
                (this.isSortType = -99 == n ? 0 : 1), this.getProductList(n);
              },
              getProductList: function (n) {
                (this.curSort = 0), (this.loaded = !1), (this.goodPage = 1), this.getGoodsList(n);
              },
              getGoodsList: function (n) {
                var t = this;
                this.loading ||
                  this.loaded ||
                  ((this.loading = !0),
                  (0, l.getProductslist)({
                    keyword: "",
                    priceOrder: "",
                    salesOrder: "",
                    news: 0,
                    page: this.goodPage,
                    limit: 10,
                    cid: n,
                  }).then(function (n) {
                    (t.goodLists = n.data), (t.loading = !1), (t.loaded = n.data.length < 10), t.goodPage++;
                  }));
              },
              goGoodsDetail: function (t) {
                var e = this;
                (0, r.goPage)().then(function (o) {
                  (0, r.goShopDetail)(t, e.uid).then(function (e) {
                    n.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
                  });
                });
              },
            },
            onReachBottom: function () {},
            onPageScroll: function (n) {},
          };
        t.default = p;
      }).call(this, e("543d")["default"], e("bc2e")["default"]);
    },
    7536: function (n, t, e) {
      "use strict";
      var o = e("84c3"),
        i = e.n(o);
      i.a;
    },
    "84c3": function (n, t, e) {},
    "8e32": function (n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return o;
      }),
        e.d(t, "c", function () {
          return i;
        }),
        e.d(t, "a", function () {});
      var o = function () {
          var n = this,
            t = n.$createElement,
            e = (n._self._c, n.$t("点击")),
            o = n.$t("添加到我的小程序， 微信首页下拉即可访问商城。"),
            i = !n.isIframe && n.tabNav.default && n.tabNav.default.isShow.val && 0 == n.goodLists.length,
            a = i ? n.$t("暂无商品，去看点别的吧") : null;
          n.$mp.data = Object.assign({}, { $root: { m0: e, m1: o, g0: i, m2: a } });
        },
        i = [];
    },
    af29: function (n, t, e) {
      "use strict";
      e.r(t);
      var o = e("5be5"),
        i = e.n(o);
      for (var a in o)
        ["default"].indexOf(a) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return o[n];
            });
          })(a);
      t["default"] = i.a;
    },
    e089: function (n, t, e) {
      "use strict";
      e.r(t);
      var o = e("8e32"),
        i = e("af29");
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return i[n];
            });
          })(a);
      e("7536");
      var c = e("f0c5"),
        s = Object(c["a"])(i["default"], o["b"], o["c"], !1, null, "888239f8", null, !1, o["a"], void 0);
      t["default"] = s.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "pages/index/visualization/index-create-component",
  {
    "pages/index/visualization/index-create-component": function (module, exports, __webpack_require__) {
      __webpack_require__("543d")["createComponent"](__webpack_require__("e089"));
    },
  },
  [["pages/index/visualization/index-create-component"]],
]);
