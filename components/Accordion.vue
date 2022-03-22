<template>
    <div class="h-screen overflow-hidden bg-gray-300">
        <div class="flex">
            <div class="flex h-screen">
                <div
                    :class="tester.test1 ? 'w-full lg:w-[84vw] 2xl:w-[87vw]' : 'w-0 opacity-0'"
                    class="transition-all duration-300 bg-gray-300"
                >
                    <div class="flex flex-col py-40 lg:px-40 2xl:px-72 gap-y-5">
                        <img class="relative z-30 w-20 h-20" src="/smarty.svg" />
                        <h1>Giving life to your projects</h1>
                        <div class="text-lg text-black max-w-[700px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis cursus fringilla. Suspendisse egestas aliquam malesuada. Suspendisse vitae libero faucibus sapien volutpat auctor ac vitae purus. Vivamus at purus viverra mi dignissim pulvinar efficitur at lacus. Suspendisse laoreet rutrum pretium. Nam eget dapibus tellus, nec accumsan sapien. Sed fermentum magna eget nunc tempor pharetra. Aenean commodo tortor vitae leo efficitur, eget facilisis erat commodo. Vivamus quis elit facilisis, porttitor eros ut, scelerisque nibh. Maecenas semper massa at magna auctor tempus.
                            Nunc ut leo vitae metus fringilla iaculis sit amet quis ante. Etiam porta sapien in eleifend gravida. Donec blandit lacinia luctus. Maecenas hendrerit pulvinar massa et consectetur. Quisque tincidunt odio at odio porta, eget commodo lacus venenatis. Nullam luctus sagittis turpis, non lobortis nibh. Nullam eget accumsan elit, consectetur porttitor lacus.
                        </div>
                        <a>Visit your website</a>
                    </div>
                </div>
                <div
                    class="relative z-30 h-full my-auto text-center w-fit bg-[#8FE2F5]"
                    @click="toggle1"
                >
                    <div class="m-auto text-3xl rotate-90 lg:my-72">Vreal</div>
                </div>
            </div>
            <div class="flex h-screen">
                <div
                    :class="tester.test2 ? 'w-full lg:w-[84vw] 2xl:w-[87vw]' : 'w-0 opacity-0'"
                    class="transition duration-300 bg-gray-300 my-auto-all"
                >
                    <div class="flex flex-col lg:p-40 2xl:p-52 gap-y-5">
                        <img class="relative z-30 w-20 h-20" src="/smarty.svg" />
                        <h1>Giving life to your projects</h1>
                        <div class="text-lg text-black max-w-[700px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis cursus fringilla. Suspendisse egestas aliquam malesuada. Suspendisse vitae libero faucibus sapien volutpat auctor ac vitae purus. Vivamus at purus viverra mi dignissim pulvinar efficitur at lacus. Suspendisse laoreet rutrum pretium. Nam eget dapibus tellus, nec accumsan sapien. Sed fermentum magna eget nunc tempor pharetra. Aenean commodo tortor vitae leo efficitur, eget facilisis erat commodo. Vivamus quis elit facilisis, porttitor eros ut, scelerisque nibh. Maecenas semper massa at magna auctor tempus.
                            Nunc ut leo vitae metus fringilla iaculis sit amet quis ante. Etiam porta sapien in eleifend gravida. Donec blandit lacinia luctus. Maecenas hendrerit pulvinar massa et consectetur. Quisque tincidunt odio at odio porta, eget commodo lacus venenatis. Nullam luctus sagittis turpis, non lobortis nibh. Nullam eget accumsan elit, consectetur porttitor lacus.
                        </div>
                        <a>Visit your website</a>
                    </div>
                </div>
                <div class="h-full w-fit bg-[#B1C1DB]" @click="toggle2">
                    <div class="mx-auto my-auto text-3xl text-center rotate-90 lg:my-72">Vividly</div>
                </div>
            </div>
            <div class="flex h-screen">
                <div
                    :class="tester.test3 ? 'w-full lg:w-[84vw] 2xl:w-[87vw]' : 'w-0 opacity-0'"
                    class="transition-all duration-300 bg-gray-300"
                >
                    <div class="flex flex-col lg:p-44 2xl:p-52 gap-y-5">
                        <img class="relative z-30 w-20 h-20" src="/smarty.svg" />
                        <h1>Giving life to your projects</h1>
                        <div class="text-lg text-black max-w-[700px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis cursus fringilla. Suspendisse egestas aliquam malesuada. Suspendisse vitae libero faucibus sapien volutpat auctor ac vitae purus. Vivamus at purus viverra mi dignissim pulvinar efficitur at lacus. Suspendisse laoreet rutrum pretium. Nam eget dapibus tellus, nec accumsan sapien. Sed fermentum magna eget nunc tempor pharetra. Aenean commodo tortor vitae leo efficitur, eget facilisis erat commodo. Vivamus quis elit facilisis, porttitor eros ut, scelerisque nibh. Maecenas semper massa at magna auctor tempus.
                            Nunc ut leo vitae metus fringilla iaculis sit amet quis ante. Etiam porta sapien in eleifend gravida. Donec blandit lacinia luctus. Maecenas hendrerit pulvinar massa et consectetur. Quisque tincidunt odio at odio porta, eget commodo lacus venenatis. Nullam luctus sagittis turpis, non lobortis nibh. Nullam eget accumsan elit, consectetur porttitor lacus.
                        </div>
                        <a>Visit your website</a>
                    </div>
                </div>
                <div class="h-full w-fit bg-[#B5DAC7]" @click="toggle3">
                    <div class="relative w-full mx-auto my-auto text-3xl text-center">
                        <div class="rotate-90 lg:my-72">Smarty</div>
                    </div>
                </div>
            </div>
            <div
                :class="tester.test3 || tester.test2 || tester.test1 ? 'w-0 hidden opacity-0' : 'w-full'"
                class="lg:p-40 2xl:p-52"
            >
                <div class="text-lg text-black max-w-[700px] transition-all duration-150">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis cursus fringilla. Suspendisse egestas aliquam malesuada. Suspendisse vitae libero faucibus sapien volutpat auctor ac vitae purus. Vivamus at purus viverra mi dignissim pulvinar efficitur at lacus. Suspendisse laoreet rutrum pretium. Nam eget dapibus tellus, nec accumsan sapien. Sed fermentum magna eget nunc tempor pharetra. Aenean commodo tortor vitae leo efficitur, eget facilisis erat commodo. Vivamus quis elit facilisis, porttitor eros ut, scelerisque nibh. Maecenas semper massa at magna auctor tempus.
                    Nunc ut leo vitae metus fringilla iaculis sit amet quis ante. Etiam porta sapien in eleifend gravida. Donec blandit lacinia luctus. Maecenas hendrerit pulvinar massa et consectetur. Quisque tincidunt odio at odio porta, eget commodo lacus venenatis. Nullam luctus sagittis turpis, non lobortis nibh. Nullam eget accumsan elit, consectetur porttitor lacus.
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