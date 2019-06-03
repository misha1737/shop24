<template>
    <div>
        <div class="container">
        <h1>Авторизація</h1>

        <form class="pt-3" @submit.prevent="signin">
            <div class="form-group">
                <label for="name">Ваш e-mail</label>

            <input class="form-control" type="email" id="name" :class="{'is-invalid': $v.email.$error}" @blur="$v.email.$touch()" v-model="email">
                <div class="invalid-feedback" v-if="!$v.email.required">Поле електронної пошти обов'язкове </div>
                <div class="invalid-feedback" v-else-if="!$v.email.email">Невірна електронна пошта </div>
            </div>
                <div class="form-group">
                    <label for="password">Ваш пароль</label>
            <input class="form-control" type="password" id="password" :class="{'is-invalid': $v.password.$error}" @blur="$v.password.$touch()" v-model="password">
                    <div class="invalid-feedback" v-if="!$v.password.required">Поле пароль обов'язкове </div>
                </div>
            <button type="submit" class="btn btn-success" :disabled="$v.$invalid">Вхід</button>
        </form>
    </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'
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
        methods: {
            signin() {
                const userData = {
                    username: this.email,
                    password: this.password
                }

                this.$http.post('https://web-store-sample-vs.herokuapp.com/web-store/auth/signin', userData).then(response => {
                    // get body data
                    this.catalog = response.body;
                    if (response.body.token_type == 'bearer') {
                        this.$store.commit('changeAccessToken', this.catalog.access_token)
                        this.$store.commit('changeRefreshToken', this.catalog.refresh_token)
                    }
                    // console.log(this.catalog.);
                }, response => {
                    if (response.body.status == 400) {
                        alert('Невірний логін або пароль')
                    }
                    if (response.body.code == 400) {
                        alert('Невірний логін або пароль')
                    }
                    // error callback

                });
            },
        },
            validations: {
                email: {
                    required,
                    email,
                },
                password:{
                    required

                },

        }
    }
</script>

<style scoped>

</style>