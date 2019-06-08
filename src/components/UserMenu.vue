<template>
    <div>
    <h6>Вітаю, {{userName}}</h6><span class="signOut" @click="signOut">Вийти</span>

    </div>
</template>


<script>
    export default {

        computed:{
            userName (){
                if (localStorage.userName) {
                    this.$store.commit('changeUserName', localStorage.userName)
                }else{
                    this.$store.commit('changeUserName', ' Гість')
                }
                return this.$store.getters.getUserName

            }
        },
        methods:{
            signOut(){
                localStorage.clear();
                this.$store.commit('changeUserName', ' Гість')

                }

            }


    }
</script>

<style scoped>
    .signOut{
        cursor: pointer;
        font-weight:900;
    }
    *{
        background-color: #eee;
        margin:10px 0;

    }
</style>