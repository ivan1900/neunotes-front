<template>
    <v-app-bar
      app
      color="background"
      dark
    >
      <v-btn elevation="0" color="primary" small @click="$store.state.navVertical = !$store.state.navVertical"><v-icon>mdi-menu</v-icon></v-btn>
      <v-app-bar-title class="grey--text ml-2">
        <h2>Enpro</h2>
      </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn plain class="subtitle--text" @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
        Salir
      </v-btn>
    </v-app-bar>
</template>

<script>
export default ({
    name: 'TopBar',

    data: () => ({

    }),
    methods: {
      logout() {
        this.$store.dispatch("logout")
      }
    }
    
})
</script>
