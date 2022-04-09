<template>
    <div class="relative z-50 flex gap-x-5">
        <div class="overflow-hidden max-h-[529.71px]">
            <div v-for="(img, index) in images" :key="img.index" class="bg-black w-fit">
                <div class="relative z-30 mt-[30px]" @click="swiper(images, index, 0)">
                    <img class="w-[270px] h-[248.74px]" :src="img.src" alt />
                </div>
            </div>
        </div>
        <div class="mt-[60px]">
            <div
                :class="swipee == 0 ? 'opacity-100' : 'opacity-50'"
                class="flex flex-col transition-opacity duration-150 hover:opacity-100"
            >
                <div class="flex gap-x-2" @click="swiper(images, 0, 0)">
                    <div class="my-auto text-white">01</div>
                    <div class="px-2 py-2 text-white bg-transparent border-2 border-white">
                        <div class="px-2 py-2 mx-auto my-auto bg-white"></div>
                    </div>
                </div>
                <div class="w-[2px] my-2 ml-10 h-[50px] bg-white mx-auto"></div>
            </div>
            <div
                :class="swipee == 1 ? 'opacity-100' : 'opacity-50'"
                class="flex flex-col transition-opacity duration-150 hover:opacity-100"
            >
                <div class="flex gap-x-2" @click="swiper(images, 1, 0)">
                    <div class="my-auto text-white">02</div>
                    <div class="px-2 py-2 text-white bg-transparent border-2 border-white">
                        <div class="px-2 py-2 mx-auto my-auto bg-white"></div>
                    </div>
                </div>
                <div class="w-[2px] my-2 ml-10 h-[50px] bg-white mx-auto"></div>
            </div>
            <div
                :class="swipee == 2 ? 'opacity-100' : 'opacity-50'"
                class="flex flex-col transition-opacity duration-150 hover:opacity-100"
            >
                <div class="flex gap-x-2" @click="swiper(images, 2, 0)">
                    <div class="my-auto text-white">03</div>
                    <div class="px-2 py-2 text-white bg-transparent border-2 border-white">
                        <div class="px-2 py-2 mx-auto my-auto bg-white"></div>
                    </div>
                </div>
                <div class="w-[2px] my-2 ml-10 h-[50px] bg-white mx-auto"></div>
            </div>
            <div
                :class="swipee == 3 ? 'opacity-100' : 'opacity-50'"
                class="flex flex-col transition-opacity duration-150 hover:opacity-100"
            >
                <div class="flex gap-x-2" @click="swiper(images, 3, 0)">
                    <div class="my-auto text-white">04</div>
                    <div class="px-2 py-2 text-white bg-transparent border-2 border-white">
                        <div class="px-2 py-2 mx-auto my-auto bg-white"></div>
                    </div>
                </div>
                <div class="w-[2px] my-2 ml-10 h-[50px] bg-white mx-auto"></div>
            </div>
            <div
                :class="swipee == 4 ? 'opacity-100' : 'opacity-50'"
                class="flex flex-col transition-opacity duration-150 hover:opacity-100"
            >
                <div class="flex gap-x-2" @click="swiper(images, 4, 0)">
                    <div class="my-auto text-white">05</div>
                    <div class="px-2 py-2 text-white bg-transparent border-2 border-white">
                        <div class="px-2 py-2 mx-auto my-auto bg-white"></div>
                    </div>
                </div>
                <!-- <div class="w-[2px] mt-5 ml-10 h-[100px] bg-white mx-auto"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swipee: 0,
            images:
                [
                    {
                        name: 'test',
                        src: '/img13.png'
                    },
                    {
                        name: 'test2',
                        src: '/img14.png'
                    },
                    {
                        name: 'test3',
                        src: '/img15.png'
                    },
                    {
                        name: 'test4',
                        src: '/img13.png'
                    },
                    {
                        name: 'test5',
                        src: '/img15.png'
                    },
                ],
            indices: [
                {
                    idx: '01'
                },
                {
                    idx: '02'
                },
                {
                    idx: '03'
                },
                {
                    idx: '04'
                },
                {
                    idx: '05'
                },
            ]
        }
    },
    methods: {
        swiper(arr, fidx, idx) {
            // eslint-disable-next-line eqeqeq
            const element = arr[fidx];
            arr.splice(fidx, 1);
            arr.splice(idx, 0, element);
            this.swipee = fidx
            console.log(this.images)
            console.log(this.swipee)

        }
    },
}
</script>

<style>
</style>