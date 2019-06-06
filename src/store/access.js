
export default{

    state:{
        access_token: '',
        refresh_token: '',
        userName: '',
    },
    mutations:{
        changeAccessToken (state, payload){
            localStorage.setItem('access_token', payload);
            state.access_token = payload;

            localStorage.setItem('access_token', payload);

        },
        changeRefreshToken (state, payload){
            localStorage.setItem('refresh_token', payload);
            state.access_token = payload

        },
        changeUserName (state, payload){
            state.userName = payload

        }

    },


    getters:{
        getAccess_token(state){
            return state.access_token
        },
        getUserName(state){
          //  state.userName=localStorage.userName
            return state.userName
        }
    }
}