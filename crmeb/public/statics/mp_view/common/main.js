(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"],
  {
    "93a5": function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("9c98");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(o);
      a("d199");
      var r = a("f0c5"),
        i = Object(r["a"])(n["default"], void 0, void 0, !1, null, null, null, !1, void 0, void 0);
      t["default"] = i.exports;
    },
    "9c98": function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("b6f5"),
        o = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(r);
      t["default"] = o.a;
    },
    a891: function (e, t, a) {
      "use strict";
      (function (e, t) {
        var n = a("4ea4"),
          o = n(a("9523"));
        a("4789");
        var r = n(a("66fd")),
          i = n(a("93a5")),
          s = n(a("ff00")),
          c = n(a("00e9")),
          d = n(a("9159")),
          u = n(a("00a0")),
          l = n(a("ac0a")),
          f = n(a("c786")),
          p = n(a("368d")),
          g = a("0567");
        function b(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, n);
          }
          return a;
        }
        function h(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? b(Object(a), !0).forEach(function (t) {
                  (0, o.default)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : b(Object(a)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
          }
          return e;
        }
        (e.__webpack_require_UNI_MP_PLUGIN__ = a),
          (r.default.prototype.$util = d.default),
          (r.default.prototype.$config = u.default),
          (r.default.prototype.$Cache = c.default),
          (r.default.prototype.$eventHub = new r.default()),
          (r.default.prototype.$socket = new l.default()),
          (r.default.config.productionTip = !1);
        r.default.component("skeleton", function () {
          a.e("components/skeleton/index")
            .then(
              function () {
                return resolve(a("4aa5"));
              }.bind(null, a)
            )
            .catch(a.oe);
        }),
          r.default.component("pageLoading", function () {
            a.e("components/pageLoading")
              .then(
                function () {
                  return resolve(a("dba4"));
                }.bind(null, a)
              )
              .catch(a.oe);
          }),
          r.default.component("easyLoadimage", function () {
            Promise.all([a.e("common/vendor"), a.e("components/easy-loadimage/easy-loadimage")])
              .then(
                function () {
                  return resolve(a("cad3"));
                }.bind(null, a)
              )
              .catch(a.oe);
          }),
          (r.default.prototype.$permission = p.default),
          (r.default.prototype.$Debounce = g.Debounce),
          (i.default.mpType = "app");
        var m = new r.default(h(h({}, i.default), {}, { store: s.default, Cache: c.default, i18n: f.default }));
        t(m).$mount();
      }).call(this, a("bc2e")["default"], a("543d")["createApp"]);
    },
    b243: function (e, t, a) {},
    b6f5: function (e, t, a) {
      "use strict";
      (function (e, n) {
        var o = a("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r = o(a("2eee")),
          i = o(a("c973")),
          s = (a("86eb"), a("00a0")),
          c = a("4e39"),
          d = (o(a("5998")), o(a("69b2"))),
          u = a("f9f0"),
          l = a("5743"),
          f = a("d1ea"),
          p = a("26cb"),
          g = o(a("19b6")),
          b = o(a("00e9")),
          h = o(a("4d68")),
          m =
            (a("3022"),
            {
              globalData: {
                spid: 0,
                code: 0,
                isLogin: !1,
                userInfo: {},
                MyMenus: [],
                globalData: !1,
                isIframe: !1,
                tabbarShow: !0,
                windowHeight: 0,
                locale: "",
              },
              mixins: [g.default],
              computed: (0, p.mapGetters)(["isLogin", "cartNum"]),
              watch: {
                isLogin: {
                  deep: !0,
                  handler: function (e, t) {
                    e || this.$store.commit("indexData/setCartNum", "");
                  },
                },
                cartNum: function (t, a) {
                  this.$store.commit("indexData/setCartNum", t + ""),
                    t > 0
                      ? e.setTabBarBadge({ index: Number(e.getStorageSync("FOOTER_ADDCART")) || 2, text: t + "" })
                      : e.hideTabBarRedDot({ index: Number(e.getStorageSync("FOOTER_ADDCART")) || 2 });
                },
              },
              onShow: function () {
                var t = e.getEnterOptionsSync();
                if (
                  (t.query.spread &&
                    (this.$Cache.set("spread", t.query.spread),
                    (this.globalData.spid = t.query.spread),
                    (this.globalData.pid = t.query.spread),
                    (0, u.silenceBindingSpread)(this.globalData)),
                  t.query.spid &&
                    (this.$Cache.set("spread", t.query.spid),
                    (this.globalData.spid = t.query.spid),
                    (this.globalData.pid = t.query.spid),
                    (0, u.silenceBindingSpread)(this.globalData)),
                  t.query.scene)
                ) {
                  var a = this.$util.getUrlParams(decodeURIComponent(t.query.scene));
                  if (a.pid)
                    this.$Cache.set("spread", a.pid), (this.globalData.spid = a.pid), (this.globalData.pid = a.pid);
                  else
                    switch (t.scene) {
                      case 1047:
                        this.globalData.code = t.query.scene;
                        break;
                      case 1048:
                        this.globalData.code = t.query.scene;
                        break;
                      case 1049:
                        this.globalData.code = t.query.scene;
                        break;
                      case 1001:
                        this.globalData.spid = t.query.scene;
                        break;
                    }
                  (0, u.silenceBindingSpread)(this.globalData);
                }
              },
              onLaunch: function (t) {
                var a = this;
                return (0, i.default)(
                  r.default.mark(function t() {
                    var o, i, u, p, g;
                    return r.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (e.hideTabBar(),
                              (o = a),
                              (0, c.basicConfig)().then(function (t) {
                                e.setStorageSync("BASIC_CONFIG", t.data);
                              }),
                              (0, l.colorChange)("color_change").then(function (t) {
                                switch (
                                  (e.setStorageSync("is_diy", t.data.is_diy),
                                  e.$emit("is_diy", t.data.is_diy),
                                  e.setStorageSync("color_status", t.data.status),
                                  t.data.status)
                                ) {
                                  case 1:
                                    e.setStorageSync("viewColor", h.default.blue),
                                      e.$emit("ok", h.default.blue, t.data.status);
                                    break;
                                  case 2:
                                    e.setStorageSync("viewColor", h.default.green),
                                      e.$emit("ok", h.default.green, t.data.status);
                                    break;
                                  case 3:
                                    e.setStorageSync("viewColor", h.default.red),
                                      e.$emit("ok", h.default.red, t.data.status);
                                    break;
                                  case 4:
                                    e.setStorageSync("viewColor", h.default.pink),
                                      e.$emit("ok", h.default.pink, t.data.status);
                                    break;
                                  case 5:
                                    e.setStorageSync("viewColor", h.default.orange),
                                      e.$emit("ok", h.default.orange, t.data.status);
                                    break;
                                  default:
                                    e.setStorageSync("viewColor", h.default.red),
                                      e.$emit("ok", h.default.red, t.data.status);
                                    break;
                                }
                              }),
                              (0, f.getLangVersion)().then(function (t) {
                                var n = t.data.version;
                                n != e.getStorageSync("LANG_VERSION") &&
                                  (0, f.getLangJson)().then(function (t) {
                                    var n = Object.keys(t.data)[0];
                                    b.default.set("locale", Object.keys(t.data)[0]),
                                      a.$i18n.setLocaleMessage(n, t.data[n]),
                                      e.setStorageSync("localeJson", t.data);
                                  }),
                                  e.setStorageSync("LANG_VERSION", n);
                              }),
                              "" != s.HTTP_REQUEST_URL)
                            ) {
                              t.next = 8;
                              break;
                            }
                            return t.abrupt("return", !1);
                          case 8:
                            n.getUpdateManager(),
                              (i = n.getEnterOptionsSync()),
                              n.canIUse("getUpdateManager") &&
                                1154 != i.scene &&
                                ((u = n.getUpdateManager()),
                                u.onCheckForUpdate(function (e) {
                                  e.hasUpdate &&
                                    (u.onUpdateFailed(function () {
                                      return o.Tips({ title: "新版本下载失败" });
                                    }),
                                    u.onUpdateReady(function () {
                                      n.showModal({
                                        title: "更新提示",
                                        content: "新版本已经下载好，是否重启当前应用？",
                                        success: function (e) {
                                          e.confirm && u.applyUpdate();
                                        },
                                      });
                                    }),
                                    u.onUpdateFailed(function () {
                                      n.showModal({
                                        title: "发现新版本",
                                        content: "请删除当前小程序，重启搜索打开...",
                                      });
                                    }));
                                })),
                              e.getSystemInfoSync({
                                success: function (e) {
                                  o.globalData.navHeight = e.statusBarHeight * (750 / e.windowWidth) + 91;
                                },
                              }),
                              (p = e.getMenuButtonBoundingClientRect()),
                              (o.globalData.navH = 2 * p.top + p.height / 2),
                              (g = e.getSystemInfoSync().SDKVersion),
                              d.default.compareVersion(g, "2.21.3") >= 0
                                ? o.$Cache.set("MP_VERSION_ISNEW", !0)
                                : o.$Cache.set("MP_VERSION_ISNEW", !1),
                              (0, l.getCrmebCopyRight)().then(function (t) {
                                e.setStorageSync("copyRight", t.data);
                              });
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              methods: {
                remoteRegister: function (e) {
                  var t = this;
                  (0, c.remoteRegister)({ remote_token: e }).then(function (e) {
                    var a = e.data;
                    a.get_remote_login_url
                      ? (location.href = a.get_remote_login_url)
                      : (t.$store.commit("LOGIN", { token: a.token, time: a.expires_time - t.$Cache.time() }),
                        t.$store.commit("SETUID", a.userInfo.uid),
                        location.reload());
                  });
                },
              },
            });
        t.default = m;
      }).call(this, a("543d")["default"], a("bc2e")["default"]);
    },
    d199: function (e, t, a) {
      "use strict";
      var n = a("b243"),
        o = a.n(n);
      o.a;
    },
  },
  [["a891", "common/runtime", "common/vendor"]],
]);
