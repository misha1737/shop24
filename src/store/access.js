export default{
    state:{
        access_token: 'none',
        refresh_token: 0
    },
    mutations:{
        changeToken (state, payload){
            state.access_token = payload

        }
    },

    getters:{
        getAccess_token(state){
            return state.access_token
        }
    }
}