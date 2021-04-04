import Vue from 'vue'
import axios from 'axios'
import Vue from 'vue'

const guest = axios.create({
    baseURL: "http://enpro.com/user",
    headers:{
        "Content-Type": 'application/x-www-from-urlencoded',
        "X-Requested-With": 'XMLHttpRequest',
    }
})

Vue.prototype.$guest = guest

export {guest};