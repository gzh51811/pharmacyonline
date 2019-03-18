<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item @click="pathall()" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item @click="pathall()" icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item @click="pathall()" icon="setting-o" info="20">购物车</van-tabbar-item>
      <van-tabbar-item @click="pathall()" icon="friends-o" info="5">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    pathall() {
      switch (this.active) {
        case 0:
          this.$router.push({ path: "/home" });
          break;
        case 1:
          this.$router.push({ path: "/list" });
          break;
        case 2:
          this.$router.push({ path: "/cart" });
          break;
        case 3:
          this.$router.push({ path: "/wode" });
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  position: relative;
  z-index: 10;
}
</style>
