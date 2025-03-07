(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/skeleton/index"],
  {
    "256e": function (t, e, n) {
      "use strict";
      var i = n("8053"),
        c = n.n(i);
      c.a;
    },
    "4aa5": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("f7cb"),
        c = n("71c5");
      for (var o in c)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(o);
      n("256e");
      var s = n("f0c5"),
        a = Object(s["a"])(c["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
      e["default"] = a.exports;
    },
    "71c5": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("b29c"),
        c = n.n(i);
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      e["default"] = c.a;
    },
    8053: function (t, e, n) {},
    b29c: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = {
          name: "skeleton",
          props: {
            bgcolor: { type: String, value: "#FFF" },
            selector: { type: String, value: "skeleton" },
            loading: { type: String, value: "spin" },
            show: { type: Boolean, value: !1 },
            isNodes: { type: Number, value: !1 },
          },
          data: function () {
            return {
              loadingAni: ["spin", "chiaroscuro"],
              systemInfo: {},
              skeletonRectLists: [],
              skeletonCircleLists: [],
            };
          },
          watch: {
            isNodes: function (t) {
              this.readyAction();
            },
          },
          mounted: function () {
            this.attachedAction();
          },
          methods: {
            attachedAction: function () {
              var e = t.getSystemInfoSync();
              (this.systemInfo = { width: e.windowWidth, height: e.windowHeight }),
                (this.loading = this.loadingAni.includes(this.loading) ? this.loading : "spin");
            },
            readyAction: function () {
              var e = this;
              t
                .createSelectorQuery()
                .selectAll(".".concat(this.selector))
                .boundingClientRect(function (t) {
                  t[0] && t[0].length > 0 && (e.systemInfo.height = t[0][0].height + t[0][0].top);
                })
                .exec(),
                this.rectHandle(),
                this.radiusHandle();
            },
            rectHandle: function () {
              var e = this;
              t.createSelectorQuery()
                .selectAll(".".concat(this.selector, "-rect"))
                .boundingClientRect()
                .exec(function (t) {
                  e.skeletonRectLists = t[0];
                });
            },
            radiusHandle: function () {
              var e = this;
              t.createSelectorQuery()
                .selectAll(".".concat(this.selector, "-radius"))
                .boundingClientRect()
                .exec(function (t) {
                  e.skeletonCircleLists = t[0];
                });
            },
          },
        };
        e.default = n;
      }).call(this, n("543d")["default"]);
    },
    f7cb: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this.$createElement;
          this._self._c;
        },
        c = [];
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/skeleton/index-create-component",
  {
    "components/skeleton/index-create-component": function (module, exports, __webpack_require__) {
      __webpack_require__("543d")["createComponent"](__webpack_require__("4aa5"));
    },
  },
  [["components/skeleton/index-create-component"]],
]);
