(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/easy-loadimage/easy-loadimage"],
  {
    "0770": function (t, n, o) {
      "use strict";
      (function (t) {
        Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
        var e = o("97a2");
        function i() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var n = (16 * Math.random()) | 0,
              o = "x" == t ? n : (3 & n) | 8;
            return o.toString(16);
          });
        }
        var r = {
          props: {
            imageSrc: { type: String, default: "" },
            mode: { type: String, default: "" },
            loadingMode: { type: String, default: "looming-gray" },
            openTransition: { type: Boolean, default: !0 },
            viewHeight: {
              type: Number,
              default: function () {
                return t.getSystemInfoSync().windowHeight;
              },
            },
          },
          data: function () {
            var n = this;
            return {
              uid: "uid-" + i(),
              loadImg: !1,
              showImg: !1,
              isLoadError: !1,
              showTransition: !1,
              scrollFn: (0, e.throttle)(function () {
                if (!n.loadImg && !n.isLoadError) {
                  var o = n.uid,
                    e = t.createSelectorQuery().in(n);
                  e.select("#" + o)
                    .boundingClientRect(function (t) {
                      t && t.top - n.viewHeight < 0 && ((n.loadImg = !!n.imageSrc), (n.isLoadError = !n.loadImg));
                    })
                    .exec();
                }
              }, 200),
            };
          },
          methods: {
            init: function () {
              this.$nextTick(this.onScroll);
            },
            handleImgLoad: function (t) {
              var n = this;
              (this.showImg = !0),
                setTimeout(function () {
                  n.showTransition = !0;
                }, 50);
            },
            handleImgError: function (t) {
              this.isLoadError = !0;
            },
            onScroll: function () {
              this.scrollFn();
            },
          },
          mounted: function () {
            this.init(), t.$on("scroll", this.scrollFn), this.onScroll();
          },
          beforeDestroy: function () {
            t.$off("scroll", this.scrollFn);
          },
        };
        n.default = r;
      }).call(this, o("543d")["default"]);
    },
    1505: function (t, n, o) {
      "use strict";
      o.d(n, "b", function () {
        return e;
      }),
        o.d(n, "c", function () {
          return i;
        }),
        o.d(n, "a", function () {});
      var e = function () {
          var t = this.$createElement;
          this._self._c;
        },
        i = [];
    },
    "42e4": function (t, n, o) {
      "use strict";
      o.r(n);
      var e = o("0770"),
        i = o.n(e);
      for (var r in e)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            o.d(n, t, function () {
              return e[t];
            });
          })(r);
      n["default"] = i.a;
    },
    "8faa": function (t, n, o) {
      "use strict";
      var e = o("c682"),
        i = o.n(e);
      i.a;
    },
    c682: function (t, n, o) {},
    cad3: function (t, n, o) {
      "use strict";
      o.r(n);
      var e = o("1505"),
        i = o("42e4");
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            o.d(n, t, function () {
              return i[t];
            });
          })(r);
      o("8faa");
      var a = o("f0c5"),
        u = Object(a["a"])(i["default"], e["b"], e["c"], !1, null, "2ba7d904", null, !1, e["a"], void 0);
      n["default"] = u.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/easy-loadimage/easy-loadimage-create-component",
  {
    "components/easy-loadimage/easy-loadimage-create-component": function (module, exports, __webpack_require__) {
      __webpack_require__("543d")["createComponent"](__webpack_require__("cad3"));
    },
  },
  [["components/easy-loadimage/easy-loadimage-create-component"]],
]);
