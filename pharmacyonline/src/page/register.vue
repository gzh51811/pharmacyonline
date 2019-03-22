<template>
  <div class="content">
    <vanheader>注册</vanheader>
    <!-- <div class="header">
      <div class="header-button-left">
        <i data-v-1db67ffc class="van-icon van-icon-arrow-left van-nav-bar__arrow">
          <a href="javascript:"></a>
        </i>
    </div>-->
    <!-- <h1>注册</h1>
      <div class="header-button-right">
        <a href="/" class="home">
          <i class="iconfont icon-yuebao"></i>
        </a>
      </div>
    </div>-->
    <div class="white"></div>
    <section>
      <div class="main">
        <div class="jua">
          <p>
            <span class="left_tu">
              <img src="../img/bar_gift.png" alt>
            </span>注册并绑定手机号码可获
            <em>3澳无门槛</em>优惠券
          </p>
        </div>
        <van-cell-group>
          <van-field v-model="phone" left-icon="phone-o" label="手机号" placeholder="请输入手机号"/>
          <van-field
            v-model="sms"
            center
            left-icon="comment-o"
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
          <van-field
            v-model="password"
            type="password"
            left-icon="coupon-o"
            label="密码"
            placeholder="密码（6-20位字母或数字组合）"
          />

          <p>
            <input type="checkbox" name id>
            <span>已阅读并同意</span>
            <a href>《服务条例》</a>及
            <a href>《隐私条款》</a>
          </p>

          <van-button size="large" class="zhuce" style="color:white">立即注册</van-button>
          <router-link to="/login">
            <van-button size="large" class="backlogin" style="background:white;">已有账号，返回登录</van-button>
          </router-link>
        </van-cell-group>
      </div>
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

<style lang="less" scoped>
.content {
  font-size: 14px;
}
a {
  text-decoration: none;
  color: black;
}

.header .header-button-right {
  /* width: 20%; */
}
.header-button-right a .iconfont {
  display: inline-block;
  /* font-size: ; */
}
.white {
  height: 60px;
  /* width: 100%; */
}
.main {
  /* height: 28.4375rem; */
  margin: 0 30px;
}
.main .jua {
  height: 60px;
  line-height: 60px;
  margin-bottom: 20px;
  font-size: 15px;
}
.jua p em {
  color: #f93;
}

.van-cell-group {
  .van-cell {
    margin: 20px 0;
  }
  p {
    color: #999;
    a {
      color: #58bc58;
    }
  }
  .backlogin {
    position: relative;
    // top: 10px;
  }
}

input[type="checkbox"] {
  -webkit-appearance: none; /*清除复选框默认样式*/
  background: #fff url(../img/A7NJJb.png); /*复选框的背景图，就是上图*/
  height: 20px; /*高度*/
  vertical-align: middle;
  background-size: cover;
  width: 20px;
  margin-right: 6%;
  border: 1px solid #ccc;
}
input[type="checkbox"]:checked {
  background-position: 16px 0;
}
.main .zhuce {
  background: rgb(255, 117, 0);
  margin: 10% 5%;
  width: 87%;
  border-radius: 10px;
}
</style>