<template>
  <v-container>
    <v-banner class="mb-6 subtitle--text"> 
      <v-container>
        <v-row>
          <v-col>
            Usuarios
          </v-col>
          <v-col class="text-right">
            <v-btn fab x-small color="primary" elevation="0" dark :to="{name: 'CreateUser'}">
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
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