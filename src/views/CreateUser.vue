<template>
    <v-container>
        <v-card>
            <v-card-title>
                {{langMap.newUser}}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form ref="userform" v-model="valid" lazy-validation>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="form.name"
                            :label="langMap.name"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="form.user"
                            :label="langMap.userName"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="form.email"
                            :label="langMap.mail"
                            :rules="emailRules"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="form.position"
                            :label="langMap.position"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="form.address"
                            :label="langMap.address"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="form.phone"
                            :label="langMap.phone"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select
                            v-model="form.language"
                            :items="languages"
                            :label="langMap.language"
                            required
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-checkbox
                            v-model="form.active"
                            :label="langMap.active"
                            ></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="form.password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show ? 'text' : 'password'"
                                hint="Mininmo 6 caracteres"
                                :label="langMap.password"
                                @click:append="show = !show"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4"> 
                            <v-select
                            v-model="roleName"
                            @change="asignRoleUuid"
                            :items="roles"
                            :label="langMap.role"
                            required
                            ></v-select>
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
                            {{langMap.send}}
                            </v-btn>
                            <v-btn @click="clean">
                            {{langMap.clean}}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
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
                language:'',
                role:''
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
            languages:[],
            roles: [],
            rolesMap: [],
            langMap: [],
            roleName: ''
        }
    },
    created(){
        const language = this.$store.state.language
        this.$api
            .get("/UsersResf/userForm/" + language )
            .then(response => {
                this.roles = response.data.roles.map(function(item){
                    return item.name
                })
                this.rolesMap = response.data.roles.map(function(item){
                    var obj = {
                        'roleName':item.name,
                        'uuid': item.uuid
                    }
                    //obj[item.name] = item.uuid
                    return obj
                })
                this.languages = response.data.languages.map(function(item){
                    return item.value
                })
                this.langMap = response.data.langMap
            })
            .catch(error => {
                console.log(error);
            })
    },
    methods:{
        asignRoleUuid(){
            const result = this.rolesMap.find(item => item.roleName === this.roleName)
            this.form.role = result.uuid
        },
        submit(){
            this.$refs.userform.validate()
            if (this.valid){
                const form = new FormData()
                for (let key in this.form){
                    form.append(key, this.form[key])
                    console.log(key +" "+ this.form[key]);
                }

                this.$api
                    .post("/UsersResf/create", form)
                    .then(response => {
                        console.log("success");
                    })
                    .catch(error => {
                        console.log(error.resonse.data.error)
                    })
            }
        },
        clean(){
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