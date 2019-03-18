<template>
    <div>
            <div class="header">
               
                 <div class="header-button-left"><i data-v-1db67ffc="" class="van-icon van-icon-arrow-left van-nav-bar__arrow"> <a href="javascript:"></a><!----></i> </div>
                <h1>新建收货地址</h1>
                <div class="header-button-right">
                    <!-- <a href="/" class="home " ><i class="iconfont icon-yuebao"></i></a> -->
                </div>
         </div>
<van-address-edit
  :area-list="areaList"
  show-postal
  
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"

  @change-detail="onChangeDetail"
/>
    </div>
</template>

<script>
import AddressInfo from "../js/area.js";
export default {
  data() {
    return {
      areaList: AddressInfo,
      searchResult: []
    };
  },

  methods: {
    onSave() {
      Toast("save");
    },

    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: val,
            address: ""
          }
        ];
      } else {
        this.searchResult = [];
      }
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

