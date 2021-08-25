<template>
    <div class="container">
        <h1>cart : {{ cartCount }}</h1>
        <h3>cart A : {{ cartACount }}</h3>
        <h2>Count : {{ count }}</h2>
        <button type="button" @click="increment">Increment</button>
    </div>
</template>

<script>
    export default {
        computed:{
            count(){
                return this.$store.state.count;
            },
            cartCount(){
                return this.$store.getters.cartCount;
            },
            cartACount(){
                return this.$store.getters.productACount;
            }
        },
        methods:{
            increment(){
                this.$store.commit("increment");
            }
        }
    }
</script>
