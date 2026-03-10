<template>
    <header class="absolute top-3 w-full py-3 z-2" >
        <div class="tw-container">
            <div class="grid grid-cols-12" >
            <a class="col-span-4" href="#" >
                <img src="/img/logo.png" class="w-auto h-9"  />
            </a>
            <ul class="col-span-4 lg:flex hidden items-center gap-10 justify-center text-white text-[15px]" >
                <li><a href="#" class="item" >Home</a></li>
                <li><a href="#" class="item" >Listing</a></li>
                <li><a href="#" class="item" >Member</a></li>
                <li><a href="#" class="item" >Blog</a></li>
                <li><a href="#" class="item" >Contact</a></li>
            </ul>
            <ul class="col-span-4 hidden absolute top-10 w-full left-0  items-center gap-10 justify-center text-white text-[15px]" >
                <li><a href="#" class="item" >Home</a></li>
                <li><a href="#" class="item" >Listing</a></li>
                <li><a href="#" class="item" >Member</a></li>
                <li><a href="#" class="item" >Blog</a></li>
                <li><a href="#" class="item" >Contact</a></li>
            </ul>
            <ul class="lg:col-span-4 col-span-8 flex items-center justify-end lg:gap-5 gap-3" >
                <li class="md:flex hidden items-center gap-3" >
                    <img src="/svg/phone.svg" class="w-4.5" />
                    <div class="text-white text-[15px]" >+68 685 88666</div>
                </li>
                <li class="flex  items-center gap-2" >
                    <div class="border border-white  cursor-pointer rounded-full w-fit lg:p-2.5 p-1.5" >
                        <img src="/svg/profile.svg" class="w-4" />
                    </div>
                    <div class="lg:block hidden border border-white rounded-full w-fit py-2 text-white px-7 text-[13px] transition-all hover:bg-primary hover:text-black hover:border-white cursor-pointer" >Add Property</div>
                </li>
                <li class="lg:hidden block" >
                    <span class="cursor-pointer transition-all  text-white hover:text-primary text-5xl" >
                            <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_01"> <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                    </span>
                </li>
            </ul>
            </div>
        </div>
    </header>
</template>