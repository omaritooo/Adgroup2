<template>
    <div class="flex-col justify-around h-screen pt-48 subpixel-antialiased bg-white">
        <div class="relative flex justify-center pb-36">
            <div class="w-1/2 my-auto">
                <h1 class="w-1/2 text-4xl font-bold text-center text-gray-900">LET’S GET STARTED</h1>
                <p
                    class="w-1/2 text-3xl font-thin text-center text-gray-900 text-clip"
                >Contact us now and tell us more about your project</p>
            </div>
            <div class="order-first w-1/2 mb-6 lg:mb-0 lg:w-1/3 lg:order-last">
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
        </div>
        <div class="bg-[#141414] relative flex px-36 py-16 justify-around gap-x-11">
            <div class="flex justify-start my-auto text-white gap-x-11">
                <div>+20 226309636</div>
                <div>CARE@ADGROUP.TECH</div>
            </div>
            <img class="absolute top-6 left-[49%]" src="/adglogo.svg" />
            <!-- <div class="w-auto mx-auto my-auto"></div> -->
            <div class="flex justify-end my-auto text-white gap-x-11">
                <div>Home</div>
                <div>Portfolio</div>
                <div>Clients</div>
                <div>Services</div>
                <div>Contact</div>
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