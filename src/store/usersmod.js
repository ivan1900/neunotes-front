import {ajax} from "@/plugins/http-common"

const usersmod = {
    namespaced: true,
    state: {
        id: "",
        indexTable: "",
        usersList: [],
        counterUsers: 0,
        from: 0,
        to: 10
    },
    mutations:{
        setId(state, id){
            state.id = id
        },
        setIndexTable(state, indexTable){
            state.indexTable = indexTable
        },
        setUsersList(state, usersList){
            state.usersList = state.usersList.concat(usersList)
        },
        usersListClear(state){
            state.usersList = []
        },
        userWasDeleted(state){
            state.usersList.splice(state.indexTable, 1)
            state.counterUsers -= 1
        },
        setCounterUsers(state, counterUsers){
            state.counterUsers = counterUsers
        },
        setFrom(state, from){
            state.from = from
        },
        setTo(state, to){
            state.to = to
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
                    commit('userWasDeleted')
                    state.to -= 1
                })
                .catch(error => {
                    console.log(error)
                    commit('snackbarmod/setShowDanger', "mensaje error", {root:true})
                })
        }
    },
    getters:{

    }

}

export default usersmod