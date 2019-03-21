<template>
  <div style="background:#eef;">
    <search>商品列表</search>

    <van-tabs v-model="active" @click="show">
      <van-tab title="综合">
        <selective v-show="ok1" :data="comprehensive" v-on:checked="checked"></selective>
      </van-tab>

      <van-tab title="品牌" v-show="ok2">
        <selective :data="item" v-on:checked="checked"></selective>
      </van-tab>

      <van-tab title="分类" v-show="ok3">
        <selective :data="item" v-on:checked="checked"></selective>
      </van-tab>

      <van-tab title="筛选" v-show="ok4">
        <selective :data="item" v-on:checked="checked"></selective>
      </van-tab>
    </van-tabs>

    <!-- 单个商品 -->
    <goods :data="goods" style="padding-bottom:14%"></goods>

    <!-- 购物车图标 -->
    <!-- <div class="gouwuche">
      <van-icon name="cart-circle" info="0" size="40px" color="red"/>
    </div>-->
    <vanfooter></vanfooter>
  </div>
</template>

<script>
import vanfooter from "../components/vanfooter"; //底部
import search from "../components/search"; //头部
import selective from "../components/selective"; //选项
import goods from "../components/goods"; //商品
export default {
  components: {
    vanfooter,
    search,
    selective,
    goods
  },

  data() {
    return {
      ok1: false,
      ok2: false,
      ok3: false,
      ok4: false,
      goods: [],
      active: 0,
      item: ["综合排序", "销量从高到低", "价格从高到低", "价格从低到高"],
      comprehensive: [
        "综合排序",
        "销量从高到低",
        "价格从高到低",
        "价格从低到高"
      ]
    };
  },

  created() {
    let gc_id = this.$route.query;
    console.log(gc_id);
    this.$tunhuoji.get("/goodslist", { params: { id: gc_id } }).then(res => {
      this.goods = res.data;
      // console.log(res);
    });
  },

  methods: {
    show() {
      switch (this.active) {
        case 0:
          this.ok1 = !this.ok1;
          this.ok2 = this.ok3 = this.ok4 = false;
          break;
        case 1:
          this.ok2 = !this.ok2;
          this.ok1 = this.ok3 = this.ok4 = false;
          break;
        case 2:
          this.ok3 = !this.ok3;
          this.ok2 = this.ok1 = this.ok4 = false;
          break;
        case 3:
          this.ok4 = !this.ok4;
          this.ok2 = this.ok3 = this.ok1 = false;
          break;
      }
    },

    checked() {
      this.ok2 = this.ok3 = this.ok4 = this.ok1 = false;
      // console.log(this.ok1);
    }
  }
};
</script>

<style lang="less" scoped>
// .gouwuche {
//   position: fixed;
//   bottom: 50px;
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   background: rgb(233, 233, 233);
//   right: 5%;
// }
</style>
