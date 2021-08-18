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
                :items="users"
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
                    @click="deleteItem(item)"
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
export default {
    name: 'UsersList',
    data () {
        return{
            search: '',
            from: 0,
            to: 10,
            headers: [],
            users: [],
            counterUsers: 0,
            load: false
        }
    },
    computed:{
        moreUsers(){
            return this.users.length < this.counterUsers
        }

    },
    methods:{
        getUsers(){
            //const user = localStorage.getItem("user")
            const language = this.$store.state.language
            const timezone = this.$store.state.timezone
            this.$api
            .get("/UsersResf/list/" + language + "/" + timezone.replace('/','_') + "/" + this.from + "/" + this.to)
            .then( response => {
                console.log(response.data.users);
                this.users = this.users.concat(response.data.users)
                if (this.from == 0){
                    let heading = response.data.heading
                    for (const[key, value] of Object.entries(heading)){
                        
                            this.headers.push({
                                text: value,
                                value: key
                            })
                        
                    }
                }
                this.counterUsers = response.data.activeUsersCounter.value
                this.load = true  
            })
            .catch(error =>{
                console.log(error)
          }) 
        },
        showMore(){
            this.from += 10
            this.to += 10
            this.getUsers()
        },
        editItem(item){
            console.log(item);
        },
        deleteItem(item){
            console.log(item);
        }
    },
    created(){
        this.getUsers()
    }

}
</script>