<template>
<div>
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
          <v-list-item-action>
            <v-icon class="menuText--text">{{item.fa}}</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="menuText--text">{{item.item}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
 
    </v-navigation-drawer>
</div>
</template>

<script>

import {ajax} from "@/plugins/http-common"

export default ({
    name: 'NavVertical',

    data(){
        return{
            menuItems: []
        }
    },
    created: function () {
        const user = localStorage.getItem("user")
        ajax
          .get("/MenuResf/show/" + user)
          .then( response => {
              this.menuItems = response.data
          })
          .catch(error =>{
            console.log(error)
          }) 
    

    },
    methods:{
    }
    
})
</script>