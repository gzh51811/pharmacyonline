<template>
  <div>
    <!-- //搜索框 -->
    <van-search placeholder="请输入搜索关键词"/>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="#ff7500" class="banner">
      <van-swipe-item class="banner" v-for="goods in goodslist" :key="goods.id">
        <img :src="goods.goods_image" alt>
      </van-swipe-item>
    </van-swipe>
    <!-- 导航栏 -->
    <mynav></mynav>

    <!-- 每周特惠 -->
    <mustbuy></mustbuy>
    <!-- 主题活动 -->

    <div class="special">
      <span class="hengxian">一</span>主题活动推荐
      <span class="hengxian">一</span>
    </div>

    <a class="new-banner" href="https://cn.pharmacyonline.com.au/big-sale/1598/immunity.html">
      <img src="https://po-assets.azoyacdn.com/media/wysiwyg/PCbanner/20181029-640-360.jpg" alt>
    </a>
    <activities></activities>

    <div class="clear choosen-container swiper-wrapper"></div>

    <!-- 畅销推荐 -->
    <div class="special">
      <span class="hengxian">一</span>畅销推荐
      <span class="hengxian">一</span>
    </div>
    <bestseller></bestseller>
    <!-- <van-tabs type="card" class="allContern" color="#3333" title-active-color="#ffff">
        <van-tab title="宝宝成长营养">
                   <ul class="hot-list clear ajax-products">
           <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="113206" data-product-ajax-item="113206">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">26%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img src="https://po-assets.azoyacdn.com/media/catalog/product/4/4/447587/jar_baby_front_hr_v6.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" >
                    <div class="base-font">
                        Life Space 婴儿益生菌粉 60g（6月-3岁） (...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$30.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$41.99</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="108266" data-product-ajax-item="108266">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">20%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1108266.html">
                    <img  src="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354414/swisse-ultivite-children-s-tab-x-120.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Swisse 儿童专用复合维生素咀嚼片  120片" title="Swisse 儿童专用复合维生素咀嚼片  120片">
                    <div class="base-font">
                        Swisse 儿童专用复合维生素咀嚼片  120片                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$15.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$19.95</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="103212" data-product-ajax-item="103212">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">19%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img  src="https://po-assets.azoyacdn.com/media/catalog/product/3/3/339822/centrum-kids-incremin-iron-mixture-200ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Centrum 善存 澳洲儿童补铁口服液 改善厌食200mL" title="Centrum 善存 澳洲儿童补铁口服液 改善厌食200mL">
                    <div class="base-font">
                        Centrum 善存 澳洲儿童补铁口服液 改善厌食200mL...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$16.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$20.99</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="108038" data-product-ajax-item="108038">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">27%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img  src="https://po-assets.azoyacdn.com/media/catalog/product/3/4/348023/348023.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Ostevit-D 婴幼儿维生素VD滴剂 15ml 促进钙吸收" title="Ostevit-D 婴幼儿维生素VD滴剂 15ml 促进钙吸收">
                    <div class="base-font">
                        Ostevit-D 婴幼儿维生素VD滴剂 15ml 促进钙吸...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$7.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$10.95</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="113162" data-product-ajax-item="113162">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">5%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img src="https://po-assets.azoyacdn.com/media/catalog/product/3/9/392391/392391.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Sustagen 雀巢 儿童营养奶粉 (1-10岁)   800g" title="Sustagen 雀巢 儿童营养奶粉 (1-10岁)   800g">
                    <div class="base-font">
                        Sustagen 雀巢 儿童营养奶粉 (1-10岁)   8...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$29.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$31.50</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="117976" data-product-ajax-item="117976">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">22%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img src="https://po-assets.azoyacdn.com/media/catalog/product/2/4/24282/jar_infant60g_front_hr_v1_05-04-17.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Life Space 婴儿益生菌粉 60g（调节肠胃增强免疫力）" title="Life Space 婴儿益生菌粉 60g（调节肠胃增强免疫力）">
                    <div class="base-font">
                        Life Space 婴儿益生菌粉 60g（调节肠胃增强免疫...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$32.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$41.99</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="111006" data-product-ajax-item="111006">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">20%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img  src="https://po-assets.azoyacdn.com/media/catalog/product/5/2/521426/flordis-prospan-chesty-cough-relief-for-kids-100ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Flordis Prospan 常春藤糖浆 100ml （儿童适用）" title="Flordis Prospan 常春藤糖浆 100ml （儿童适用）">
                    <div class="base-font">
                        Flordis Prospan 常春藤糖浆 100ml （儿...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$11.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$14.95</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="117685" data-product-ajax-item="117685">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">27%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img  src="https://po-assets.azoyacdn.com/media/catalog/product/1/7/17266/f2d_800_10_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片" title="Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片">
                    <div class="base-font">
                        Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$15.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$21.99</span>
                    </div>
                </a>
            </li>
        </ul>
    </van-tab>-->
    <!-- <van-tab title="熬夜族养生">内容 2</van-tab>
        <van-tab title="护肤界黑科技">内容 3</van-tab>
        <van-tab title="摆脱中年危机">内容 3</van-tab>
        <van-tab title="孕妈专区">内容 3</van-tab>
        <van-tab title="家用常备">内容 3</van-tab>
        <van-tab title="凑单好物">内容 3</van-tab>
    <van-tab title="礼盒套装">内容 3</van-tab>-->

    <!-- </van-tabs>  -->
    <!-- 关于我们 -->

    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item title="有赞微商城" name="1">
        <p>商户介绍</p>
        <p>商品承诺</p>
        <p>联系我们</p>
      </van-collapse-item>
      <van-collapse-item title="物流配送" name="2">
        <p>配送方式</p>
        <p>配送标准</p>
        <p>物流跟踪</p>
      </van-collapse-item>
      <van-collapse-item title="售后政策" name="3">
        <p>退货退款政策</p>
        <p>退货退款流程</p>
        <p>联系客服</p>
      </van-collapse-item>
      <van-collapse-item title="网站政策" name="4">
        <p>服务条款</p>
        <p>隐私权保护政策</p>
        <p>消费者告知书</p>
      </van-collapse-item>
      <van-collapse-item title="消费者指南" name="5">
        <p>购物流程</p>
        <p>常见问题</p>
        <p>关税发票</p>
      </van-collapse-item>
    </van-collapse>
    <!-- 底部友情链接 -->
    <div class="footer-bottom">
      <div class="about-us">
        <span>关注我们</span>
        <a href class="message weibo-footer">
          <img
            src="https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/weixin-foot.png"
            alt
          >
        </a>
        <a href class="message weibo-footer">
          <img
            src="https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/weibo-foot.png"
            alt
          >
        </a>
      </div>
      <div class="server-email">
        <span>客服邮箱</span>

        <span class="email-content">china@pharmacyonline.com.au</span>
      </div>
      <div class="pay-way">
        <span>支付方式</span>
        <div class="card pay-wx"></div>
        <div class="card pay-ali"></div>
        <div class="card pay-union"></div>
      </div>
      <div class="foot-detial">2016 EDC -Internet</div>
    </div>
    <!-- <div> -->
    <vanfooder></vanfooder>
  </div>
</template>
<script>
import vanfooder from "../components/vanfooter";
import mynav from "../components/nav";
import mustbuy from "../components/mustbuy";
import activities from "../components/activities";
import bestseller from "../components/Bestseller";
export default {
  data() {
    return {
      activeNames: ["1"],
      goodslist: []
    };
  },
  components: {
    vanfooder,
    mynav,
    mustbuy,
    activities,
    bestseller
  },

  created() {
    this.$tunhuoji.get("/nodegoodslist/a", {}).then(res => {
      //   console.log(res);
      let data = res.data;
      //   console.log(data);
      this.goodslist = data.goods_info.slice(1, 6);
      //   console.log(this.goodslist);
    });
    // this.$axios
    //   .get("/apis/cmsapi/home/banners?website_id=2&client=1", {})
    //   .then(res => {
    //     console.log(res);
    //     let data = res.data;
    //     // //   console.log(data);
    //     this.goodslist = data.data;
    //     // //  console.log(data.data);
    //   });
  }
};
</script>

<style>
.banner img {
  height: 400px;
  width: 100%;
}
/* //特惠 */
.discount-container {
  margin-top: 10px;
}
.right {
  float: right;
}
.left {
  float: left;
}
.discount {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #ffead2;
  color: #333;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
}
.hengxian {
  display: inline-block;
  width: 0.8rem;
  text-align: center;
  font-size: 0.29333rem;
  font-family: "微软雅黑";
}
.discount-item {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  width: 50%;
  text-align: center;
  position: relative;
  height: 260px;
}
.off {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px;
  position: absolute;
  left: 16px;
  top: 4px;
  width: 32px;
  height: 50px;

  background: url(./img/off.png) no-repeat;
  background-size: 100% 100%;
  font-size: 12px;
  color: #fff;
  z-index: 1;
}
.discount-item img {
  width: 180px;
  height: 180px;
}
.base-font {
  color: #666;
  font-size: 12px;
  line-height: 12px;
  /* height: 0.85333rem; */
  display: block;
  margin: 0.06667rem 0;
  text-overflow: ellipsis;
  overflow: hidden;
}
.product-outstock {
  position: absolute;
  width: 1.73333rem;
  height: 1.73333rem;
  line-height: 1.73333rem;
  border-radius: 100%;
  top: 1.13333rem;
  left: 50%;
  margin-left: -0.86667rem;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 0.32rem;
  z-index: 22;
}
.base-color {
  position: relative;
  width: 100%;
  height: 1.2rem;
  overflow: hidden;
  padding-top: 0.13333rem;
}
.base-color span {
  color: #ff7500;
  font-size: 0.32rem;
  display: inline-block;
}
.base-color .price-was {
  font-size: 0.26667rem;
  text-decoration: line-through;
  color: #c6c6c6;
  margin-left: 0.06667rem;
}
/* 主题活动推荐 */
.special {
  width: 100%;
  height: 60px;
  margin: 0 auto;
  line-height: 60px;
  text-align: center;
  color: #333;
  font-size: 18px;
  background: #fff;
  margin-top: 10px;
  border-top: 10px solid #e8e4e4;
}
.cms-index-index .hengxian {
  display: inline-block;
  width: 0.8rem;
  text-align: center;
  font-size: 0.29333rem;
  font-family: "微软雅黑";
}
.special-box {
  background: #fff;
  overflow: hidden;
  font-size: 0;
  height: 280px;
  /* width: 30%; */
}
.new-banner img {
  width: 100%;
  height: 230px;
  vertical-align: top;
}
.special-box .swiper-wrapper {
  padding-left: 0.4rem;
  width: 72rem;
  height: 280px;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  /* width: 100%;
  height: 100%; */
  position: relative;
}
.special-list {
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 5px;
  width: 50%;
  height: 300px;
}
.special-list img {
  max-width: 200px;
  max-height: 210px;
  margin: 0.1px;
}
.hei {
  width: 10%;
}
/* 畅销推荐 */
.allContern {
  padding: 10px;
  overflow: hidden;
}
.hot-list li {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 5px;
  float: left;
  width: 50%;
  height: 200px;
  text-align: center;
  position: relative;
}
.hot-list li a {
  display: block;
  position: relative;
  line-height: 0.4rem;
}
.hot-list li img {
  width: 100px;
  height: 110px;
}

/* //底部样式 */
.footer-bottom {
  position: relative;
  background-color: #0a81d9;
  height: 220px;
  font-size: 14px;
  font-family: SourceHanSansCN-Normal;
  padding-left: 0.9rem;
}
.about-us {
  padding-top: 30px;
}
.footer-bottom .about-us span {
  color: #ffffff;
  opacity: 0.8;
  margin-right: 20px;
  display: inline-block;
  vertical-align: middle;
}
.footer-bottom .about-us .message {
  margin-right: 10px;
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.footer-bottom .about-us .message img {
  width: 30px;
  height: 30px;
  margin: 0 auto;
}
.footer-bottom .server-email {
  margin-top: 0.53333rem;
}
.footer-bottom .server-email span {
  color: #ffffff;
  opacity: 0.8;
  margin-right: 16px;
}
.footer-bottom .pay-way {
  margin-top: 0.53333rem;
}
.footer-bottom .pay-way span {
  color: #ffffff;
  opacity: 0.8;
  margin-right: 10px;
}
.footer-bottom .pay-way .pay-wx {
  background: url(img/wxpay_bottom.png) no-repeat center;
  background-size: cover;
  height: 0.4rem;
  width: 1.65333rem;
  margin-right: 10px;
}
.footer-bottom .pay-way .pay-ali {
  background: url(img/alipay_bottom.png) no-repeat center;
  background-size: cover;
  height: 10px;
  width: 10px;
  margin-right: 10px;
}
.footer-bottom .pay-way .pay-union {
  background: url(img/unionpay_bottom.png) no-repeat center;
  background-size: cover;
  height: 0.4rem;
  width: 1.54667rem;
}
.footer-bottom .pay-way .card {
  display: inline-block;
  width: 58px;
  height: 12px;
  vertical-align: bottom;
}
.footer-bottom .foot-detial {
  margin-top: 0.53333rem;
  color: #ffffff;
  opacity: 0.8;
  margin-bottom: 1.86667rem;
}
</style>
