<template>
<div class="wrap footBox">
  <div class="container">
    <div class="footCon">
    <div class="footTop">
      <div class="item support">
        <div class="ftTitle">
          技术支持
          <i>Technical support</i>
        </div>
        <div class="ftCon">
          <div class="imgBox leftImg">
            <img src="../assets/img/logo.png">
          </div>
        </div>
      </div>
      <div class="item serviceExperience">
        <div class="ftTitle">
          服务体验
          <i>Service experience</i>
        </div>
        <div class="ftCon">
          <div class="progress">
            <div class="line">
              昨日充值平均时间
              <p class="footBar">
                <span style="width: 33.3333%;"></span>
              </p>
              <em>1'00</em>
              <i>秒</i>
            </div>
            <div class="line">
              昨日提现平均时间
              <p class="footBar">
                <span style="width: 62.7778%;"></span>
              </p>
              <em>1'53</em>
              <i>秒</i>
            </div>
          </div>
        </div>
      </div>
      <div class="item rechargeMethod">
        <div class="ftTitle">
          充值方式
          <i>Recharge method</i>
        </div>
        <div class="ftCon">
          <div class="imgLiBox">
            <div class="imgLi wechat"></div>
            <div class="imgLi alipay"></div>
            <div class="imgLi cup"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footBottom">
      <div class="footBottomCopyRight">Copyright © 众发彩票 Reserved | 18+</div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'footModule'
}
</script>

<style scoped>
@import "../assets/style/foot.css";
</style>
