<template>
  <div class="detailscenter">
    <vanheader>商品详情</vanheader>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item class="goodsimg">
        <img :src="goods.goods_image">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{goods.goods_desc}}</div>
        <div class="goodsmintitle">{{goods.goods_name}}</div>
        <div class="goods-price">{{goods.current_price_txt}}: ￥{{ goods.goods_price}}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：0.00</van-col>
        <van-col span="14">剩余：{{goods.goods_stock}}</van-col>
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
      <van-goods-action-big-btn @click="addcart(goods.goods_id)">加入购物车</van-goods-action-big-btn>
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
      goods: []
    };
  },

  // 请求商品详情信息
  created() {
    let goods_id = this.$route.query;
    this.$tunhuoji
      .get("/nodegoodslist/details", { params: { id: goods_id } })
      .then(res => {
        let {
          data: { goodsInfo }
        } = res;
        this.goods = goodsInfo;
      });
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
    addcart(obj) {
      this.$dialog.alert({
        message: "加入成功"
      });

      let goods_id = obj;
      // 加入购物车;
      this.$tunhuoji
        .get("/nodecart/addnumber", { params: { id: goods_id } })
        .then(res => {
          // console.log(res);
        });
    },
    beforeClose(action, done) {
      if (action === "confirm") {
        setTimeout(done, 1000);
      } else {
        done();
      }
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
  padding-bottom: 60px;
  &-swipe {
    img {
      width: 100%;
      display: block;
      margin-top: 12%;
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
.goodsmintitle {
  color: #999;
}
// .detailscenter {
//   margin-bottom: 60px;
// }
.van-goods-action {
  position: fixed !important;
  padding-bottom: 10px;
  background: #fff;
  bottom: -5px !important;
}
.detailscenter {
  margin-bottom: 140px;
}
</style>
