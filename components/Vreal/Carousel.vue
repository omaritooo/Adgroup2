<template>
    <div class="bg-[#F7F6F6]">
        <div
            class="font-[700] uppercase mb-[52px] text-center text-[24px] leading-[36px] text-transparent bg-clip-text bg-gradient-to-l from-[#0CA092] to-[#74C38B]">
            OuR Services</div>
        <client-only>
            <div>
                <swiper class="h-full overflow-x-hidden swipe" :options="swiperOption" >
                    <swiper-slide v-for="inf in services" :key="inf.index" class="relative"
                        @click="$router.push(`/vreal/services/${inf.id}`)">
                        <div class="relative z-30" @click="$router.push(`/vreal/services/${inf.id}`)">
                            <img :src="inf.thumbnail_path" class="w-full h-full bg-black rounded-lg" alt
                                @click="$router.push(`/vreal/services/${inf.id}`)" />
                        </div>
                        <div class="absolute top-0 left-0 z-30 w-full opacity-0 hover:opacity-100 transition-opacity duration-200 h-full bg-gradient-to-r from-[#0CA092] to-[#74C38B] text-white"
                            @click="$router.push(`/vreal/services/${inf.id}`)">
                            <div class="absolute content-center mx-auto text-center align-middle right-1/2 top-1/2"
                                @click="$router.push(`/vreal/services/${inf.id}`)">{{ inf.title }}</div>
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
            </div>
        </client-only>
        <nuxt-link class="my-4" to="#why">
            <div class="px-4 mx-auto bg-gray-200 rounded-3xl w-fit py-7">
                <svg class="w-6 h-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="{2}">
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
    clip-path: ellipse(61% 45% at 51% 45%);
    /* clip-path: ellipse(50% 50% at 50% 50%); */

}
</style>