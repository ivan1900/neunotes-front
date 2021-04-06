import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    navVertical: true,
  },
  getters:{
    loginState: (state) => {
      return state.isLoggedIn
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
      console.log('object :>> ');
      if (router.currentRoute.name !== "Home") router.push("/")
    },
    logout(state) {
      state.isLoggedIn = false
      localStorage.removeItem("token")
      localStorage.removeItem("expires")
      router.push("/signin")
    }
  },
  actions: {
    login({ commit }, expires_in) {
      setTimeout(() => {
        commit("logout")
      }, expires_in)
      commit("login")
    },
    logout({ commit }) {
      commit("logout")
    }
  },
  modules: {
  }
})
