<template>
    <div>

            <h1>Каталог</h1>

            <ul>
                <router-link
                        tag="li"
                        v-for="kay in menuCatalog"
                        :to="/catalog/+kay.nodeId"
                        :key="kay.nodeId"
                >
                    <a>{{kay.name}} </a>


                </router-link>
            </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        data(){
            return{

             id: this.$router.currentRoute.params['id'],
                menuCatalog:[],
                breadcrumbs:[]
            }
        },
        beforeMount(){
            this.getCatalog(this.id)

        },
        methods: {
            getCatalog(id) {
                function loadCatalog(url){
                    return new Promise((resolve, reject) => {
                        Vue.http.get(url).then(response => {
                            resolve(response.body);
                        }, response => {
                            alert('error')
                        });
                    });
                }
                let url='';
                if (!!id){
                    url='https://web-store-sample-vs.herokuapp.com/web-store/catalog/'+id+'/sub-categories';
                }else{
                    url='https://web-store-sample-vs.herokuapp.com/web-store/catalog/';
                }
                this.menuCatalog=[];
                this.breadcrumbs=[];
                loadCatalog(url).then(
                    result => {
                        for (let i = 0; i < result.length; i++) {
                            this.menuCatalog.push({
                                name: result[i].name,
                                nodeId: result[i].nodeId,
                                podcatalog: []
                            })
                        }
                        for (let i = 0; i < result[0].parentNodes.length; i++) {
                            this.breadcrumbs.push({
                                name: result[0].parentNodes[i].name,
                                nodeId: result[0].parentNodes[i].nodeId
                            })
                        }
                        this.$store.commit('changeBreadcrumbs',this.breadcrumbs )

                    }
                )
            }
        },

        watch:{
            $route (toR, fromR){
                this.id=toR.params['id'];
                this.getCatalog(this.id);
            }
        }
    }
</script>

<style scoped>

</style>