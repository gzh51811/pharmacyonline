<template>
  <div>
    <vanheader>账户设置</vanheader>

    <div class="white"></div>
    <section class="main">
      <ul>
        <li class="menu-box-li first">
          <a href="javascript:void(0);">
            <span class="li-left-wrap">头像</span>
            <em class="li-right-wrap">
              <img
                class="little-userImg"
                src="https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/customer/default_user.png"
                alt
              >
            </em>
          </a>
        </li>
        <li class="menu-box-li">
          <a href>
            <span class="li-left-wrap">昵称</span>
            <em class="li-right-wrap">
              <span>1552876861</span>
            </em>
          </a>
          <i>&gt;</i>
        </li>
        <li class="menu-box-li">
          <a href>
            <span class="li-left-wrap">绑定手机</span>
            <em class="li-right-wrap">
              <span>130****1906</span>
            </em>
          </a>
          <i>&gt;</i>
        </li>
        <li class="menu-box-li">
          <a
            href="
                            "
            data-href="https://cn.pharmacyonline.com.au/o_customer/security/bindpage?type=cellphone/"
          >
            <span class="li-left-wrap">邮箱</span>
            <em class="li-right-wrap">
              <span>去绑定</span>
            </em>
          </a>
          <i>&gt;</i>
        </li>
        <li class="menu-box-li">
          <a href>
            <span class="li-left-wrap">登录密码</span>
            <em class="li-right-wrap">
              <span>修改密码</span>
            </em>
          </a>
          <i>&gt;</i>
        </li>
      </ul>
      <van-button
        size="large"
        style="background:#ff7500;color:white;     width: 85%;
    margin: 5% 7%;"
      >退出登录</van-button>
    </section>
  </div>
</template>

      
<script>
import vanheader from "../components/vanheader";

export default {
  data() {
    return { phone: "", sms: "", password: "" };
  },
  components: {
    vanheader
  }
};
</script>

<style scoped>
@import "../iconfont/iconfont.css";
@import "../css/base.css";

a {
  text-decoration: none;
  color: black;
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
.white {
  height: 3.25rem;
  width: 100%;
  background: #f2f2f2;
}
.main {
  /* height: 28.4375rem; */
}
.main ul li {
  box-sizing: border-box;
  width: 100%;
  line-height: 4.1875rem;
  height: 4.1875rem;
  border-bottom: 2px solid #f2f2f2;
  position: relative;
}
.main ul li a span {
  padding-left: 1.25rem;
  line-height: 4rem;
}
.main ul li i {
  position: absolute;
  right: 2%;
  color: gray;
}
.li-right-wrap {
  overflow: hidden;
  float: right;
  vertical-align: middle;
  display: inline-block;
  line-height: 3.125rem;
  margin-right: 1.97rem;
  text-align: right;
  color: #999;
}
.little-userImg {
  height: 2.125rem;
  width: 2.125rem;
  display: inline-block;
  margin: 0.2rem 0.26667rem 0 0;
}
</style>
