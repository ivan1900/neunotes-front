const dialogYNmod = {
    namespaced: true,
    state: {
        show: false,
        title: '',
        message: '',
        accept: '',
        cancel: '',
        commit: ''
    },
    mutations:{
        setShow(state, payload){
            state.show = true
            state.title = payload.title
            state.message = payload.message
            state.accept = payload.accept
            state.cancel = payload.cancel
            state.dispatchAccept = payload.dispatchAccept
        },
        setShowFalse(state){
            state.show = false
        }
    },
    actions:{
       
    },
    getters:{
        
    }

}

export default dialogYNmod