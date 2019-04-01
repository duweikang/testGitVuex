import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    islogin: false,
    userInfo: {
      username: null,
      balance: 0
    }
  },
  getters: {

  },
  mutations: {
    changeLoginState (state, isloginFlag) {
      state.islogin = isloginFlag
    }
  },
  actions: {
    changeLoginStateAction ({ commit }, isloginFlag) {
      commit('changeLoginState', isloginFlag)
    }
  }
})
