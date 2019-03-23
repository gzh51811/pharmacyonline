<template>
   
  <div class="Bestseller">
         <van-tabs type="card" class="allContern" color="#3333" title-active-color="#ffff">
        <van-tab title="护肤品">
        <ul class="hot-list clear ajax-products">
           <li class="ajax-product-item" data-product-symbol="AU$" v-for="goods in Bestseller1">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">26%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="">
                    <img :src="goods.goods_image" >
                    <div class="base-font">
                        {{goods.goods_name}}
                        </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU${{goods.goods_price}}</span>
                        <span class="price-was" data-ajax-item="price" style="">AU${{goods.goods_hj_price}}</span>
                    </div>
                </a>
            </li>
          
        </ul>
        </van-tab>
        <!-- <van-tab title="熬夜族养生">内容 2</van-tab>
        <van-tab title="护肤界黑科技">内容 3</van-tab>
        <van-tab title="摆脱中年危机">内容 3</van-tab>
        <van-tab title="孕妈专区">内容 3</van-tab>
        <van-tab title="家用常备">内容 3</van-tab>
        <van-tab title="凑单好物">内容 3</van-tab>
        <van-tab title="礼盒套装">内容 3</van-tab> -->

      </van-tabs> 
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      Bestseller1: []
    };
  },

  created() {
    this.$tunhuoji.get("/nodegoodslist/a", {}).then(res => {
      let data = res.data;
      // console.log(data);
      this.Bestseller1 = data.goods_info.slice(19, 29);
      //   this.Bestseller2 = data.goods_info.slice(3, 5);
      //   this.Bestseller3 = data.goods_info.slice(6, 8);
      //   this.Bestseller4 = data.goods_info.slice(9, 11);
      //   console.log(this.Bestseller1);
    });
  }
};
</script>
<style scoped>
/* 导航 */
</style>
