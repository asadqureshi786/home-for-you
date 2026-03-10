<template>
    <ul class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1" >
        <li>
            <div :style="`background-image: url(${list[0].background})`"  class="bg-full bg-cover h-40 w-full " >
 
            </div>
        </li>
    </ul>
</template>

<script setup >
import { ref } from 'vue';

const list = ref([
    {
        background : '/img/properties/img1.jpg',
        feature : true,
        title : 'Luxury Family Home',
        loaction : '1800-1818 79th St',
        price : '395,000',
        rooms : '4',
        bath : '2',
        addtions : '400',
    }
])
</script>