import {ajax} from "@/plugins/http-common"

const notesmod = {
    namespaced: true,
    state: {
       showCreateNote: false
    },
    mutations: {
        show(state){
            state.showCreateNote = true    
        },
        hide(state){
            state.showCreateNote = false
        }
    },
    actions:{
        
    },
    getters:{
        
    }

}

export default notesmod