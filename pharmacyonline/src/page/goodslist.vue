<template>
  <div>
    <search>商品列表</search>

    <van-tabs v-model="active" @click="show">
      <van-tab title="综合">
        <selective v-show="ok1" :data="comprehensive" v-on:checked="checked"></selective>
      </van-tab>

      <van-tab title="排序" v-show="ok2">
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
    <goods :data="goods"></goods>
    <vanfooter></vanfooter>
  </div>
</template>

<script>
import vanfooter from "../components/vanfooter"; //底部
import search from "../components/search"; //头部
import selective from "../components/selective"; //选项
import goods from "../components/goods"; //商品
import { nfapply } from "q";
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
    checked(n) {
      this.ok2 = this.ok3 = this.ok4 = this.ok1 = false;
      console.log(this.ok1);
    }
  }
};
</script>