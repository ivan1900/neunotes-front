<template>
    <v-container>
        <v-card>
            <v-card-title>
                Cear usuario
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form ref="userform" v-model="valid" lazy-validation>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="form.name"
                            label="Nombre"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="form.user"
                            label="Nombre de usuario"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="form.email"
                            label="Correo electrónico"
                            :rules="emailRules"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="form.position"
                            label="Cargo"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="form.address"
                            label="Dirección"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="form.phone"
                            label="Teléfono"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select
                            v-model="form.language"
                            :items="languages"
                            label="Idioma"
                            required
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-checkbox
                            v-model="form.active"
                            label="Activo"
                            ></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="form.password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show ? 'text' : 'password'"
                                hint="Mininmo 6 caracteres"
                                label="Contraseña"
                                @click:append="show = !show"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn
                            :disabled = "!valid"
                            color="primary"
                            class="mr-4"
                            @click="submit"
                            >
                            enviar
                            </v-btn>
                            <v-btn @click="clear">
                            limpiar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
                <p>{{valid}}</p>
            </v-card-text>
        </v-card>
        nombre {{form.name}}
    </v-container>
</template>

<script>
export default {
    name: 'CreateUser',
    data(){
        return{
            valid:false,
            form: {
            name:'',
            user:'',
            password:'',
            position:'',
            address:'',
            phone:'',
            email:'',
            active:true,
            language:''
            },
            show: false,
            rules: {
                required: value => !!value || "Required.",
                min: v => v.length >= 6 || "Min 6 characters"
            },
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            languages:['spanish','english']
        }
    },
    methods:{
        submit(){
            this.$refs.userform.validate()
            if (this.valid){
                console.log("validado");
            }
        },
        clear(){
            this.$refs.userform.resetValidation()
            
            for (let key in this.form){
                if(key !== 'active'){
                    this.form[key] = ''
                }else{
                    this.form[key] = true
                }
            }
        }
    }
}
</script>