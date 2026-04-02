<template>
    <div class="modal fixed inset-0 flex w-screen items-center justify-center bg-black/40 backdrop-blur-[6px] z-2">
        <dialog
            class="add-properties-modal block lg:w-160 h-fit bg-white shadow-2xl rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
            <div class="modal-header">
                <div>
                    <h2 class="heading">
                        <slot name="title">Default Title</slot>
                    </h2>
                    <span class="sub-heading">
                        <slot name="subtitle">Default Title</slot>
                    </span>
                </div>
                <span class="text-gray-800 cursor-pointer relative top-1" @click="$emit('close')" >
                    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </span>
            </div>
            <form action="">
                <div class="dialog-content">
                    <slot name="form-content"></slot>
                </div>
                <div class="flex items-center modal-btn gap-4">
                    <button  @click.prevent="$emit('close')"  class="btn btn-secondary">Close</button>
                    <button class="btn btn-primary">Add Property</button>
                </div>
            </form>
        </dialog>
    </div>
</template>
