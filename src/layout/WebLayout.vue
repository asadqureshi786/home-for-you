<template>
    <Header/>
    <div class="main-wrapper pt-25 pb-10">
         <router-view></router-view>
    </div>
    <Footer/>
</template>

<script setup >
import Header from '../components/web/Header.vue'
import Footer from '../components/web/Footer.vue'
</script>