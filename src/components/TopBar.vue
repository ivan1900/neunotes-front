<template>
    <v-app-bar
      app
      color="background"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-app-bar-title class="grey--text ml-2">
        <h2>Dafne</h2>
      </v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
</template>

<script>
export default ({
    name: 'TopBar',

    data: () => ({

    }),
    
})
</script>
