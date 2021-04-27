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
            ></v-data-table>
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
            users: []
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