<template>
    <div>
        <h6>{{name}}</h6>
        <ul>
            <router-link
             tag="li"
            v-for="kay in breadcrumbs"
             :to="/catalog/+kay.nodeId"
            :key="kay.nodeId"
            >
            <a>{{kay.name}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name: "breadcrumbs"
            }
        },
        computed:{
            breadcrumbs(){
                return this.$store.getters.getBreadcrumbs
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