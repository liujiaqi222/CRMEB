(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/diy/index"],
  {
    "58b4": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var o = function () {
          var t = this,
            e = t.$createElement,
            n =
              (t._self._c,
              t.pageShow && !t.errorNetwork
                ? t.__map(t.styleConfig, function (e, n) {
                    var o = t.__get_orig(e),
                      i = "bargain" == e.name && t.$permission("bargain"),
                      r = "combination" == e.name && t.$permission("combination"),
                      a = "seckill" == e.name && t.$permission("seckill");
                    return { $orig: o, m0: i, m1: r, m2: a };
                  })
                : null),
            o =
              t.pageShow && !t.errorNetwork && 1 == t.isSortType
                ? t.sortList.children && t.sortList.children.length
                : null,
            i =
              t.pageShow && !t.errorNetwork && 1 == t.isSortType && o
                ? t.__map(t.sortList.children, function (e, n) {
                    var o = t.__get_orig(e),
                      i = t.$t(e.cate_name);
                    return { $orig: o, m3: i };
                  })
                : null,
            r = t.pageShow && !t.errorNetwork && 1 == t.isSortType ? t.goodList.length : null,
            a =
              t.pageShow && !t.errorNetwork && 1 == t.isSortType && r
                ? t.__map(t.goodList, function (e, n) {
                    var o = t.__get_orig(e),
                      i = e.activity && "1" === e.activity.type && t.$permission("seckill"),
                      r = i ? t.$t("秒杀") : null,
                      a = e.activity && "2" === e.activity.type && t.$permission("bargain"),
                      c = a ? t.$t("砍价") : null,
                      s = e.activity && "3" === e.activity.type && t.$permission("combination"),
                      u = s ? t.$t("拼团") : null,
                      d = e.checkCoupon ? t.$t("券") : null,
                      l = t.$t("￥");
                    return { $orig: o, m4: i, m5: r, m6: a, m7: c, m8: s, m9: u, m10: d, m11: l };
                  })
                : null,
            c = t.pageShow && !t.errorNetwork && 1 == t.isSortType ? 0 == t.goodList.length && t.loaded : null,
            s = t.pageShow && !t.errorNetwork && 1 == t.isSortType && c ? t.$t("暂无数据") : null,
            u = t.pageShow && t.errorNetwork ? t.$t("网络连接断开") : null,
            d = t.pageShow && t.errorNetwork ? t.$t("请检查情况：") : null,
            l = t.pageShow && t.errorNetwork ? t.$t("在设置中是否已开启网络权限：") : null,
            g = t.pageShow && t.errorNetwork ? t.$t("当前是否处于弱网环境") : null,
            h = t.pageShow && t.errorNetwork ? t.$t("版本是否过低，升级试试吧") : null,
            f = t.pageShow && t.errorNetwork ? t.$t("重新连接") : null;
          t.$mp.data = Object.assign(
            {},
            {
              $root: {
                l0: n,
                g0: o,
                l1: i,
                g1: r,
                l2: a,
                g2: c,
                m12: s,
                m13: u,
                m14: d,
                m15: l,
                m16: g,
                m17: h,
                m18: f,
              },
            }
          );
        },
        i = [];
    },
    "6a35": function (t, e, n) {},
    "837a": function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("58b4"),
        i = n("f98f");
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      n("9b7e");
      var a = n("f0c5"),
        c = Object(a["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], void 0);
      e["default"] = c.exports;
    },
    "9b7e": function (t, e, n) {
      "use strict";
      var o = n("6a35"),
        i = n.n(o);
      i.a;
    },
    cc9c: function (t, e, n) {
      "use strict";
      (function (t, o) {
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var r,
          a = i(n("9523")),
          c = i(n("19b6")),
          s = n("5743"),
          u = n("4cfb"),
          d = n("26cb"),
          l = n("2a39"),
          g = n("6557"),
          h = n("39ed"),
          f = n("86eb"),
          p = n("00a0"),
          m =
            (getApp(),
            (r = {
              computed: (0, d.mapGetters)(["isLogin", "uid"]),
              mixins: [c.default],
              components: {
                recommend: function () {
                  Promise.all([n.e("common/vendor"), n.e("components/recommend/index")])
                    .then(
                      function () {
                        return resolve(n("7992"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                Loading: function () {
                  n.e("components/Loading/index")
                    .then(
                      function () {
                        return resolve(n("c986"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                pageFoot: function () {
                  Promise.all([n.e("common/vendor"), n.e("components/pageFooter/index")])
                    .then(
                      function () {
                        return resolve(n("605d"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                couponWindow: function () {
                  n.e("components/couponWindow/index")
                    .then(
                      function () {
                        return resolve(n("64ec"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                authorize: function () {
                  n.e("components/Authorize")
                    .then(
                      function () {
                        return resolve(n("ad23"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                activeParty: function () {
                  n.e("pages/index/diy/components/activeParty")
                    .then(
                      function () {
                        return resolve(n("6c66"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                headerSerch: function () {
                  n.e("pages/index/diy/components/headerSerch")
                    .then(
                      function () {
                        return resolve(n("06b7"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                swipers: function () {
                  n.e("pages/index/diy/components/swipers")
                    .then(
                      function () {
                        return resolve(n("b51c"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                coupon: function () {
                  n.e("pages/index/diy/components/coupon")
                    .then(
                      function () {
                        return resolve(n("b567"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                articleList: function () {
                  n.e("pages/index/diy/components/articleList")
                    .then(
                      function () {
                        return resolve(n("af5c"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                bargain: function () {
                  Promise.all([n.e("common/vendor"), n.e("pages/index/diy/components/bargain")])
                    .then(
                      function () {
                        return resolve(n("d722"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                blankPage: function () {
                  n.e("pages/index/diy/components/blankPage")
                    .then(
                      function () {
                        return resolve(n("304b"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                combination: function () {
                  Promise.all([n.e("common/vendor"), n.e("pages/index/diy/components/combination")])
                    .then(
                      function () {
                        return resolve(n("279f"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                customerService: function () {
                  Promise.all([n.e("common/vendor"), n.e("pages/index/diy/components/customerService")])
                    .then(
                      function () {
                        return resolve(n("5229"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                goodList: function () {
                  n.e("pages/index/diy/components/goodList")
                    .then(
                      function () {
                        return resolve(n("ab66"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                guide: function () {
                  n.e("pages/index/diy/components/guide")
                    .then(
                      function () {
                        return resolve(n("6e93"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                liveBroadcast: function () {
                  n.e("pages/index/diy/components/liveBroadcast")
                    .then(
                      function () {
                        return resolve(n("99d3"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                menus: function () {
                  n.e("pages/index/diy/components/menus")
                    .then(
                      function () {
                        return resolve(n("7e46"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                pictureCube: function () {
                  n.e("pages/index/diy/components/pictureCube")
                    .then(
                      function () {
                        return resolve(n("2b59"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                news: function () {
                  n.e("pages/index/diy/components/news")
                    .then(
                      function () {
                        return resolve(n("947e"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                promotionList: function () {
                  n.e("pages/index/diy/components/promotionList")
                    .then(
                      function () {
                        return resolve(n("024a"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                richText: function () {
                  n.e("pages/index/diy/components/richText")
                    .then(
                      function () {
                        return resolve(n("12d9"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                seckill: function () {
                  Promise.all([n.e("common/vendor"), n.e("pages/index/diy/components/seckill")])
                    .then(
                      function () {
                        return resolve(n("2908"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                swiperBg: function () {
                  n.e("pages/index/diy/components/swiperBg")
                    .then(
                      function () {
                        return resolve(n("bc65"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                tabNav: function () {
                  n.e("pages/index/diy/components/tabNav")
                    .then(
                      function () {
                        return resolve(n("2515"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                titles: function () {
                  n.e("pages/index/diy/components/titles")
                    .then(
                      function () {
                        return resolve(n("5781"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                hotspot: function () {
                  n.e("pages/index/diy/components/hotspot")
                    .then(
                      function () {
                        return resolve(n("52e1"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                appUpdate: function () {
                  n.e("components/update/app-update")
                    .then(
                      function () {
                        return resolve(n("b583"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
              },
            }),
            (0, a.default)(r, "computed", (0, d.mapGetters)(["isLogin", "cartNum"])),
            (0, a.default)(r, "data", function () {
              return {
                imgHost: p.HTTP_REQUEST_URL,
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
                isFixed: !0,
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
            (0, a.default)(r, "onPullDownRefresh", function () {
              this.diyData();
            }),
            (0, a.default)(r, "created", function (e) {
              var n = this,
                i = this;
              this.$nextTick(function () {
                t.getSystemInfoSync({
                  success: function (t) {
                    i.windowHeight = t.windowHeight;
                  },
                });
              });
              var r = getCurrentPages(),
                a = r[r.length - 1].route;
              (this.activeRouter = "/" + a),
                this.diyData(),
                this.getIndexData(),
                this.getTempIds(),
                (0, s.siteConfig)()
                  .then(function (t) {
                    n.site_config = t.data;
                  })
                  .catch(function (t) {}),
                this.isLogin &&
                  (this.getCoupon(),
                  (0, h.getCartCounts)().then(function (e) {
                    (n.countNum = e.data.count),
                      n.$store.commit("indexData/setCartNum", e.data.count > 99 ? ".." : e.data.count + ""),
                      e.data.count > 0
                        ? o.setTabBarBadge({
                            index: Number(t.getStorageSync("FOOTER_ADDCART")) || 2,
                            text: e.data.count + "",
                          })
                        : o.hideTabBarRedDot({ index: Number(t.getStorageSync("FOOTER_ADDCART")) || 2 });
                  }));
            }),
            (0, a.default)(r, "watch", {
              isLogin: {
                deep: !0,
                handler: function (e, n) {
                  var o = new Date().toLocaleDateString();
                  if (e) {
                    try {
                      var i = t.getStorageSync("oldDate") || "";
                    } catch (r) {}
                    i != o && this.getCoupon();
                  }
                },
              },
            }),
            (0, a.default)(r, "onReady", function () {}),
            (0, a.default)(r, "methods", {
              reconnect: function () {
                var e = this;
                t.showLoading({ title: this.$t("加载中") }),
                  this.diyData(),
                  this.getIndexData(),
                  getShare().then(function (t) {
                    e.shareInfo = t.data;
                  });
              },
              goICP: function (t) {
                var e = 1 == t ? this.site_config.icp_url : this.site_config.network_security_url;
                window.open(e);
              },
              bindHeighta: function (t) {},
              bindHeight: function (e) {
                t.hideLoading(), (this.domOffsetTop = e.top);
              },
              goGoodsDetail: function (e) {
                (0, g.goShopDetail)(e, this.uid).then(function (n) {
                  t.navigateTo({ url: "/pages/goods_details/index?id=".concat(e.id) });
                });
              },
              get_host_product: function () {
                var t = this;
                t.hotScroll ||
                  (0, l.getProductHot)(t.hotPage, t.hotLimit).then(function (e) {
                    t.hotPage++,
                      (t.hotScroll = e.data.length < t.hotLimit),
                      (t.hostProduct = t.hostProduct.concat(e.data));
                  });
              },
              changeSort: function (t, e) {
                this.curSort != e &&
                  ((this.curSort = e),
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
                var e = this;
                (this.curSort = 0),
                  (this.loaded = !1),
                  this.sortAll.length > 0
                    ? (this.sortAll.forEach(function (n, o) {
                        n.id == t && (e.$set(e, "sortList", n), (e.sid = n.children.length ? n.children[0].id : ""));
                      }),
                      (this.goodList = []),
                      (this.goodPage = 1),
                      this.$nextTick(function () {
                        "" != e.sortList && e.getGoodsList();
                      }))
                    : (0, l.getCategoryList)().then(function (n) {
                        (e.sortAll = n.data),
                          n.data.forEach(function (n, o) {
                            n.id == t && ((e.sortList = n), (e.sid = n.children.length ? n.children[0].id : ""));
                          }),
                          (e.goodList = []),
                          (e.goodPage = 1),
                          e.$nextTick(function () {
                            "" != e.sortList && e.getGoodsList();
                          });
                      });
              },
              getGoodsList: function () {
                var t = this;
                this.loading ||
                  this.loaded ||
                  ((this.loading = !0),
                  (0, l.getProductslist)({
                    sid: this.sid,
                    keyword: "",
                    priceOrder: "",
                    salesOrder: "",
                    news: 0,
                    page: this.goodPage,
                    limit: 10,
                    cid: this.sortList.id,
                  }).then(function (e) {
                    (t.loading = !1),
                      (t.loaded = e.data.length < 10),
                      t.goodPage++,
                      (t.goodList = t.goodList.concat(e.data));
                  }));
              },
              getNewCoupon: function () {
                var e = this,
                  n = t.getStorageSync("oldUser") || 0;
                n ||
                  (0, s.getCouponNewUser)().then(function (n) {
                    var o = n.data;
                    o.show
                      ? o.list.length && ((e.isCouponShow = !0), (e.couponObj = o), t.setStorageSync("oldUser", 1))
                      : t.setStorageSync("oldUser", 1);
                  });
              },
              getCoupon: function () {
                var e = this,
                  n = t.getStorageSync("tagDate") || "",
                  o = new Date().toLocaleDateString();
                n === o
                  ? this.getNewCoupon()
                  : (0, s.getCouponV2)().then(function (n) {
                      var o = n.data;
                      o.list.length
                        ? ((e.isCouponShow = !0),
                          (e.couponObj = o),
                          t.setStorageSync("tagDate", new Date().toLocaleDateString()))
                        : e.getNewCoupon();
                    });
              },
              couponClose: function () {
                (this.isCouponShow = !1), t.getStorageSync("oldUser") || this.getNewCoupon();
              },
              onLoadFun: function () {},
              getTempIds: function () {
                (0, s.getTempIds)().then(function (t) {
                  t.data && o.setStorageSync(u.SUBSCRIBE_MESSAGE, JSON.stringify(t.data));
                });
              },
              objToArr: function (t) {
                var e = Object.keys(t),
                  n = e.map(function (e) {
                    return t[e];
                  });
                return n;
              },
              diyData: function () {
                var e = this,
                  n = this;
                (0, s.getDiy)(0)
                  .then(function (o) {
                    t.hideLoading(),
                      t.setStorageSync("DIY_DATA", o.data),
                      setTimeout(function () {
                        e.isNodes++;
                      }, 0),
                      (e.errorNetwork = !1);
                    var i = o.data;
                    i.is_bg_color && (e.bgColor = i.color_picker),
                      i.is_bg_pic && ((e.bgPic = i.bg_pic), (e.bgTabVal = i.bg_tab_val)),
                      (e.pageShow = i.is_show),
                      t.setNavigationBarTitle({ title: e.$t(o.data.title) });
                    var r = [],
                      a = n.objToArr(o.data.value);
                    a.forEach(function (t, o, i) {
                      "headerSerch" == t.name && (e.isHeaderSerch = !0),
                        "promotionList" == t.name &&
                          ((n.numConfig = t.numConfig.val),
                          (n.goodType = t.tabConfig.list[0].link.activeVal),
                          n.getGroomList()),
                        (r = i);
                    }),
                      r.sort(function (t, e) {
                        return t.timestamp - e.timestamp;
                      }),
                      (n.styleConfig = r),
                      setTimeout(function () {
                        e.showSkeleton = !1;
                      }, 300),
                      t.stopPullDownRefresh({ success: function (t) {} });
                  })
                  .catch(function (t) {});
              },
              getIndexData: function () {},
              changeBarg: function (e) {
                this.isLogin
                  ? t.navigateTo({
                      url: "/pages/activity/goods_bargain_details/index?id="
                        .concat(e.id, "&bargain=")
                        .concat(this.$store.state.app.uid),
                    })
                  : (0, f.toLogin)();
              },
              changeTab: function (t) {
                (this.goodType = t), (this.page = 1);
                this.getGroomList(!0);
              },
              getGroomList: function (t) {
                var e = this,
                  n = e.goodType;
                return (
                  !e.loadend &&
                  !e.loading &&
                  (t && e.$set(e, "iSshowH", !0),
                  void (0, l.getGroomList)(n, { page: e.page, limit: this.numConfig })
                    .then(function (t) {
                      var n = t.data;
                      e.$set(e, "iSshowH", !1);
                      n.list;
                      e.$set(e, "tempArr", n.list), (e.loading = !1);
                    })
                    .catch(function (t) {}))
                );
              },
              goRouter: function (e) {
                var n = getCurrentPages(),
                  o = n[n.length - 1].$page.fullPath;
                e.link != o &&
                  t.switchTab({
                    url: e.link,
                    fail: function (n) {
                      t.redirectTo({ url: e.link });
                    },
                  });
              },
              goDetail: function (e) {
                (0, g.goShopDetail)(e, this.$store.state.app.uid).then(function (n) {
                  t.navigateTo({ url: "/pages/goods_details/index?id=".concat(e.id) });
                });
              },
              onsollBotton: function () {
                0 == this.isSortType || this.getGoodsList();
              },
            }),
            (0, a.default)(r, "onReachBottom", function () {}),
            (0, a.default)(r, "onPageScroll", function (e) {
              t.$emit("scroll");
            }),
            (0, a.default)(r, "onShareAppMessage", function () {
              return { title: this.shareInfo.title, path: "/pages/index/index" };
            }),
            (0, a.default)(r, "onShareTimeline", function () {
              return { title: this.shareInfo.title, imageUrl: this.shareInfo.img };
            }),
            r);
        e.default = m;
      }).call(this, n("543d")["default"], n("bc2e")["default"]);
    },
    f98f: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("cc9c"),
        i = n.n(o);
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      e["default"] = i.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "pages/index/diy/index-create-component",
  {
    "pages/index/diy/index-create-component": function (module, exports, __webpack_require__) {
      __webpack_require__("543d")["createComponent"](__webpack_require__("837a"));
    },
  },
  [["pages/index/diy/index-create-component"]],
]);
