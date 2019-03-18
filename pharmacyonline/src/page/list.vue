<template>
  <div>
    <!-- 搜索 -->
    <searchs>分类</searchs>
    <van-badge-group :active-key="activeKey" @change="onChange">
      <van-badge :title="titles[0]"></van-badge>
      <van-badge :title="titles[1]" info="8">新品上线</van-badge>
      <van-badge :title="titles[2]" info="99">新品上线</van-badge>
      <van-badge :title="titles[3]" info="99+">新品上线</van-badge>
    </van-badge-group>

    <listselect :date="item" :toptitle="titleinfo"></listselect>
    <!-- 底部 -->
    <vanfooter/>
  </div>
</template>

<script>
import vanfooter from "../components/vanfooter"; //底部
import searchs from "../components/search"; //底部
import listselect from "../components/listselect"; //分类商品

export default {
  data() {
    return {
      activeKey: 0,
      item: [1, 2, 2],
      titles: ["新品上线", "新上线", "新品", "新线"],
      titleinfo: "新品上线"
    };
  },

  methods: {
    onChange(key) {
      this.activeKey = key;
      switch (this.activeKey) {
        case 0:
          this.item = [{ title: "新品上市" }, 12, 234, 2];
          this.titleinfo = this.titles[0];

          break;
        case 1:
          this.item = [{ title: "营养保健" }, 12, 1, 123, 6, 3, 4];
          this.titleinfo = this.titles[1];

          break;
        case 2:
          this.item = [{ title: "营养保健" }, 3];
          this.titleinfo = this.titles[2];
          break;
        case 3:
          this.item = [{ title: "营养保健" }, 12, 3];
          this.titleinfo = this.titles[3];
          break;
        case 4:
          this.item = [{ title: "营养保健" }, 12, 1, 6, 3];
          this.titleinfo = this.titles[4];
          break;
        case 5:
          this.titleinfo = this.titles[5];
          this.item = [{ title: "营养保健" }, 12, 1, 123, 6, 3];
          break;
      }
    }
  },
  components: {
    vanfooter,
    searchs,
    listselect
  }
};
</script>


<style lang="less" scoped>
[class*="van-hairline"] {
  position: relative;
  width: 55%;
  a {
    margin-right: 0;
  }
}
</style>
