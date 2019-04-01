<template>
  <div class="layout">
    <Layout>
      <Header>
        <headModule></headModule>
      </Header>
      <Content>
        <router-view/>
      </Content>
      <Footer class="layout-footer-center">
        <footModule></footModule>
      </Footer>
    </Layout>
  </div>
</template>
<script>
import headModule from './headModule'
import footModule from './footModule'
export default {
  name: 'layouts',
  components: {
    headModule,
    footModule
  }
}
</script>

<style scoped>
.ivu-layout-header {
    background: none;
    padding: 0 !important;
    height: auto !important;
    line-height: auto !important;
}
.ivu-layout-footer{
  padding: 0 !important;
}
</style>
