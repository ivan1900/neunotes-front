<template>
    <div class="text-center">
        <v-dialog
            v-model="$store.state.dialog"
            width=500
            >
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    {{$store.state.dialogContent.delete.title}}
                </v-card-title>
            
                <v-card-text class="mt-4">
                    {{$store.state.dialogContent.delete.text}}
                </v-card-text>
                        
                <v-divider></v-divider>
        
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="primary"
                    text
                    @click="confirmYes()"
                    >
                    {{$store.state.dialogContent.delete.accept}}
                    </v-btn>
                    <v-btn
                    color="secondary"
                    text
                    @click="$store.state.dialog = false"
                    >
                    {{$store.state.dialogContent.delete.cancel}}
                    </v-btn>
          </v-card-actions>
        </v-card>
        </v-dialog>

    </div>
</template>
<script>

//import eventBus from '../eventBus'

export default{
    name: 'DialogYN',
    
    methods: {
        confirmYes(){
            //eventBus.$emit('deleteUser',{confirm:'yes'})
            this.$store.dispatch('usersmod/delete')
            this.$store.state.dialog = false
        }
    },
}
</script>
