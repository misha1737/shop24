<template>
    <div>
        <h6>Products</h6>
        <ul>
            <li v-for="kay in products">
                <a :href="kay.id">{{kay.name}} </a>
                <p>ціна: {{kay.priceWithVAT}}</p>
                <button>Детальніше</button>
                <button>Купити</button>
            </li>

        </ul>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
        data(){
            return{
                id: this.$router.currentRoute.params['id'],
                products:[],
                breadcrumbs:[]
            }
        },
        beforeMount(){
           this.getProducts(this.id)
        },
        methods: {
            getProducts(id) {
                function loadProducts(url){
                    return new Promise((resolve, reject) => {
                        Vue.http.get(url).then(response => {
                            resolve(response.body);
                        }, response => {
                            reject()
                        });
                    });
                }
                let url='';
                if (!!id){
                    url='https://web-store-sample-vs.herokuapp.com/web-store/catalog/'+id+'/products';
                    this.products=[];
                    this.breadcrumbs=[];
                    loadProducts(url).then(
                        result => {
                            if(result.content.length==0){
                            }else {
                                for (let i = 0; i < result.content.length; i++) {
                                    this.products.push({
                                        name: result.content[i].name,
                                        priceWithVAT: result.content[i].priceWithVAT,
                                        id:result.content[i].id
                                    })

                                }
                                for (let i = 0; i < result.content[0].catalogCategory.parentNodes.length; i++) {
                                    this.breadcrumbs.push({
                                        name: result.content[0].catalogCategory.parentNodes[i].name,
                                        nodeId: result.content[0].catalogCategory.parentNodes[i].nodeId
                                    })

                                }
                                this.breadcrumbs.push({
                                    name: result.content[0].catalogCategory.name,
                                    nodeId: result.content[0].catalogCategory.nodeId
                                })
                                this.$store.commit('changeBreadcrumbs', this.breadcrumbs)
                                this.$store.commit('changeTitle', result.content[0].catalogCategory.name)
                            }

                        }
                    )
                }else{

                }
            }
        },
        watch:{
            $route (toR, fromR){
                this.id=toR.params['id'];
                this.getProducts(this.id);
            },
        }
    }
</script>
<style scoped>
    *{
        background-color: #eee;
        margin:10px 0;

    }
</style>