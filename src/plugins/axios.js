import Vue from 'vue'
import axios from 'axios'
import store from "../store/index.js"

const guest = axios.create({
    baseURL: "http://enpro.com/LoginRes",
    headers:{
        "Content-Type": "application/x-www-form-urlencoded; chartset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        
    }
});

const api = axios.create({
    baseURL: "http://enpro.com",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Requested-With": "XMLHttpRequest",
    },
});
  
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
});
  
api.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        store.dispatch("logout");
      } else {
        return Promise.reject(error);
      } 
    }
);

Vue.prototype.$guest = guest
Vue.prototype.$api = api

export {guest, api};