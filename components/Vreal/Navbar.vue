<template>
    <div class>
        <div class="flex py-[50px]">
            <nav class="relative flex flex-wrap justify-center w-screen bg-blueGray-500">
                <div class="container flex flex-wrap items-center justify-between">
                    <div
                        class="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-around"
                    >
                        <nuxt-link class="my-auto" to="/">
                            <img src="/vreal.svg" alt />
                        </nuxt-link>
                        <button
                            class="block px-3 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                            type="button"
                        >
                            <button
                                class="relative w-10 h-10 text-gray-500 focus:outline-none"
                                @click="showMenu = !showMenu"
                            >
                                <span class="sr-only">Open main menu</span>
                                <div
                                    class="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                                >
                                    <span
                                        aria-hidden="true"
                                        class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                                        :class="{
                                            'rotate-45': showMenu,
                                            ' -translate-y-1.5': !showMenu,
                                        }"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                                        :class="{ 'opacity-0': showMenu }"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                                        :class="{
                                            '-rotate-45': showMenu,
                                            ' translate-y-1.5': !showMenu,
                                        }"
                                    ></span>
                                </div>
                            </button>
                        </button>
                    </div>
                    <div
                        id="myNav"
                        :class="{ hidden: !showMenu, 'flex ': showMenu }"
                        class="lg:ml-auto md:items-start lg:items-end lg:flex lg:flex-grow"
                    >
                        <transition
                            enter-active-class="transition duration-100 ease-out"
                            enter-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0"
                        >
                            <ul
                                class="flex flex-col ml-auto list-none lg:ml-auto md:gap-y-4 lg:gap-x-[40px] lg:flex-row"
                            >
                                <!-- <li class="nav-item lg:py-[14px]">
                  <nuxt-link
                    class="font-semibold text-[14px] text-[#394452] leading-[16.44px]"
                    to
                  >Why bayn?</nuxt-link>
                                </li>-->
                                <li class="nav-item lg:py-[14px]">
                                    <nuxt-link
                                        class="font-semibold text-[14px] text-white leading-[16.44px]"
                                        to="/"
                                    >Home</nuxt-link>
                                </li>
                                <li class="nav-item lg:py-[14px]">
                                    <nuxt-link
                                        class="font-semibold text-[14px] text-white leading-[16.44px]"
                                        to="/"
                                    >About Us</nuxt-link>
                                </li>
                                <li class="nav-item lg:py-[14px]">
                                    <nuxt-link
                                        class="font-semibold text-[14px] text-white leading-[16.44px]"
                                        to="/"
                                    >Services</nuxt-link>
                                </li>
                                <li class="nav-item lg:py-[14px]">
                                    <nuxt-link
                                        class="font-semibold text-[14px] text-white leading-[16.44px]"
                                        to="/"
                                    >Portfolio</nuxt-link>
                                </li>
                                <li class="nav-item lg:py-[14px]">
                                    <nuxt-link
                                        class="font-semibold text-[14px] text-white leading-[16.44px]"
                                        to="/"
                                    >Contact Us</nuxt-link>
                                </li>
                                <!-- <li class="nav-item lg:py-[14px]">
                  <nuxt-link
                    class="font-semibold text-[14px] text-[#394452] leading-[16.44px]"
                    to
                  >About</nuxt-link>
                                </li>-->
                                <!-- <li class="nav-item lg:py-[14px]">
                  <nuxt-link
                    class="font-semibold text-[14px] text-[#394452] leading-[16.44px]"
                    to
                  >FAQ</nuxt-link>
                                </li>-->
                                <!-- <li class="nav-item lg:py-[14px]">
                  <nuxt-link
                    class="font-semibold text-[14px] ] text-[#394452] leading-[16.44px]"
                    to
                  >Contact Us</nuxt-link>
                                </li>-->
                            </ul>
                        </transition>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
        }
    },
    mounted() {
        // eslint-disable-next-line dot-notation
        // this.$refs['home'].focus()
    },
    method: {
        meth() { },
        toggleNavbar() {
            this.showMenu = !this.showMenu
            document.getElementById('myNav').style.width = '100%'
        },
    },
}
</script>

<style>
.overlay {
    height: 100%;
    width: 0;
    position: fixed;
    background-color: rgb(255, 255, 255);
    background-color: rgba(0, 96, 128, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}
</style>