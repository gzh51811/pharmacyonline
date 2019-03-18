<template>
  <div>
    <vanheader>商品详情</vanheader>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb">
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="details"/>
    </van-cell-group>

    <van-goods-action class="goodsgroup" style="margin-bottom:60px">
      <van-goods-action-mini-btn icon="chat-o" @click="customer">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addcart">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="bay">立即购买</van-goods-action-big-btn>
    </van-goods-action>

    <vanfooter></vanfooter>
  </div>
</template>

<script>
import vanheader from "../components/vanheader.vue"; //头部
import vanfooter from "../components/vanfooter"; //底部
// import // Tag,
// // Col,
// // Icon,
// // Cell,
// // CellGroup,
// // Swipe,
// // Toast,
// // SwipeItem,
// // GoodsAction,
// // GoodsActionBigBtn,
// // GoodsActionMiniBtn
// "vant";
export default {
  components: {
    // [Tag.name]: Tag,
    // [Col.name]: Col,
    // [Icon.name]: Icon,
    // [Cell.name]: Cell,
    // [CellGroup.name]: CellGroup,
    // [Swipe.name]: Swipe,
    // [SwipeItem.name]: SwipeItem,
    // [GoodsAction.name]: GoodsAction,
    // [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    // [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    vanheader,
    vanfooter
  },
  data() {
    return {
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },
  methods: {
    formatPrice() {
      // return "¥" + (this.goods.price / 100).toFixed(2);
    },

    // 去购物车
    onClickCart() {
      this.$router.push("/cart");
    },

    // 客服
    customer() {},

    // 加入购物车
    addcart() {
      this.$router.push("/cart");
    },

    // 立即购买
    bay() {
      this.$router.push("/order");
    },

    //商品详情
    details() {},

    // 其他
    sorry() {}
  }
};
</script>



<style lang="less">
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}

.goodsgroup {
  position: unset !important;
}
</style>
