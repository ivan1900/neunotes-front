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
            <v-data-table
                :headers="headers"
                :items="users"
                :items-per-page="5"
                :search="search"
                hide-default-footer
            >
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
                            <v-btn color="primary" text v-if="moreUsers">Mostrar mas</v-btn>       
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
            to: 5,
            headers: [],
            users: [],
            counterUsers: 0
        }
    },
    computed:{
        moreUsers(){
            return this.users.length >= this.counterUsers
        }

    },
    methods:{
        getUsers(){
            const user = localStorage.getItem("user")
            this.$api
            .get("/UsersResf/list/" + "/" + user + "/" + this.from + "/" + this.to)
            .then( response => {
                this.users = response.data.users
                let heading = response.data.heading
                for (const[key, value] of Object.entries(heading)){
                    if(key !== 'uuid'){
                        this.headers.push({
                            text: value,
                            value: key
                        })
                    }
                }
                this.counterUsers = response.data.activeUsersCounter.value  
            })
            .catch(error =>{
                console.log(error)
          }) 
        }
    },
    created(){
        this.getUsers()
    }

}
</script>