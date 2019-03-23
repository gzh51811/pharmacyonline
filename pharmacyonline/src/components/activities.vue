<template>
   
  <div class="activities">
       
       <van-swipe  indicator-color="#ff7500" >
          <van-swipe-item class="banner" >
               <div class="swiper-slide special-list ajax-product-item swiper-slide-active" v-for="goods in activities1" :key="goods.id">
                <div class="discount-icon"> 
                    <div class="off"><p data-ajax-item="sales">45%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img  :src="goods.goods_image" alt="" title="">
                    <div class="base-font">
                       {{goods.goods_name}}                </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
            </div>
          </van-swipe-item>
           <van-swipe-item class="banner" >
               <div class="swiper-slide special-list ajax-product-item swiper-slide-active" v-for="goods in activities2" :key="goods.id">
                <div class="discount-icon"> 
                    <div class="off"><p data-ajax-item="sales">45%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img  :src="goods.goods_image" alt="" title="">
                    <div class="base-font">
                       {{goods.goods_name}}                </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
            </div>
          </van-swipe-item>
           <van-swipe-item class="banner" >
               <div class="swiper-slide special-list ajax-product-item swiper-slide-active" v-for="goods in activities3" :key="goods.id">
                <div class="discount-icon"> 
                    <div class="off"><p data-ajax-item="sales">45%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img  :src="goods.goods_image" alt="" title="">
                    <div class="base-font">
                       {{goods.goods_name}}                </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
            </div>
          </van-swipe-item>
           <van-swipe-item class="banner" >
               <div class="swiper-slide special-list ajax-product-item swiper-slide-active" v-for="goods in activities4" :key="goods.id">
                <div class="discount-icon"> 
                    <div class="off"><p data-ajax-item="sales">45%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img  :src="goods.goods_image" alt="" title="">
                    <div class="base-font">
                       {{goods.goods_name}}                </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
            </div>
        </van-swipe-item>
      </van-swipe>
       
      
          
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities1: [],
      activities2: [],
      activities3: [],
      activities4: []
    };
  },

  created() {
    this.$tunhuoji.get("/nodegoodslist/a", {}).then(res => {
      let data = res.data;
      //   console.log(data);
      this.activities1 = data.goods_info.slice(0, 2);
      this.activities2 = data.goods_info.slice(3, 5);
      this.activities3 = data.goods_info.slice(6, 8);
      this.activities4 = data.goods_info.slice(9, 11);
      //   console.log(this.activities1);
    });
  }
};
</script>
<style scoped>
/* 导航 */
</style>
