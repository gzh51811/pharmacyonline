<template>
  <div>
    <router-link
      :to="{name:'/details',query:{id:item.goods_id}}"
      v-for="(item, index) in data"
      :key="index"
    >
      <van-card
        :num="item.spu"
        :tag="item.origin_desc"
        :price="item.goods_price"
        :desc="item.goods_name"
        :title="item.goods_desc"
        :thumb="item.goods_image"
        :origin-price="item.goods_price"
        thumb-link="/details"
      >
        <div slot="footer">
          <!-- <van-button size="mini">立即购买</van-button> -->
          <van-button size="mini">
            <van-icon name="shopping-cart-o" color="red" size="20px"/>
          </van-button>
        </div>
      </van-card>
    </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },

  props: ["data"]
};
</script>



<style lang="less" scoped>
.van-card__tag {
  top: 100%;
}
.van-card {
  margin: 10px 0;
  background: #fff;
}
</style>