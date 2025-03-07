require("../common/vendor.js");
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/users/binding_phone/index"],
  {
    "0c81": function (t, e, i) {
      "use strict";
      (function (t, e) {
        var n = i("4ea4");
        i("4789");
        n(i("66fd"));
        var a = n(i("9c9d"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(a.default);
      }).call(this, i("bc2e")["default"], i("543d")["createPage"]);
    },
    1857: function (t, e, i) {
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
            i = (t._self._c, t.$t(t.pageTitle)),
            n = 1 == t.pageType ? t.$t("绑定手机号") : null,
            a = 1 != t.pageType ? t.$t("手机号登录") : null,
            o = 1 == t.pageType ? t.$t("登录注册需绑定手机号") : null,
            c = 1 != t.pageType ? t.$t("首次登录会自动注册") : null,
            s = t.$t("填写手机号码"),
            r = t.$t("填写验证码"),
            u = t.$t(1 == t.pageType ? "绑定手机号" : "立即登录"),
            h = 0 != t.pageType || t.canGetPrivacySetting ? null : t.$t("已阅读并同意"),
            p = 0 != t.pageType || t.canGetPrivacySetting ? null : t.$t("《用户协议》"),
            l = 0 != t.pageType || t.canGetPrivacySetting ? null : t.$t("与"),
            d = 0 != t.pageType || t.canGetPrivacySetting ? null : t.$t("《隐私协议》");
          t._isMounted ||
            (t.e0 = function (e) {
              t.inAnimation = !1;
            }),
            (t.$mp.data = Object.assign(
              {},
              { $root: { m0: i, m1: n, m2: a, m3: o, m4: c, m5: s, m6: r, m7: u, m8: h, m9: p, m10: l, m11: d } }
            ));
        },
        a = [];
    },
    2134: function (t, e, i) {},
    "6cc2": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("6e05"),
        a = i.n(n);
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      e["default"] = a.a;
    },
    "6e05": function (t, e, i) {
      "use strict";
      (function (t, n) {
        var a = i("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = a(i("2eee")),
          c = a(i("c973")),
          s = a(i("dc9d")),
          r = a(i("19b6")),
          u = i("5743"),
          h = i("d1ea"),
          p = i("4e39"),
          l = a(i("69b2")),
          d = a(i("00e9")),
          f = getApp(),
          g = t.getSystemInfoSync().statusBarHeight + "px",
          m = {
            mixins: [s.default, r.default],
            components: {
              Verify: function () {
                i.e("pages/users/components/verify/index")
                  .then(
                    function () {
                      return resolve(i("aa1e"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              editUserModal: function () {
                Promise.all([i.e("common/vendor"), i.e("components/eidtUserModal/index")])
                  .then(
                    function () {
                      return resolve(i("58e7"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              privacyAgreementPopup: function () {
                i.e("components/privacyAgreementPopup/index")
                  .then(
                    function () {
                      return resolve(i("f4ac"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
            },
            data: function () {
              return {
                statusBarHeight: g,
                pageType: 1,
                phone: "",
                captcha: "",
                text: "获取验证码",
                isShow: !1,
                protocol: !1,
                inAnimation: !1,
                authKey: "",
                backUrl: "",
                pageTitle: "绑定手机号",
                configData: d.default.get("BASIC_CONFIG"),
                canGetPrivacySetting: !1,
              };
            },
            onLoad: function (t) {
              t.authKey && (this.authKey = t.authKey),
                n.getPrivacySetting && (this.canGetPrivacySetting = !0),
                (this.backUrl = t.backUrl || ""),
                t.pageType &&
                  ((this.pageType = t.pageType || 1), (this.pageTitle = 1 == t.pageType ? "绑定手机号" : "手机号登录"));
              var e = getCurrentPages(),
                i = e[e.length - 2];
              i && "pages/order_addcart/order_addcart" == i.route ? (this.isHome = !0) : (this.isHome = !1);
            },
            methods: {
              onAgree: function () {
                this.protocol = !0;
              },
              submitData: function () {
                if (0 != this.pageType) {
                  if (this.rules())
                    if (this.authKey) this.phoneAuth(this.authKey);
                    else {
                      var t = this.$Cache.get("snsapiKey");
                      this.phoneAuth(t);
                    }
                } else this.isLogin();
              },
              rules: function () {
                return this.protocol || 0 != this.pageType
                  ? this.phone
                    ? /^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)
                      ? !!this.captcha || this.$util.Tips({ title: this.$t("请填写验证码") })
                      : (this.$util.Tips({ title: this.$t("请输入正确的手机号码") }), !1)
                    : (this.$util.Tips({ title: this.$t("请填写手机号码") }), !1)
                  : (t.showToast({ title: this.$t("请先阅读并同意协议"), icon: "none", duration: 2e3 }), !1);
              },
              isLogin: function () {
                var e = this;
                this.rules() &&
                  (t.showLoading({ title: this.$t("正在登录中") }),
                  l.default
                    .getCode()
                    .then(function (i) {
                      (0, p.phoneLogin)({
                        code: i,
                        spread_spid: f.globalData.spid,
                        spread_code: f.globalData.code,
                        phone: e.phone,
                        captcha: e.captcha,
                      })
                        .then(function (i) {
                          t.hideLoading();
                          var n = i.data.expires_time - e.$Cache.time();
                          e.$store.commit("LOGIN", { token: i.data.token, time: n }), e.getUserInfo(i.data.bindName);
                        })
                        .catch(function (e) {
                          t.hideLoading(), t.showToast({ title: e, icon: "none", duration: 2e3 });
                        });
                    })
                    .catch(function (t) {}));
              },
              phoneAuth: function (e) {
                var i,
                  n = this;
                t.showLoading({ title: this.$t("正在登录中") }),
                  (i = p.phoneLogin),
                  i({ phone: this.phone, captcha: this.captcha, key: e })
                    .then(function (t) {
                      var e = t.data.expires_time - n.$Cache.time();
                      n.$store.commit("LOGIN", { token: t.data.token, time: e }), n.getUserInfo(t.data.bindName);
                    })
                    .catch(function (e) {
                      t.hideLoading(), n.$util.Tips({ title: e });
                    });
              },
              getUserInfo: function (e) {
                var i = this,
                  n = this;
                (0, h.getUserInfo)().then(function (a) {
                  t.hideLoading(),
                    (n.userInfo = a.data),
                    n.$store.commit("SETUID", a.data.uid),
                    n.$store.commit("UPDATE_USERINFO", a.data),
                    e
                      ? (i.isShow = !0)
                      : n.$util.Tips(
                          { title: n.$t("登录成功"), icon: "success" },
                          { tab: 3, url: i.configData.wechat_auth_switch ? 2 : 1 }
                        );
                });
              },
              success: function (t) {
                var e = this;
                this.$refs.verify.hide();
                var i = this;
                (0, u.verifyCode)().then(function (n) {
                  (0, u.registerVerify)(i.phone, "reset", n.data.key, e.captchaType, t.captchaVerification)
                    .then(function (t) {
                      i.$util.Tips({ title: t.msg }), i.sendCode();
                    })
                    .catch(function (t) {
                      return i.$util.Tips({ title: t });
                    });
                });
              },
              code: function () {
                var t = this;
                return (0, c.default)(
                  o.default.mark(function e() {
                    var i;
                    return o.default.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((i = t), i.phone)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", i.$util.Tips({ title: i.$t("请填写手机号码") }));
                          case 3:
                            if (/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.phone)) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return", i.$util.Tips({ title: i.$t("请输入正确的手机号码") }));
                          case 5:
                            return t.$refs.verify.show(), e.abrupt("return");
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              ChangeIsDefault: function () {
                this.$set(this, "protocol", !this.protocol);
              },
              closeEdit: function () {
                (this.isShow = !1),
                  this.$util.Tips({ title: this.$t("登录成功"), icon: "success" }, { tab: 3, url: 2 });
              },
              editSuccess: function () {
                this.isShow = !1;
              },
              back: function () {
                t.navigateBack({ delta: this.configData.wechat_auth_switch ? 2 : 1 });
              },
              privacy: function (e) {
                t.navigateTo({ url: "/pages/users/privacy/index?type=" + e });
              },
            },
          };
        e.default = m;
      }).call(this, i("543d")["default"], i("bc2e")["default"]);
    },
    "7f3d": function (t, e, i) {
      "use strict";
      var n = i("2134"),
        a = i.n(n);
      a.a;
    },
    "9c9d": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("1857"),
        a = i("6cc2");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("7f3d");
      var c = i("f0c5"),
        s = Object(c["a"])(a["default"], n["b"], n["c"], !1, null, "1afebd3a", null, !1, n["a"], void 0);
      e["default"] = s.exports;
    },
  },
  [["0c81", "common/runtime", "common/vendor"]],
]);
