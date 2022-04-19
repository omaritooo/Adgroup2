<template>
    <div class="py-20 bg-gray-100 rounded-3xl">
        <div class="flex flex-col h-screen py-16 lg:pl-20 lg:flex-row ">
            <div class="flex flex-col w-full mx-auto my-auto text-center lg:mx-0 lg:w-1/3 gap-y-2">
                <h1 class="text-3xl font-medium lg:text-[36px]">Portfolio</h1>
                <h2 class="text-2xl font-light lg:text-[27px]">Previous work and portfolio</h2>
                <p
                    class="text-xl lg:text-[24px] font-thin"
                >Constant improvement for businesses and technologies is what we aim for, by devoting our expertise and hard work into each project we work on.</p>
            </div>
            <div class="w-full lg:ml-auto lg:w-1/2">
                <client-only>
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide v-for="p in ports" :key="p.index">
                            <div
                                class="w-[621px] h-[593px]"
                                @click="$router.push(`/portfolio/${p.id}`)"
                            >
                                <img
                                    class="object-cover w-full h-full rounded-lg"
                                    :src="p.thumbnail_path"
                                    alt
                                />
                            </div>
                            <div
                                class="mt-5 whitespace-nowrap align-middle flex gap-x-20 text-[28px] font-bold"
                            >
                                {{ p.title }}
                                <div class="px-4 py-1 text-[20px] my-auto bg-black rounded-lg">
                                    <div
                                        class="text-transparent my-auto bg-clip-text bg-gradient-to-t from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF]"
                                    >{{ p.company.title }}</div>
                                </div>
                            </div>

                            <div
                                class="text-[20px] font-[300] leading-[23px] mt-4 mb-16 w-[550px]"
                            >{{ p.description }}</div>
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
                spaceBetween: 620,
                centeredSlides: false,
                loop: true,
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
