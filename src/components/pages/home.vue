<template>
  <div>
    <button @click="loginOrLeave">登陆/退出</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState(['islogin'])
  },
  methods: {
    ...mapActions(['changeLoginStateAction']),
    loginOrLeave () {
      this.changeLoginStateAction(!this.islogin)
    }
  }
}
</script>
<style scoped>
</style>
