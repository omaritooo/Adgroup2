<template>
    <div class="m-10 max-h-[100vh]">
        <div class="flex flex-col justify-between lg:flex-row gap-x-32">
            <div class="flex flex-col">
                <!-- <span class="uppercase text-[153px] whitespace-nowrap text-white font-[300]">we are</span>
                <span class="uppercase text-[240px] whitespace-nowrap text-[#00CFFF] font-[300]">smarty</span>-->
                <div
                    class="text-white uppercase h-fit max-w-[760px] leading-0 font-[300] text-[40px] lg:text-[103px]"
                >We are</div>
                <div
                    class="font-[300] uppercase lg:-translate-y-16 h-fit text-[60px] lg:text-[167px] text-[#00CFFF]"
                >smarty</div>
                <div
                    class="text-[#FEFEFE] lg:-translate-y-24 text-[24px] font-[300] max-w-[610px]"
                >Education is one of the industries that are heavily affected by technology and digitalization</div>
                <button
                    class="px-8 py-5 w-fit text-[24px] uppercase lg:-translate-y-16 bg-[#00CFFF]"
                >Request a demo</button>
            </div>
            <client-only>
                <div>
                    <swiper
                        class="overflow-y-hidden hidden lg:flex w-fit lg:h-[60vh] swiper vertical"
                        :options="swiperOptionv"
                    >
                        <swiper-slide>
                            <div class="w-[350px] h-[269.06px]">
                                <img class="object-cover" src="/img13.png" alt />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="w-[350px] h-[269.06px]">
                                <img class="object-cover" src="/img13.png" alt />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="w-[350px] h-[269.06px]">
                                <img class="object-cover" src="/img13.png" alt />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="w-[350px] h-[269.06px]">
                                <img class="object-cover" src="/img13.png" alt />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="w-[350px] h-[269.06px]">
                                <img class="object-cover" src="/img13.png" alt />
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div
                        slot="pagination"
                        class="mx-10 swiper-pagination-bullets swiper-pagination-v"
                    ></div>
                </div>
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
            swiperOptionv: {
                direction: 'vertical',
                slidesPerView: 2,
                spaceBetween: 300,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                renderBullet(index, className) {
                    return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.swiper {
    .swiper-pagination-bullet-custom {
        $text-color: black;
        $size: 20px;
        width: $size !important;
        height: $size !important;
        line-height: $size !important;
        text-align: center;
        color: black;
        opacity: 0.7;
        background: rgba(black, 0.2);
        transition: all 3s;

        &:hover {
            opacity: 1;
        }

        &.swiper-pagination-bullet-active {
            opacity: 1;
            color: white;
            background: #007aff;
        }
    }
}
</style>

<style scoped>
</style>