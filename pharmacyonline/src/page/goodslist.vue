<template>
  <div>
    <search>商品列表</search>

    <van-tabs v-model="active">
      <van-tab title="综合">
        <selective :data="comprehensive">2312</selective>
      </van-tab>

      <van-tab title="排序">
        <selective :data="item">2312</selective>
      </van-tab>
      <van-tab title="分类">内容 3</van-tab>
      <van-tab title="筛选">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import vanfooter from "../components/vanfooter"; //底部
import search from "../components/search"; //底部
import selective from "../components/selective"; //选项
export default {
  components: {
    vanfooter,
    search,
    selective
  },

  data() {
    return {
      active: 0,
      item: ["综合排序", "销量从高到低", "价格从高到低", "价格从低到高"]
    };
  }
};
</script>