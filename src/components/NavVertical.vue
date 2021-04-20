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
        <v-list-item link v-for="item in menuItems" :key="item.item" :to="{name: item.route}">
          <v-list-item-icon>
            <v-icon class="menuText--text">{{item.fa}}</v-icon>
            <v-list-item-content>
              <v-list-item-title class="menuText--text pl-6">{{item.item}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
 
 
      <v-row>
        <v-col>
         
          <v-btn v-on:click="getMenu">test</v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
</template>

<script>
export default ({
    name: 'NavVertical',

    data(){
        return{
            menuItems: []
        }
    },
    methods:{
      getMenu(){
        const user = localStorage.getItem("user")
        this.$api
          .get("/MenuResf/show/" + user)
          .then( response => {
              console.log(response.data)
              this.menuItems = response.data
          })
          .catch(error =>{
            console.log(error)
          }) 
      }
    }
    
})
</script>