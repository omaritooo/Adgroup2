<template>
    <div class="pb-64">
        <nav class="relative flex flex-wrap justify-around bg-blueGray-500">
            <nuxt-link to="/">
                <img class="w-48 h-48" src="/ad-logo.svg" />
            </nuxt-link>
            <div class="my-auto">
                <div :class="showMenu ? 'flex' : 'hidden'" class="absolute">
                    <transition
                        enter-active-class="transition duration-500 ease-out"
                        enter-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-500 ease-in"
                        leave-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <ul
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
                                :class="showMenu ? 'bg-gradient-to-r from-[#000303] via-[#000000] to-[#000000] text-7xl  bottom-[32%] right-[34%]' : ''"
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
</style>