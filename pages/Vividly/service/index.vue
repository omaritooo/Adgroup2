<template>
    <div class="bg-[#202020] relative overflow-hidden">
        <cursor-fx ref="cursor" outside-size="79px" oclor-hover="#FFFFFF" color="#FFFFFF" disabled />
        <Navbar class="absolute top-0 z-50 bg-transparent left-10" />
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
                        <div class="flex flex-col gap-y-[1px] mx-auto group">
                            <div class="flex gap-x-[15px] h-fit group-hover:opacity-25">
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
                            <h2
                                class="text-[60px] group-hover:opacity-25 text-white font-[600]"
                            >Strong Branding</h2>
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
                        </div>

                        <!-- <h1 class="text-[45px]">Strong Branding</h1>
                        <h1 class="text-[45px]">Strong Branding</h1>
                        <h1 class="text-[45px]">Strong Branding</h1>
                        <h1 class="text-[45px]">Strong Branding</h1>
                        <h1 class="text-[45px]">Strong Branding</h1>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between">
            <button
                :class="{ 'bg-[#202020] ': serv, 'bg-[#2C2C2C]': !serv }"
                class="absolute z-50 -top-12 2xl:-right-[96vw] lg:-right-[128vw] transition-colors items-start align-top duration-150 rounded-l-full rounded-full h-[1080px] w-[1920px]"
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
            <div class="mx-auto my-auto text-center text-white">
                <div>
                    <h1>#packaging / #branding /#brandIdentity</h1>

                    <h2 class="2xl:text-[80px] lg:text-[60px]">Endless Ideas of</h2>
                    <h2 class="2xl:text-[80px] lg:text-[60px]">Strong Branding</h2>
                </div>
            </div>
            <div>
                <img src="/Mask Group 10.png" class="relative z-30" alt />
            </div>
        </div>
        <div class="container mx-auto my-20">
            <div class="flex gap-x-5">
                <div class="flex gap-x-[15px] h-fit align-top">
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
                    <h1 class="font-normal text-white text-[28px]">Our portfolio</h1>
                </div>
                <p
                    class="2xl:max-w-[1240px] lg:max-w-[950px] font-thin text-white text-[24px]"
                >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="relative z-30 my-10">
                <img src="/Group 24.png" alt />
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex gap-x-[70px] align-top">
                <div class="flex gap-x-[15px] h-fit align-top">
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
                    <h1 class="font-normal text-white text-[28px]">Our portfolio</h1>
                </div>
                <div class="flex flex-col gap-y-[12px]">
                    <h1
                        class="max-w-[239px] text-white leading-[36px] font-[900] my-auto text-[36px]"
                    >Check out our creative works</h1>
                    <p
                        class="text-[28px] leading-[36px] text-white font-[400] max-w-[1320px]"
                    >At Vividly, we overcome challenges, get results and drive value for our clients and partners. Check out some of our customers’ success stories below.</p>

                    <div
                        class="flex relative z-40 flex-row max-w-[1465px] flex-wrap gap-x-[50px] gap-y-[50px]"
                    >
                        <nuxt-link to="/vividly/project">
                            <img src="/Mask Group 4.png" alt />
                        </nuxt-link>
                        <nuxt-link to="/vividly/project">
                            <img src="/Mask Group 4.png" alt />
                        </nuxt-link>
                        <nuxt-link to="/vividly/project">
                            <img src="/Mask Group 4.png" alt />
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative z-30 bg-[#C19B40] my-20">
            <img src="/Mask Group 9.png" />
        </div>
        <div class="container flex mx-auto">
            <div>
                <div class="flex gap-x-[15px] h-fit align-top">
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
                    <h1 class="text-white max-w-[439px] text-[48px] font-bold uppercase">
                        We work in
                        technologies like....
                    </h1>
                </div>
            </div>
            <div class="relative z-30">
                <img src="/Group 10444.png" alt />
            </div>
        </div>
        <Footly />
    </div>
</template>
<script>
import Navbar from "~/components/Vividly/Navbar.vue";
import Footly from "~/components/Vividly/Footly.vue";
export default {
    components: { Navbar, Footly },
    data() {
        return {
            serv: false
        }
    },
    watch: {
        serv(val) {
            if (val) {
                document
                    .querySelector('body')
                    .classList.add('overflow-hidden', 'h-screen', 'w-screen')
                return
            }

            document
                .querySelector('body')
                .classList.remove('overflow-hidden', 'h-screen', 'w-screen')
        }
    }, mounted() {
        this.$refs.cursor.start()
    },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap");
html {
    font-family: "Cairo", sans-serif;
    cursor: none;
}
.lotus {
    background: #c09a3e 0% 0% no-repeat padding-box;
    border-radius: 454px 0px 454px 8px;
    width: fit-content;
    height: fit-content;
}
</style>