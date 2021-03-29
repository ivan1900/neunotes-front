<template>
  <v-app>
    <TopBar v-if="logged === true"/>      
    <v-main>
      <Login v-if="logged === false"/>
      <router-view v-if="logged === true"></router-view>
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
