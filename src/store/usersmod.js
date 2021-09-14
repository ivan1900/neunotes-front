import {ajax} from "@/plugins/http-common"

const usersmod = {
    namespaced: true,
    state: {
        id: ""
    },
    mutations:{
        setId(state, id){
            state.id = id
        }
    },
    actions:{
        delete({state, commit}){
            const form = new FormData()
            form.append('id', state.id)
            //form.append('langDisplay', rootState.language)
            form.append('langDisplay', '')
            ajax
                .post("/UsersResf/remove", form)
                .then(response => {
                    //console.log(response.data)
                })
                .catch(error => {
                    //console.log(error)
                    commit('snackbarmod/setShowDanger', "mensaje error", {root:true})
                })
        }
    },
    getters:{

    }

}

export default usersmod