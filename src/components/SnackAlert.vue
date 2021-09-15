<template>
    <v-snackbar
        :timeout="timeout"
        v-model="show"
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
import {mapGetters, mapMutations, mapState} from 'vuex'

export default {
    name: 'SnackAlert',
    data: () => ({
        
    }),
    computed: {
        //...mapGetters('snackbarmod', ['isShow']),
        ...mapState('snackbarmod', ['show','message','timeout','color'])
    },
    methods: {
        ...mapMutations('snackbarmod', ['setShowFalse'])
    }
}
</script>