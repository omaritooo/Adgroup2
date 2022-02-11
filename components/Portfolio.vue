<template>
    <div class="bg-red-300">
        <div class="flex h-screen py-64 pl-32">
            <div class="flex flex-col w-1/3 my-auto text-center gap-y-2">
                <h1 class="text-3xl font-medium">Portfolio</h1>
                <h2 class="text-2xl font-light">Previous work and portfolio</h2>
                <p
                    class="text-xl"
                >Constant improvement for businesses and technologies is what we aim for, by devoting our expertise and hard work into each project we work on.</p>
            </div>
            <div class="w-1/2 py-24 ml-auto">
                <client-only>
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide>
                            <img src="/img13.png" class="w-full h-full bg-black" alt />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/img13.png" class="w-full h-full bg-black" alt />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/img13.png" class="w-full h-full bg-black" alt />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/img13.png" class="w-full h-full bg-black" alt />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/img13.png" class="w-full h-full bg-black" alt />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/img13.png" class="w-full h-full bg-black" alt />
                        </swiper-slide>
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
                spaceBetween: 80,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    }
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
