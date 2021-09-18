<template>
    <v-snackbar
        :timeout="timeout"
        v-model="showSnack"
        :color="color"
        top
        >
        {{message}}
        <v-btn
        text
        @click="setShowFalse"
        >
        Close
        </v-btn>
    </v-snackbar>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
    name: 'SnackAlert',
    data: () => ({
        
    }),
    computed: {
//...mapGetters('snackbarmod', ['isShow']),
        ...mapState('snackbarmod', ['show','message','timeout','color']),
        showSnack:{
            get(){
                return this.$store.state.snackbarmod.show 
            },
            set(value){
                this.$store.commit('snackbarmod/updateShow',value)       
            }
        }
    },
    methods: {
        ...mapMutations('snackbarmod', ['setShowFalse'])
    }
}
</script>