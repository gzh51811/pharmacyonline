<template>
  <div>
    <van-list :finished="finished" finished-text="没有更多了" class="van-list">
      <van-cell @click="check(item)" v-for="item in data" :key="item" :title="item"/>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finished: false
    };
  },
  props: ["data"],
  methods: {
    check(item) {
      console.log(item);
      this.$emit("checked", false);
    }
  }
};
</script>

<style lang="less">
.van-list {
  height: 500px;
  background: rgba(27, 26, 26, 0.1);
}
</style>