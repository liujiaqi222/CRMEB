(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/visualization/components/skeleton"],
  {
    "056c": function (t, i, e) {
      "use strict";
      var o = e("3b0d"),
        d = e.n(o);
      d.a;
    },
    "0fb8": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return o;
      }),
        e.d(i, "c", function () {
          return d;
        }),
        e.d(i, "a", function () {});
      var o = function () {
          var t = this.$createElement;
          this._self._c;
        },
        d = [];
    },
    "3b0d": function (t, i, e) {},
    5044: function (t, i, e) {
      "use strict";
      (function (t) {
        Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
        var e = {
          name: "skeleton",
          props: {
            bgcolor: { type: String, value: "#FFF" },
            selector: { type: String, value: "skeleton" },
            loading: { type: String, value: "chiaroscuro" },
            show: { type: Boolean, value: !1 },
            isNodes: { type: Number, value: !1 },
          },
          data: function () {
            return {
              loadingAni: ["spin", "chiaroscuro"],
              systemInfo: {},
              skeletonRectLists: [
                { bottom: 35, dataset: {}, height: 25, id: "", left: 15, right: 65, top: 10, width: 50 },
                { bottom: 72, dataset: {}, height: 30, id: "", left: 15, right: 360, top: 42, width: 345 },
                { bottom: 232, dataset: {}, height: 145, id: "", left: 15, right: 360, top: 87, width: 345 },
                { bottom: 436, dataset: {}, height: 30, id: "", left: 15, right: 360, top: 406, width: 345 },
                { bottom: 596, dataset: {}, height: 150, id: "", left: 15, right: 183, top: 446, width: 168 },
                { bottom: 519, dataset: {}, height: 73, id: "", left: 188, right: 360, top: 446, width: 172 },
                { bottom: 596, dataset: {}, height: 73, id: "", left: 188, right: 360, top: 523, width: 172 },
                { bottom: 793, dataset: {}, height: 177, id: "", left: 15, right: 360, top: 616, width: 345 },
                { bottom: 1680, dataset: {}, height: 206, id: "", left: 15, right: 360, top: 1474, width: 345 },
              ],
              skeletonCircleLists: [
                { id: "", dataset: {}, left: 27, right: 72, top: 245, bottom: 270, width: 45, height: 45 },
                { id: "", dataset: {}, left: 96, right: 141, top: 245, bottom: 270, width: 45, height: 45 },
                { id: "", dataset: {}, left: 165, right: 210, top: 245, bottom: 270, width: 45, height: 45 },
                { id: "", dataset: {}, left: 234, right: 279, top: 245, bottom: 270, width: 45, height: 45 },
                { id: "", dataset: {}, left: 303, right: 348, top: 245, bottom: 270, width: 45, height: 45 },
                { id: "", dataset: {}, left: 27, right: 72, top: 327, bottom: 352, width: 45, height: 45 },
                { id: "", dataset: {}, left: 96, right: 141, top: 327, bottom: 352, width: 45, height: 45 },
                { id: "", dataset: {}, left: 165, right: 210, top: 327, bottom: 352, width: 45, height: 45 },
                { id: "", dataset: {}, left: 234, right: 279, top: 327, bottom: 352, width: 45, height: 45 },
                { id: "", dataset: {}, left: 303, right: 348, top: 327, bottom: 352, width: 45, height: 45 },
              ],
            };
          },
          watch: { isNodes: function (t) {} },
          mounted: function () {
            this.attachedAction();
          },
          methods: {
            attachedAction: function () {
              var i = t.getSystemInfoSync();
              (this.systemInfo = { width: i.windowWidth, height: i.windowHeight }),
                (this.loading = this.loadingAni.includes(this.loading) ? this.loading : "spin");
            },
          },
        };
        i.default = e;
      }).call(this, e("543d")["default"]);
    },
    "9df0": function (t, i, e) {
      "use strict";
      e.r(i);
      var o = e("0fb8"),
        d = e("ae21");
      for (var h in d)
        ["default"].indexOf(h) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return d[t];
            });
          })(h);
      e("056c");
      var a = e("f0c5"),
        n = Object(a["a"])(d["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], void 0);
      i["default"] = n.exports;
    },
    ae21: function (t, i, e) {
      "use strict";
      e.r(i);
      var o = e("5044"),
        d = e.n(o);
      for (var h in o)
        ["default"].indexOf(h) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return o[t];
            });
          })(h);
      i["default"] = d.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "pages/index/visualization/components/skeleton-create-component",
  {
    "pages/index/visualization/components/skeleton-create-component": function (module, exports, __webpack_require__) {
      __webpack_require__("543d")["createComponent"](__webpack_require__("9df0"));
    },
  },
  [["pages/index/visualization/components/skeleton-create-component"]],
]);
