(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/goods_details/index"],
  {
    "16dc": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return s;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {});
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = (t._self._c, t.$t("￥")),
            s = t.storeInfo.spec_type ? t.$t("起") : null,
            o =
              t.storeInfo.vip_price && t.storeInfo.vip_price > 0 && 1 == t.storeInfo.is_vip && 1 == t.svip_price_open
                ? t.$t("￥")
                : null,
            n = t.storeInfo.limit_type > 0 && 1 == t.storeInfo.limit_type ? t.$t("单次限购") : null,
            r = t.storeInfo.limit_type > 0 && 1 != t.storeInfo.limit_type ? t.$t("永久限购") : null,
            a = t.storeInfo.limit_type > 0 ? t.$t(t.storeInfo.unit_name) : null,
            c = t.storeInfo.limit_type > 0 && t.storeInfo.min_qty > 1 ? t.$t("起购") : null,
            u = t.$t("划线价"),
            l = t.$t("￥"),
            h = t.$t("库存"),
            p = t.$t(t.storeInfo.unit_name) || "",
            d = t.$t("销量"),
            f = t.$t(t.storeInfo.unit_name) || "",
            m = !t.is_money_level && t.storeInfo.vip_price && t.storeInfo.is_vip ? t.$t("开通“超级会员”立省") : null,
            g = !t.is_money_level && t.storeInfo.vip_price && t.storeInfo.is_vip ? t.$t("元") : null,
            $ = !t.is_money_level && t.storeInfo.vip_price && t.storeInfo.is_vip ? t.$t("立即开通") : null,
            _ = t.storeInfo.presale ? t.$t("预售活动时间") : null,
            v = t.storeInfo.presale ? t.$t("预售结束后") : null,
            y = t.storeInfo.presale ? t.$t("天内发货") : null,
            S = t.couponList.length,
            I = S ? t.$t("优惠券") : null,
            C = S
              ? t.__map(t.couponList, function (e, i) {
                  var s = t.__get_orig(e),
                    o = i < 2 ? t.$t("满") : null,
                    n = i < 2 ? t.$t("减") : null;
                  return { $orig: s, m20: o, m21: n };
                })
              : null,
            b = t.activity.length,
            k = b ? t.$t("活动") : null,
            A = b
              ? t.__map(t.activity, function (e, i) {
                  var s = t.__get_orig(e),
                    o = "1" === e.type && t.$permission("seckill"),
                    n = o ? t.$t("参与秒杀") : null,
                    r = "2" === e.type && t.$permission("bargain"),
                    a = r ? t.$t("参与砍价") : null,
                    c = "3" === e.type && t.$permission("combination"),
                    u = c ? t.$t("参与拼团") : null;
                  return { $orig: s, m23: o, m24: n, m25: r, m26: a, m27: c, m28: u };
                })
              : null,
            w = t.attr.productAttr.length,
            x = w ? t.skuArr.length : null,
            T = w && x > 1 ? t.skuArr.slice(0, 4) : null,
            P = w && x > 1 ? t.$t("共") : null,
            L = w && x > 1 ? t.skuArr.length : null,
            q = w && x > 1 ? t.$t("种规格可选") : null,
            V = t.replyCount ? t.$t("用户评价") : null,
            H = t.replyCount ? t.$t("好评率") : null,
            N = t.good_list.length,
            G = N ? t.$t("优品推荐") : null,
            O = N
              ? t.__map(t.good_list, function (e, i) {
                  var s = t.__get_orig(e),
                    o = t.$t("￥"),
                    n = t.__map(e.list, function (e, i) {
                      var s = t.__get_orig(e),
                        o = e.activity && "1" === e.activity.type && t.$permission("seckill"),
                        n = o ? t.$t("秒杀") : null,
                        r = e.activity && "2" === e.activity.type && t.$permission("bargain"),
                        a = r ? t.$t("砍价") : null,
                        c = e.activity && "3" === e.activity.type && t.$permission("combination"),
                        u = c ? t.$t("拼团") : null;
                      return { $orig: s, m34: o, m35: n, m36: r, m37: a, m38: c, m39: u };
                    });
                  return { $orig: s, m40: o, l3: n };
                })
              : null,
            M = t.$t("产品介绍"),
            R = t.$t("首页"),
            D = t.$t("收藏"),
            U = parseFloat(t.CartCount),
            B = t.$t("购物车"),
            j = t.noGoods ? t.$t("暂无产品") : null,
            E =
              !t.noGoods && !t.storeInfo.presale && t.attr.productSelect.stock <= 0 && t.storeInfo.cart_button
                ? t.$t("加入购物车")
                : null,
            F = !t.noGoods && !t.storeInfo.presale && t.attr.productSelect.stock <= 0 ? t.$t("已售罄") : null,
            W =
              t.noGoods || t.storeInfo.presale || t.attr.productSelect.stock <= 0 || !t.storeInfo.cart_button
                ? null
                : t.$t("加入购物车"),
            z = t.noGoods || t.storeInfo.presale || t.attr.productSelect.stock <= 0 ? null : t.$t("立即购买"),
            Q =
              t.noGoods ||
              !t.storeInfo.presale ||
              (1 !== t.presale_pay_status && 3 !== t.presale_pay_status) ||
              1 !== t.presale_pay_status
                ? null
                : t.$t("未开始"),
            J =
              t.noGoods ||
              !t.storeInfo.presale ||
              (1 !== t.presale_pay_status && 3 !== t.presale_pay_status) ||
              1 === t.presale_pay_status
                ? null
                : t.$t("已结束"),
            Y =
              !t.noGoods &&
              t.storeInfo.presale &&
              1 !== t.presale_pay_status &&
              3 !== t.presale_pay_status &&
              (t.attr.productSelect.quota <= 0 || t.attr.productSelect.quota < t.attr.productSelect.cart_num)
                ? t.$t("已售罄")
                : null,
            K =
              t.noGoods ||
              !t.storeInfo.presale ||
              1 === t.presale_pay_status ||
              3 === t.presale_pay_status ||
              t.attr.productSelect.quota <= 0 ||
              t.attr.productSelect.quota < t.attr.productSelect.cart_num ||
              2 !== t.presale_pay_status
                ? null
                : t.$t("立即购买"),
            X = t.$t("发送给朋友"),
            Z = t.$t("生成海报"),
            tt = t.posterImageStatus ? t.$t("保存到手机") : null,
            et = parseInt(t.id);
          t._isMounted ||
            (t.e0 = function (e) {
              t.H5ShareBox = !1;
            }),
            (t.$mp.data = Object.assign(
              {},
              {
                $root: {
                  m0: i,
                  m1: s,
                  m2: o,
                  m3: n,
                  m4: r,
                  m5: a,
                  m6: c,
                  m7: u,
                  m8: l,
                  m9: h,
                  m10: p,
                  m11: d,
                  m12: f,
                  m13: m,
                  m14: g,
                  m15: $,
                  m16: _,
                  m17: v,
                  m18: y,
                  g0: S,
                  m19: I,
                  l0: C,
                  g1: b,
                  m22: k,
                  l1: A,
                  g2: w,
                  g3: x,
                  l2: T,
                  m29: P,
                  g4: L,
                  m30: q,
                  m31: V,
                  m32: H,
                  g5: N,
                  m33: G,
                  l4: O,
                  m41: M,
                  m42: R,
                  m43: D,
                  m44: U,
                  m45: B,
                  m46: j,
                  m47: E,
                  m48: F,
                  m49: W,
                  m50: z,
                  m51: Q,
                  m52: J,
                  m53: Y,
                  m54: K,
                  m55: X,
                  m56: Z,
                  m57: tt,
                  m58: et,
                },
              }
            ));
        },
        o = [];
    },
    "78cd": function (t, e, i) {},
    "7b6b": function (t, e, i) {
      "use strict";
      (function (t) {
        var s = i("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = s(i("448a")),
          n = i("2a39"),
          r = i("d1ea"),
          a = i("5743"),
          c = i("39ed"),
          u = i("86eb"),
          l = i("26cb"),
          h = (i("f9f0"), s(i("8a87")), i("00a0")),
          p = s(i("19b6")),
          d = i("5bb2"),
          f = t.getSystemInfoSync().statusBarHeight + "px",
          m = getApp(),
          g = {
            components: {
              productConSwiper: function () {
                i.e("components/productConSwiper/index")
                  .then(
                    function () {
                      return resolve(i("bffb"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              couponListWindow: function () {
                Promise.all([i.e("common/vendor"), i.e("components/couponListWindow/index")])
                  .then(
                    function () {
                      return resolve(i("79d4"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              productWindow: function () {
                i.e("components/productWindow/index")
                  .then(
                    function () {
                      return resolve(i("6cd4"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              userEvaluation: function () {
                i.e("components/userEvaluation/index")
                  .then(
                    function () {
                      return resolve(i("ab5b"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              shareRedPackets: function () {
                i.e("components/shareRedPackets/index")
                  .then(
                    function () {
                      return resolve(i("5072"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              kefuIcon: function () {
                Promise.all([i.e("common/vendor"), i.e("components/kefuIcon/index")])
                  .then(
                    function () {
                      return resolve(i("138b"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              menuIcon: function () {
                i.e("components/menuIcon")
                  .then(
                    function () {
                      return resolve(i("141a"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              cusPreviewImg: function () {
                i.e("components/cusPreviewImg/index")
                  .then(
                    function () {
                      return resolve(i("3a6e"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              swiperPrevie: function () {
                i.e("components/cusPreviewImg/swiperPrevie")
                  .then(
                    function () {
                      return resolve(i("fd5e"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              authorize: function () {
                i.e("components/Authorize")
                  .then(
                    function () {
                      return resolve(i("ad23"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              parser: function () {
                Promise.all([i.e("common/vendor"), i.e("components/jyf-parser/jyf-parser")])
                  .then(
                    function () {
                      return resolve(i("47fd"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
              homeList: function () {
                i.e("components/homeList/index")
                  .then(
                    function () {
                      return resolve(i("3d2e"));
                    }.bind(null, i)
                  )
                  .catch(i.oe);
              },
            },
            directives: {
              trigger: {
                inserted: function (t, e) {
                  t.click();
                },
              },
            },
            mixins: [p.default, d.sharePoster],
            data: function () {
              return {
                imgHost: h.HTTP_REQUEST_URL,
                sysHeight: f,
                noGoods: !1,
                showSkeleton: !0,
                isNodes: 0,
                Active: !1,
                presale_pay_status: 1,
                coupon: { coupon: !1, type: -1, list: [], count: [] },
                showAnimate: !1,
                showMenuIcon: !1,
                attrTxt: this.$t("请选择"),
                attrValue: "",
                animated: !1,
                id: 0,
                replyCount: 0,
                reply: [],
                storeInfo: {},
                productValue: [],
                couponList: [],
                cart_num: 1,
                isAuto: !1,
                isShowAuth: !1,
                isOpen: !1,
                actionSheetHidden: !0,
                posterImageStatus: !1,
                storeImage: "",
                PromotionCode: "",
                canvasStatus: !1,
                posterImage: "",
                posterbackgd: "/static/images/posterbackgd.png",
                sharePacket: { isState: !0 },
                uid: 0,
                circular: !1,
                autoplay: !1,
                interval: 3e3,
                duration: 500,
                clientHeight: "",
                systemStore: {},
                good_list: [],
                replyChance: 0,
                CartCount: 0,
                isDown: !0,
                storeSelfMention: !0,
                posters: !1,
                weixinStatus: !1,
                attr: { cartAttr: !1, productAttr: [], productSelect: {} },
                description: "",
                navActive: 0,
                H5ShareBox: !1,
                activity: [],
                navH: "",
                navList: [],
                opacity: 0,
                scrollY: 0,
                topArr: [],
                toView: "",
                height: 0,
                heightArr: [],
                lock: !1,
                scrollTop: 0,
                old: { scrollTop: 0 },
                tagStyle: { img: "width:100%;display:block;", table: "width:100%", video: "width:100%;height:100%;" },
                returnShow: !0,
                diff: "",
                is_money_level: 1,
                is_vip: 0,
                navbarRight: 0,
                homeTop: 20,
                routineContact: 0,
                skuArr: [],
                selectSku: {},
                currentPage: !1,
                svip_price_open: 1,
              };
            },
            computed: (0, l.mapGetters)(["isLogin"]),
            watch: {
              isLogin: {
                handler: function (t, e) {
                  1 == t && (this.getCouponList(), this.getCartCount(), this.downloadFilePromotionCode());
                },
                deep: !0,
              },
              storeInfo: {
                handler: function () {
                  this.$nextTick(function () {});
                },
                immediate: !0,
              },
            },
            onLoad: function (e) {
              var i = this,
                s = getCurrentPages();
              if (
                ((i.returnShow = 1 !== s.length),
                (i.navH = m.globalData.navHeight),
                (i.id = e.id),
                t.getSystemInfoSync({
                  success: function (e) {
                    (i.height = e.windowHeight),
                      (i.navbarRight = e.windowWidth - t.getMenuButtonBoundingClientRect().left);
                  },
                }),
                e.scene)
              ) {
                var o = i.$util.getUrlParams(decodeURIComponent(e.scene));
                o.id && (e.id = o.id), o.pid && (m.globalData.spid = o.pid);
              }
              if (!e.id)
                return (
                  (this.showSkeleton = !1), i.$util.Tips({ title: i.$t("缺少参数无法查看商品") }, { tab: 3, url: 1 })
                );
              (i.id = e.id), i.getGoodsDetails();
            },
            onReady: function () {
              this.isNodes++,
                this.$nextTick(function () {
                  var e = this,
                    i = t.getMenuButtonBoundingClientRect(),
                    s = t.createSelectorQuery().in(this);
                  s.select("#home")
                    .boundingClientRect(function (t) {
                      e.homeTop = 2 * i.top + i.height - t.height || 0;
                    })
                    .exec();
                });
            },
            onShareAppMessage: function () {
              return (
                this.$set(this, "actionSheetHidden", !this.actionSheetHidden),
                (0, r.userShare)(),
                {
                  title: this.storeInfo.store_name || "",
                  imageUrl: this.storeInfo.image || "",
                  path: "/pages/goods_details/index?id=" + this.id + "&spid=" + this.uid,
                }
              );
            },
            onShareTimeline: function () {
              return (
                (0, r.userShare)(),
                {
                  title: this.storeInfo.store_name,
                  query: { id: this.id, spid: this.uid || 0 },
                  imageUrl: this.storeInfo.image,
                }
              );
            },
            onNavigationBarButtonTap: function (t) {
              this.currentPage = !this.currentPage;
            },
            methods: {
              moreNav: function () {
                this.currentPage = !this.currentPage;
              },
              jumpUrl: function (e) {
                t.switchTab({ url: e });
              },
              videoPause: function () {
                this.$nextTick(function () {
                  that.infoScroll();
                });
              },
              qrR: function (t) {},
              closeChange: function () {
                this.$set(this.sharePacket, "isState", !0);
              },
              boxStatus: function (t) {
                this.showAnimate = t;
              },
              goActivity: function (e) {
                var i = e;
                "1" === i.type
                  ? t.navigateTo({
                      url: "/pages/activity/goods_seckill_details/index?id="
                        .concat(i.id, "&time=")
                        .concat(i.time, "&status=1"),
                    })
                  : "2" === i.type
                  ? t.navigateTo({
                      url: "/pages/activity/goods_bargain_details/index?id=".concat(i.id, "&bargain=").concat(this.uid),
                    })
                  : t.navigateTo({ url: "/pages/activity/goods_combination_details/index?id=".concat(i.id) });
              },
              iptCartNum: function (t) {
                var e = this;
                if (t) {
                  var i = this.storeInfo.min_qty;
                  Number.isInteger(parseInt(t)) && parseInt(t) >= this.storeInfo.min_qty && (i = parseInt(t)),
                    this.$nextTick(function (t) {
                      e.$set(e.attr.productSelect, "cart_num", t < 0 ? e.storeInfo.min_qty : i);
                    });
                }
              },
              returns: function () {
                return t.navigateBack({ delta: 1 });
              },
              tap: function (t) {
                var e = this,
                  i = "past" + t,
                  s = ((t = t), this);
                this.$set(this, "toView", i),
                  this.$set(this, "navActive", t),
                  this.$set(this, "lock", !0),
                  (this.scrollTop = this.old.scrollTop),
                  this.$nextTick(function () {
                    e.scrollTop = t > 0 ? s.topArr[t] - m.globalData.navHeight / 2 : s.topArr[t];
                  });
              },
              scroll: function (t) {
                var e = t.detail.scrollTop,
                  i = e / 200;
                if (
                  ((this.old.scrollTop = t.detail.scrollTop),
                  (i = i > 1 ? 1 : i),
                  this.$set(this, "opacity", i),
                  this.$set(this, "scrollY", e),
                  this.$set(this, "showAnimate", !1),
                  this.$set(this, "showMenuIcon", !1),
                  this.$set(this, "currentPage", !1),
                  this.$refs.proSwiper.videoIsPause(),
                  this.lock)
                )
                  this.$set(this, "lock", !1);
                else
                  for (var s = 0; s < this.topArr.length; s++)
                    if (e < this.topArr[s] - m.globalData.navHeight / 2 + this.heightArr[s]) {
                      this.$set(this, "navActive", s);
                      break;
                    }
              },
              goDetail: function (e) {
                0 != e.activity.length
                  ? e.activity && 2 == e.activity.type
                    ? t.redirectTo({
                        url: "/pages/activity/goods_bargain_details/index?id="
                          .concat(e.activity.id, "&bargain=")
                          .concat(this.uid),
                      })
                    : e.activity && 3 == e.activity.type
                    ? t.redirectTo({ url: "/pages/activity/goods_combination_details/index?id=".concat(e.activity.id) })
                    : e.activity &&
                      1 == e.activity.type &&
                      t.redirectTo({
                        url: "/pages/activity/goods_seckill_details/index?id="
                          .concat(e.activity.id, "&time=")
                          .concat(e.activity.time, "&status=1"),
                      })
                  : t.redirectTo({ url: "/pages/goods_details/index?id=" + e.id });
              },
              onLoadFun: function (t) {},
              ChangCouponsClone: function () {
                this.$set(this.coupon, "coupon", !1);
              },
              getUserInfo: function () {
                var t = this;
                (0, r.getUserInfo)().then(function (e) {
                  t.$set(t, "uid", e.data.uid), t.$set(t, "is_money_level", e.data.is_money_level);
                });
              },
              ChangeCartNum: function (t) {
                var e = this.productValue[this.attrValue];
                void 0 !== e || this.attr.productAttr.length || (e = this.attr.productSelect);
                var i = e.stock || 0,
                  s = this.attr.productSelect;
                void 0 === e ||
                  (this.storeInfo.limit_num && s.cart_num >= this.storeInfo.limit_num && t) ||
                  (t
                    ? (s.cart_num++,
                      s.cart_num > i &&
                        (this.$set(this.attr.productSelect, "cart_num", i || this.storeInfo.min_qty),
                        this.$set(this, "cart_num", i || 1)))
                    : (s.cart_num--,
                      s.cart_num < 1 &&
                        (this.$set(this.attr.productSelect, "cart_num", this.storeInfo.min_qty),
                        this.$set(this, "cart_num", 1))));
              },
              attrVal: function (t) {
                this.$set(
                  this.attr.productAttr[t.indexw],
                  "index",
                  this.attr.productAttr[t.indexw].attr_values[t.indexn]
                );
              },
              ChangeAttr: function (t) {
                var e = this,
                  i = this.productValue[t];
                i
                  ? (this.noGoods = !1)
                  : this.$util.Tips({
                      title: this.$t("重新选择"),
                      success: function () {
                        (e.noGoods = !0),
                          (e.attr.productSelect.stock = 0),
                          (e.attr.productSelect.quota = 0),
                          (e.attr.productSelect.cart_num = 0);
                      },
                    }),
                  this.$set(this, "selectSku", i),
                  i && i.stock > 0
                    ? (this.$set(this.attr.productSelect, "image", i.image),
                      this.$set(this.attr.productSelect, "price", i.price),
                      this.$set(this.attr.productSelect, "stock", i.stock),
                      this.$set(this.attr.productSelect, "unique", i.unique),
                      this.$set(this.attr.productSelect, "cart_num", this.storeInfo.min_qty),
                      this.$set(this.attr.productSelect, "vip_price", i.vip_price),
                      this.$set(this, "attrValue", t),
                      this.$set(this, "attrTxt", this.$t("已选择")))
                    : (this.$set(this.attr.productSelect, "image", i.image),
                      this.$set(this.attr.productSelect, "price", i.price),
                      this.$set(this.attr.productSelect, "stock", 0),
                      this.$set(this.attr.productSelect, "unique", ""),
                      this.$set(this.attr.productSelect, "cart_num", 0),
                      this.$set(this.attr.productSelect, "vip_price", this.storeInfo.vip_price),
                      this.$set(this, "attrValue", ""),
                      this.$set(this, "attrTxt", this.$t("请选择")));
              },
              ChangCoupons: function (t) {
                var e = t,
                  i = this.$util.ArrayRemove(this.couponList, "id", e.id);
                this.$set(this, "couponList", i), this.getCouponList();
              },
              setClientHeight: function () {
                var e = this;
                if (e.good_list.length) {
                  var i = t.createSelectorQuery().in(this).select("#list0");
                  i.fields({ size: !0 }, function (t) {
                    e.$set(e, "clientHeight", t.height + 20);
                  }).exec();
                }
              },
              getGoodsDetails: function () {
                var e = this,
                  i = this;
                t.showLoading({ title: "加载中", mask: !0 }),
                  (0, n.getProductDetail)(i.id)
                    .then(function (s) {
                      t.hideLoading();
                      for (
                        var o = s.data.storeInfo,
                          n = s.data.good_list || [],
                          r = Math.ceil(n.length / 6),
                          a = new Array(),
                          c = 0;
                        c < r;
                        c++
                      ) {
                        var u = n.slice(6 * c, 6 * c + 6);
                        u.length && a.push({ list: u });
                      }
                      for (var l in (i.$set(i, "storeInfo", o),
                      i.$set(i, "description", o.description),
                      e.description &&
                        ((e.description = e.description.replace(
                          /<img/gi,
                          '<img style="max-width:100%;height:auto;float:left;display:block" '
                        )),
                        (e.description = e.description.replace(
                          /<video/gi,
                          '<video style="width:100%;height:300px;display:block" '
                        ))),
                      i.$set(i, "presale_pay_status", s.data.storeInfo.presale_pay_status),
                      i.$set(i, "reply", s.data.reply ? [s.data.reply] : []),
                      i.$set(i, "replyCount", s.data.replyCount),
                      i.$set(i, "replyChance", s.data.replyChance),
                      i.$set(i.attr, "productAttr", s.data.productAttr),
                      i.$set(i, "productValue", s.data.productValue),
                      i.$set(i, "is_vip", s.data.storeInfo.is_vip),
                      i.$set(i.sharePacket, "priceName", s.data.priceName),
                      i.$set(i.sharePacket, "isState", 0 != s.data.priceName),
                      i.$set(i, "systemStore", s.data.system_store),
                      i.$set(i, "storeSelfMention", s.data.store_self_mention),
                      i.$set(i, "good_list", a),
                      o.wechat_code && i.$set(i, "PromotionCode", o.wechat_code),
                      i.$set(i, "activity", s.data.activity ? s.data.activity : []),
                      i.$set(i, "couponList", s.data.coupons),
                      i.$set(i, "routineContact", Number(s.data.routine_contact_type)),
                      t.setNavigationBarTitle({ title: o.store_name.substring(0, 7) + "..." }),
                      s.data.productValue)) {
                        var h = s.data.productValue[l];
                        i.skuArr.push(h);
                      }
                      e.$set(e, "selectSku", i.skuArr[0]), i.$set(i, "diff", i.$util.$h.Sub(o.price, o.vip_price));
                      var p = [i.$t("商品"), i.$t("详情")];
                      s.data.replyCount && p.splice(1, 0, i.$t("评价")),
                        i.$set(i, "navList", p),
                        i.$set(i, "storeImage", i.storeInfo.image),
                        i.$set(i, "svip_price_open", s.data.svip_price_open),
                        i.isLogin && i.getUserInfo(),
                        e.$nextTick(function () {
                          n.length && i.setClientHeight();
                        }),
                        setTimeout(function () {
                          i.infoScroll();
                        }, 500),
                        i.downloadFilestoreImage(),
                        i.DefaultSelect(),
                        i.getCartCount(),
                        (e.showAnimate = !0);
                    })
                    .catch(function (e) {
                      return t.hideLoading(), i.$util.Tips({ title: e.toString() }, { tab: 3, url: 1 });
                    });
              },
              infoScroll: function () {
                for (var e = this, i = [], s = [], o = 0; o < e.navList.length; o++) {
                  var n = t.createSelectorQuery().in(this),
                    r = "#past" + o;
                  ((!this.replyCount && !e.good_list.length && 1 == o) ||
                    (this.replyCount && !e.good_list.length && 2 == o) ||
                    (!this.replyCount && e.good_list.length && 2 == o)) &&
                    (r = "#past3"),
                    !this.replyCount && e.good_list.length && 1 == o && (r = "#past2"),
                    n.select(r).boundingClientRect(),
                    n.exec(function (t) {
                      var o = t[0].top,
                        n = t[0].height;
                      i.push(o), s.push(n), e.$set(e, "topArr", i), e.$set(e, "heightArr", s);
                    });
                }
              },
              makePhone: function () {
                t.makePhoneCall({ phoneNumber: this.systemStore.phone });
              },
              showMaoLocation: function () {
                if (!this.systemStore.latitude || !this.systemStore.longitude)
                  return this.$util.Tips({ title: this.$t("缺少经纬度信息无法查看地图") });
                t.openLocation({
                  latitude: parseFloat(this.systemStore.latitude),
                  longitude: parseFloat(this.systemStore.longitude),
                  scale: 8,
                  name: this.systemStore.name,
                  address: this.systemStore.address + this.systemStore.detailed_address,
                  success: function () {},
                });
              },
              DefaultSelect: function () {
                var t = this.attr.productAttr,
                  e = [];
                for (var i in this.productValue)
                  if (this.productValue[i].stock > 0) {
                    e = this.attr.productAttr.length ? i.split(",") : [];
                    break;
                  }
                for (var s = 0; s < t.length; s++) this.$set(t[s], "index", e[s]);
                var o = this.productValue[e.join(",")];
                o && t.length
                  ? (this.$set(this.attr.productSelect, "store_name", this.storeInfo.store_name),
                    this.$set(this.attr.productSelect, "image", o.image),
                    this.$set(this.attr.productSelect, "price", o.price),
                    this.$set(this.attr.productSelect, "stock", o.stock),
                    this.$set(this.attr.productSelect, "unique", o.unique),
                    this.$set(this.attr.productSelect, "cart_num", this.storeInfo.min_qty),
                    this.$set(this, "attrValue", e.join(",")),
                    this.$set(this.attr.productSelect, "vip_price", o.vip_price),
                    this.$set(this, "attrTxt", this.$t("已选择")))
                  : !o && t.length
                  ? (this.$set(this.attr.productSelect, "store_name", this.storeInfo.store_name),
                    this.$set(this.attr.productSelect, "image", this.storeInfo.image),
                    this.$set(this.attr.productSelect, "price", this.storeInfo.price),
                    this.$set(this.attr.productSelect, "stock", 0),
                    this.$set(this.attr.productSelect, "unique", ""),
                    this.$set(this.attr.productSelect, "cart_num", 0),
                    this.$set(this.attr.productSelect, "vip_price", this.storeInfo.vip_price),
                    this.$set(this, "attrValue", ""),
                    this.$set(this, "attrTxt", this.$t("请选择")))
                  : o ||
                    t.length ||
                    (this.$set(this.attr.productSelect, "store_name", this.storeInfo.store_name),
                    this.$set(this.attr.productSelect, "image", this.storeInfo.image),
                    this.$set(this.attr.productSelect, "price", this.storeInfo.price),
                    this.$set(this.attr.productSelect, "stock", this.storeInfo.stock),
                    this.$set(this.attr.productSelect, "unique", this.storeInfo.unique || ""),
                    this.$set(this.attr.productSelect, "cart_num", this.storeInfo.min_qty),
                    this.$set(this.attr.productSelect, "vip_price", this.storeInfo.vip_price),
                    this.$set(this, "attrValue", ""),
                    this.$set(this, "attrTxt", this.$t("请选择")));
              },
              getCouponList: function (t) {
                var e = this,
                  i = { page: 1, limit: 20, product_id: e.id };
                (void 0 === t && null === t) || (i.type = t),
                  (0, a.getCoupons)(i).then(function (i) {
                    if ((e.$set(e.coupon, "count", i.data.count), void 0 === t || null === t)) {
                      var s = (0, o.default)(e.coupon.count),
                        n = "",
                        r = s.findIndex(function (t) {
                          return t;
                        }),
                        a = e.coupon.count,
                        c = [],
                        u = 0;
                      a.forEach(function (t, e) {
                        0 === t ? (u = e) : c.push(t);
                      }),
                        (n =
                          3 == c.length
                            ? 2
                            : 2 == c.length
                            ? 2 === u
                              ? 1
                              : 2
                            : a.findIndex(function (t) {
                                return t === s[r];
                              })),
                        e.$set(e.coupon, "type", n),
                        e.getCouponList(n);
                    } else e.$set(e.coupon, "list", i.data.list);
                  });
              },
              ChangCouponsUseState: function (t) {
                this.coupon.list[t].is_use++, this.$set(this.coupon, "coupon", !1);
              },
              setCollect: function () {
                if (!1 === this.isLogin) (0, u.toLogin)();
                else {
                  var t = this;
                  this.storeInfo.userCollect
                    ? (0, n.collectDel)([this.storeInfo.id]).then(function (e) {
                        return (
                          t.$set(t.storeInfo, "userCollect", !t.storeInfo.userCollect), t.$util.Tips({ title: e.msg })
                        );
                      })
                    : (0, n.collectAdd)(this.storeInfo.id).then(function (e) {
                        return (
                          t.$set(t.storeInfo, "userCollect", !t.storeInfo.userCollect), t.$util.Tips({ title: e.msg })
                        );
                      });
                }
              },
              selecAttr: function () {
                this.$refs.proSwiper.videoIsPause(),
                  this.$set(this.attr, "cartAttr", !0),
                  this.$set(this, "isOpen", !0);
              },
              couponTap: function () {
                !1 === this.isLogin
                  ? (0, u.toLogin)()
                  : (this.$refs.proSwiper.videoIsPause(), this.getCouponList(), this.$set(this.coupon, "coupon", !0));
              },
              onMyEvent: function () {
                this.$set(this.attr, "cartAttr", !1), this.$set(this, "isOpen", !1);
              },
              joinCart: function (t) {
                !1 === this.isLogin ? (0, u.toLogin)() : (this.$refs.proSwiper.videoIsPause(), this.goCat());
              },
              goCart: function () {
                t.switchTab({ url: "/pages/order_addcart/order_addcart" });
              },
              goCat: function (e) {
                var i = this,
                  s = i.productValue[this.attrValue];
                if (
                  ((i.currentPage = !1),
                  i.attrValue
                    ? (i.attr.cartAttr = !i.isOpen)
                    : i.isOpen
                    ? (i.attr.cartAttr = !0)
                    : (i.attr.cartAttr = !i.attr.cartAttr),
                  !0 === i.attr.cartAttr && !1 === i.isOpen)
                )
                  return (i.isOpen = !0);
                if (i.attr.productAttr.length && void 0 === s && !0 === i.isOpen)
                  return i.$util.Tips({ title: i.$t("产品库存不足，请选择其它属性") });
                if (i.attr.productSelect.cart_num <= 0)
                  return (
                    (i.attr.productSelect.cart_num = 1), (i.isOpen = !1), i.$util.Tips({ title: i.$t("请选择数量") })
                  );
                var o = {
                  productId: i.id,
                  cartNum: i.attr.productSelect.cart_num,
                  new: void 0 === e ? 0 : 1,
                  uniqueId: void 0 !== i.attr.productSelect ? i.attr.productSelect.unique : "",
                  virtual_type: i.storeInfo.virtual_type,
                };
                (0, n.postCartAdd)(o)
                  .then(function (s) {
                    (i.isOpen = !1),
                      (i.attr.cartAttr = !1),
                      e
                        ? t.navigateTo({ url: "/pages/goods/order_confirm/index?new=1&cartId=" + s.data.cartId })
                        : i.$util.Tips({
                            title: i.$t("添加成功"),
                            success: function () {
                              i.getCartCount(!0);
                            },
                          });
                  })
                  .catch(function (t) {
                    return (i.isOpen = !1), i.$util.Tips({ title: t });
                  });
              },
              getCartCount: function (t) {
                var e = this,
                  i = this,
                  s = i.isLogin;
                s &&
                  (0, c.getCartCounts)().then(function (s) {
                    (i.CartCount = s.data.count),
                      e.$store.commit("indexData/setCartNum", i.CartCount > 99 ? "..." : i.CartCount + ""),
                      t &&
                        ((i.animated = !0),
                        setTimeout(function () {
                          i.animated = !1;
                        }, 500));
                  });
              },
              goBuy: function (t) {
                !1 === this.isLogin ? (0, u.toLogin)() : (this.$refs.proSwiper.videoIsPause(), this.goCat(!0));
              },
              open: function (t) {
                this.showMenuIcon = t;
              },
              authColse: function (t) {
                this.isShowAuth = t;
              },
              listenerActionSheet: function () {
                (this.currentPage = !1), (this.posters = !0);
              },
              listenerActionClose: function () {
                (this.posters = !1), (this.posterImageStatus = !1);
              },
              posterImageClose: function () {
                this.posterImageStatus = !1;
              },
              goFriend: function () {
                this.posters = !1;
              },
              savePosterPath: function () {
                var e = this;
                t.getSetting({
                  success: function (i) {
                    i.authSetting["scope.writePhotosAlbum"]
                      ? t.saveImageToPhotosAlbum({
                          filePath: e.posterImage,
                          success: function (t) {
                            e.posterImageClose(), e.$util.Tips({ title: e.$t("保存成功"), icon: "success" });
                          },
                          fail: function (t) {
                            e.$util.Tips({ title: e.$t("保存失败") });
                          },
                        })
                      : t.authorize({
                          scope: "scope.writePhotosAlbum",
                          success: function () {
                            t.saveImageToPhotosAlbum({
                              filePath: e.posterImage,
                              success: function (t) {
                                e.posterImageClose(), e.$util.Tips({ title: e.$t("保存成功"), icon: "success" });
                              },
                              fail: function (t) {
                                e.$util.Tips({ title: e.$t("保存失败") });
                              },
                            });
                          },
                        });
                  },
                });
              },
              tabCouponType: function (t) {
                this.$set(this.coupon, "type", t), this.getCouponList(t);
              },
              showImg: function (t) {
                this.$refs.cusPreviewImg.open(this.selectSku.suk);
              },
              showSwiperImg: function (t) {
                this.$refs.cusSwiperImg.open(t);
              },
              changeSwitch: function (t) {
                var e = this.skuArr[t];
                this.$set(this, "selectSku", e);
                var i = e.suk.split(",");
                this.$set(this.attr.productAttr[0], "index", i[0]),
                  2 == i.length
                    ? (this.$set(this.attr.productAttr[0], "index", i[0]),
                      this.$set(this.attr.productAttr[1], "index", i[1]))
                    : 3 == i.length
                    ? (this.$set(this.attr.productAttr[0], "index", i[0]),
                      this.$set(this.attr.productAttr[1], "index", i[1]),
                      this.$set(this.attr.productAttr[2], "index", i[2]))
                    : 4 == i.length &&
                      (this.$set(this.attr.productAttr[0], "index", i[0]),
                      this.$set(this.attr.productAttr[1], "index", i[1]),
                      this.$set(this.attr.productAttr[2], "index", i[2]),
                      this.$set(this.attr.productAttr[3], "index", i[3])),
                  e &&
                    (this.$set(this.attr.productSelect, "image", e.image),
                    this.$set(this.attr.productSelect, "price", e.price),
                    this.$set(this.attr.productSelect, "stock", e.stock),
                    this.$set(this.attr.productSelect, "unique", e.unique),
                    this.$set(this.attr.productSelect, "vipPrice", e.vipPrice),
                    this.$set(this, "attrTxt", this.$t("已选择")),
                    this.$set(this, "attrValue", e.suk));
              },
            },
          };
        e.default = g;
      }).call(this, i("543d")["default"]);
    },
    e86f: function (t, e, i) {
      "use strict";
      (function (t, e) {
        var s = i("4ea4");
        i("4789");
        s(i("66fd"));
        var o = s(i("f7fa"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(o.default);
      }).call(this, i("bc2e")["default"], i("543d")["createPage"]);
    },
    e91e: function (t, e, i) {
      "use strict";
      var s = i("78cd"),
        o = i.n(s);
      o.a;
    },
    eb12: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i("7b6b"),
        o = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      e["default"] = o.a;
    },
    f7fa: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i("16dc"),
        o = i("eb12");
      for (var n in o)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return o[t];
            });
          })(n);
      i("e91e");
      var r = i("f0c5"),
        a = Object(r["a"])(o["default"], s["b"], s["c"], !1, null, "01f8d8e7", null, !1, s["a"], void 0);
      e["default"] = a.exports;
    },
  },
  [["e86f", "common/runtime", "common/vendor"]],
]);
