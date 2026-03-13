<template>
    <section class="pt-30" >
        <div class="container">
             <h2 class="text-center sec-head">Meet Our Team Of Experts</h2>
            <p class="text-center sec-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul class="flex items-center lg:justify-between justify-center gap-10 mt-10 md:flex-nowrap flex-wrap" >
                <li v-for="item in teams" class="group" >
                    <div class="relative rounded-xl overflow-hidden" >
                        <img :src="item.img" class="w-auto h-auto rounded-xl" />
                        <div class="absolute inset-0 transition-all group-hover:bg-black/40" ></div>
                        <div class="absolute inset-2 transition-all duration-400 rounded-xl border-[1.5px] scale-0 group-hover:scale-100 border-white" ></div>
                    </div>
                    <p class="font-bold text-base leading-5! mt-3 lg:text-left text-center" >{{item.name}}</p>
                    <span class="font-normal text-sm lg:text-left text-center block" >{{item.designation}}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const teams = ref([
    {
        img : '/img/team/img1.jpg',
        name : 'John Powell',
        designation : 'Service Support',
    },
    {
        img : '/img/team/img2.jpg',
        name : 'Thomas Powell',
        designation : 'Marketing',
    },
    {
        img : '/img/team/img3.jpg',
        name : 'Tom Wilson',
        designation : 'Designer',
    },
    {
        img : '/img/team/img4.jpg',
        name : 'Samuel Palmer',
        designation : 'Marketing',
    },
])
</script>