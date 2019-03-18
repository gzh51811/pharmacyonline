<template>
  <div>
    <vanheader>个人中心</vanheader>

    <div class="head-bar">
      <div class="touxinag">
        <img src="../assets/image/touxinag.png" alt>
      </div>
      <div class="zhanghushezhi">
        <router-link to>
          <p>
            嗨嗨HIAaa
            <span>》</span>
          </p>
        </router-link>
      </div>
    </div>

    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment"/>待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records"/>待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend"/>待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics"/>已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link/>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link/>
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
      <van-cell icon="gift-o" title="我收到的礼物" is-link/>
    </van-cell-group>

    <vanfooter></vanfooter>
  </div>
</template>


<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
import vanheader from "../components/vanheader"; //头部
import vanfooter from "../components/vanfooter"; //底部
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    vanheader,
    vanfooter
  }
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}

.head-bar {
  background: #1981d6;
  height: auto;
  overflow: hidden;
  padding-top: 45px;

  .touxinag {
    display: inline-block;
    width: 70px;
    height: 70px;
    background: #fff;
    margin: 20px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .zhanghushezhi {
    display: inline-block;
    width: 65%;
    height: 100%;
    float: right;

    p {
      line-height: 70px;
      color: #fff;
      padding-right: 10px;
      span {
        float: right;
      }
    }
  }
}
</style>