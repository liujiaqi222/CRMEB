(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/goods_cate/goods_cate1"],
  {
    "1f65": function (t, e, n) {},
    "87a4": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("e367"),
        o = n("eeb5");
      for (var r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      n("d556");
      var a = n("f0c5"),
        c = Object(a["a"])(o["default"], i["b"], i["c"], !1, null, "63b993ca", null, !1, i["a"], void 0);
      e["default"] = c.exports;
    },
    cd19: function (t, e, n) {
      "use strict";
      (function (t) {
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = i(n("9523")),
          r = n("2a39"),
          a = n("26cb"),
          c = n("4e39");
        function u(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        var s = t.getSystemInfoSync().statusBarHeight + "px",
          l =
            (getApp(),
            {
              components: {
                pageFooter: function () {
                  Promise.all([n.e("common/vendor"), n.e("components/pageFooter/index")])
                    .then(
                      function () {
                        return resolve(n("605d"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
                tabBar: function () {
                  Promise.all([n.e("common/vendor"), n.e("pages/index/visualization/components/tabBar")])
                    .then(
                      function () {
                        return resolve(n("8632"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
              },
              data: function () {
                return {
                  defimg: n("2b1a5"),
                  navlist: [],
                  productList: [],
                  navActive: 0,
                  number: "",
                  is_diy: t.getStorageSync("is_diy"),
                  height: 0,
                  hightArr: [],
                  toView: "",
                  tabbarH: 0,
                  footH: 0,
                  windowHeight: 0,
                  newData: {},
                  activeRouter: "",
                  pageHeight: "100%",
                  sysHeight: s,
                  lock: !1,
                };
              },
              computed: (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? u(Object(n), !0).forEach(function (e) {
                        (0, o.default)(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : u(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
                }
                return t;
              })(
                {},
                (0, a.mapState)({
                  cartNum: function (t) {
                    return t.indexData.cartNum;
                  },
                })
              ),
              mounted: function () {
                var e = this,
                  n = getCurrentPages(),
                  i = n[n.length - 1].route;
                (this.activeRouter = "/" + i),
                  !this.productList.length && this.getAllCategory(1),
                  t.$on("uploadCatData", function () {
                    e.getAllCategory(1);
                  });
              },
              methods: {
                getNav: function () {
                  var t = this;
                  (0, c.getNavigation)().then(function (e) {
                    t.newData = e.data;
                  });
                },
                goRouter: function (e) {
                  var n = getCurrentPages(),
                    i = n[n.length - 1].$page.fullPath;
                  e.link != i &&
                    t.switchTab({
                      url: e.link,
                      fail: function (n) {
                        t.redirectTo({ url: e.link });
                      },
                    });
                },
                footHeight: function (t) {
                  this.footH = t;
                },
                infoScroll: function () {
                  var e = this,
                    n = e.productList.length;
                  (this.number = e.productList[n - 1].children.length),
                    t.getSystemInfoSync({
                      success: function (t) {
                        e.height = t.windowHeight * (750 / t.windowWidth) - 98;
                      },
                    });
                  for (var i = [], o = 0; o < n; o++) {
                    var r = t.createSelectorQuery().in(this),
                      a = "#b" + o;
                    r.select(a).boundingClientRect(),
                      r.exec(function (t) {
                        var n = t[0].top;
                        i.push(n), (e.hightArr = i);
                      });
                  }
                },
                tap: function (e, n) {
                  (this.toView = n), (this.navActive = e), this.$set(this, "lock", !0), t.$emit("scroll");
                },
                getAllCategory: function (e) {
                  var n = this;
                  e || !t.getStorageSync("CAT1_DATA")
                    ? (0, r.getCategoryList)().then(function (e) {
                        t.setStorageSync("CAT1_DATA", e.data),
                          (n.productList = e.data),
                          n.$nextTick(function (t) {
                            n.infoScroll();
                          });
                      })
                    : ((n.productList = t.getStorageSync("CAT1_DATA")),
                      n.$nextTick(function (t) {
                        n.infoScroll();
                      }));
                },
                scroll: function (e) {
                  var n = e.detail.scrollTop,
                    i = this.hightArr;
                  if (this.lock) this.$set(this, "lock", !1);
                  else {
                    for (var o = 0; o < i.length; o++)
                      n >= 0 && n < i[1] - i[0]
                        ? (this.navActive = 0)
                        : n >= i[o] - i[0] && n < i[o + 1] - i[0]
                        ? (this.navActive = o)
                        : n >= i[i.length - 1] - i[0] && (this.navActive = i.length - 1);
                    t.$emit("scroll");
                  }
                },
                searchSubmitValue: function (e) {
                  if (!(this.$util.trim(e.detail.value).length > 0))
                    return this.$util.Tips({ title: this.$t("搜索商品名称") });
                  t.navigateTo({ url: "/pages/goods/goods_list/index?searchValue=" + e.detail.value });
                },
              },
            });
        e.default = l;
      }).call(this, n("543d")["default"]);
    },
    d556: function (t, e, n) {
      "use strict";
      var i = n("1f65"),
        o = n.n(i);
      o.a;
    },
    e367: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = {
          easyLoadimage: function () {
            return Promise.all([n.e("common/vendor"), n.e("components/easy-loadimage/easy-loadimage")]).then(
              n.bind(null, "cad3")
            );
          },
        },
        o = function () {
          var t = this,
            e = t.$createElement,
            n = (t._self._c, t.$t("搜索商品名称")),
            i = t.__map(t.productList, function (e, n) {
              var i = t.__get_orig(e),
                o = t.$t(e.cate_name);
              return { $orig: i, m1: o };
            }),
            o = t.$t("全部商品"),
            r = t.__map(t.productList, function (e, n) {
              var i = t.__get_orig(e),
                o = t.$t(e.cate_name),
                r = t.__map(e.children, function (e, n) {
                  var i = t.__get_orig(e),
                    o = t.$t(e.cate_name);
                  return { $orig: i, m4: o };
                });
              return { $orig: i, m2: o, l1: r };
            });
          t.$mp.data = Object.assign({}, { $root: { m0: n, l0: i, m3: o, l2: r } });
        },
        r = [];
    },
    eeb5: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("cd19"),
        o = n.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = o.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "pages/goods_cate/goods_cate1-create-component",
  {
    "pages/goods_cate/goods_cate1-create-component": function (module, exports, __webpack_require__) {
      __webpack_require__("543d")["createComponent"](__webpack_require__("87a4"));
    },
  },
  [["pages/goods_cate/goods_cate1-create-component"]],
]);
