<template>
   <div class="discount-container">
       <div class="discount">
         <span class="hengxian">一 </span>尖货必入
         <span class="hengxian"> 一</span>
       </div>
       <van-swipe   indicator-color="#ff7500">
          <van-swipe-item  >
             <div class="discount-item ajax-product-item left" data-product-symbol="AU$" data-product-id="108275" data-product-ajax-item="108275" v-for="goods in goodslist1">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">38%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1108275.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354392/swisse-ultiboost-liver-detox-tab-x-120_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" :src="goods.goods_image" alt="" title="">
                    <div class="base-font">
                       {{goods.goods_name}}               </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
              </div>
              <!-- <div class="discount-item ajax-product-item right" data-product-symbol="AU$" data-product-id="112266" data-product-ajax-item="112266">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">8%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1112266.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/9/0/901096/bioisland-milk-calcium-cap-x-90.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" :src="goods.goods_image" alt="Bio Island 生物岛 液体乳钙软胶囊 90粒" title="Bio Island 生物岛 液体乳钙软胶囊 90粒">
                    <div class="base-font">
                        Bio Island 生物岛 液体乳钙软胶囊 90粒                </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU$23.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$25.95</span>
                    </div>
                  </a>
              </div>   -->
          </van-swipe-item>
          <van-swipe-item>
             <div class="discount-item ajax-product-item left" data-product-symbol="AU$" data-product-id="108275" data-product-ajax-item="108275" v-for="goods in goodslist2">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">38%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1108275.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354392/swisse-ultiboost-liver-detox-tab-x-120_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" :src="goods.goods_image" alt="" title="">
                    <div class="base-font">
                       {{goods.goods_name}}               </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
              </div>
          </van-swipe-item>
          <van-swipe-item>
             <div class="discount-item ajax-product-item left" data-product-symbol="AU$" data-product-id="108275" data-product-ajax-item="108275" v-for="goods in goodslist3">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">38%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1108275.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354392/swisse-ultiboost-liver-detox-tab-x-120_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" :src="goods.goods_image" alt="" title="">
                    <div class="base-font">
                       {{goods.goods_name}}               </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
              </div>
          </van-swipe-item>
          <van-swipe-item> <div class="discount-item ajax-product-item left" data-product-symbol="AU$" data-product-id="108275" data-product-ajax-item="108275" v-for="goods in goodslist4">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">38%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1108275.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354392/swisse-ultiboost-liver-detox-tab-x-120_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" :src="goods.goods_image" alt="" title="">
                    <div class="base-font">
                       {{goods.goods_name}}               </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
              </div></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // navs: [],
      goodslist1: [],
      goodslist2: [],
      goodslist3: [],
      goodslist4: []
    };
  },

  created() {
    this.$tunhuoji.get("/goodslist/a", {}).then(res => {
      let data = res.data;
      console.log(data);
      this.goodslist1 = data.goods_info.slice(10, 12);
      this.goodslist2 = data.goods_info.slice(13, 15);
      this.goodslist3 = data.goods_info.slice(15, 17);
      this.goodslist4 = data.goods_info.slice(20, 22);
      console.log(this.goodslist1);
    });
  }
};
</script>
<style scoped>
/* 导航 */
.navs {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 8rem;
  background: #fff;
  text-align: center;
}
.new-list li img {
  display: block;
  height: 1.8rem;
  margin: 0.13333rem 1.9rem;
  margin-top: 0.4rem;
}

.new-list {
  width: 100%;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
  /* padding: 0 1rem; */
}
.new-list li {
  width: 25%;
  height: 4rem;
  text-align: center;
}
.new-list li a {
  font-size: 0.26667rem;
  display: block;
  color: #666;
  overflow: hidden;
}
</style>
