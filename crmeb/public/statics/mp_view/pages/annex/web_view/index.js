require("../common/vendor.js");
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/annex/web_view/index"],
  {
    "681d": function (n, t, e) {
      "use strict";
      e.r(t);
      var i = e("eb21"),
        r = e.n(i);
      for (var u in i)
        ["default"].indexOf(u) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return i[n];
            });
          })(u);
      t["default"] = r.a;
    },
    8470: function (n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return i;
      }),
        e.d(t, "c", function () {
          return r;
        }),
        e.d(t, "a", function () {});
      var i = function () {
          var n = this.$createElement;
          this._self._c;
        },
        r = [];
    },
    eb21: function (n, t, e) {
      "use strict";
      (function (n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var e = {
          data: function () {
            return { windowH: 0, windowW: 0, webviewStyles: { progress: { color: "transparent" } }, url: "" };
          },
          onLoad: function (t) {
            this.url = t.url;
            try {
              var e = n.getSystemInfoSync();
              (this.windowW = e.windowWidth), (this.windowH = e.windowHeight);
            } catch (i) {}
          },
        };
        t.default = e;
      }).call(this, e("543d")["default"]);
    },
    ec02: function (n, t, e) {
      "use strict";
      (function (n, t) {
        var i = e("4ea4");
        e("4789");
        i(e("66fd"));
        var r = i(e("f517"));
        (n.__webpack_require_UNI_MP_PLUGIN__ = e), t(r.default);
      }).call(this, e("bc2e")["default"], e("543d")["createPage"]);
    },
    f517: function (n, t, e) {
      "use strict";
      e.r(t);
      var i = e("8470"),
        r = e("681d");
      for (var u in r)
        ["default"].indexOf(u) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return r[n];
            });
          })(u);
      var a = e("f0c5"),
        o = Object(a["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
      t["default"] = o.exports;
    },
  },
  [["ec02", "common/runtime", "common/vendor"]],
]);
