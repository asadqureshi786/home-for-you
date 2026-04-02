<template>
    <MediumModal @close="$emit('close')"  >
        <template #title>Add New Property</template>
        <template #subtitle>Fill in the details for the new property.</template>
        <template #form-content>
            <div class="pb-7 grid grid-cols-12 gap-5 space-default">
                <div class="lg:col-span-8 col-span-12">
                    <div class="form-group">
                        <label for="">Property Name</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="lg:col-span-4 col-span-12">
                    <div class="form-group d_select">
                        <label for="">Property Type</label>
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City"
                            class="w-full md:w-56" />
                    </div>
                </div>
                <div class="lg:col-span-8 col-span-12">
                    <div class="form-group">
                        <label for="">Location</label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="lg:col-span-4 col-span-12">
                    <div class="form-group">
                        <label for="">City</label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="lg:col-span-4 col-span-12">
                    <div class="form-group">
                        <label for="">Price</label>
                        <div class="relative">
                            <input type="text" class="form-control ps-5.5!">
                            <span
                                class="text-gray-600 text-sm absolute left-3 top-1/2 -translate-y-1/2 tracking-[-0.9px]!">$</span>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 col-span-12">
                    <div class="form-group primary_field">
                        <label for="">Number of Bedrooms</label>
                        <InputNumber v-model="value1" inputId="withoutgrouping" :useGrouping="false" fluid />
                    </div>
                </div>

                <div class="lg:col-span-4 col-span-12">
                    <div class="form-group primary_field">
                        <label for="">Number of Bathrooms</label>
                        <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
                    </div>
                </div>

                <div class=" col-span-12">
                    <div class="form-group primary_field">
                        <label for="">Number of Bathrooms</label>
                        <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
                    </div>
                </div>

            </div>
            <hr class="pb-5">
            <div class="space-default">
                <h2 class="font-bold text-lg">Agent Information</h2>
                <span class="text-slate-800 text-sm relative bottom-0.5">Provide the details of the agent
                    responsible for the property.</span>
            </div>
            <!-- Agent Information-->
            <div class="pt-5 grid grid-cols-12 gap-5 space-default">
                <div class="lg:col-span-4 col-span-12">
                    <div class="form-group">
                        <label for="">Agent Name</label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="lg:col-span-4 col-span-12">
                    <div class="form-group primary_field">
                        <label for="">Contact Number</label>
                        <InputNumber v-model="value1" inputId="withoutgrouping" :useGrouping="false" fluid />
                    </div>
                </div>

                <div class="lg:col-span-4 col-span-12">
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" class="form-control">
                    </div>
                </div>
            </div>
        </template>
    </MediumModal>
</template>

<script setup>
// component
import MediumModal from './modals/MediumModal.vue';

import Select from 'primevue/select';
import { ref } from "vue";
import InputNumber from 'primevue/inputnumber';

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Zeig', code: 'PRS' },
]);
</script>