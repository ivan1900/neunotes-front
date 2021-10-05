<template>
    <v-container>
        <v-banner class="mb-6 subtitle--text"> 
            <v-container>
                <v-row>
                <v-col>
                    {{langMap.notes}}
                </v-col>
                <v-col class="text-right">
                    <v-btn fab x-small color="primary" elevation="0" dark>
                    <v-icon>mdi-plus-thick</v-icon>
                    </v-btn>
                </v-col>
                </v-row>
            </v-container>
        </v-banner>
        <CreateNote/>
    </v-container>
</template>

<script>

import { mapState } from 'vuex'
import CreateNote from '@/components/CreateNote'


export default {
    name: 'Notes',
    components:{
       CreateNote
    },
    computed:{
        ...mapState('languagemod',['langMap'])
    }
}
</script>
