<template>
    <div>
        <h1>Каталог</h1>
        <button @click="getCatalog">Get Catalog</button>
        <ul>
            <li v-for="kay in catalog">
                <a :href="kay.nodeId"> {{kay.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                catalog:[]
            }
        },
        methods:{
            getCatalog(){
                this.$http.get('https://web-store-sample-vs.herokuapp.com/web-store/catalog/').then(response => {
                    // get body data
                    this.catalog = response.body;
                    console.log(this.catalog);
                }, response => {

                    // error callback
                });

            }
        }
    }
</script>

<style scoped>

</style>