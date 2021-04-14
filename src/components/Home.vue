<template>
  <v-container>
    <h1>Home</h1>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data() {
      return{}
    },
    created() {
      this.getCurrentUser()
    },

    methods:{
      getCurrentUser(){
        //form.append("user", localStorage.getItem("user"))
        const user = localStorage.getItem("user")
        this.$api
          .get("/UsersResf/show/" + user)
          .then( response => {
              console.log(response)
          })
          .catch(error =>{
            console.log(error)
          }) 
          
      }
    }
  }
</script>
