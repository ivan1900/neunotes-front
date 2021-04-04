<template>
  <v-container>
    <v-row justify="center" class="mt-16" style="height: 200px">
      <v-col cols="4">
        <h1 class="logoTitle--text text-center">Enpro</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <h3 class="text-center subtitle--text">Bienvenido a Enpro</h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <p class="text-center subtitle--text">Haz login para ver la acción</p>
      </v-col>
    </v-row>

    <v-form @submit.prevent="doLogin">
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field label="Usuario" outlined v-model="username"></v-text-field>
          <v-text-field
            autocomplete="on"
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            hint="Mininmo 8 caracteres"
            label="Contraseña"
            @click:append="show = !show"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-btn :disabled="!statusButton" color="primary" elevation="2" block type="submit">Login</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row justify="center">
        <v-col cols="4" >
            <p class="text-center subtitle--text">Bienvenido a Enpro un CRM amigable</p>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      show: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
    }
  },
  computed: {
    statusButton(){
      if(this.username.length > 1 && this.password.length >= 8){
        return true
      }
      return false
    }
  },
  methods:{
      doLogin() {
          console.log('usuario ', this.username)
          console.log('contraseña ', this.password)
          axios
            .post('http://dafne.com/user/login')
            .then((response) => {

            })
            .catch((error)=>{
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
