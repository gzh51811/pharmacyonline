<template>
  <div>
    {{aslots()}}
    <van-nav-bar :title="slo" left-text="返回" left-arrow v-if="!searchstatic">
      <van-icon name="search" slot="right" @click="search()"/>
    </van-nav-bar>
    <form action="/" v-if="searchstatic">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      searchstatic: false,
      slo: "3"
    };
  },
  methods: {
    // 点击搜索
    search() {
      this.searchstatic = true;
      // console.log("asdas");
    },
    // 取消
    onCancel() {
      this.searchstatic = false;
    },
    // 搜索数据
    onSearch() {},
    aslots() {
      this.slo = this.$slots.default[0].text;
    }
  }
};
</script>