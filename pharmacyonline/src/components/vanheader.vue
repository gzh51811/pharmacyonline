<template>
  <div>
    <slot></slot>
    <van-nav-bar
      title="登录"
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
  methods: {
    onClickLeft() {
      this.$router.go({ path: "/home" });
      this.$router.go("-1");
    },
    onClickRight() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>