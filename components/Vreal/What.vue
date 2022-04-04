<template>
    <div class="container flex justify-around mx-auto">
        <div class="my-[340px] flex flex-col text-center gap-y-2">
            <h1
                class="font-semibold text-[24px] leading-[36px] text-transparent bg-clip-text bg-gradient-to-l from-[#0CA092] to-[#74C38B]"
            >What’s VReal?</h1>
            <div
                class="font-[300] text-[18px] text-center leading-[27px] max-w-[600px] mx-auto"
            >V real is a collection of solutions made to serve the real estate industry, we know how buying and selling the property nowadays become difficult and how the company’s sales team struggling to find the potential customer and close the deal, also on the other hand the property buyer has a lot of issues with the property details information availability</div>
        </div>
        <div class="relative z-30 max-w-[600px] my-auto">
            <client-only>
                <swiper class="relative swiper" :options="swiperOption">
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
                    <div slot="pagination" class="absolute -bottom-12 swiper-pagination"></div>
                </swiper>
            </client-only>
        </div>
        <!-- <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="handleAfterChange"
            @beforeChange="handleBeforeChange"
            @breakpoint="handleBreakpoint"
            @destroy="handleDestroy"
            @edge="handleEdge"
            @init="handleInit"
            @reInit="handleReInit"
            @setPosition="handleSetPosition"
            @swipe="handleSwipe"
            @lazyLoaded="handleLazyLoaded"
            @lazyLoadError="handleLazeLoadError"
        >
            <a href="http://placehold.it/2000x1000">
                <img src="/img13.png" alt />
            </a>
            <a href="http://placehold.it/2000x1000">
                <img src="/img13.png" alt />
            </a>
            <a href="http://placehold.it/2000x1000">
                <img src="/img13.png" alt />
            </a>
            <a href="http://placehold.it/2000x1000">
                <img src="/img13.png" alt />
            </a>
            <a href="http://placehold.it/2000x1000">
                <img src="/img13.png" alt />
            </a>
        </slick>-->
        <!-- <div class="relative z-30 max-w-[462px] h-[600px] my-auto">
            <ssr-carousel class="h-[650px]" :slide-per-page="1" :autoplay-delay="3" loop show-dots>
                <div class="slide w-[461px] h-[301px]">
                    <img class="object-fit" src="/img13.png" alt />
                </div>
                <div class="slide w-[461px] h-[301px]">
                    <img class="object-fit" src="/img13.png" alt />
                </div>
                <div class="slide w-[461px] h-[301px]">
                    <img class="object-fit" src="/img13.png" alt />
                </div>
            </ssr-carousel>
        </div>-->
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
            ports: null,
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
        }
    },
}
</script>

<style lang="scss" scoped>
</style>