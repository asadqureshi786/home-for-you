
<template>
    <!-- Banner -->
    <section ref="box" class="bg-[url(/img/home-banner-new2.jpg)] bg-fixed h-dvh bg-cover" id="home-id" >
    
      <div class="absolute top-0 left-0 h-full w-full bg-black/50"></div>
      <div
        class="container w-full h-full flex items-center justify-center relative z-1 flex-col text-center"
      >
        <div class="lg:max-w-162.5 mx-auto">
          <RouterLink to="/guidance"
            class="text-white border border-white rounded-full px-6 py-2 text-xs font-semibold cursor-pointer bg-transparent  transition-all"
          >
            LET US GUIDE YOUR HOME
          </RouterLink>
          <h2 class="text-white! lg:text-6xl text-5xl pt-5 lg:leading-18 font-semibold">
            Discover a place you'll <br class="hidden lg:block" />
            love to <span id="banner_text"></span>
          </h2>
          <div
            class="bg-white rounded-full mt-5 px-6 pt-3.5 pb-3.5 w-full relative"
          >
            <input
              type="text"
              class="bg-transparent text-darkText placeholder-darkText w-full hover:bg-transparent! text-base font-normal focus:outline-0"
              placeholder="Enter Name, Keywords"
            />
            <div
              class="bg-primary text-white w-fit p-3.5 rounded-full absolute right-1 top-1/2 -translate-y-1/2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_20)">
                  <path
                    d="M19.8 18.6667L14.8667 13.8C15.4889 13.0444 15.9778 12.2111 16.3333 11.3C16.6889 10.3889 16.8667 9.42222 16.8667 8.4C16.8667 6.88889 16.4889 5.48889 15.7333 4.2C14.9778 2.91111 13.9556 1.88889 12.6667 1.13333C11.3778 0.377777 9.96667 -1.90735e-06 8.43333 -1.90735e-06C6.9 -1.90735e-06 5.48889 0.377777 4.2 1.13333C2.91111 1.88889 1.88889 2.91111 1.13333 4.2C0.377778 5.48889 0 6.9 0 8.43333C0 9.96667 0.377778 11.3778 1.13333 12.6667C1.88889 13.9556 2.91111 14.9778 4.2 15.7333C5.48889 16.4889 6.88889 16.8667 8.4 16.8667C9.42222 16.8667 10.3889 16.6889 11.3 16.3333C12.2111 15.9778 13.0444 15.4889 13.8 14.8667L18.6667 19.8C18.8444 19.9333 19.0333 20 19.2333 20C19.4333 20 19.6111 19.9222 19.7667 19.7667C19.9222 19.6111 20 19.4333 20 19.2333C20 19.0333 19.9333 18.8444 19.8 18.6667ZM1.53333 8.4C1.53333 7.15555 1.84444 6.01111 2.46667 4.96667C3.08889 3.92222 3.92222 3.08889 4.96667 2.46667C6.01111 1.84444 7.15556 1.53333 8.4 1.53333C9.64444 1.53333 10.7889 1.84444 11.8333 2.46667C12.8778 3.08889 13.7111 3.92222 14.3333 4.96667C14.9556 6.01111 15.2667 7.15555 15.2667 8.4C15.2667 9.64444 14.9556 10.7889 14.3333 11.8333C13.7111 12.8778 12.8778 13.7111 11.8333 14.3333C10.7889 14.9556 9.64444 15.2667 8.4 15.2667C7.15556 15.2667 6.01111 14.9556 4.96667 14.3333C3.92222 13.7111 3.08889 12.8778 2.46667 11.8333C1.84444 10.7889 1.53333 9.64444 1.53333 8.4Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_20">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 20)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Should Work With US -->
    <section class="container pt-30">
      <h2 class="text-center sec-head">Why You Should Work With Us</h2>
      <p class="text-center sec-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div class="flex justify-center gap-14 px-14 mt-15 md:flex-nowrap flex-wrap">
        <div class="flex flex-col justify-center items-center text-center">
          <img src="/img/why-work/wide-light.png" class="w-11 h-auto" />
          <h3 class="font-medium text-xl pt-4.5 pb-3.5">
            Wide Range of Properties
          </h3>
          <p class="text-sm">
            We offer expert legal help for all related propertyitems in Dubai.
          </p>
        </div>
        <div class="flex flex-col justify-center items-center text-center">
          <img src="/img/why-work/buy-light.png" class="w-11 h-auto" />
          <h3 class="font-medium text-xl pt-4.5 pb-3.5">
            Wide Range of Properties
          </h3>
          <p class="text-sm">
            We sell your home at the best market price and very quickly as well.
          </p>
        </div>
        <div class="flex flex-col justify-center items-center text-center">
          <img src="/img/why-work/trusted-light.png" class="w-11 h-auto" />
          <h3 class="font-medium text-xl pt-4.5 pb-3.5">
            Wide Range of Properties
          </h3>
          <p class="text-sm">
            We offer you free consultancy to get a loan for your new home.
          </p>
        </div>
      </div>
    </section>

    <!-- Feature List -->
    <section class="container pt-40" id="listings-id" >
      <h2 class="text-center sec-head">Featured Properties</h2>
      <Properties xlCol="3" :list="proppertieslist" class="mt-15 mb-8" />
      <RouterLink to="/listing" class="flex mx-auto btn btn-primary" >See All Listings</RouterLink>
    </section>

    <!-- Find Properties  -->
    <section class="container pt-30">
      <h2 class="text-center sec-head">Find Properties in These Cities</h2>
      <p class="text-center sec-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Carousel v-bind="carouselConfig" class="mt-10" >
          <Slide v-for="(list,index) in findingList" >
              <div  :style="{background : `url('/img/cities/img${index+1}.jpg')`}" class="carousel__item bg-cover! bg-bottom! w-full h-90 rounded-lg relative overflow-hidden">
                  <div class="absolute inset-0 bg-linear-to-b from-black/70  rounded-lg pt-6 ps-6.5" >
                      <p class="m-0 p-0 text-white! text-sm capitalize" >{{list.name }}</p>
                      <p class="m-0 p-0 text-white! text-sm" >{{list.properties_count }} Properties</p>
                  </div>
              </div>
          </Slide>
            <template #addons>
        <Navigation />
        <Pagination />
      </template>
      </Carousel>
    </section>

    <!-- How Its Works -->
    <HowItsWork/>

    <!-- Customer Says -->
    <CustomerSays/>

    <!-- Our Team -->
     <div id="member-id">
       <OurTeam/>
     </div>

    <section class="container pt-20"></section>


    
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted } from "vue";
import { ref } from 'vue';
import gsap from 'gsap'


const box = ref(null)
// onMounted(() => {
//   gsap.from(box.value, {
//        y: 50,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 10
//   })
// })

const carouselConfig = {
  itemsToShow:4,
  itemsToScroll:1,
  transition:500,
  wrapAround: true,
  mouseWheel: true,
  gap: 15,
}

// components
import Properties from "../components/web/Properties.vue";
import HowItsWork from '../components/web/HowItsWork.vue';
import CustomerSays from '../components/web/CustomerSays.vue';
import BestProperties from '../components/web/BestProperties.vue';
import OurTeam from '../components/web/OurTeam.vue';

import Typed from "typed.js";

// Properties Lists
const proppertieslist = ref([
    {
        background : '/img/properties/img1.jpg',
        type : "Rent",
        feature : true,
        title : 'Luxury Family Home',
        loaction : '1800-1818 79th St',
        price : '395,000',
        month : false,
        rooms : '4',
        bath : '2',
        addtions : '400',
    },
    {
        background : '/img/properties/img2.jpg',
        type : "For Sale",
        feature : false,
        title : 'Skyper Pool Apartment',
        loaction : '1020 Bloomingdale Ave',
        price : '280,000',
        month : false,
        rooms : '4',
        bath : '2',
        addtions : '400',
    },
    {
        background : '/img/properties/img3.jpg',
        type : "For Sale",
        feature : false,
        title : 'North Dillard Street',
        loaction : '4330 Bell Shoals Rd',
        price : '250',
        month : true,
        rooms : '4',
        bath : '2',
        addtions : '400',
    },
    {
        background : '/img/properties/img4.jpg',
        type : "For Sale",
        feature : true,
        title : 'Eaton Garth Penthouse',
        loaction : '4330 Bell Shoals Rd',
        price : '180,000',
        month : false,
        rooms : '4',
        bath : '2',
        addtions : '400',
    },
    {
        background : '/img/properties/img5.jpg',
        type : "For Sale",
        feature : true,
        title : 'New Apartment Nice Wiew',
        loaction : '4330 Bell Shoals Rd',
        price : '450',
        month : true,
        rooms : '4',
        bath : '2',
        addtions : '400',
    },
    {
        background : '/img/properties/img6.jpg',
        type : "For Sale",
        feature : true,
        title : 'Diamond Manor Apartment',
        loaction : '4330 Bell Shoals Rd',
        price : '100',
        month : true,
        rooms : '4',
        bath : '2',
        addtions : '400',
    },
])

const findingList = ref([
    {   
        background : '',
        name : 'chicago',
        properties_count : 5,
    },
    {   
        background : '',
        name : 'Los Angeles',
        properties_count : 1,
    },
    {   
        background : '',
        name : 'Miami',
        properties_count : 1,
    },
    {   
        background : '',
        name : 'Florida',
        properties_count : 1,
    },
    {   
        background : '',
        name : 'New York',
        properties_count : 1,
    },
    {   
        background : '',
        name : 'Washington DCS',
        properties_count : 1,
    },
])

// Banner Text Animation
onMounted(() => {
  const typed = new Typed("#banner_text", {
    strings: ["Live", "Be Extant"],
    typeSpeed: 200,
    loopCount: true,
    backSpeed: 20,
    loop: true,
  });
});
</script>


