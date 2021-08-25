import {ajax} from "@/plugins/http-common"

const usersmod = {
    namespaced: true,
    state: {
        id: ""
    },
    mutations:{

    },
    actions:{
        delete(){
            ajax
                .post("/UsersResf/delete", data)
                .then(response => {

                })
                .catch(error => {

                })
        }
    },
    getters:{

    }

}

export default usersmod