<template>
    <div class="lg:pr-32">
        <nav class="relative flex flex-wrap justify-around ">
            <nuxt-link to="/">
                <img class="w-48 h-48" src="@/assets/ad-logo.svg" />
            </nuxt-link>
            <div class="my-auto">
                <div
                    :class="showMenu ? 'flex opacity-100 transition duration-500' : 'hidden opacity-0'"
                    class="absolute transition duration-500"
                >
                    <transition name="fade">
                        <ul
                            v-if="showMenu"
                            :class="showMenu ? 'opacity-100 transition duration-500' : 'hidden opacity-0'"
                            class="flex flex-col text-black list-none transition duration-500 md:gap-y-5 md:gap-x-7"
                        >
                            <li class="nav-item">
                                <nuxt-link to href="#">
                                    <button
                                        class="w-full px-2 mt-2 ml-auto uppercase md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                                    >Home</button>
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to href="#">
                                    <button
                                        class="w-full px-2 mt-2 translate-x-3 ml-auto uppercase -rotate-[30deg] md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                                    >About Us</button>
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to href="#">
                                    <button
                                        class="w-full px-2 mt-2 ml-auto uppercase translate-x-10 -rotate-[45deg] md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                                    >Services</button>
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to href="#">
                                    <button
                                        class="w-full px-2 mt-2 ml-auto uppercase translate-x-20 -rotate-[60deg] md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                                    >Portfolio</button>
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to href="#">
                                    <button
                                        class="w-full px-2 mt-2 ml-auto uppercase translate-x-36 -translate-y-10 -rotate-[90deg] md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                                    >Contact</button>
                                </nuxt-link>
                            </li>
                        </ul>
                    </transition>
                </div>
                <button
                    class="block my-auto text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer translate-x-44 h-fit w-fit focus:outline-none"
                    type="button"
                >
                    <button class="relative text-gray-500 focus:outline-none" @click="menu">
                        <span class="sr-only">Open main menu</span>
                        <div class="relative mx-auto group w-fit">
                            <div
                                :class="showMenu ? 'bg-gradient-to-r from-[#000303] via-[#000000] to-[#000000] text-7xl   -translate-x-5 -translate-y-7' : ''"
                                class="absolute z-20 p-1 duration-500 transform bg-gradient-to-r from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF] rounded-full text-7xl -bottom-4 -right-2"
                            ></div>
                            <div
                                :class="showMenu ? '' : 'p-1 border-2 border-[#7BD4AF] rounded-full'"
                            >
                                <div
                                    class="z-10 p-4 bg-gradient-to-r from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF] rounded-full"
                                ></div>
                            </div>
                        </div>
                    </button>
                </button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
        }
    },
    methods: {
        menu() {
            this.showMenu = !this.showMenu;
            console.log(this.showMenu)
        }
    },

}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>