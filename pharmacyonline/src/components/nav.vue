<template>
  <div class="navs">
      
         <ul class="new-list clear">
           
            <li v-for="mynav in navs" :key="mynav.gc_id" >
                 <router-link  :to="{name:'/goodslist',query:{id:mynav.gc_id}}" >    
                    <a href="">
                        <img src="https://po-assets.azoyacdn.com/media/wysiwyg//mb_index_category_img_new/man.png" alt="">
                    </a>
                    <a href="">{{mynav.gc_name}}</a>
                </router-link> 
                </li>
         </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: []
    };
  },

  created() {
    this.$tunhuoji.get("/list", {}).then(res => {
      //   console.log(res);
      let data = res.data;
      // //   console.log(data);
      this.navs = data.goodsClass;
      //   console.log(this.navs);
    });
  }
};
</script>
<style scoped>
/* 导航 */
.navs {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 8rem;
  background: #fff;
  text-align: center;
}
.new-list li img {
  display: block;
  height: 1.8rem;
  margin: 0.13333rem 1.9rem;
  margin-top: 0.4rem;
}

.new-list {
  width: 100%;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
  /* padding: 0 1rem; */
}
.new-list li {
  width: 25%;
  height: 4rem;
  text-align: center;
}
.new-list li a {
  font-size: 0.26667rem;
  display: block;
  color: #666;
  overflow: hidden;
}
</style>
