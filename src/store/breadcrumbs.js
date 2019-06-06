
export default{

    state:{

        breadcrums:[{
            name: 'головна',
            nodeId: '123'

        }]
    },
    mutations:{
         changeBreadcrumbs (state, payload){
             state.breadcrums = payload

         }

    },


    getters:{
        getBreadcrumbs(state){
            return state.breadcrums
        }
    }
}