const snackbarmod = {
    namespaced: true,
    state: {
        show: false,
        message: '',
        timeout: -1,
        color: ''
    },
    mutations:{
        setShowSuccess(state, message){
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
        setShowFalse(state){
            state.show = false
        }
    },
    actions:{
       
    },
    getters:{
        isShow: (state) => {
            return state.show
        }
    }

}

export default snackbarmod