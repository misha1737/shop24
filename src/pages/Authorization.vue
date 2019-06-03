<template>
    <div>
        <div class="container">
        <h1>Авторизація</h1>

        <form class="pt-3" @submit.prevent="signin">
            <div class="form-group">
                <label for="name">Ваш e-mail</label>
            <input class="form-control" type="email" id="name" v-model="email">

            </div>
                <div class="form-group">
                    <label for="password">Ваш пароль</label>
            <input class="form-control" type="password" id="password" v-model="password">

                </div>
            <button class="btn btn-success">Вхід</button>
        </form>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                email:'',
                password: '',

            }
        },
        computed:{
            token (){
                return this.$store.getters.getAccess_token
            }

        },
        methods:{
            signin(){
                const userData= {
                    username:this.email,
                    password:this.password
                }

                this.$http.post('https://web-store-sample-vs.herokuapp.com/web-store/auth/signin', userData).then(response => {
                    // get body data
                    this.catalog = response.body;
                    this.$store.commit('changeAccessToken', this.catalog.access_token)
                    this.$store.commit('changeRefreshToken', this.catalog.refresh_token)

                   // console.log(this.catalog.);
                }, response => {
                    if(response.body.status==400){
                        alert('Невірний логін або пароль')
                    }
                    // error callback

                });
            },

        }
    }
</script>

<style scoped>

</style>