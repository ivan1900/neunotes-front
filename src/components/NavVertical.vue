<template>
    <v-navigation-drawer app v-model="$store.state.navVertical" color="menuBackground">
      <v-row class="mt-4 column align-center" >
        <v-col>home</v-col>
      </v-row>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-row>
        <v-col>
          <v-btn class="ma-2" color="success" block :to="{name: 'Dashboard'}">Home</v-btn>
          <v-btn class="ma-2" color="success" block :to="{name: 'Users'}">Lista de Tareas</v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
</template>

<script>
export default ({
    name: 'NavVertical',

    data(){
        return{
            
        }
    },
    
})
</script>