<template>
    <div :class="{
    }" class="max-w-screen">
        <div
            :class="{
                'w-0': !serv, 'w-screen fixed overflow-hidden overscroll-contain': serv
            }"
            class="absolute top-0 z-40 transition-all ease-in-out duration-200 transform h-screen bg-[#2C2C2C]"
        >
            <div
                class="px-[75px] my-auto h-screen flex justify-end py-[74px] w-screen"
                :class="{
                    'hidden': !serv, 'block': serv
                }"
            >
                <div class="flex-1">
                    <div class="lotus">
                        <img class="relative z-40 p-10" src="/Group 103.png" alt />
                    </div>
                </div>
                <div class="flex-col flex-1">
                    <!-- <div class>
                        <h1 class="text-[#C19B3F] ml-auto">Request a Demo</h1>
                    </div>-->
                    <div class="flex flex-col gap-y-[40px] my-auto mx-auto">
                        <nuxt-link to="vividly/service" class="flex flex-col gap-y-[1px] mx-auto">
                            <div class="flex gap-x-[15px] h-fit">
                                <div class="flex gap-x-[13px] -translate-x-10">
                                    <span
                                        class="text-[28px] text-white font-[600] -translate-y-4"
                                    >01</span>
                                    <h1 class="font-normal text-white text-[33px]">Endless Ideas</h1>
                                </div>
                                <svg
                                    class="my-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        id="Subtraction_7"
                                        data-name="Subtraction 7"
                                        d="M-1325,27a7.947,7.947,0,0,1-5.657-2.343A7.948,7.948,0,0,1-1333,19a8.009,8.009,0,0,0,8-8,7.947,7.947,0,0,1,5.657,2.343A7.947,7.947,0,0,1-1317,19a7.948,7.948,0,0,1-2.343,5.657A7.947,7.947,0,0,1-1325,27Z"
                                        transform="translate(1333 -11)"
                                        fill="#b18f3c"
                                    />
                                </svg>
                            </div>
                            <h2 class="text-[60px] text-white font-[600]">Strong Branding</h2>
                        </nuxt-link>
                        <nuxt-link to="vividly/service" class="flex flex-col gap-y-[1px] mx-auto">
                            <div class="flex gap-x-[15px] h-fit">
                                <div class="flex gap-x-[13px] -translate-x-10">
                                    <span
                                        class="text-[28px] text-white font-[600] -translate-y-4"
                                    >01</span>
                                    <h1 class="font-normal text-white text-[33px]">Endless Ideas</h1>
                                </div>
                                <svg
                                    class="my-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        id="Subtraction_7"
                                        data-name="Subtraction 7"
                                        d="M-1325,27a7.947,7.947,0,0,1-5.657-2.343A7.948,7.948,0,0,1-1333,19a8.009,8.009,0,0,0,8-8,7.947,7.947,0,0,1,5.657,2.343A7.947,7.947,0,0,1-1317,19a7.948,7.948,0,0,1-2.343,5.657A7.947,7.947,0,0,1-1325,27Z"
                                        transform="translate(1333 -11)"
                                        fill="#b18f3c"
                                    />
                                </svg>
                            </div>
                            <h2 class="text-[60px] text-white font-[600]">Strong Branding</h2>
                        </nuxt-link>
                        <nuxt-link to="vividly/service" class="flex flex-col gap-y-[1px] mx-auto">
                            <div class="flex gap-x-[15px] h-fit">
                                <div class="flex gap-x-[13px] -translate-x-10">
                                    <span
                                        class="text-[28px] text-white font-[600] -translate-y-4"
                                    >01</span>
                                    <h1 class="font-normal text-white text-[33px]">Endless Ideas</h1>
                                </div>
                                <svg
                                    class="my-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        id="Subtraction_7"
                                        data-name="Subtraction 7"
                                        d="M-1325,27a7.947,7.947,0,0,1-5.657-2.343A7.948,7.948,0,0,1-1333,19a8.009,8.009,0,0,0,8-8,7.947,7.947,0,0,1,5.657,2.343A7.947,7.947,0,0,1-1317,19a7.948,7.948,0,0,1-2.343,5.657A7.947,7.947,0,0,1-1325,27Z"
                                        transform="translate(1333 -11)"
                                        fill="#b18f3c"
                                    />
                                </svg>
                            </div>
                            <h2 class="text-[60px] text-white font-[600]">Strong Branding</h2>
                        </nuxt-link>
                        <nuxt-link to="vividly/service" class="flex flex-col gap-y-[1px] mx-auto">
                            <div class="flex gap-x-[15px] h-fit">
                                <div class="flex gap-x-[13px] -translate-x-10">
                                    <span
                                        class="text-[28px] text-white font-[600] -translate-y-4"
                                    >01</span>
                                    <h1 class="font-normal text-white text-[33px]">Endless Ideas</h1>
                                </div>
                                <svg
                                    class="my-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        id="Subtraction_7"
                                        data-name="Subtraction 7"
                                        d="M-1325,27a7.947,7.947,0,0,1-5.657-2.343A7.948,7.948,0,0,1-1333,19a8.009,8.009,0,0,0,8-8,7.947,7.947,0,0,1,5.657,2.343A7.947,7.947,0,0,1-1317,19a7.948,7.948,0,0,1-2.343,5.657A7.947,7.947,0,0,1-1325,27Z"
                                        transform="translate(1333 -11)"
                                        fill="#b18f3c"
                                    />
                                </svg>
                            </div>
                            <h2 class="text-[60px] text-white font-[600]">Strong Branding</h2>
                        </nuxt-link>
                        <nuxt-link to="vividly/service" class="flex flex-col gap-y-[1px] mx-auto">
                            <div class="flex gap-x-[15px] h-fit">
                                <div class="flex gap-x-[13px] -translate-x-10">
                                    <span
                                        class="text-[28px] text-white font-[600] -translate-y-4"
                                    >01</span>
                                    <h1 class="font-normal text-white text-[33px]">Endless Ideas</h1>
                                </div>
                                <svg
                                    class="my-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        id="Subtraction_7"
                                        data-name="Subtraction 7"
                                        d="M-1325,27a7.947,7.947,0,0,1-5.657-2.343A7.948,7.948,0,0,1-1333,19a8.009,8.009,0,0,0,8-8,7.947,7.947,0,0,1,5.657,2.343A7.947,7.947,0,0,1-1317,19a7.948,7.948,0,0,1-2.343,5.657A7.947,7.947,0,0,1-1325,27Z"
                                        transform="translate(1333 -11)"
                                        fill="#b18f3c"
                                    />
                                </svg>
                            </div>
                            <h2 class="text-[60px] text-white font-[600]">Strong Branding</h2>
                        </nuxt-link>
                        <!-- <nuxt-link to="/service" class="flex flex-col gap-y-[1px] mx-auto">
                            <div class="flex gap-x-[15px] h-fit">
                                <div class="flex gap-x-[13px] -translate-x-10">
                                    <span
                                        class="text-[28px] text-white font-[600] -translate-y-4"
                                    >01</span>
                                    <h1 class="font-normal text-white text-[33px]">Endless Ideas</h1>
                                </div>
                                <svg
                                    class="my-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        id="Subtraction_7"
                                        data-name="Subtraction 7"
                                        d="M-1325,27a7.947,7.947,0,0,1-5.657-2.343A7.948,7.948,0,0,1-1333,19a8.009,8.009,0,0,0,8-8,7.947,7.947,0,0,1,5.657,2.343A7.947,7.947,0,0,1-1317,19a7.948,7.948,0,0,1-2.343,5.657A7.947,7.947,0,0,1-1325,27Z"
                                        transform="translate(1333 -11)"
                                        fill="#b18f3c"
                                    />
                                </svg>
                            </div>
                            <h2 class="text-[60px] text-white font-[600]">Strong Branding</h2>
                        </nuxt-link>-->
                        <!-- <div class="flex flex-col gap-y-[1px] mx-auto">
                            <div class="flex gap-x-[15px] h-fit">
                                <div class="flex gap-x-[13px] -translate-x-10">
                                    <span
                                        class="text-[28px] text-white font-[600] -translate-y-4"
                                    >01</span>
                                    <h1 class="font-normal text-white text-[33px]">Endless Ideas</h1>
                                </div>
                                <svg
                                    class="my-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        id="Subtraction_7"
                                        data-name="Subtraction 7"
                                        d="M-1325,27a7.947,7.947,0,0,1-5.657-2.343A7.948,7.948,0,0,1-1333,19a8.009,8.009,0,0,0,8-8,7.947,7.947,0,0,1,5.657,2.343A7.947,7.947,0,0,1-1317,19a7.948,7.948,0,0,1-2.343,5.657A7.947,7.947,0,0,1-1325,27Z"
                                        transform="translate(1333 -11)"
                                        fill="#b18f3c"
                                    />
                                </svg>
                            </div>
                            <h2 class="text-[60px] text-white font-[600]">Strong Branding</h2>
                        </div>
                        <div class="flex flex-col gap-y-[1px] mx-auto">
                            <div class="flex gap-x-[15px] h-fit">
                                <div class="flex gap-x-[13px] -translate-x-10">
                                    <span
                                        class="text-[28px] text-white font-[600] -translate-y-4"
                                    >01</span>
                                    <h1 class="font-normal text-white text-[33px]">Endless Ideas</h1>
                                </div>
                                <svg
                                    class="my-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        id="Subtraction_7"
                                        data-name="Subtraction 7"
                                        d="M-1325,27a7.947,7.947,0,0,1-5.657-2.343A7.948,7.948,0,0,1-1333,19a8.009,8.009,0,0,0,8-8,7.947,7.947,0,0,1,5.657,2.343A7.947,7.947,0,0,1-1317,19a7.948,7.948,0,0,1-2.343,5.657A7.947,7.947,0,0,1-1325,27Z"
                                        transform="translate(1333 -11)"
                                        fill="#b18f3c"
                                    />
                                </svg>
                            </div>
                            <h2 class="text-[60px] text-white font-[600]">Strong Branding</h2>
                        </div>-->

                        <!-- <h1 class="text-[45px]">Strong Branding</h1>
                        <h1 class="text-[45px]">Strong Branding</h1>
                        <h1 class="text-[45px]">Strong Branding</h1>
                        <h1 class="text-[45px]">Strong Branding</h1>
                        <h1 class="text-[45px]">Strong Branding</h1>-->
                    </div>
                </div>
            </div>
        </div>

        <div class="relative flex flex-row ml-20">
            <p
                class="lg:text-[100px] 2xl:text-[153px] text-white leading-[115px] font-[900] lg:max-w-[550px] 2xl:max-w-[765px]"
            >
                TURN YOUR
                <span data-cursor-hover class="text-[#C19B3F]">UNIQUE IDEA</span> INTO A
                <span data-cursor-hover class="text-[#C19B3F]">UNIQUE PRODUCT</span>
            </p>
            <!-- <div class="absolute top-[6%] left-[48%] blob1">
                <div
                    data-cursor-hover
                    class="text-[#AAAAAA] text-[24px] -translate-y-20 -rotate-90"
                >Impressive</div>
            </div>
            <div class="absolute blob5 top-[3%] right-[14%]">
                <div
                    data-cursor-hover
                    class="text-[#AAAAAA] text-[24px] -translate-y-24 -rotate-90"
                >Impressive</div>
            </div>
            <div class="absolute top-[54%] left-[43%] blob2">
                <div
                    data-cursor-hover
                    class="text-[#AAAAAA] text-[24px] translate-x-32 translate-y-28"
                >Impressive</div>
            </div>
            <div class="absolute blob3 top-[54%] left-[60%]">
                <div
                    data-cursor-hover
                    class="text-[#AAAAAA] text-[24px] translate-y-32 translate-x-52"
                >Impressive</div>
            </div>
            <div class="absolute blob4 top-[73%] right-[6%]">
                <div
                    data-cursor-hover
                    class="text-[#AAAAAA] text-[24px] translate-x-40 translate-y-32"
                >Impressive</div>
            </div>-->
            <!-- <div class="absolute z-30 top-[46%] right-72">
                <img src="/Group 103.svg" alt />
            </div>-->
            <!-- <div class="flex w-1/6">
                <div class="h-2 p-1 bg-white rounded-full"></div>
                <div class="w-full my-auto bg-white border-[1px] border-dashed border-sky-500"></div>
                <div class="h-2 p-1 bg-white rounded-lg"></div>
            </div>-->
            <button
                :class="{ 'bg-[#202020] ': serv, 'bg-[#2C2C2C]': !serv }"
                class="absolute z-50 -top-72 2xl:-right-[96vw] lg:-right-[94vw] transition-colors items-start align-top duration-150 rounded-l-full rounded-full h-[100vh] w-[100vw]"
                @click="serv = !serv"
            >
                <div
                    v-if="!serv"
                    data-cursor-hover
                    class="text-[24px] text-white absolute -left-4 flex gap-x-2 align-top -rotate-90"
                >
                    Services
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="{2}"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </div>
                <div
                    v-if="serv"
                    data-cursor-hover
                    class="text-[24px] text-white absolute -left-4 flex gap-x-2 align-top -rotate-90"
                >
                    close
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="{2}"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </button>
            <div class="relative">
                <!-- <img src="/Group 104.png" class="relative z-30 2xl:max-w-full lg:max-w-[600px]" alt /> -->
                <div class="z-30 group">
                    <!-- <div
                        class="absolute top-0 w-[349px] h-[349px] scale-110 z-30 group-hover:scale-125"
                    >
                        <img src="/blob1.png" class="relative z-40 object-cover" />
                    </div>
                     <div class="relative z-20 blob1"></div> 

                    <div class="absolute z-20 group-hover:scale-x-105 top-2 -left-2 blob1r"></div>
                    <div class="absolute z-20 text-white text-[24px] -right-4 top-1/2">Unique</div>-->
                    <div
                        class="mx-auto justify-center flex flex-row gap-x-10 flex-wrap max-w-[800px]"
                    >
                        <Blobs />
                        <Blobs />
                        <Blobs />
                        <Blobs />
                        <Blobs />
                    </div>
                </div>
                <!-- <div class="relative z-30 w-32 h-32">
                    <svg class="relative z-30" viewBox="0 0 200 200">
                        <path d fill="#FFFFFF" />
                    </svg>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import Blobs from "./blobs.vue"
export default {
    components: { Blobs },
    data() {
        return {
            serv: false
        };
    },
    watch: {
        serv(val) {
            if (val) {
                document
                    .querySelector("body")
                    .classList.add("overflow-hidden", "h-screen", "w-screen");
                return;
            }
            document
                .querySelector("body")
                .classList.remove("overflow-hidden", "h-screen", "w-screen");
        }
    },
    mounted() {
        // $('#parent').connections({ to: '.child' });

        // jQuery(document).ready(function () {
        // });;

    },
    methods: {

    },
}
</script>
<style scoped>
.ssvg {
    width: 90vmin;
    height: 90vmin;
}
.lotus {
    background: #c09a3e 0% 0% no-repeat padding-box;
    border-radius: 454px 0px 454px 8px;
    width: fit-content;
    height: fit-content;
}
.blob1 {
    width: 329px;
    height: 329px;
    transform: matrix(0.07, 1, -1, 0.07, 0, 0);
    /* UI Properties */
    background: #2c2c2c 0% 0% no-repeat padding-box;
    border-radius: 110px 136px 166px 113px;
    opacity: 1;
    /* border: 1px solid rgba(255, 255, 255, 0.452); */
    transition: transform 0.4s, height 0.4s;
}

.blob1:hover {
    width: 329px;
    height: 329px;
    transform: scale(1.1);
    /* UI Properties */
    background: #2c2c2c 0% 0% no-repeat padding-box;
    border-radius: 110px 136px 166px 113px;
    opacity: 1;
}
.blob1r {
    width: 329px;
    height: 329px;
    transform: matrix(0.07, 1, -1, 0.07, 0, 0);
    /* UI Properties */
    background: transparent 0% 0% no-repeat padding-box;
    border-radius: 110px 136px 166px 113px;
    opacity: 1;
    border: 1px solid rgba(255, 255, 255, 0.452);
}

.blob2 {
    width: 225px;
    height: 225px;
    background: #2c2c2c 0% 0% no-repeat padding-box;
    border-radius: 57px 136px 166px 113px;
    opacity: 1;
}
.blob3 {
    width: 308px;
    height: 308px;
    background: #2c2c2c 0% 0% no-repeat padding-box;
    border-radius: 139px 61px 166px 113px;
    opacity: 1;
}
.blob4 {
    width: 260px;
    height: 259px;
    /* UI Properties */
    background: #2c2c2c 0% 0% no-repeat padding-box;
    border-radius: 184px 136px 166px 113px;
    opacity: 1;
}
.blob5 {
    width: 329px;
    height: 329px;
    transform: matrix(0.07, 1, -1, 0.07, 0, 0);
    /* UI Properties */
    background: #2c2c2c 0% 0% no-repeat padding-box;
    border-radius: 110px 136px 166px 113px;
    opacity: 1;
}
</style>
