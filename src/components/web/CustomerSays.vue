<template>
    <section class="mt-30 pt-25 pb-20 customer-says bg-darkText" >
        <div class="container ">
            <div class="flex justify-between lg:flex-row flex-col lg:gap-0 gap-25">
                <div class="lg:w-5/12 w-full">
                    <h2 class="sec-head text-white!">
                        What our customers are
                        <br class="md:block hidden" />
                        saying us?
                    </h2>
                    <p class="sec-text mt-5! text-white!">
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose injected humour and the like.
                    </p>
                    <div class="flex items-center gap-15 mt-5">
                        <div>
                            <h3 class="text-2xl font-medium pb-1 text-white!"><span class="text-primary" >10m+</span></h3>
                            <p class="text-[15px] font-extralight text-white!">Happy People</p>
                        </div>
                        <div class="relative" >
                            <h3 class="text-2xl font-medium pb-1 text-white!">4.88</h3>
                            <p class="text-[15px] font-extralight text-white!">Overall rating</p>
                            <div class="flex items-center gap-1 absolute -bottom-6" >
                                <img v-for="value in rating" src="/img/star.png" class="h-auto w-3.5" />
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel v-bind="testiconfig" class="lg:w-5/12 w-full second-sec relative">
                    <Slide>
                        <div class="carousel__item" >
                            <div class="flex items-center gap-4">
                                <img src="/img/users/user1.png" alt="user1" class="w-15 h-full">
                                <div>
                                    <p class="text-white! font-medium ">Cameron Williamson</p>
                                    <span class="text-sm text-primary!">Designer</span>
                                </div>
                            </div>
                            <p class="text-base mt-7 text-white! font-medium ">
                                Searches for multiplexes, property comparisons, and the loan
                                estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dores.
                            </p>
                        <div class="absolute top-0 right-0">
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_759)">
                                        <path
                                            d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z"
                                            fill="#fff" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_759">
                                            <rect width="45" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </Slide>
                       <Slide>
                        <div class="carousel__item" >
                            <div class="flex items-center gap-4">
                                <img src="/img/users/user1.png" alt="user1" class="w-15 h-full">
                                <div>
                                    <p class="text-white! font-medium">Cameron Williamson</p>
                                    <span class="text-sm text-primary!">Designer</span>
                                </div>
                            </div>
                            <p class="text-base mt-7 text-white! font-medium ">
                                Searches for multiplexes, property comparisons, and the loan
                                estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dores.
                            </p>
                            <div class="absolute top-0 right-0">
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_759)">
                                        <path
                                            d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z"
                                            fill="#fff" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_759">
                                            <rect width="45" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </Slide>
                       <Slide>
                        <div class="carousel__item" >
                            <div class="flex items-center gap-4">
                                <img src="/img/users/user1.png" alt="user1" class="w-15 h-full">
                                <div>
                                    <p class="text-white! font-medium ">Cameron Williamson</p>
                                    <span class="text-sm text-primary!">Designer</span>
                                </div>
                            </div>
                            <p class="text-base mt-7 text-white! font-medium ">
                                Searches for multiplexes, property comparisons, and the loan
                                estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dores.
                            </p>
                            <div class="absolute top-0 right-0">
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_759)">
                                        <path
                                            d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z"
                                            fill="#fff" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_759">
                                            <rect width="45" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </Slide>
                      <template #addons>
        <Navigation />
        <!-- <Pagination /> -->
      </template>
                </Carousel>
            </div>
        </div>

        <hr class="text-gray-800 mt-24" >
        <div class="container flex flex-col gap-5 pt-20" >
            <p class="text-slate-200! text-center" >Thousands of world’s leading companies trust Space</p>
            <!-- <div class="flex items-center justify-between gap-20 pt-5">
                <img src="/img/brands/img1.png" class="w-25 h-auto" />
                <img src="/img/brands/img2.png" class="w-25 h-auto" />
                <img src="/img/brands/img3.png" class="w-25 h-auto" />
                <img src="/img/brands/img4.png" class="w-25 h-auto" />
                <img src="/img/brands/img5.png" class="w-25 h-auto" />
                <img src="/img/brands/img6.png" class="w-25 h-auto" />
            </div> -->
            <div class="lg:flex grid grid-cols-2 place-items-center flex-wrap lg:flex-nowrap items-center justify-between lg:gap-20 gap-y-12 pt-5">
                <img src="/img/brands/img1.png" class="w-25 h-auto" />
                <img src="/img/brands/img2.png" class="w-25 h-auto" />
                <img src="/img/brands/img3.png" class="w-25 h-auto" />
                <img src="/img/brands/img4.png" class="w-25 h-auto" />
                <img src="/img/brands/img5.png" class="w-25 h-auto" />
                <img src="/img/brands/img6.png" class="w-25 h-auto" />
            </div>
        </div>
    </section>
</template>


<script setup >
import 'vue3-carousel/carousel.css'
import { ref } from 'vue';
const rating = ref(5)
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const testiconfig = {
    itemsToShow: 1,
    itemsToScroll: 1,
    transition: 500,
    wrapAround: true,
    mouseWheel: true,
    gap: 15,
}
</script>