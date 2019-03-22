<template>
  <div>
    <vanheader>购物车</vanheader>

    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <div class="goodslist" v-for="(item, index) in goods" :key="index">
        <van-checkbox class="card-goods__item" :name="item.goods_id">
          <van-card
            :title="item.goods_desc"
            :desc="item.goods_name"
            :num="item.cart_number"
            :price="formatPrice(item.goods_price)"
            :thumb="item.goods_image"
          />
        </van-checkbox>

        <el-input-number
          v-model="item.cart_number"
          @change="handleChange(item.goods_id,item.cart_number)"
          size="mini"
          :min="1"
          :max="100"
          label
        ></el-input-number>
      </div>
    </van-checkbox-group>

    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />

    <vanfooter/>
  </div>
</template>

<script>
import vanheader from "../components/vanheader"; //头部
import vanfooter from "../components/vanfooter"; //头部

import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";

export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup,
    vanheader,
    vanfooter
  },
  data() {
    return {
      checkedGoods: [],
      goods: [],
      num1: []
    };
  },

  // 获取购物车数据
  created() {
    this.$tunhuoji.get("/nodecart/list").then(res => {
      this.goods = res.data.cartlist;
    });
  },

  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },

    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.goods_id) !== -1
            ? item.goods_price * item.cart_number * 100
            : 0),
        0
      );
    }
  },

  methods: {
    formatPrice(price) {
      // console.log(price);
      return (price / 1).toFixed(2);
    },

    onSubmit() {
      Toast("请稍后。。。。");
    },

    // 加减
    handleChange(goods_id, value) {
      this.$tunhuoji
        .get("/nodecart/addnumber", { params: { goods_id, value } })
        .then(res => {
          // console.log(res);
        });
    }
  }
};
</script>

<style lang="less">
.card-goods {
  padding: 70px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.van-submit-bar {
  bottom: 8% !important;
  padding-bottom: 6%;
  background: #fff;
}
.card-goods {
  padding: 46px 0 40%;
}

.el-input-number {
  position: absolute !important;
  right: 3px;
  top: 50px;
}
.goodslist {
  position: relative;
  box-sizing: border-box;
  padding: 5px 0;
}
</style>