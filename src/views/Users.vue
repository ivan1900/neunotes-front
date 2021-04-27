<template>
  <v-container>
    <v-banner class="mb-6 subtitle--text"> 
      Usuarios
    </v-banner>
    <UsersList/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import UsersList from "@/components/UsersList"


export default {
  name: 'Users',
  components: {
    UsersList
    
  }
}

</script>