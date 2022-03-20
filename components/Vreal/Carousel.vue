<template>
    <div class="bg-[#F7F6F6]">
        <div
            class="font-[700] mb-[52px] text-center text-[24px] leading-[36px] text-transparent bg-clip-text bg-gradient-to-l from-[#0CA092] to-[#74C38B]"
        >Services</div>
        <client-only>
            <swiper class="h-full overflow-x-hidden swipe" :options="swiperOption">
                <swiper-slide v-for="inf in services" :key="inf.index">
                    <div class="relative z-30" @click="$router.push(`/vreal/services/${inf.id}`)">
                        <img
                            :src="inf.thumbnail_path"
                            class="w-full h-full bg-black rounded-lg"
                            alt
                        />
                    </div>
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
        <nuxt-link to="#why">
            <div class="px-4 mx-auto bg-gray-200 rounded-3xl w-fit py-7">
                <svg
                    class="w-6 h-6 animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="{2}"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </nuxt-link>
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