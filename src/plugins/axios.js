import Vue from 'vue'
import axios from 'axios'

const guest = axios.create({
    baseURL: "http://enpro.com/LoginRes",
    headers:{
        "Content-Type": "application/x-www-form-urlencoded; chartset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        
    }
})

Vue.prototype.$guest = guest

export {guest};