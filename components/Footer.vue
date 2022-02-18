<template>
    <div
        class="flex-col justify-around h-screen pt-48 subpixel-antialiased bg-gray-100 rounded-t-3xl rouded-t-lg"
    >
        <div class="relative flex flex-col justify-center gap-y-6 lg:flex-row pb-36">
            <div class="w-full px-6 my-auto lg:w-1/2">
                <h1 class="text-4xl font-bold text-center text-gray-900 lg:w-1/2">LET’S GET STARTED</h1>
                <p
                    class="text-3xl font-thin text-center text-gray-900 lg:w-1/2 text-clip"
                >Contact us now and tell us more about your project</p>
            </div>
            <div class="order-last w-full px-6 mx-auto mb-6 lg:mx-0 lg:mb-0 lg:w-1/3 lg:order-last">
                <form class="flex flex-col w-11/12 text-black gap-y-3">
                    <input
                        type="text"
                        name
                        placeholder="Name"
                        class="w-full p-4 placeholder-current bg-white border border-black border-opacity-75 rounded-lg"
                    />
                    <div class="flex gap-x-3">
                        <input
                            type="text"
                            name
                            placeholder="Phone"
                            class="w-full p-4 placeholder-current bg-white border border-black border-opacity-75 rounded-lg"
                        />
                        <input
                            type="text"
                            name
                            placeholder="Email"
                            class="w-full p-4 placeholder-current bg-white border border-black border-opacity-75 rounded-lg"
                        />
                    </div>
                    <textarea
                        rows="4"
                        class="w-full p-4 placeholder-current bg-white border border-black border-opacity-75 rounded-lg h-1/2"
                    ></textarea>
                    <button
                        class="w-full p-4 text-black text-2xl placeholder-current bg-gradient-to-r from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF] border rounded-b-lg bg-site-babyblue border-opacity-20"
                    >Send</button>
                </form>
            </div>
            <nuxt-link to="#navbar">
                <div
                    class="absolute p-4 bg-gradient-to-r from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF] rounded-full bottom-8 right-8"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="{2}"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </div>
            </nuxt-link>
        </div>
        <div class="bg-[#141414] relative flex px-12 lg:px-36 py-16 justify-around gap-x-11">
            <div class="justify-start hidden my-auto text-white lg:flex gap-x-11">
                <div>+20 226309636</div>
                <div>CARE@ADGROUP.TECH</div>
            </div>
            <img class="absolute z-50 top-6 left-[49%]" src="/adglogo.svg" />
            <!-- <div class="w-auto mx-auto my-auto"></div> -->
            <div class="flex justify-end my-auto text-white gap-x-3 lg:gap-x-11">
                <nuxt-link to>Home</nuxt-link>
                <nuxt-link to="#portfolio">Portfolio</nuxt-link>
                <nuxt-link to="#clients">Clients</nuxt-link>
                <nuxt-link to="#services">Services</nuxt-link>
                <nuxt-link to="#contact">Contact</nuxt-link>
            </div>
        </div>
        <div class="py-10 text-base font-medium text-center text-white bg-black">© COPYRIGHT ADGROUP</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>