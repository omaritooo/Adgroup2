<template>
    <div class="bg-[#F7F6F6]">
        <div
            class="font-[700] mb-[52px] text-center text-[24px] leading-[36px] text-transparent bg-clip-text bg-gradient-to-l from-[#0CA092] to-[#74C38B]"
        >Services</div>
        <client-only>
            <swiper class="h-full overflow-x-hidden swipe" :options="swiperOption">
                <swiper-slide v-for="inf in services" :key="inf.index">
                    <img :src="inf.thumbnail_path" class="w-full h-full bg-black rounded-lg" alt />
                </swiper-slide>
                <!-- <swiper-slide>
                    <img src="/img13.png" class="w-full h-full bg-black rounded-lg" alt />
                </swiper-slide>
                <swiper-slide>
                    <img src="/img13.png" class="w-full h-full bg-black rounded-lg" alt />
                </swiper-slide>
                <swiper-slide>
                    <img src="/img13.png" class="w-full h-full bg-black rounded-lg" alt />
                </swiper-slide>
                <swiper-slide>
                    <img src="/img13.png" class="w-full h-full bg-black rounded-lg" alt />
                </swiper-slide>
                <swiper-slide>
                    <img src="/img13.png" class="w-full h-full bg-black rounded-lg" alt />
                </swiper-slide>-->
            </swiper>
        </client-only>
        <div>
            <svg
                class="mx-auto mt-[120px]"
                width="56"
                height="88"
                viewBox="0 0 56 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="56" height="88" rx="28" fill="#EBEBEB" />
                <path
                    d="M22 24L28 30L34 24"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                loop: true,

                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            services: null,
        }
    },
    mounted() {
        this.$axios.get('https://api.modernegy.tech/api/v1/services').then(res => (this.services = res.data.data));
    },
}
</script>

<style>
.swipe {
    clip-path: polygon(
        0 0,
        8% 5%,
        25% 10%,
        71% 10%,
        89% 4%,
        100% 0,
        100% 100%,
        92% 93%,
        73% 88%,
        28% 88%,
        8% 93%,
        0 100%
    );
}
</style>