<template>
    <div>

        <h1>header menu</h1>

        <ul>
            <router-link
                    tag="li"
                    v-for="kay in menuCatalog"
                    :to="/catalog/+kay.nodeId"
                    :key="kay.nodeId"
            >
                <a>{{kay.name}} </a>
            </router-link>
            <!--<li v-for="kay in menuCatalog">-->
                <!--<a :href="kay.nodeId"> {{kay.name}}</a>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {

        data(){
            return{
                menuCatalog:[]
            }
        },
        beforeMount(){
            this.getCatalog()
        },
        methods:{
            getCatalog(){
                function loadCatalog(url){
                    return new Promise((resolve, reject) => {
                        Vue.http.get(url).then(response => {
                            resolve(response.body);
                        }, response => {
                            alert('error')
                        });
                    });
                }
                loadCatalog('https://web-store-sample-vs.herokuapp.com/web-store/catalog/').then(
                    result => {
                        for (let i=0; i<result.length; i++){
                            this.menuCatalog.push({
                                name: result[i].name,
                                nodeId:result[i].nodeId,
                                podcatalog:[]
                            })
                            let url='https://web-store-sample-vs.herokuapp.com/web-store/catalog/'+result[i].nodeId+'/sub-categories';
                            loadCatalog(url)
                                .then( result2 => {
                                        for (let j=0; j<result2.length; j++){
                                            this.menuCatalog[i].podcatalog.push({
                                                name: result2[j].name,
                                                nodeId:result2[j].nodeId,
                                                podcatalog:[]
                                            })
                                            url='https://web-store-sample-vs.herokuapp.com/web-store/catalog/'+result2[i].nodeId+'/sub-categories';
                                            loadCatalog(url)
                                                .then( result3 => {
                                                    for (let k=0; k<result3.length; k++){
                                                        this.menuCatalog[i].podcatalog[j].podcatalog.push({
                                                            name: result3[k].name,
                                                            nodeId:result3[k].nodeId
                                                        })
                                                    }
                                                })
                                        }
                                    }
                                );
                        }
                    }
                );
            }
        }
    }
</script>

<style scoped>
    *{
        background-color: #eee;
        margin:10px 0;

    }
</style>