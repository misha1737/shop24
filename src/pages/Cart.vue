<template>
    <div>
        <div class="container">
            <h1>Корзина</h1>
            <button @click="getCart">Get Cart</button>
            <hr>
            <ul>
                <li v-for="kay in cart.orderItems">
                    <!--<a href="">{{cart.orderItems}}</a>-->
                    <a :href="kay.product.id">{{kay.product.name}}</a>
                </li>
            </ul>
        </div>
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
                console.log(accessData)
                this.$http.get('https://web-store-sample-vs.herokuapp.com/web-store/shopping-carts/mikekozlov2@gmail.com',{
                        headers: accessData

                }
                ).then(response => {
                    // get body data
                    this.cart = response.body;

                }, response => {
                    alert('помилка')

                    // error callback
                });


            }
        }
    }
</script>

<style scoped>

</style>