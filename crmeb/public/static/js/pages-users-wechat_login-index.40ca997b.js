(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-users-wechat_login-index"],
  {
    "30fe": function (t, e, i) {
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
          return t.isPhoneBox
            ? i(
                "v-uni-view",
                [
                  i("v-uni-view", { staticClass: "mobile-bg" }),
                  i(
                    "v-uni-view",
                    { staticClass: "mobile-mask animated", class: { slideInUp: t.isUp } },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "info-box" },
                        [
                          i("v-uni-image", { attrs: { src: t.logoUrl } }),
                          i("v-uni-view", { staticClass: "title" }, [t._v(t._s(t.$t("获取授权")))]),
                          i("v-uni-view", { staticClass: "txt" }, [t._v(t._s(t.$t("获取手机号授权")))]),
                        ],
                        1
                      ),
                      i(
                        "v-uni-button",
                        {
                          staticClass: "sub_btn",
                          attrs: { "open-type": "getPhoneNumber" },
                          on: {
                            getphonenumber: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.getphonenumber.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v(t._s(t.$t("获取手机号")))]
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
    "356a": function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      n(i("69b2")), i("d1ea"), i("4e39"), getApp();
      var a = {
        name: "routine_phone",
        props: {
          isPhoneBox: { type: Boolean, default: !1 },
          logoUrl: { type: String, default: "" },
          authKey: { type: String, default: "" },
        },
        data: function () {
          return { keyCode: "", account: "", codeNum: "", isStatus: !1 };
        },
        mounted: function () {},
        methods: {
          close: function (t) {
            this.$emit("close", { isStatus: this.isStatus, new_user: t });
          },
        },
      };
      e.default = a;
    },
    4325: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mobile-bg[data-v-10ab0f22]{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.mobile-mask[data-v-10ab0f22]{z-index:20;position:fixed;left:0;bottom:0;width:100%;padding:%?67?% %?30?%;background:#fff}.mobile-mask .info-box[data-v-10ab0f22]{display:flex;flex-direction:column;align-items:center;justify-content:center}.mobile-mask .info-box uni-image[data-v-10ab0f22]{width:%?150?%;height:%?150?%;border-radius:%?10?%}.mobile-mask .info-box .title[data-v-10ab0f22]{margin-top:%?30?%;margin-bottom:%?20?%;font-size:%?36?%}.mobile-mask .info-box .txt[data-v-10ab0f22]{font-size:%?30?%;color:#868686}.mobile-mask .sub_btn[data-v-10ab0f22]{width:%?690?%;height:%?86?%;line-height:%?86?%;margin-top:%?60?%;background:var(--view-theme);border-radius:%?43?%;color:#fff;font-size:%?28?%;text-align:center}.animated[data-v-10ab0f22]{-webkit-animation-duration:.4s;animation-duration:.4s}',
          "",
        ]),
        (t.exports = e);
    },
    4966: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("30fe"),
        a = i("8392");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("85ab");
      var s = i("f0c5"),
        c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "10ab0f22", null, !1, n["a"], void 0);
      e["default"] = c.exports;
    },
    "554e": function (t, e, i) {
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
          return t.isUp
            ? i(
                "v-uni-view",
                [
                  i("v-uni-view", {
                    staticClass: "mobile-bg",
                    on: {
                      click: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)), t.close.apply(void 0, arguments);
                      },
                    },
                  }),
                  i(
                    "v-uni-view",
                    { staticClass: "mobile-mask animated", class: { slideInUp: t.isUp } },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "input-item" },
                        [
                          i("v-uni-input", {
                            attrs: { type: "text", placeholder: t.$t("输入手机号"), maxlength: "11" },
                            model: {
                              value: t.account,
                              callback: function (e) {
                                t.account = e;
                              },
                              expression: "account",
                            },
                          }),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "input-item" },
                        [
                          i("v-uni-input", {
                            attrs: { type: "text", placeholder: t.$t("输入验证码"), maxlength: "6" },
                            model: {
                              value: t.codeNum,
                              callback: function (e) {
                                t.codeNum = e;
                              },
                              expression: "codeNum",
                            },
                          }),
                          i(
                            "v-uni-button",
                            {
                              staticClass: "code",
                              attrs: { disabled: t.disabled },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.code.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v(t._s(t.text))]
                          ),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "sub_btn",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.loginBtn.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v(t._s(t.$t("立即登录")))]
                      ),
                    ],
                    1
                  ),
                  i("Verify", {
                    ref: "verify",
                    attrs: { captchaType: t.captchaType, imgSize: { width: "330px", height: "155px" } },
                    on: {
                      success: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)), t.success.apply(void 0, arguments);
                      },
                    },
                  }),
                ],
                1
              )
            : t._e();
        },
        a = [];
    },
    "566d": function (t, e, i) {
      "use strict";
      var n = i("bbdc"),
        a = i.n(n);
      a.a;
    },
    "6c1a": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("ab6b"),
        a = i("b96f");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("566d");
      var s = i("f0c5"),
        c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "a06abc60", null, !1, n["a"], void 0);
      e["default"] = c.exports;
    },
    8328: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("554e"),
        a = i("c4dc");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("ea6b");
      var s = i("f0c5"),
        c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "8329b6d6", null, !1, n["a"], void 0);
      e["default"] = c.exports;
    },
    8392: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("356a"),
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
    "85ab": function (t, e, i) {
      "use strict";
      var n = i("acd0"),
        a = i.n(n);
      a.a;
    },
    a8cf: function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("ac1f"), i("00b4");
      var a = n(i("dc9d")),
        o = (n(i("69b2")), n(i("aa1e"))),
        s = (n(i("00e9")), i("d1ea")),
        c = (i("5743"), i("4e39"), getApp()),
        u = {
          name: "login_mobile",
          components: { Verify: o.default },
          props: {
            isUp: { type: Boolean, default: !1 },
            canClose: { type: Boolean, default: !0 },
            authKey: { type: String, default: "" },
          },
          data: function () {
            return { keyCode: "", account: "", codeNum: "" };
          },
          mixins: [a.default],
          mounted: function () {
            this.getCode();
          },
          methods: {
            success: function (t) {
              var e = this,
                i = this;
              this.$refs.verify.hide(),
                (0, s.getCodeApi)().then(function (n) {
                  (0, s.registerVerify)({
                    phone: i.account,
                    key: n.data.key,
                    captchaType: e.captchaType,
                    captchaVerification: t.captchaVerification,
                  })
                    .then(function (t) {
                      i.$util.Tips({ title: t.msg }), i.sendCode();
                    })
                    .catch(function (t) {
                      return i.$util.Tips({ title: t });
                    });
                });
            },
            code: function () {
              return this.account
                ? /^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.account)
                  ? void this.$refs.verify.show()
                  : this.$util.Tips({ title: this.$t("请输入正确的手机号码") })
                : this.$util.Tips({ title: this.$t("请填写手机号码") });
            },
            getCode: function () {
              var t = this;
              (0, s.getCodeApi)()
                .then(function (e) {
                  t.keyCode = e.data.key;
                })
                .catch(function (e) {
                  t.$util.Tips({ title: e });
                });
            },
            close: function (t) {
              this.canClose && this.$emit("close", t);
            },
            loginBtn: function () {
              if (!this.account) return this.$util.Tips({ title: this.$t("请填写手机号码") });
              if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.account))
                return this.$util.Tips({ title: this.$t("请输入正确的手机号码") });
              if (!this.codeNum) return this.$util.Tips({ title: this.$t("请填写验证码") });
              if (!/^[\w\d]+$/i.test(this.codeNum)) return this.$util.Tips({ title: this.$t("请输入正确的验证码") });
              if ((uni.showLoading({ title: this.$t("正在登录中") }), this.authKey)) this.phoneAuth(this.authKey);
              else {
                var t = this.$Cache.get("snsapiKey");
                this.phoneAuth(t);
              }
            },
            phoneAuth: function (t) {
              var e = this;
              (0, s.phoneWxSilenceAuth)({
                spid: c.globalData.spid,
                spread: c.globalData.code,
                phone: this.account,
                captcha: this.codeNum,
                key: t,
              })
                .then(function (t) {
                  var i = t.data.expires_time - e.$Cache.time();
                  e.$store.commit("LOGIN", { token: t.data.token, time: i }), e.getUserInfo();
                })
                .catch(function (t) {
                  uni.hideLoading(), e.$util.Tips({ title: t });
                });
            },
            getUserInfo: function (t) {
              var e = this;
              (0, s.getUserInfo)().then(function (t) {
                uni.hideLoading(),
                  (e.userInfo = t.data),
                  e.$store.commit("SETUID", t.data.uid),
                  e.$store.commit("UPDATE_USERINFO", t.data),
                  e.$emit("wechatPhone", !0);
              });
            },
          },
        };
      e.default = u;
    },
    aafc: function (t, e, i) {
      var n = i("e722");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("5926a986", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ab6b: function (t, e, i) {
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
            { staticClass: "wrapper", style: t.colorStyle },
            [
              i("v-uni-view", { staticClass: "bag" }, [
                i("img", { attrs: { src: "../static/login-bg_" + t.colorStatus + ".jpg", alt: "", srcset: "" } }),
              ]),
              i("v-uni-view", { staticClass: "system-height", style: { height: t.statusBarHeight } }),
              i(
                "v-uni-view",
                { staticClass: "merchant-msg" },
                [
                  i("img", { attrs: { src: t.configData.wap_login_logo } }),
                  i("v-uni-view", { staticClass: "name" }, [t._v(t._s(t.configData.site_name))]),
                ],
                1
              ),
              i(
                "v-uni-view",
                { staticClass: "wechat_login" },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "btn-wrapper" },
                    [
                      i(
                        "v-uni-button",
                        {
                          staticClass: "bg-theme btn1",
                          attrs: { "hover-class": "none" },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.wechatLogin.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v(t._s(t.$t("微信登录")))]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              t.canGetPrivacySetting
                ? t._e()
                : i(
                    "v-uni-view",
                    { staticClass: "protocol" },
                    [
                      i(
                        "v-uni-checkbox-group",
                        {
                          on: {
                            click: function (e) {
                              e.stopPropagation(),
                                (arguments[0] = e = t.$handleEvent(e)),
                                t.ChangeIsDefault.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("v-uni-checkbox", {
                            class: t.inAnimation ? "trembling" : "",
                            attrs: { checked: !!t.protocol },
                            on: {
                              animationend: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)), (t.inAnimation = !1);
                              },
                            },
                          }),
                          i(
                            "v-uni-text",
                            {
                              on: {
                                click: function (e) {
                                  e.stopPropagation(),
                                    (arguments[0] = e = t.$handleEvent(e)),
                                    t.ChangeIsDefault.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v(t._s(t.$t("已阅读并同意")))]
                          ),
                          i(
                            "v-uni-text",
                            {
                              staticClass: "main-color",
                              on: {
                                click: function (e) {
                                  e.stopPropagation(), (arguments[0] = e = t.$handleEvent(e)), t.privacy(4);
                                },
                              },
                            },
                            [t._v(t._s(t.$t("《用户协议》")))]
                          ),
                          t._v(t._s(t.$t("与"))),
                          i(
                            "v-uni-text",
                            {
                              staticClass: "main-color",
                              on: {
                                click: function (e) {
                                  e.stopPropagation(), (arguments[0] = e = t.$handleEvent(e)), t.privacy(3);
                                },
                              },
                            },
                            [t._v(t._s(t.$t("《隐私协议》")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
              t.isUp
                ? [
                    i("mobileLogin", {
                      attrs: { isUp: t.isUp, canClose: t.canClose, authKey: t.authKey },
                      on: {
                        close: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.maskClose.apply(void 0, arguments);
                        },
                        wechatPhone: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.wechatPhone.apply(void 0, arguments);
                        },
                      },
                    }),
                  ]
                : t._e(),
              t.isPhoneBox
                ? [
                    i("routinePhone", {
                      attrs: { logoUrl: t.logoUrl, isPhoneBox: t.isPhoneBox, authKey: t.authKey },
                      on: {
                        loginSuccess: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.bindPhoneClose.apply(void 0, arguments);
                        },
                      },
                    }),
                  ]
                : t._e(),
              [
                i("editUserModal", {
                  attrs: { isShow: t.isShow },
                  on: {
                    closeEdit: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)), t.closeEdit.apply(void 0, arguments);
                    },
                    editSuccess: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)), t.editSuccess.apply(void 0, arguments);
                    },
                  },
                }),
              ],
            ],
            2
          );
        },
        a = [];
    },
    acd0: function (t, e, i) {
      var n = i("4325");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("4a636390", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b1d6: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-a06abc60]{background:#fff}body.?%PAGE?%[data-v-a06abc60]{background:#fff}.wrapper[data-v-a06abc60]{position:relative;height:100vh}.wrapper .bag[data-v-a06abc60]{position:absolute;top:0;left:0;width:100%;opacity:.8;z-index:-1;z-index:0}.wrapper .bag img[data-v-a06abc60]{width:100%;height:%?838?%}.wrapper .merchant-msg[data-v-a06abc60]{padding-top:%?252?%;display:flex;justify-content:center;align-items:center;flex-direction:column;z-index:2;position:relative}.wrapper .merchant-msg img[data-v-a06abc60]{width:%?152?%;height:%?152?%;border-radius:50%}.wrapper .merchant-msg .name[data-v-a06abc60]{font-size:%?40?%;font-weight:500;color:#333;line-height:%?56?%;margin-top:%?32?%}.wechat_login[data-v-a06abc60]{margin-top:%?96?%}.wechat_login .img uni-image[data-v-a06abc60]{width:100%}.wechat_login .btn-wrapper[data-v-a06abc60]{padding:0 %?66?%}.wechat_login .btn-wrapper uni-button[data-v-a06abc60]{width:100%;height:%?86?%;line-height:%?86?%;margin-bottom:%?40?%;border-radius:%?120?%;font-size:%?30?%}.wechat_login .btn-wrapper uni-button.btn1[data-v-a06abc60]{color:#fff}.wechat_login .btn-wrapper uni-button.btn2[data-v-a06abc60]{color:#666;border:1px solid #e4e4e4}.title-bar[data-v-a06abc60]{position:relative;display:flex;align-items:center;justify-content:center;font-size:%?34?%;font-weight:500;color:#333;line-height:%?48?%}.icon[data-v-a06abc60]{position:absolute;left:%?30?%;top:0;display:flex;align-items:center;justify-content:center;width:%?80?%;height:%?80?%}.icon uni-image[data-v-a06abc60]{width:%?50?%;height:%?50?%}.protocol[data-v-a06abc60]{position:fixed;bottom:%?52?%;left:0;width:100%;margin:0 auto;color:#999;font-size:%?24?%;line-height:%?22?%;text-align:center;bottom:calc(52rpx+ constant(safe-area-inset-bottom));bottom:calc(%?52?% + env(safe-area-inset-bottom))\n  /*checkbox 选项框大小  */\n  /*checkbox选中后样式  */\n  /*checkbox选中后图标样式  */}.protocol .main-color[data-v-a06abc60]{color:var(--view-theme)}.protocol .trembling[data-v-a06abc60]{-webkit-animation:shake .6s;animation:shake .6s}.protocol[data-v-a06abc60] uni-checkbox .uni-checkbox-input{width:%?28?%;height:%?28?%}.protocol[data-v-a06abc60] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before{font-size:%?24?%}.protocol[data-v-a06abc60] uni-checkbox .uni-checkbox-wrapper{margin-bottom:1px}.protocol[data-v-a06abc60] uni-checkbox .wx-checkbox-input{width:%?28?%;height:%?28?%}.protocol[data-v-a06abc60] uni-checkbox .wx-checkbox-input.wx-checkbox-input-checked{background:#fff}.protocol[data-v-a06abc60] uni-checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{width:%?28?%;height:%?28?%;line-height:%?28?%;text-align:center;font-size:%?22?%;background:transparent;transform:translate(-50%,-50%) scale(1);-webkit-transform:translate(-50%,-50%) scale(1)}',
          "",
        ]),
        (t.exports = e);
    },
    b96f: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("e76d"),
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
    bbdc: function (t, e, i) {
      var n = i("b1d6");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("9cfaa79a", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c4dc: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("a8cf"),
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
    e722: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          ".mobile-bg[data-v-8329b6d6]{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.mobile-mask[data-v-8329b6d6]{z-index:20;position:fixed;left:0;bottom:0;width:100%;padding:%?67?% %?30?%;background:#fff}.mobile-mask .input-item[data-v-8329b6d6]{display:flex;justify-content:space-between;width:100%;height:%?86?%;margin-bottom:%?38?%}.mobile-mask .input-item uni-input[data-v-8329b6d6]{flex:1;display:block;height:100%;padding-left:%?40?%;border-radius:%?43?%;border:1px solid #dcdcdc}.mobile-mask .input-item .code[data-v-8329b6d6]{display:flex;align-items:center;justify-content:center;width:%?220?%;height:%?86?%;margin-left:%?30?%;background:var(--view-minorColorT);font-size:%?28?%;color:var(--view-theme);border-radius:%?43?%}.mobile-mask .input-item .code[disabled][data-v-8329b6d6]{background:rgba(0,0,0,.05);color:#999}.mobile-mask .sub_btn[data-v-8329b6d6]{width:%?690?%;height:%?86?%;line-height:%?86?%;margin-top:%?60?%;background:var(--view-theme);border-radius:%?43?%;color:#fff;font-size:%?28?%;text-align:center}.animated[data-v-8329b6d6]{-webkit-animation-duration:.4s;animation-duration:.4s}",
          "",
        ]),
        (t.exports = e);
    },
    e76d: function (t, e, i) {
      "use strict";
      (function (t) {
        i("7a82");
        var n = i("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          i("99af"),
          i("4d63"),
          i("c607"),
          i("ac1f"),
          i("2c3e"),
          i("25f0"),
          i("466d"),
          i("841c"),
          i("c975");
        var a = n(i("8328")),
          o = n(i("4966")),
          s = n(i("58e7")),
          c = n(i("f4ac")),
          u = i("4e39"),
          r = (i("4cfb"), i("d1ea")),
          d = n(i("69b2")),
          l = (n(i("5998")), n(i("19b6"))),
          h = (n(i("5998")), i("00a0")),
          f = (i("f9f0"), n(i("00e9"))),
          p = getApp(),
          b = uni.getSystemInfoSync().statusBarHeight + "px",
          g = {
            mixins: [l.default],
            data: function () {
              return {
                imgHost: h.HTTP_REQUEST_URL,
                isUp: !1,
                canClose: !0,
                phone: "",
                statusBarHeight: b,
                isHome: !1,
                isPhoneBox: !1,
                protocol: !1,
                isShow: !1,
                isLogin: !1,
                logoUrl: "",
                code: "",
                authKey: "",
                options: "",
                userInfo: {},
                codeNum: 0,
                canUseGetUserProfile: !1,
                canGetPrivacySetting: !1,
                inAnimation: !1,
                colorStatus: uni.getStorageSync("color_status"),
                mp_is_new: this.$Cache.get("MP_VERSION_ISNEW") || !1,
                configData: f.default.get("BASIC_CONFIG"),
                bindPhone: !1,
              };
            },
            components: {
              mobileLogin: a.default,
              routinePhone: o.default,
              editUserModal: s.default,
              privacyAgreementPopup: c.default,
            },
            onLoad: function (t) {
              uni.getUserProfile && (this.canUseGetUserProfile = !0);
              var e = t.code,
                i = t.state;
              if (e) {
                var n = this.$Cache.get("spread") || "",
                  a = i ? decodeURIComponent(i) : "";
                this.wechatAuthLogin({ code: e, spread: n }, a);
              }
              var o = getCurrentPages(),
                s = o[o.length - 2];
              s && "pages/order_addcart/order_addcart" == s.route ? (this.isHome = !0) : (this.isHome = !1);
            },
            methods: {
              wechatAuthLogin: function (t, e) {
                var i = this;
                uni.showLoading({ title: this.$t("正在登录中") }),
                  (0, u.wechatAuthLogin)(t)
                    .then(function (t) {
                      if ((uni.hideLoading(), t.data.bindPhone))
                        (i.authKey = t.data.key),
                          uni.navigateTo({
                            url: "/pages/users/binding_phone/index?authKey=".concat(i.authKey, "&backUrl=").concat(e),
                          });
                      else {
                        var n = t.data.expires_time - i.$Cache.time();
                        i.$store.commit("LOGIN", { token: t.data.token, time: n }), i.getUserInfo(0, e);
                      }
                    })
                    .catch(function (t) {
                      uni.hideLoading(), uni.showToast({ title: t, icon: "none", duration: 2e3 });
                    });
              },
              onAgree: function () {
                this.protocol = !0;
              },
              userLogin: function () {
                var t = this;
                d.default
                  .getCode()
                  .then(function (e) {
                    (0, u.authType)({ code: e, spread_spid: p.globalData.spid, spread_code: p.globalData.code })
                      .then(function (e) {
                        uni.hideLoading(), (t.authKey = e.data.key), (t.bindPhone = e.data.bindPhone);
                      })
                      .catch(function (t) {
                        uni.hideLoading(), uni.showToast({ title: t, icon: "none", duration: 2e3 });
                      });
                  })
                  .catch(function (t) {});
              },
              getAuthLogin: function () {
                var t = this;
                this.authKey &&
                  (this.protocol
                    ? (uni.showLoading({ title: this.$t("正在登录中") }),
                      (0, u.authLogin)({ key: this.authKey })
                        .then(function (e) {
                          var i = e.data.expires_time - t.$Cache.time();
                          t.$store.commit("LOGIN", { token: e.data.token, time: i }), t.getUserInfo(e.data.bindName);
                        })
                        .catch(function (t) {
                          uni.hideLoading(), uni.showToast({ title: t, icon: "none", duration: 2e3 });
                        }))
                    : uni.showToast({ title: this.$t("请先阅读并同意协议"), icon: "none", duration: 2e3 }));
              },
              ChangeIsDefault: function (t) {
                this.$set(this, "protocol", !this.protocol);
              },
              editSuccess: function () {
                this.isShow = !1;
              },
              phoneLogin: function () {
                uni.navigateTo({
                  url: "/pages/users/binding_phone/index?authKey=".concat(this.authKey, "&pageType=0"),
                });
              },
              closeEdit: function () {
                (this.isShow = !1), this.$util.Tips({ title: this.$t("登录成功"), icon: "success" }, { tab: 3 });
              },
              onReject: function () {
                uni.navigateBack();
              },
              back: function () {
                uni.navigateBack({ delta: 1 });
              },
              home: function () {
                uni.switchTab({ url: "/pages/index/index" });
              },
              maskClose: function (t) {
                this.isUp = !1;
              },
              bindPhoneClose: function (t) {
                (this.isPhoneBox = !1),
                  t.isStatus && this.$util.Tips({ title: this.$t("登录成功"), icon: "success" }, { tab: 3 });
              },
              getUserInfo: function (t, e) {
                var i = this,
                  n = this;
                (0, r.getUserInfo)()
                  .then(function (a) {
                    uni.hideLoading(),
                      (n.userInfo = a.data),
                      n.$store.commit("SETUID", a.data.uid),
                      n.$store.commit("UPDATE_USERINFO", a.data),
                      t
                        ? (i.isShow = !0)
                        : n.$util.Tips(
                            { title: n.$t("登录成功"), icon: "success" },
                            { tab: 4, url: e || "/pages/user/index" }
                          );
                  })
                  .catch(function (t) {
                    uni.hideLoading(), uni.showToast({ title: t.msg, icon: "none", duration: 2e3 });
                  });
              },
              privacy: function (t) {
                uni.navigateTo({ url: "/pages/users/privacy/index?type=" + t });
              },
              getQueryString: function (t) {
                var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                  i = new RegExp("(^|/)" + t + "/([^/]*)(/|$)", "i"),
                  n = window.location.search.substr(1).match(e),
                  a = window.location.pathname.substr(1).match(i);
                return null != n ? unescape(n[2]) : null != a ? unescape(a[2]) : null;
              },
              wechatLogin: function () {
                this.protocol
                  ? this.code && "snsapi_base" === this.options.scope
                    ? this.authKey &&
                      uni.navigateTo({ url: "/pages/users/binding_phone/index?authKey=".concat(this.authKey) })
                    : this.$wechat.oAuth("snsapi_userinfo", location.href)
                  : uni.showToast({ title: this.$t("请先阅读并同意协议"), icon: "none", duration: 2e3 });
              },
              wechatPhone: function () {
                if ((this.$Cache.clear("snsapiKey"), this.options.back_url)) {
                  var t = uni.getStorageSync("snRouter");
                  (t = -1 != t.indexOf("/pages/index/index") ? "/" : t),
                    -1 !== t.indexOf("/pages/users/wechat_login/index") && (t = "/"),
                    t || (t = "/pages/index/index"),
                    (this.isUp = !1),
                    uni.showToast({ title: this.$t("登录成功"), icon: "none" }),
                    setTimeout(function (e) {
                      location.href = t;
                    }, 800);
                } else
                  (this.isUp = !1),
                    uni.showToast({ title: this.$t("登录成功"), icon: "none" }),
                    setTimeout(function (t) {
                      location.href = "/pages/index/index";
                    }, 800);
              },
            },
          };
        e.default = g;
      }).call(this, i("5a52")["default"]);
    },
    ea6b: function (t, e, i) {
      "use strict";
      var n = i("aafc"),
        a = i.n(n);
      a.a;
    },
  },
]);
