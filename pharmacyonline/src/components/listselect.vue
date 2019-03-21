<template>
  <div class="listselect">
    <h2 class="new-nav">
      <a href>{{toptitle}}</a>
    </h2>

    <div class="content">
      <div class="content-item" data-id="6527" v-for="(item, index) in date" :key="index">
        <router-link :to="{name:'/goodslist',query:{id:item.gc_id}}">
          <img
            onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'"
            class="category-img first-icon"
            src="../assets/image/logo.png"
          >
          <p class="category-name">{{item.gc_name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // name:[]
    };
  },
  props: ["date", "toptitle"],
  // console.log("date");
  created() {
    // console.log("created:", this.date);
  },
  mounted() {
    // console.log("mounted:", this.date);
  }
};
</script>

<style lang="less" scoped>
.listselect {
  position: absolute;
  top: 50px;
  right: 0;
  width: 68%;
  float: right;
  height: 100%;
  // background: pink;
  .new-nav {
    background: #ff7500;
    font-size: 16px;
    height: 4.5%;
    line-height: 26px;
    text-align: center;
    width: 100%;
    margin: 0 auto 0;
    a {
      display: block;
      height: 100%;
      font-size: 12px;
      color: #fff;
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .content-item {
      border: 1px solid #eee;
      margin: 5% 1% 0;
      width: 30%;
      text-align: center;
      img {
        width: 75%;
      }
      p {
        text-align: center;
        color: #999;
        font-size: 14px;
        margin: 3.5%;
      }
    }
  }
}
</style>

