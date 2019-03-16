<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="首页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-cell-group class="form">
      <van-icon name="friends-o" size="30px" class="icons"/>
      <van-field
        style="padding-left:50px"
        v-model="username"
        required
        clearable
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-icon name="bag-o" size="30px" class="icons"/>
      <van-field
        v-model="password"
        style="padding-left:50px"
        type="password"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>

    <van-button type="primary" class="btn">登录</van-button>
    <div class="zc">
      <router-link to="/register" class="register">
        <span>注册</span>
      </router-link>
      <router-link to="/register" class="forget">
        <span>忘记密码？</span>
      </router-link>
    </div>

    <div class="other">
      <i></i>使用其他方式登录
      <i></i>
    </div>

    <ul class="ul">
      <li>
        <img src="../assets/image/qq.jpg" alt>
      </li>
      <li>
        <img src="../assets/image/weibo.jpg" alt>
      </li>
      <li>
        <img src="../assets/image/zhifubao.jpg" alt>
      </li>
      <li>
        <img src="../assets/image/ylian.jpg" alt>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { username: "", password: "" };
  },
  methods: {
    onClickLeft() {
      this.$router.go({ path: "/home" });
      this.$router.go("-1");
    },
    onClickRight() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>


<style lang="scss" scoped>
.form {
  margin-top: 30px;
}
.icons {
  position: relative;
  left: 17px;
  top: 40px;
  z-index: 10;
}
.btn {
  width: 80%;
  margin: 35px 35px 10px;
}
.zc {
  padding: 5px 30px;
  font-size: 12px;
}
.zc .forget {
  float: right;
}
.other {
  margin-top: 30px;
  color: #999;
  text-align: center;
  font-size: 13px;
}
.other i {
  display: inline-block;
  width: 23%;
  height: 2px;
  background: #ccc;
  margin: 0 14px;
}
.ul {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 30px;
}

.ul li {
  height: 40%;
  width: 22%;
  justify-content: center;
}
.ul li img {
  width: 40%;
  height: 40%;
}
</style>




