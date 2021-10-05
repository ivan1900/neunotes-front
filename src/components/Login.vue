<template>
  <v-container>
    <v-row justify="center" class="mt-16" style="height: 200px">
      <v-col cols="4">
        <h1 class="logoTitle--text text-center">Enpro</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <h3 class="text-center subtitle--text">Bienvenido a Enpro</h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <p class="text-center subtitle--text">Haz login para ver la acción</p>
      </v-col>
    </v-row>

    <v-form @submit.prevent="doLogin">
      <v-row justify="center">
        <v-col cols="3">
          <v-text-field label="Usuario" outlined v-model="username" background-color="white"></v-text-field>
          <v-text-field
            autocomplete="on"
            background-color="white"
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            hint="Mininmo 6 caracteres"
            label="Contraseña"
            @click:append="show = !show"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="3">
          <v-btn :disabled="!statusButton" color="primary" elevation="2" block type="submit">Login</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row justify="center">
        <v-col cols="3" >
            <p class="text-center subtitle--text">Bienvenido a Enpro un CRM amigable</p>
        </v-col>
    </v-row>
    <v-snackbar
      v-model="alert"
      :timeout="10000"
      top
    >
      {{ messageAlert }}
      <v-btn class="ml-5" dark  text color="error" @click="alert = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
  
</template>

<script>

import {guest,ajax} from "@/plugins/http-common"

export default {
  data() {
    return {
      alert: false,
      messageAlert: "",
      token: "",
      expires_in: "",
      username: "",
      password: "",
      show: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 6 || "Min 6 characters"
      },
    }
  },
  computed: {
    statusButton(){
      if(this.username.length > 1 && this.password.length >= 6){
        return true
      }
      return false
    }
  },
  methods:{
      doLogin() {
          const auth = {
            username: process.env.VUE_APP_CLIENT_ID,
            password: process.env.VUE_APP_CLIENT_SECRET
          }
         
          const form = new FormData()
          form.append('username', this.username)
          form.append('password', this.password)
          form.append('grant_type', 'password')       
          guest
            .post('/login',form,{auth})
            .then((response) => {
              this.token = response.data.access_token;
              this.expires_in = response.data.expires_in;
              const expiresMs = this.expires_in * 1000;
              const now = new Date();
              const expireDate = new Date(now.getTime() + expiresMs);
              localStorage.setItem("token", this.token)
              localStorage.setItem("expires", expireDate)
              localStorage.setItem("user", this.username)
              this.userPreferences()
              this.$store.dispatch("login", expiresMs)
            })
            .catch((error)=>{
              console.log(error)
              this.messageAlert = error.response.data.error_description
              this.alert = true
              this.username = ""
              this.password = ""
            })
      },
      userPreferences(){
        const user = localStorage.getItem("user")
        ajax
          .get("/UsersResf/show/" + user)
          .then( response => {
            this.$store.commit("setName", response.data.name)
            this.$store.commit("setLanguage", response.data.language)
            this.$store.commit("setPosition", response.data.position)
            this.$store.commit("setTimeZone", response.data.timezone) 
            this.$store.dispatch('languagemod/loadLanguage')
          })
          .catch(error =>{
            console.log(error)
          }) 
      }

  }
};
</script>

<style>
h1 {
  font-size: 8.2em;
}
</style>
