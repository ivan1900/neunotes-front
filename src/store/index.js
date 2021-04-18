import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    navVertical: true,
    name: '',
    language: '',
    position: ''
  },
  getters:{
    loginState: (state) => {
      return state.isLoggedIn
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
      if (router.currentRoute.name !== "Home") router.push("/")
    },
    logout(state) {
      state.isLoggedIn = false
      localStorage.removeItem("token")
      localStorage.removeItem("expires")
      router.push("/signin")
    },
    setName(state,name){
      state.name =name
    },
    setLanguage(state, language){
      state.language = language
    },
    setPosition(state, position){
      state.position = position
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
    },
  namePreferences(){
      
    }    
  },
  modules: {
  }
})
