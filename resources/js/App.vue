<template>
<div>
    <Header/>
    <div class="container">
        <router-view></router-view>
    </div>
    <Footer/>
</div>
</template>

<script>
import Header from './components/inc/header.vue'
import Footer from './components/inc/footer.vue'
    export default {
        components :{
            Header,Footer
        }
    }
</script>
