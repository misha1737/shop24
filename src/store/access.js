export default{

    state:{
        access_token: '',
        refresh_token: '',
    },
    mutations:{
        changeAccessToken (state, payload){
            localStorage.setItem('access_token', payload);
            state.access_token = payload

        },
        changeRefreshToken (state, payload){
            localStorage.setItem('refresh_token', payload);
            state.access_token = payload

        }

    },
    // mounted() {
    //     if (localStorage.access_token) {
    //         this.access_token = localStorage.access_token;
    //     }
    //     if (localStorage.refresh_token) {
    //         this.refresh_token = localStorage.refresh_token;
    //     }
    //
    // },



    getters:{
        getAccess_token(state){
            return state.access_token
        }
    }
}