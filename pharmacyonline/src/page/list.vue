<template>
  <div>
    <!-- 搜索 -->
    <searchs>分类</searchs>
    <van-badge-group :active-key="activeKey" @change="onChange">
      <van-badge v-for="myname in titles" :title="myname.gc_name" :key="myname"></van-badge>
    </van-badge-group>
    <!-- 商品图文 -->
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
      item: [],
      titles: [],
      titleinfo: "护肤"
      // goodslist:[]
    };
  },
  //  "护肤", "面膜", "彩妆", "服装","食品", "健康", "家.Home", "配饰",
  methods: {
    onChange(Key) {
      this.activeKey = Key;
      switch (this.activeKey) {
        case 0:
          this.item = this.titles[0].children;
          this.titleinfo = this.titles[0].gc_name;

          break;
        case 1:
          this.item = this.titles[1].children;
          this.titleinfo = this.titles[1].gc_name;

          break;
        case 2:
          this.item = this.titles[2].children;
          this.titleinfo = this.titles[2].gc_name;
          break;
        case 3:
          this.item = this.titles[3].children;
          this.titleinfo = this.titles[3].gc_name;
          break;
        case 4:
          this.item = this.titles[4].children;
          this.titleinfo = this.titles[4].gc_name;
          break;
        case 5:
          this.titleinfo = this.titles[5].gc_name;
          this.item = this.titles[5].children;
          break;
        case 6:
          this.titleinfo = this.titles[6].gc_name;
          this.item = this.titles[6].children;
          break;
        case 7:
          this.titleinfo = this.titles[7].gc_name;
          this.item = this.titles[7].children;
          break;
      }
    }
  },
  components: {
    vanfooter,
    searchs,
    listselect
  },

  created() {
    this.$axios.get("/hjm/pc/pcIndex/class", {}).then(res => {
      console.log(res);
      let data = res.data;
      //   console.log(data);
      this.goodslist = data.goods_info;
      console.log(data.goods_info);
    });
    // this.$axios.get("/jml/pc/pcIndex/class").then(res => {
    //   console.log(res);
    //   let data = res.data.goodsClass;
    //   console.log(data);
    //   this.titles = data;
    //   console.log(this.titles[0].children);
    //   this.onChange(0);
    // });
    // this.onChange(0);
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
