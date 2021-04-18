<template>
    <v-navigation-drawer app v-model="$store.state.navVertical" class="menuBackground" dark>
      <v-row class="mt-4 column align-center" >
        <v-col>Foto</v-col>
      </v-row>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{this.$store.state.name}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{this.$store.state.position}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
 
      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon class="menuText--text">mdi-view-dashboard</v-icon>
            <v-list-item-content>
              <v-list-item-title class="menuText--text">  Panel </v-list-item-title>
            </v-list-item-content>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
 
 
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
    methods:{
      getMenu(){
        this.$api
          .get("Menu/index")
      }
    }
    
})
</script>