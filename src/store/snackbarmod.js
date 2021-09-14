const snackbarmod = {
    namespaced: true,
    state: {
        show: false,
        message: '',
        timeout: 0,
        color: ''
    },
    mutations:{
        setShowSucces(state, message){
            state.show = true
            state.message = message
            state.color = "primary"
            state.timeout = 3000
        },
        setShowDanger(state, message){
            state.show = true
            state.message = message
            state.color = "error"
            state.timeout = 10000
        },
        setShowFalse(){
            state.show = false
        }
    },
    actions:{
       
    },
    getters:{

    }

}

export default snackbarmod