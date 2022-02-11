<template>
    <div class="py-10">
        <div class="relative mx-auto group w-fit">
            <div
                class="absolute z-20 p-2 duration-300 transform bg-gradient-to-r from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF] rounded-full group-hover:bg-gradient-to-r group-hover:from-[#000303] group-hover:via-[#000000] group-hover:to-[#000000] text-7xl -bottom-4 -right-2 group-hover:bottom-[27%] group-hover:right-[27%]"
            ></div>
            <div
                class="z-10 p-5 bg-gradient-to-r from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF] rounded-full"
            ></div>
        </div>
        <button
            class="block px-3 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer focus:outline-none"
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
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
        }
    },

}
</script>

<style>
</style>