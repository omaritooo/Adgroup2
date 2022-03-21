<template>
    <div class="relative flex flex-col justify-around py-32 overflow-x-hidden lg:flex-row">
        <div class="mx-auto my-auto text-white lg:mx-0 lg:ml-10">
            <h1 class="text-[32px] font-[700]">Latest Projects</h1>
            <p
                class="max-w-[400px] text-[24px]"
            >Our main purpose is to enhance the educational system using</p>
        </div>
        <div
            class="absolute right-0 hidden lg:flex lg:px-32 bg-[#00CFFF] py-48 top-16 h-[50vh] w-fit"
        ></div>
        <div class="relative w-full py-2 my-auto lg:w-1/2 lg:ml-auto">
            <client-only>
                <swiper
                    :breakpoints="{
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        '1024': {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        '1540': {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }"
                    class="swiper"
                >
                    <swiper-slide class="w-[219px] h-[383px]">
                        <img src="/imgimg.png" class="object-cover bg-black rounded-lg" alt />
                    </swiper-slide>
                    <swiper-slide class="w-[219px] h-[383px]">
                        <img src="/imgimg.png" class="object-cover bg-black rounded-lg" alt />
                    </swiper-slide>
                    <swiper-slide class="w-[219px] h-[383px]">
                        <img src="/imgimg.png" class="object-cover bg-black rounded-lg" alt />
                    </swiper-slide>
                    <swiper-slide class="w-[219px] h-[383px]">
                        <img src="/imgimg.png" class="object-cover bg-black rounded-lg" alt />
                    </swiper-slide>
                </swiper>
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption2: {
                spaceBetween: 10,
                centeredSlides: true,
                loop: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
        }
    },

}
</script>

<style>
</style>