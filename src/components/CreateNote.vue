<template>
    <div>
        <v-card>
            <v-card-title>
                {{langMap.notes}}
            </v-card-title>
        </v-card>
           
        
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'CreateNote',
    computed: {
        ...mapState('languagemod',['langMap'])
    },
}
</script>
