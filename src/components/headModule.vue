<template>
  <div class="headBox">
    <div class="wrap headTop">
      <div class="container">
        <div class="headTopCon">
          <div class="welcome">Hi，欢迎来到众发彩票！</div>
          <div class="headUserInfo">
            <div class="userInfoItem loginBefore" v-if="!islogin">
              <span class="btn">登陆</span>
              <span style="border-left:1px solid #ccc;" class="btn">注册</span>
            </div>
            <div class="userInfoItem loginAfter" v-else>
              <span>用户名：</span>
              <span>testdu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap headMiddle">
      <div class="container">
        <div class="headMiddleCon">
          <div class="logo">
            <img src="../assets/img/head/logo.png">
          </div>
          <a class="selfAd" href="#">
            <img src="../assets/img/head/top-ad.png">
          </a>
          <a href="#" target="_blank" class="service"></a>
        </div>
      </div>
    </div>
    <div class="wrap headBottom">
      <div class="container">
        <div class="headBottomCon">
          <Menu mode="horizontal" active-name="home" @on-select="gotoRoute">
            <MenuItem name="home">
              <Icon type="md-square"/>首页
            </MenuItem>
            <MenuItem name="hall">
              <Icon type="md-star"/>购彩大厅
            </MenuItem>
            <MenuItem name="active">
              <Icon type="md-outlet"/>活动中心
            </MenuItem>
            <MenuItem name="agentAbout">
              <Icon type="md-people"/>代理合作
            </MenuItem>
            <MenuItem name="phone">
              <Icon type="md-phone-portrait"/>手机购彩
            </MenuItem>
            <MenuItem name="guide/1">
              <Icon type="md-help-circle" />帮助指南
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'headModule',
  data () {
    return {
      actiMenu: 'home'
    }
  },
  computed: {
    ...mapState(['islogin'])
  },
  methods: {
    ...mapActions(['changeLoginStateActions']),
    loginOrLeave () {
      this.changeStateAction(!this.islogin)
    },
    gotoRoute (name) {
      this.$router.push({name: name})
    }
  }
}
</script>
<style scoped>
.headBox {
  height: 167px;
}
.headBox .headTop {
  height: 30px;
  line-height: 30px;
}
.headBox .headMiddle {
  height: 95px;
  background-color: #e73b3b;
}
.headBox .headBottom {
  height: 42px;
  background-color: #d21e1e;
}

.headBox .headTop .headTopCon .welcome {
  float: left;
  height: 30px;
  line-height: 30px;
}
.headBox .headTop .headTopCon .headUserInfo {
  float: right;
  height: 30px;
  line-height: 30px;
}
.headBox .headTop .headTopCon .headUserInfo .loginBefore span {
  padding: 0 10px;
}

.headBox .headMiddle .headMiddleCon {
  height: 95px;
  position: relative;
}
.headBox .headMiddle .headMiddleCon .logo {
  display: block;
  height: 95px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.headBox .headMiddle .headMiddleCon .logo img {
  display: block;
  height: 100%;
}
.headBox .headMiddle .headMiddleCon .service {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  display: block;
  width: 87px;
  height: 25px;
  background: url("../assets/img/head/service.gif");
  background-position: 0 -26px;
}
.headBox .headMiddle .headMiddleCon .selfAd {
  display: block;
  width: 310px;
  height: 95px;
  position: absolute;
  top: 0;
  right: 170px;
}
.headBox .headMiddle .headMiddleCon .selfAd img {
  display: block;
  height: 100%;
}
.headBox .headBottom .headBottomCon .ivu-menu-horizontal {
  height: 42px;
  line-height: 42px;
}
.headBox .headBottom .headBottomCon .ivu-menu-light {
  background: none;
}
.headBox .headBottom .headBottomCon .ivu-menu-item {
  color: #ffffff;
}
.headBox .headBottom .headBottomCon .ivu-menu-horizontal.ivu-menu-light:after {
  display: none;
}
.headBox
  .headBottom
  .headBottomCon
  .ivu-menu-light.ivu-menu-horizontal
  .ivu-menu-item-active,
.headBox
  .headBottom
  .headBottomCon
  .ivu-menu-light.ivu-menu-horizontal
  .ivu-menu-item:hover,
.headBox
  .headBottom
  .headBottomCon
  .ivu-menu-light.ivu-menu-horizontal
  .ivu-menu-submenu-active,
.headBox
  .headBottom
  .headBottomCon
  .ivu-menu-light.ivu-menu-horizontal
  .ivu-menu-submenu:hover {
  border-bottom: none;
  background: #ca1a0d;
}
</style>
