<template>
    <div>
        <v-card>
            <v-card-title>
                {{langMap.notes}}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form ref="noteform" v-model="valid" lazy-validation>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="form.title"
                            :label="langMap.title"
                            :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea
                            v-model="form.content"
                            :label="langMap.content"
                            >
                            </v-textarea>
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
                            {{langMapForms.send}}
                            </v-btn>
                            <v-btn @click="clean">
                            {{langMapForms.clean}}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
           
        
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'CreateNote',
    computed: {
        ...mapState('languagemod',['langMap','langMapForms'])
    },
    data(){
        return{
            valid:false,
            form: {
                title: '',
                content: ''
            },
            rules: {
                required: value => !!value || "Required."
            },
        }
    },
    methods:{
        submit(){
            console.log("enviado")
        },
        clean(){
            this.$refs.noteform.resetValidation()
            
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
