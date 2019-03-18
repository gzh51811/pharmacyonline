<template>
  <div>
    {{set()}}
    <van-nav-bar
      :title="aslots"
      left-text="返回"
      right-text="首页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      aslots: "1"
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
    onClickRight() {
      this.$router.push({ path: "/home" });
    },
    set() {
      let so = this.$slots.default;
      this.aslots = so[0].text;
    }
  }
};
</script>
<style lang="less" scoped>
.van-nav-bar {
  position: fixed;
  width: 100%;
}
</style>
