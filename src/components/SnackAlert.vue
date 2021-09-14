<template>
    <v-snackbar
        :timeout="timeout"
        v-model="show"
        top
        >
        {{message}}
        <v-btn
        :color="color"
        text
        @click="show = false"
        >
        Close
        </v-btn>
    </v-snackbar>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'SnackAlert',
    data: () => ({
        
    }),
    computed: {
        ...mapState('snackbarmod', ['show','message','timeout','color'])
    },
    methods: {
      
    }
}
</script>