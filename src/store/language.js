import {ajax} from "@/plugins/http-common"

const language = {
    namespace: true,
    state: {
        langMap:[]
    },
    mutations: {

    },
    actions:{
        loadLanguage({state, commit, rootState}){
            language = rootState.language
            ajax
                .get("/languageResf/get" + language)
                .then(response => {
                    this.langMap = resposne.data.langMap
                })
                .catch(error => {
                    console.log(error)
                    
                })
        }
    },
}

export default language