<template>
    <div class="container flex justify-around mx-auto">
        <div class="py-[340px] flex flex-col text-center gap-y-2">
            <h1
                class="font-semibold text-[24px] leading-[36px] text-transparent bg-clip-text bg-gradient-to-l from-[#0CA092] to-[#74C38B]"
            >What’s VReal?</h1>
            <div
                class="font-[300] text-[18px] text-center leading-[27px] max-w-[600px] mx-auto"
            >V real is a collection of solutions made to serve the real estate industry, we know how buying and selling the property nowadays become difficult and how the company’s sales team struggling to find the potential customer and close the deal, also on the other hand the property buyer has a lot of issues with the property details information availability</div>
        </div>
        <div class="relative z-30 max-w-[600px] my-auto">
            <client-only>
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide class="w-[461px] h-[301px]">
                        <img class="object-cover" src="/img13.png" alt />
                        <div></div>
                    </swiper-slide>
                    <swiper-slide class="w-[461px] h-[301px]">
                        <img class="object-cover" src="/img13.png" alt />
                        <div></div>
                    </swiper-slide>
                    <swiper-slide class="w-[461px] h-[301px]">
                        <img class="object-cover" src="/img13.png" alt />
                        <div></div>
                    </swiper-slide>
                    <div slot="pagination" class="swiper-pagination"></div>
                </swiper>
            </client-only>
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'

export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,

                }
            },
            ports: null
        }
    },
}
</script>

<style lang="scss" scoped>
</style>