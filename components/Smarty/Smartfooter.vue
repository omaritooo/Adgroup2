<template>
    <div class="bg-[#171717]">
        <div class="container mx-auto">
            <div class="flex flex-col justify-between py-20 gap-y-5 lg:flex-row">
                <div class="relative z-30 my-auto">
                    <img src="/smartlog.png" alt />
                </div>
                <div class="relative flex flex-col text-white gap-y-2">
                    <h1 class="text-[24px] font-black">Links</h1>
                    <div class="flex text-[24px] font-extralight flex-col gap-y-[5px]">
                        <nuxt-link to>Home</nuxt-link>
                        <nuxt-link to>About us</nuxt-link>
                        <nuxt-link to>Services</nuxt-link>
                        <nuxt-link to>Showcase</nuxt-link>
                        <nuxt-link to>Contact us</nuxt-link>
                    </div>
                </div>
                <div class="relative z-30 flex flex-col text-white gap-y-2">
                    <h1 class="text-[24px] font-black">Get in touch</h1>
                    <div class="flex text-[24px] font-extralight flex-col gap-y-[5px]">
                        <div class="font-bold">
                            Email:
                            <span class="font-extralight">Info@smarty.com</span>
                        </div>
                        <div class="font-bold">
                            Location:
                            <span class="font-extralight">Fifth Settlement Compound</span>
                        </div>
                        <div class="font-bold">
                            Phone:
                            <span class="font-extralight">+2 123 532 678 | +2 123 532 678</span>
                        </div>
                        <div class="font-extralight">Retag (AD Group)</div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="relative z-30 text-center bg-black text-[24px] text-white py-10"
        >Copyright © 2022 AD Group. All Rights Reserved.</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>