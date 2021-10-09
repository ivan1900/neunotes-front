import {ajax} from "@/plugins/http-common"

const languagemod = {
    namespaced: true,
    state: {
        langMap:[],
        langMapForms:[],
        langMapErrorCodes:[],
        langMapDialogs:[]
    },
    mutations: {
       
    },
    actions:{
        loadLanguage({state, rootState}){
            let language = rootState.language
            ajax
                .get("/LanguageResf/get/" + language)
                .then(response => {
                    state.langMap = response.data.langMap
                    state.langMapForms = response.data.langMapForms
                    state.langMapErrorCodes = response.data.langMapErrorCodes
                    state.langMapDialogs = response.data.langMapDialogs
                    console.log(state.langMap)
                })
                .catch(error => {
                    console.log(error)   
                })
        }
    },
    getters:{
        
    }

}

export default languagemod