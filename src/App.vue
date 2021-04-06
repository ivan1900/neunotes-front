<template>
  <v-app>
    <TopBar v-if="$store.state.isLoggedIn === true"/>
    <NavVertical v-if="$store.state.isLoggedIn === true" />   
    <v-main class="background">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import TopBar from './components/TopBar';
import NavVertical from './components/NavVertical';

export default {
  name: 'App',

  components: {
    TopBar,
    NavVertical
  },

  data: () => ({
    
  }),
  created() {
    const expires = localStorage.getItem("expires")
    const token = localStorage.getItem("token")

    if(expires && token){
      var expiresMs = new Date(expires);
      var now = new Date();
      now = now.getTime();
      expiresMs = expiresMs.getTime();
      if (now > expiresMs) {
        this.$store.dispatch("logout");
      } else {
        this.$store.dispatch("login", expiresMs - now);
      }
    } else {
      if (this.$router.currentRoute.name !== "Signin")
        this.$router.push({ name: "Signin" });
    } 
  }
};
</script>
