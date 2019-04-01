<template>
  <div class="wrap twoColBoxWrap">
    <div class="container">
      <div class="con">
        <div class="twoColBox">
          <div class="leftMenu">
            <div class="menuTitle">代理合作</div>
            <div class="slideNav">
              <Menu mode="vertical" width="200px" active-name="currentMenu" @on-select="gotoRoute">
                <MenuItem name="agentAbout">
                  <Icon type="md-contacts" />关于我们
                </MenuItem>
                <MenuItem name="agentConnect">
                  <Icon type="md-call" />联系我们
                </MenuItem>
                <MenuItem name="agentBusiness">
                  <Icon type="md-globe" />商务合作
                </MenuItem>
                <MenuItem name="agentLaw">
                  <Icon type="md-book" />法律声明
                </MenuItem>
                <MenuItem name="agentPrivacy">
                  <Icon type="md-document"/>隐私声明
                </MenuItem>
                <MenuItem name="agentTeamwork">
                  <Icon type="md-cube" />代理合作
                </MenuItem>
            </Menu>
            </div>
          </div>
          <div class="rightCon">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'agent',
  data () {
    return {
      currentMenu: 'agentAbout'
    }
  },
  mounted () {
    this.currentMenu = this.$route.name
  },
  methods: {
    gotoRoute (name) {
      this.$router.push({name: name})
    },
    watchRoute () {
      this.currentMenu = this.$route.name
      console.log(this.currentMenu)
    }
  },
  watch: {
    $route: 'watchRoute'
  }
}
</script>

<style scoped>
@import "../../assets/style/agent.css";
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #e4393c;
    background: #f0faff;
    z-index: 2;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    content: '';
    display: block;
    width: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background: #e4393c;
}
.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #e4393c;
}
</style>
