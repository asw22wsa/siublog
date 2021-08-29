<template>
  <div class="container" style="height:200vh;">
        <h1>cart : {{ cartCount }}</h1>
        <h3>cart A : {{ cartACount }}</h3>
        <h2>Count : {{ count }}</h2>
        <button type="button" @click="increment">Increment</button>
        <div :key="i" v-for="(studyList, i) in studyLists">
            <h1>{{ studyList.title }}</h1>
            <p> {{ studyList.content }}</p>
        </div>
        <button type="button" @click="getStudyList">Increment</button>

        <hr>

        <!-- this button active footer div id="offcanvasWithBackdrop" -->
        <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Enable backdrop (default)</button>
    </div>
</template>
<script>
import ApiMixin from '../api.js';
import { mapState,mapGetters } from 'vuex';
    export default {
        mixins:[ApiMixin],
        data(){
            return {
                studyLists:[]
            };
        },
        computed:{
            ...mapState([
                'count'
            ]),
            ...mapGetters({
                cartCount : 'cartCount',
                cartACount : 'productACount'
            })
        },
        methods:{
            increment(){
                this.$store.commit("increment");
            },
            async getStudyList(){
                this.studyLists = await this.$callAPI(
                    "/api/study",
                    "get",
                    {}
                );
                console.log(this.studyLists);
            },
        },
    }
</script>
<style scoped>

</style>