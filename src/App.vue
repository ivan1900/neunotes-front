<template>
  <v-app>
    <TopBar v-if="$store.state.isLoggedIn === true"/>      
    <v-main class="background">
      <Login v-if="$store.state.isLoggedIn === false"/>
      <router-view v-if="$store.state.isLoggedIn === true"></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Login from './components/Login';
import TopBar from './components/TopBar';

export default {
  name: 'App',

  components: {
    TopBar,
    Login
  },

  data: () => ({
    logged: false
  }),
};
</script>
