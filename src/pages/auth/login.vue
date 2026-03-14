<template>
    <div class="lg:grid lg:grid-cols-12 h-dvh w-full gap-5 overflow-auto" >
        <div class="lg:col-span-7 lg:block hidden h-full -scale-x-100 relative ">
             <!-- <div class="bg-[url(/img/auth/bg.jpg)] bg-cover! bg-center! w-full h-full login-path " ></div> -->
            <div class=" absolute inset-0 bg-black/75 flex justify-end items-end w-full h-full">
                <div class="-scale-x-100 p-7 relative z-1" >
                    <h2 class="text-slate-200! mb-4 4xl:text-7xl text-5xl  font-medium " >Welcome <br/> Back to Your Dream Space</h2>
                    <p class="text-slate-200!" >"Log in to your account to explore exclusive property listings, manage your saved favorites, and get personalized recommendations. Your journey to finding the perfect home starts here — all in one place, just a click away."</p>
                </div>
            </div>
            <video  autoplay loop class="w-full h-full object-cover" >
                <source src="/new.mp4" >
            </video>
            
            <!-- <video src="/login-vid.mp4"></video> -->
        </div>
        <div class="lg:col-span-5 md:w-7/12 w-10/12 lg:mx-auto mx-auto w h-full">
            <div class="4xl:w-7/12 lg:w-8/12  mx-auto h-full flex flex-col justify-center " >
                <div class="text-center mb-6">
                    <img src="/img/logo.png" class="bg-black/50 w-auto h-10 mx-auto mb-10"  />
                <h2 class="font-semibold 4xl:text-5xl text-[34px] " >Wellcome Back</h2>
                <p class="text-sm font-medium" >Let's login to grab amazing deal</p>
                </div>
                <form action="" class="" >
                    <div class="grid grid-cols-1 gap-3 mb-10">
                        <div class="flex items-center justify-center 4xl:py-3.5 py-2.5 gap-3 border border-black/15  rounded-lg" >
                            <img src="/svg/google.svg" class="w-5 h-auto" />
                            <span class="text-sm font-normal text-slate-800" >Continiue With Google</span>
                        </div>
                        <div class="flex items-center justify-center 4xl:py-3.5 py-2.5 gap-3 border border-black/15  rounded-lg" >
                            <img src="/svg/facebook.svg" class="w-5 h-auto" />
                            <span class="text-sm font-normal text-slate-800" >Continiue With Facebook</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-5">
                        <div class="border border-black/10 relative p-1 flex h-11 px-4 rounded-md" >
                              <input 
                                type="email"
                                placeholder=" "
                                class="peer w-full text-sm focus:outline-0"
                                >

                                <label 
                                class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-600 
                                transition-all 
                                peer-focus:-top-1 peer-focus:text-[13px] peer-focus:bg-white peer-focus:px-2
                                peer-[&:not(:placeholder-shown)]:-top-1 
                                peer-[&:not(:placeholder-shown)]:text-[13px]
                                peer-[&:not(:placeholder-shown)]:bg-white
                                peer-[&:not(:placeholder-shown)]:px-2"
                                >
                                Email
                                </label>
                        </div>
                           <div class="border border-black/10 relative p-1 flex h-11 px-4 rounded-md" >
                              <input 
                                type="password"
                                placeholder=" "
                                class="peer w-full text-sm focus:outline-0"
                                >

                                <label 
                                class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-600 
                                transition-all 
                                peer-focus:-top-1 peer-focus:text-[13px] peer-focus:bg-white peer-focus:px-2
                                peer-[&:not(:placeholder-shown)]:-top-1 
                                peer-[&:not(:placeholder-shown)]:text-[13px]
                                peer-[&:not(:placeholder-shown)]:bg-white
                                peer-[&:not(:placeholder-shown)]:px-2"
                                >
                                Password
                                </label>
                        </div>
                    </div>
                    <div class="text-end mt-1.5  mb-3">
                        <a class="  text-right text-primary font-medium text-sm border-b border-primary leading-3" >Forgot Password?</a>

                    </div>
                    <button class="bg-primary text-white w-full text-sm rounded-md py-3 font-semibold shadow-4xl" >Login</button>
                </form>
            </div>
        </div>
    </div>
</template>