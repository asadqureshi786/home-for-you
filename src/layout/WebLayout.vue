<template>
    <Header/>
    <div :class="`main-wrapper ${!isHome ? 'pt-25' : ''} pb-10`">
         <router-view></router-view>
    </div>
    <Footer/>
</template>

<script setup >
import Header from '../components/web/Header.vue'
import Footer from '../components/web/Footer.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const isHome = computed(() => {
  return route.path === '/' || route.path === '/home';
});


</script>