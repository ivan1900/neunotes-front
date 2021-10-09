<template>
    <v-container>
        <v-banner class="mb-6 subtitle--text"> 
            <v-container>
                <v-row>
                <v-col>
                    {{langMap.notes}}
                </v-col>
                <v-col class="text-right">
                    <template v-if="!showCreateNote">
                        <v-btn v-on:click="showCreateNoteComponent()"  fab x-small color="primary" elevation="0" dark>
                            <v-icon>mdi-plus-thick</v-icon>
                        </v-btn>
                    </template>
                    <template v-else>
                        <v-btn v-on:click="hideCreateNoteComponent()"  fab x-small color="secondary" elevation="0" dark>
                            <v-icon>mdi-undo</v-icon>
                        </v-btn>
                    </template>
                </v-col>
            
                </v-row>
            </v-container>
        </v-banner>
            <div v-if="showCreateNote">
                <CreateNote/>
            </div>
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
        ...mapState('languagemod',['langMap']),
        ...mapState('notesmod',['showCreateNote'])
    },
    methods:{
        showCreateNoteComponent(){
            this.$store.commit('notesmod/show')
        },
        hideCreateNoteComponent(){
            this.$store.commit('notesmod/hide')
        }
    }
}
</script>
