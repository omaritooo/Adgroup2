<template>
    <div class="bg-gray-100 rounded-3xl">
        <div class="flex flex-col h-screen py-12 lg:pl-32 lg:flex-row lg:my-12">
            <div class="flex flex-col w-full mx-auto my-auto text-center lg:mx-0 lg:w-1/3 gap-y-2">
                <h1 class="text-3xl font-medium lg:text-6xl">Portfolio</h1>
                <h2 class="text-2xl font-light lg:text-4xl">Previous work and portfolio</h2>
                <p
                    class="text-xl lg:text-2xl"
                >Constant improvement for businesses and technologies is what we aim for, by devoting our expertise and hard work into each project we work on.</p>
            </div>
            <div class="w-full py-2 my-auto lg:ml-auto lg:w-1/2">
                <client-only>
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide v-for="p in ports" :key="p.index">
                            <div
                                class="w-[500px] h-[450px]"
                                @click="$router.push(`/portfolio/${p.id}`)"
                            >
                                <img class="object-cover w-full h-full" :src="p.thumbnail_path" alt />
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
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 2,
                spaceBetween: 460,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            ports: null
        }
    },
    mounted() {
        this.$axios.get('https://api.modernegy.tech/api/v1/folios').then(res => (this.ports = res.data.data));
    },
}
</script>

<style scoped>
/* img {

/* img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
} */
.slide {
    background-position: center;
    background-size: cover;
    background-image: url("/img13.png");
}
</style>
