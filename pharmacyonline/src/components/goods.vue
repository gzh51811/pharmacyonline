<template>
  <div>
    <div v-for="(item, index) in data" :key="index" class="goods">
      <router-link :to="{name:'/details',query:{id:item.goods_id}}">
        <van-card
          :num="item.spu"
          :tag="item.origin_desc"
          :price="item.goods_price"
          :desc="item.goods_name"
          :title="item.goods_desc"
          :thumb="item.goods_image"
          :origin-price="item.goods_price"
          thumb-link="/details"
        ></van-card>
      </router-link>

      <div class="btn">
        <button @click.stop="btn(item.goods_id)">
          <van-icon name="like" color="red" size="40px"/>
        </button>
        <van-popup v-model="show" position="top" :overlay="false">
          <p class="tankuang">加入成功</p>
        </van-popup>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    btn(obj) {
      let goods_id = obj;
      // 加入购物车;
      this.$tunhuoji.get("/cart", { params: { id: goods_id } }).then(res => {
        // console.log(res);
      });

      // 弹出弹框
      this.show = true;
      // 弹框1秒后关闭
      setTimeout(() => {
        this.show = false;
      }, 1000);
    }
  },
  props: ["data"]
};
</script>



<style lang="less" scoped>
.van-card__tag {
  top: 100%;
}
.van-card {
  margin: 10px 0;
  background: #fff;
  min-height: 130px;
}

.goods {
  position: relative;
  padding-bottom: 0;
}
.btn {
  position: absolute;
  right: 8%;
  top: 60%;
  background: #fff;
}
.van-icon-like:before {
  background: #fff;
}
.tankuang {
  text-align: center;
  background: #ccc;
  padding: 15px 10px;
}
</style>