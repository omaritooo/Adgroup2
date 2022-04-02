<template>
    <div class="h-screen overflow-hidden bg-gray-300 max-w-screen">
        <div class="flex">
            <div class="flex h-screen">
                <div
                    :class="tester.test1 ? 'w-full lg:w-[84vw] 2xl:w-[87vw]' : 'w-0 opacity-0'"
                    class="transition-all duration-300 bg-[#D9EAEE]"
                >
                    <div class="flex flex-col py-40 lg:px-40 2xl:px-72 gap-y-5">
                        <img class="relative z-30 w-20 h-20" src="/vreal.svg" />
                        <h1
                            class="text-transparent text-4xl font-semibold bg-clip-text bg-gradient-to-l from-[#00CFFF] to-[#006880]"
                        >Giving life to your projects</h1>
                        <div
                            class="text-lg text-black max-w-[700px]"
                        >V real is a collection of solutions made to serve the real estate industry, we know how buying and selling the property nowadays become difficult and how the company’s sales team struggling to find the potential customer and close the deal, also on the other hand the property buyer has a lot of issues with the property details information availability</div>
                        <nuxt-link
                            to="/vreal"
                            class="bg-gradient-to-b from-[#00CFFF] to-[#006880] relative z-50 cursor-pointer px-4 py-2 w-fit text-white rounded-lg"
                        >Visit website</nuxt-link>
                    </div>
                </div>
                <div
                    data-cursor-hover
                    class="relative z-30 cursor-pointer text-white font-light h-full my-auto text-center w-fit bg-gradient-to-b from-[#00CFFF] to-[#006880]"
                    @click="toggle1"
                >
                    <div class="m-auto text-[24px] rotate-90 lg:mt-72">VREAL</div>
                    <div class="mx-auto bg-white h-[150px] mt-10 w-[2px]"></div>
                </div>
            </div>
            <div class="flex h-screen">
                <div
                    :class="tester.test2 ? 'w-full lg:w-[84vw] 2xl:w-[87vw]' : 'w-0 opacity-0'"
                    class="transition duration-300 bg-[#E3E8F0] my-auto-all"
                >
                    <div class="flex flex-col lg:p-40 2xl:p-52 gap-y-5">
                        <img class="relative z-30 w-20 h-20" src="/Group 7.svg" />
                        <h1
                            class="text-transparent text-4xl font-semibold bg-clip-text bg-gradient-to-l from-[#547DBF] to-[#2A3F60]"
                        >Giving life to your projects</h1>
                        <div
                            class="text-lg text-black max-w-[700px]"
                        >V real is a collection of solutions made to serve the real estate industry, we know how buying and selling the property nowadays become difficult and how the company’s sales team struggling to find the potential customer and close the deal, also on the other hand the property buyer has a lot of issues with the property details information availability</div>
                        <nuxt-link
                            to="/vividly"
                            class="bg-gradient-to-b from-[#547DBF] cursor-pointer relative z-50 to-[#2A3F60] w-fit text-white rounded-lg px-4 py-2"
                        >Visit website</nuxt-link>
                    </div>
                </div>
                <div
                    data-cursor-hover
                    class="h-full w-fit bg-gradient-to-b cursor-pointer from-[#547DBF] to-[#2A3F60]"
                    @click="toggle2"
                >
                    <div
                        class="mx-auto my-auto text-[24px] text-center text-white uppercase rotate-90 font-light lg:mt-72"
                    >Vividly</div>
                    <div class="mx-auto bg-white h-[150px] mt-10 w-[2px]"></div>
                </div>
            </div>
            <div class="flex h-screen">
                <div
                    :class="tester.test3 ? 'w-full lg:w-[84vw] 2xl:w-[87vw]' : 'w-0 opacity-0'"
                    class="transition-all duration-300 bg-[#D7EFE9]"
                >
                    <div class="flex flex-col lg:p-44 2xl:p-52 gap-y-5">
                        <img class="relative z-30 w-20 h-20" src="/Group 8.svg" />
                        <h1
                            class="text-transparent text-4xl font-semibold bg-clip-text bg-gradient-to-l from-[#0CA092] to-[#74C38B]"
                        >Giving life to your projects</h1>
                        <div
                            class="text-lg text-black max-w-[700px]"
                        >V real is a collection of solutions made to serve the real estate industry, we know how buying and selling the property nowadays become difficult and how the company’s sales team struggling to find the potential customer and close the deal, also on the other hand the property buyer has a lot of issues with the property details information availability</div>

                        <nuxt-link
                            to="/smarty"
                            class="bg-gradient-to-b from-[#0CA092] to-[#83C88A] relative z-50 cursor-pointer w-fit text-white rounded-lg px-4 py-2"
                        >Visit website</nuxt-link>
                    </div>
                </div>
                <div
                    data-cursor-hover
                    class="h-full w-fit bg-gradient-to-b cursor-pointer from-[#0CA092] to-[#83C88A]"
                    @click="toggle3"
                >
                    <div
                        class="relative mx-auto my-auto text-3xl font-light text-center text-white w-fit"
                    >
                        <div class="flex text-[24px] uppercase rotate-90 lg:mt-72">
                            Smarty
                            <!-- <div class="w-[55px] p-1 bg-white my-auto"></div> -->
                        </div>
                        <div class="mx-auto bg-white h-[150px] mt-10 w-[2px]"></div>
                    </div>
                </div>
            </div>
            <div
                :class="tester.test3 || tester.test2 || tester.test1 ? 'w-0 hidden opacity-0' : 'w-full'"
                class="flex flex-col my-auto lg:p-40 2xl:p-52 gap-y-5"
            >
                <h1 class="text-4xl font-semibold text-black">OUR SERVICES</h1>
                <div
                    class="text-lg text-black max-w-[700px] transition-all duration-150"
                >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</div>
                <div class="relative z-30 flex gap-x-4">
                    <img class="cursor-pointer" src="/vreal.svg" @click="toggle1" />
                    <img class="cursor-pointer" src="/Group 7.svg" alt @click="toggle2" />
                    <img class="cursor-pointer" src="/Group 8.svg" alt @click="toggle3" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tester:
            {
                test1: false,
                test2: false,
                test3: false,
            }
            ,
            items: [
                {
                    title: 'Vue Particles',
                    text: 'Vuejs Feed',
                    url: '#',
                    image: '/img13.png'
                },
                {
                    title: 'Vue Particles',
                    text: 'Vuejs Feed',
                    url: '#',
                    image: '/img13.png'
                },
                {
                    title: 'Vue Particles',
                    text: 'Vuejs Feed',
                    url: '#',
                    image: '/img13.png'
                },

            ],
            styles: {
                // this will be bound to the style attribute of all `div`s inside the accordion
                div: {
                    height: '350px'
                },
                // this will be bound to the style attribute of all `ul`s inside the accordion
                ul: {
                    color: '#F00'
                },
                // this will be bound to the style attribute of all `li`s inside the accordion
                li: {
                    fontSize: '22px'
                },
                // this will be bound to the style attribute of all `a`s inside the accordion
                a: {
                    padding: '30px'
                },
                // this will be bound to the style attribute of all `h2`s inside the accordion
                h2: {
                    marginTop: '100px'
                },
                // this will be bound to the style attribute of all `p`s inside the accordion
                p: {
                    textTransform: 'uppercase'
                }
            }
        }
    },
    methods: {
        toggle1() {
            this.tester.test1 = !this.tester.test1;
            this.tester.test2 = false;
            this.tester.test3 = false;
        },
        toggle2() {
            this.tester.test2 = !this.tester.test2;
            this.tester.test1 = false;
            this.tester.test3 = false;
        },
        toggle3() {
            this.tester.test3 = !this.tester.test3;
            this.tester.test1 = false;
            this.tester.test2 = false;
        }
    },
}
</script>

<style>
</style>