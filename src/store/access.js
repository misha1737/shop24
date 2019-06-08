import Vue from 'vue'
export default {

    state: {
        access_token: '',
        refresh_token: '',
        userName: '',

    },
    mutations: {

        updateTokens(state, payload) {

            this.access = payload.body;
            if (payload.body.token_type == 'bearer') {
                localStorage.setItem('access_token', this.access.access_token);
                localStorage.setItem('tokenSave', (this.access.expires_in*1000));
                let now = new Date().getTime();
                localStorage.setItem('time', now);
                this.access_token = this.access.access_token;
                localStorage.setItem('refresh_token', this.access.refresh_token);
                let userName = Vue.$jwt.decode(this.access.access_token);
                localStorage.setItem('userName', userName.user_name);
                this. userName= userName.user_name;
            } else {
                alert('tokenUpdateError')
            }

        },
        changeUserName(state, payload) {
                state.userName = payload
             },
        checkToken(context,obj){
                        function refreshToken(resolve,reject) {
                            const userData = {
                                refreshToken: localStorage.refresh_token
                            }
                         Vue.http.post('https://web-store-sample-vs.herokuapp.com/web-store/auth/refresh-token', userData).then(response => {
                             localStorage.setItem('access_token',  response.body.access_token);
                             localStorage.setItem('tokenSave', ( response.body.expires_in*1000));
                             let now = new Date().getTime();
                             localStorage.setItem('time', now);
                             localStorage.setItem('refresh_token',  response.body.refresh_token);
                             resolve("result");
                     }, response => {
                         if (response.body.status == 400) {
                             reject("err")
                        }
                    })
                }
                if (typeof(localStorage.access_token) != "undefined") {
                    let now = new Date().getTime();
                    let tokenLife = now - localStorage.time
                    if (localStorage.tokenSave > tokenLife) {
                        obj[0]("result");
                    } else {
                        let result=refreshToken(obj[0],obj[1])
                    }
                }else {


                }
            }



    },
        getters: {
            getAccess_token(state) {
                state.access_token=localStorage.access_token
                return state.access_token
            },

            getUserName(state) {
                state.userName=localStorage.userName
                return state.userName
            }


        },
            actions:{
                // asyncChangeCounter(context, payload ){
                //     setTimeout(()=>{
                //         context.commit('changeCounter', payload.counterValue )
                //     }, payload.timeoutDelay )
                // }
            },


}