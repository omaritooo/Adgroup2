<template>
    <div class="lg:px-[149px] py-[170px] w-screen flex flex-col container mx-auto">
        <h1
            class="lg:text-right 2xl:px-[190px] uppercase font-[700] text-[24px] leading-[32px] text-transparent bg-clip-text bg-gradient-to-t from-[#68BF8C] to-[#0CA092]"
        >Portfolio</h1>
        <div class="flex flex-col  lg:flex-row relative z-50 gap-y-4 justify-center gap-x-[40px]">
            <img class="lg:-translate-y-[20px] xl:w-[385px] xl:h-[500px] w-[385px] h-[500px] lg:w-[250px] lg:h-[400px]" src="/vrealport.png" alt />
            <img class="xl:w-[385px] xl:h-[500px] lg:w-[250px] lg:h-[400px]" src="/vrealport.png " alt />
            <img class="lg:translate-y-[20px] xl:w-[385px] xl:h-[500px] lg:w-[250px] lg:h-[400px]" src="/vrealport.png" alt />
        </div>
        <span
            class="font-[400] text-[18px] leading-[21px] lg:px-[195px]"
            @click="cliiper = !cliiper"
        >See more</span>
        <div
            v-if="cliiper"
            class="flex relative flex-col lg:flex-row z-50 justify-center mt-[240px] gap-x-[40px]"
        >
             <img class="lg:-translate-y-[20px] xl:w-[385px] xl:h-[500px] lg:w-[250px] lg:h-[400px]" src="/vrealport.png" alt />
            <img class="xl:w-[385px] xl:h-[500px] lg:w-[250px] lg:h-[400px]" src="/vrealport.png " alt />
            <img class="lg:translate-y-[20px] xl:w-[385px] xl:h-[500px] lg:w-[250px] lg:h-[400px]" src="/vrealport.png" alt />
        </div>
        <span v-if="cliiper" class="font-[400] text-[18px] leading-[21px] px-[195px]">All Projects</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cliiper: false
        }
    },
}
</script>

<style>
</style>