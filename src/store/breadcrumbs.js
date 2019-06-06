
export default{

    state:{
        title: '',
        breadcrums:[{
            name: 'головна',
            nodeId: '',
        }]
    },
    mutations:{
         changeBreadcrumbs (state, payload){
             state.breadcrums = payload
         },
        changeTitle (state, payload){
            state.title = payload

        }

    },
    getters:{
        getBreadcrumbs(state){
            return state.breadcrums
        },
        getTitle(state){
            return state.title
        }
    }

}