<template>
    <div class="bg-[#202020]">
        <Navbar />
        <div class="container flex justify-between mx-auto my-auto">
            <div class="my-auto">
                <h1 class="text-white text-[36px]">#uiux / #appdesign /#appdevelopment</h1>
                <h1
                    class="2xl:text-[80px] my-auto text-white lg:text-[60px] font-bold 2xl:w-[527px] lg:w-[450px] leading-2"
                >
                    Coffee Time
                    <span>Mobile App</span>
                </h1>
            </div>

            <div class="relative z-30">
                <img src="/Mask Group 19.png" alt />
            </div>
        </div>
        <div class="container flex mx-auto mt-20">
            <div class="my-auto">
                <h1 class="text-[40px] text-white">About the projct</h1>
                <p
                    class="text-white text-[24px] lg:max-w-[524px] 2xl:max-w-[724px]"
                >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="relative z-30">
                <img class="mx-auto" src="/dfdfdf.png" alt />
            </div>
        </div>
        <div class="relative z-30 bg-[#FD1E4D]">
            <img src="/Mask Group 21.png" alt />
        </div>
        <div class="container flex mx-auto my-32 gap-x-10">
            <div>
                <h1 class="my-auto text-white text-bold text-[28px]">Our portfolio</h1>
            </div>
            <div class="flex flex-col gap-y-10">
                <h2 class="w-[239px] font-semibold text-[36px] text-white">
                    Check our
                    creative works
                </h2>
                <p
                    class="lg:w-[900px] text-[28px] 2xl:w-[1328px] text-white"
                >At Vividly, we overcome challenges, get results and drive value for our clients and partners. Check out some of our customers’ success stories below.</p>
                <div class="relative z-30 flex gap-x-5">
                    <img src="/Comp.png" alt />
                    <img src="/Comp.png" alt />
                    <img src="/Comp.png" alt />
                </div>
            </div>
        </div>
        <Footly />
    </div>
</template>

<script>
import Navbar from '~/components/Vividly/Navbar.vue'
import Footly from '~/components/Vividly/Footly.vue'
export default {
    components: { Navbar, Footly }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap");
div {
    font-family: "Cairo", sans-serif;
    cursor: none;
}
</style>