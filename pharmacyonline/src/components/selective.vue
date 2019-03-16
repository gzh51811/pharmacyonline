<template>
  <div>
    <van-list :finished="finished" finished-text="没有更多了">
      <van-cell v-for="item in data" :key="item" :title="item"/>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 3, 4, 5],
      finished: false
    };
  },
  props: ["data"]
};
</script>

