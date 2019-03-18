<template>
    <div >
         <div class="header">
               
                 <div class="header-button-left"><i data-v-1db67ffc="" class="van-icon van-icon-arrow-left van-nav-bar__arrow"> <a href="javascript:"></a><!----></i> </div>
                <h1>我的收货地址</h1>
                <div class="header-button-right">
                    <a href="/" class="home " ><i class="iconfont icon-yuebao"></i></a>
                </div>
         </div>
           <van-address-list
         v-model="chosenAddressId"
         :list="list"
         :disabled-list="disabledList"
         disabled-text="以下地址超出配送范围"
         @add="onAdd"
         @edit="onEdit"
        />
    </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },

  methods: {
    onAdd() {
      Toast("新增地址");
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  }
};
</script>
<style scoped>
@import "../iconfont/iconfont.css";
@import "../css/base.css";

a {
  text-decoration: none;
}
.header {
  height: 3.125rem;
  font-size: 1.25rem;
  line-height: 3.125rem;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
  padding: 0 6%;
}
.header .header-button-left {
}
.header h1 {
  font-size: 1.25rem;
  font-weight: 400;
}
.header .header-button-right {
  /* width: 20%; */
}
.header-button-right a .iconfont {
  display: inline-block;
  font-size: 1.25rem;
}
</style>


