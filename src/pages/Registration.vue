<template>
    <div>

        <h1>Реєстрація</h1>
        <form class="pt-3" @submit.prevent="signin">
            <div class="form-group">
                <label for="firstName">Ваше ім'я</label>
                <input class="form-control" type="text" id="firstName"  :class="{'is-invalid': $v.firstName.$error}" @blur="$v.firstName.$touch()" v-model="firstName">
                <div class="invalid-feedback" v-if="!$v.firstName.required">Ім'я обов'язкове </div>
                <div class="invalid-feedback" v-else-if="!$v.firstName.maxLength">Максимально можлива кількість символів{{$v.firstName.$params.maxLength.max}}</div>
            </div>
            <div class="form-group">
                <label for="lastName">Ваше прізвище</label>
                <input class="form-control" type="text" id="lastName" :class="{'is-invalid': $v.lastName.$error}" @blur="$v.lastName.$touch()" v-model="lastName">
                <div class="invalid-feedback" v-if="!$v.lastName.required">прізвище обов'язкове </div>
                <div class="invalid-feedback" v-else-if="!$v.lastName.maxLength">Максимально можлива кількість символів {{$v.lastName.$params.maxLength.max}}</div>
            </div>
            <div class="form-group">
                <label for="email">Ваша Ел. адреса</label>
                <input class="form-control" type="email" id="email" :class="{'is-invalid': $v.email.$error}" @blur="$v.email.$touch()" v-model="email">
                <div class="invalid-feedback" v-if="!$v.email.required">Поле електронної пошти обов'язкове </div>
                <div class="invalid-feedback" v-else-if="!$v.email.email">Невірна електронна пошта </div>
                <div class="invalid-feedback" v-else-if="!$v.email.uniqEmail">this email is registered </div>
                <div class="invalid-feedback" v-else-if="!$v.email.maxLength">Максимально можлива кількість символів {{$v.email.$params.maxLength.max}} </div>
            </div>
            <div class="form-group">
                <label for="phone">Ваш Телефон</label>
                <input class="form-control" type="text" id="phone"  :class="{'is-invalid': $v.phone.$error}" @blur="$v.phone.$touch()" v-model.number="phone" >
                <div class="invalid-feedback" v-if="!$v.phone.maxLength">Невірний формат 380xxxxxxxxx</div>
                <div class="invalid-feedback" v-else-if="!$v.phone.minLength">Невірний формат 380xxxxxxxxx</div>
            </div>
            <div class="form-group">
                <label for="password">Ваш пароль</label>
                <input class="form-control" type="password" id="password"  :class="{'is-invalid': $v.password.$error}" @blur="$v.password.$touch()" v-model="password">
                <div class="invalid-feedback" v-if="!$v.password.required">Пароль є обов'язковим </div>
                <div class="invalid-feedback" v-else-if="!$v.password.minLength">Мінімальна кількість символів {{$v.password.$params.minLength.min}} зараз: {{password.length}}</div>
                <div class="invalid-feedback" v-else-if="!$v.email.maxLength">Максимально можлива кількість символів {{$v.email.$params.maxLength.max}} </div>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Підтвердіть пароль</label>
                <input class="form-control" type="password" id="confirmPassword" :class="{'is-invalid': $v.confirmPassword.$error}" @blur="$v.confirmPassword.$touch()" v-model="confirmPassword">
                <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Паролі не співпадають </div>
            </div>

            <button class="btn btn-success" type="submit" :disabled="$v.$invalid" >Зареєструватися</button>
        </form>
        </div>

</template>

<script>
    import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
    export default {
        data(){
            return{
                firstName: '',
                lastName: '',
                phone: +'380'+'',
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            signin() {
                const userData = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    phone: this.phone
                }
                console.log(userData);
                this.$http.post('https://web-store-sample-vs.herokuapp.com/web-store/users', userData).then(response => {
                    // get body data
                    this.catalog = response.body;

                        alert('Шановний, ви успішно зарееструвались')

                }, response => {
                    if (response.body.status == 400) {
                        alert('Невідома помилка')
                    }
                    if (response.body.code == 400) {
                        alert('Невідома помилка')
                    }
                    // error callback

                });
            }
        },
            validations: {
                email: {
                    required,
                    email,
                    maxLength: maxLength(100),
                    uniqEmail: function (newEmail) {
                        return true
                    }
                },
                password:{
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(100)
                },
                confirmPassword: {
                    sameAs: sameAs('password')
                },
                firstName:{
                    required,
                    maxLength: maxLength(100),
                },
                lastName:{
                    required,
                    maxLength: maxLength(100),
                },
                phone:{
                    maxLength: maxLength(12),
                    minLength: minLength(12)
                }
            },




    }
</script>

<style scoped>

</style>