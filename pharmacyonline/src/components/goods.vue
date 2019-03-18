<template>
  <div>
    <router-link
      :to="{name:'/details',query:{id:index}}"
      v-for="(item, index) in data"
      :key="index"
    >
      <van-card
        num="库存：2"
        tag="火爆款"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
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
    return {
      data: [2, 1, 1, 2, 3],
      imageURL:
        "https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
    };
  }
};
</script>

<style lang="less" scoped>
.van-card__tag {
  top: 100%;
}
</style>