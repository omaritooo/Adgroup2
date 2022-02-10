<template>
    <div class="h-screen py-56 pl-48 bg-white">
        <div class="w-1/2 ml-auto">
            <client-only>
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide>
                        <!-- <img
                            style="background-image: url('/img.png')"
                            class="w-full h-full bg-black"
                            data-src="/img.png"
                            alt
                        />-->
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <!-- <img class="w-full h-full bg-black" alt /> -->
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <!-- <img class="w-full h-full bg-black" alt /> -->
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <!-- <img class="w-full h-full bg-black" alt /> -->
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <!-- <img class="w-full h-full bg-black" alt /> -->
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <!-- <img class="w-full h-full bg-black" alt /> -->
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <!-- <img class="w-full h-full bg-black" alt /> -->
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <!-- <img class="w-full h-full bg-black" alt /> -->
                    </swiper-slide>
                    <!-- <swiper-slide>
                        <img class="w-full h-full bg-black" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full bg-black" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full bg-black" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full bg-black" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full bg-black" alt />
                    </swiper-slide>-->

                    <div slot="pagination" class="swiper-pagination"></div>
                </swiper>
            </client-only>
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
                centeredSlides: true,
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
img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
}
.slide {
    background-position: center;
    background-size: cover;
    background-image: url("/img.png");
}
</style>