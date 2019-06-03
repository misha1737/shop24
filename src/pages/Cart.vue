<template>
    <div>

            <h1>Корзина</h1>
            <button @click="getCart">Get Cart</button>
            <hr>
            <ul>
                <li v-for="s in cart.orderItems">
                    <!--<a href="">{{cart.orderItems}}</a>-->
                    <a :href="s.product.id">{{s.product.name}}</a>
                </li>
            </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cart: []
            }
        },
        methods:{
            getCart(){
                const accessData= {
                    Authorization: 'Bearer '+localStorage.access_token,
                }
                this.$http.get('https://web-store-sample-vs.herokuapp.com/web-store/shopping-carts/mikekozlov2@gmail.com',{
                        headers: accessData

                }
                ).then(response => {
                    this.cart = response.body;
                }, response => {
                    if (response.body.status == 400) {
                        alert('Невідома помилка')
                    }else
                    alert('помилка')

                });


            }
        }
    }
</script>

<style scoped>

</style>