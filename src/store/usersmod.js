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
        delete({state, commit, rootState}){
            const form = new FormData()
            form.append('id', state.id)
            form.append('langDisplay', rootState.language)
            ajax
                .post("/UsersResf/remove", form)
                .then(response => {
                    //console.log(response.data)
                    commit('snackbarmod/setShowSuccess', "mensaje succes", {root:true})
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