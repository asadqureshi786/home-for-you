<template>
    <div class="tw-container">
        <div class="grid grid-cols-12">
            <div class="lg:col-span-3 col-span-12">
                
                <!-- Price Section -->
                <div class=" font-bold text-darkText text-[15px] mb-1" >Type of Property</div>
                <ul class="flex flex-col  gap-1.5 listing-type-checkbox">
                    <li class="" >
                        <label class="flex items-center gap-2 cursor-pointer">
                            <Checkbox v-model="checked" class="" binary />
                        <span class="text-darkText text-sm" >Apartment</span>
                        </label>
                    </li>
                    <li class="" >
                        <label class="flex items-center gap-2 cursor-pointer">
                            <Checkbox v-model="checked" class="" binary />
                        <span class="text-darkText text-sm" >Apartment</span>
                        </label>
                    </li>
                    <li class="" >
                        <label class="flex items-center gap-2 cursor-pointer">
                            <Checkbox v-model="checked" class="" binary />
                        <span class="text-darkText text-sm" >Apartment</span>
                        </label>
                    </li>
                </ul>
             
             
                <!-- Price Section -->
                <div class=" font-bold text-darkText text-[15px] mb-1" >Base Price</div>
                <div class="flex flex-col gap-2">
                    <input type="range" name="" id="" :min="rangeMinPrice" :max="rangeMaxPrice" class="w-40" v-model="rangeValue" >
                    <div class="font-medium text-slate-700 text-xs" > ${{ formatValue }}</div>
                </div>
            
                <div class="w-60" >
                    <div class="border border-slate-300 rounded-lg py-1.5 px-3 relative" >
                        <div class="text-slate-500 absolute top-1/2 -translate-y-1/2 left-2">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_15_152)"> <rect width="24" height="24" fill="white"></rect> <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-linejoin="round"></circle> <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="currentColor"></path> </g> <defs> <clipPath id="clip0_15_152"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                            </div>
                        <input type="search" placeholder="Search Properties" class="outline-0 text-slate-600 w-full focus:shadow-none text-sm ps-6" >
                    </div>
                </div>
            </div>
            <Properties xlCol="2" :list="proppertieslist" class="my-4 lg:col-span-9 col-span-12" />
        </div>
    </div>
</template>

<script setup >
import {ref , onMounted , computed} from 'vue'


import Checkbox from 'primevue/checkbox';
import CheckboxGroup from 'primevue/checkboxgroup';


import Properties from '../components/web/Properties.vue';
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

const rangeMaxPrice = ref(0);
const rangeMinPrice = ref(0);
const rangeValue = ref(0);

// Manage Price Filter
const price = proppertieslist.value.map(item => Number(item.price.replace(/,/g, '')));
const minPrice = price.length ?  Math.min(...price) : 0;
const maxPrice = price.length ?  Math.max(...price) : 0;

const formatValue = computed(()=>{
    return new Intl.NumberFormat('en-US').format(rangeValue.value);
})

onMounted(()=>{
    rangeValue.value = maxPrice;
    rangeMinPrice.value = minPrice;
    rangeMaxPrice.value = maxPrice;
})

</script>