<template>
    <div>
        <v-card>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Buscar"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table v-if="!load" loading></v-data-table>
            <v-data-table v-else
                :headers="headers"
                :items="usersList"
                :search="search"
                :items-per-page="-1"
                hide-default-footer
            >
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                    >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="showDialogDelete(item)"
                    >
                    mdi-delete
                </v-icon>
            </template>
            </v-data-table>
            <v-divider></v-divider>
            <v-card-actions>
                <v-container>
                    <v-row>
                        <v-col class="subtitle--text">
                            Registros Totales {{counterUsers}}
                        </v-col>
                        <v-col class="text-right">
                            <v-btn color="primary" text v-if="!moreUsers" disabled>Mostrar mas</v-btn>
                            <v-btn color="primary" text v-if="moreUsers" v-on:click="showMore">Mostrar mas</v-btn>       
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-actions>
        </v-card>
        
    </div>
</template>

<script>


import {ajax} from "@/plugins/http-common"
import { mapState } from 'vuex'
//import SnackAlert from "@/components/SnackAlert"

export default {
    name: 'UsersList',
    components: {
        
    },
    data () {
        return{
            search: '',
            headers: [],
            load: false
        }
    },
    computed:{
        ...mapState('usersmod',['indexTable','usersList','counterUsers','from','to']),
        moreUsers(){
            return this.usersList.length < this.counterUsers
        }
    },
    mounted: function(){
        this.$store.commit('usersmod/usersListClear')
        this.$store.commit('usersmod/setFrom', 0)
        this.$store.commit('usersmod/setTo', 10)
    },
    methods:{
        getUsers(){
            //const user = localStorage.getItem("user")
            const language = this.$store.state.language
            const timezone = this.$store.state.timezone
            ajax
            .get("/UsersResf/list/" + language + "/" + timezone.replace('/','_') + "/" + this.from + "/" + this.to)
            .then( response => {
                //this.users = this.users.concat(response.data.users)
                this.$store.commit('usersmod/setUsersList', response.data.users)
                if (this.from == 0){
                    let heading = response.data.heading
                    for (const[key, value] of Object.entries(heading)){
                        
                            this.headers.push({
                                text: value,
                                value: key
                            })
                        
                    }
                }
                //this.counterUsers = response.data.activeUsersCounter.value
                this.$store.commit('usersmod/setCounterUsers',response.data.activeUsersCounter.value)
                this.load = true  
            })
            .catch(error =>{
                console.log(error)
          }) 
        },
        showMore(){
            this.$store.commit('usersmod/setFrom', this.from += 10)
            this.$store.commit('usersmod/setTo', this.to += 10)
            this.getUsers()
        },
        editItem(item){
            console.log(item);
        },
        showDialogDelete(item){
            this.$store.commit('usersmod/setId',item.id)
            this.$store.commit('usersmod/setIndexTable',this.usersList.indexOf(item))
            let payload = {
                title:'Eliminar Usuario',
                message:'¿Estas Segruo?',
                accept:'Aceptar',
                cancel:'Cancelar',
                dispatchAccept:'usersmod/delete'
                }
            this.$store.commit('dialogYNmod/setShow',payload)
        },
    },
    created(){
        this.getUsers()
    }

}
</script>