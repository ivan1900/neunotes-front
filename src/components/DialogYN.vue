<template>
    <div class="text-center">
        <v-dialog
            v-model="show"
            width=500
            >
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    {{title}}
                </v-card-title>
            
                <v-card-text class="mt-4">
                    {{message}}
                </v-card-text>
                        
                <v-divider></v-divider>
        
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="primary"
                    text
                    @click="confirmYes()"
                    >
                    {{accept}}
                    </v-btn>
                    <v-btn
                    color="secondary"
                    text
                    @click="setShowFalse"
                    >
                    {{cancel}}
                    </v-btn>
          </v-card-actions>
        </v-card>
        </v-dialog>

    </div>
</template>
<script>

//import eventBus from '../eventBus'
import {mapMutations, mapState} from 'vuex'

export default{
    name: 'DialogYN',
    computed: {
        ...mapState('dialogYNmod',['show','title','message','accept','cancel','dispatchAccept'])
    },    
    methods: {
        ...mapMutations('dialogYNmod',['setShowFalse']),
        confirmYes(){
            //eventBus.$emit('deleteUser',{confirm:'yes'})
            this.$store.dispatch(this.dispatchAccept)
            
            this.$store.commit('dialogYNmod/setShowFalse')
        }
    },
}
</script>
