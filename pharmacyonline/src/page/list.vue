<template>
  <div>
    <!-- 搜索 -->
    <searchs>分类</searchs>
    <van-badge-group :active-key="activeKey" @change="onChange">
      <van-badge v-for="myname in titles" :title="myname.gc_name"></van-badge>
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

  // 请求官网
  // created() {
  //   this.$axios.get("/jml/pc/pcIndex/class").then(res => {
  //     // console.log(res);
  //     let data = res.data.goodsClass;
  //     // console.log(data);
  //     this.titles = data;
  //     // console.log(this.titles[0].children);
  //     this.onChange(0);
  //   });
  //   // this.onChange(0);
  // },

  // 请求本地
  created() {
    this.$tunhuoji.get("/nodelist").then(res => {
      console.log(res);
      this.goods = res.data;
      let data = res.data.goodsClass;
      this.titles = data;
      this.onChange(0);
    });
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
