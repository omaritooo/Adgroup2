<template>
    <div class="h-screen pt-20 pb-48 mx-48">
        <div class="container relative flex flex-row justify-around mx-auto">
            <!-- <div class="w-1/4 p-56 translate-y-40 bg-green-400 rounded-lg h-1/2 -rotate-30"></div>
                <div class="w-1/4 p-56 duration-150 transform bg-green-400 hover:scale-y-125 h-1/2"></div>
                <div
                    class="w-1/4 p-56 transform translate-y-40 bg-green-400 rounded-lg hover:scale-y-125 h-1/2 rotate-30"
            ></div>-->
            <div class="w-fit">
                <div
                    v-for="(t, index) in three"
                    :key="t.index"
                    :class="{
                        ' even:!translate-x-[600px] even:!rotate-30 even:!translate-y-56 last:!z-50 last:!translate-x-0 last:!-translate-y-0 last:!rotate-[0]   ': switcher == 2,
                        ' even:!-translate-x-[600px] even:!-rotate-30 even:!translate-y-56  first:!z-50 first:!-translate-x-0 first:!translate-y-10 first:!-rotate-[0]   ': switcher == 0,
                        ' even:!translate-x-0 even:!rotate-0': switcher == 1,
                        '!z-50': switcher == index
                    }"
                    class="absolute xl:w-1/3 2xl:w-1/3 transition-all duration-300 ease-in-out top-1/2 left-1/3 first:-translate-x-[600px] last:translate-x-[600px] first:-rotate-30 last:translate-y-56 first:translate-y-56 last:rotate-30 h-1/2"
                >
                    <div
                        class="relative rotate-0 rounded-lg w-fit group"
                        @click="arraymove(three, index)"
                    >
                        <div
                            v-show="t.status"
                            :class="{ 'bg-gradient-to-r from-[#C19B3F] to-[#AD904B]': t.color === 'orange', 'bg-gradient-to-l from-[#4082BF] to-[#50BED5]': t.color === 'yellow', 'bg-gradient-to-r from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF]': 'green' === t.color }"
                            class="w-[100%] h-[100%] transform-gpu scale-x-105 transition-all duration-500 scale-y-110 rounded-lg absolute top-0 left-0 z-20"
                        >
                            <div class="flex flex-col py-8 my-auto xl:gap-y-2 2xl:gap-y-5">
                                <img :src="t.logo" class="w-32 h-32 mx-auto" :alt="t.logo" />
                                <p
                                    class="px-10 text-xl font-light text-justify text-white"
                                >{{ t.desc }}</p>
                            </div>
                            <nuxt-link :to="t.route">
                                <button
                                    class="absolute px-10 py-6 text-2xl bg-[#F6DE00] 2xl:bottom-10 2xl:left-[35%] mx-auto rounded-lg shadow-lg"
                                >Explore</button>
                            </nuxt-link>
                        </div>
                        <div class="rounded-g">
                            <img
                                width="621px"
                                height="569px"
                                class="rounded-lg shadow-inner"
                                :src="t.img"
                                alt
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            three: [
                {
                    title: 'Vreal',
                    img: '/img13.png',
                    color: 'green',
                    desc: 'Imagine your customer checking their new houses while setting at your work office',
                    status: false,
                    logo: 'vreal.png',
                    route: '/vreal'
                },
                {
                    title: 'Vividly',
                    img: '/img14.png',
                    color: 'orange',
                    desc: 'Imagine your customer checking their new houses while setting at your work office',
                    route: '/vividly',

                    status: false,
                    logo: 'vividly.svg'

                },
                {
                    title: 'Smarty',
                    img: '/img15.png',
                    color: 'yellow',
                    desc: 'A whole new world and what’s happening inside this world can change our prespective and perception of the reality',
                    route: '/smarty',

                    status: false,
                    logo: 'smarty.svg'

                },
            ],
            switcher: 0,
            test1: false,
            test2: false,
            test3: false,
        }
    },
    methods: {
        arraymove(arr, fromIndex) {
            const element = arr[fromIndex];
            arr.splice(fromIndex, element);
            if (fromIndex === 1) {
                arr[fromIndex].status = !arr[fromIndex].status;
                arr[fromIndex - 1].status = false;
                arr[fromIndex + 1].status = false;
                this.switcher = fromIndex;
            }
            if (fromIndex === 0) {
                arr[fromIndex].status = !arr[fromIndex].status;
                arr[fromIndex + 1].status = false;
                arr[fromIndex + 2].status = false;
                this.switcher = fromIndex;

            }
            if (fromIndex === 2) {
                arr[fromIndex].status = !arr[fromIndex].status;
                arr[fromIndex - 1].status = false;
                arr[fromIndex - 2].status = false;
                this.switcher = fromIndex;

            }

            // arr[fromIndex].status = true;
            // arr[fromIndex].status = !arr[fromIndex].status;
            // if (arr[fromIndex] === 1) {
            //     arr[fromIndex].status = true;
            //     arr[0].status = false;
            //     arr[2].status = false;
            //     this.switcher = fromIndex;
            // }
            // else if (arr[fromIndex] === 0) {
            //     arr[fromIndex].status = true;
            //     arr[1].status = false;
            //     arr[2].status = false;
            //     this.switcher = fromIndex;
            // }
            // else if (arr[fromIndex] === 2) {
            //     arr[fromIndex].status = true;
            //     arr[0].status = false;
            //     arr[1].status = false;
            //     this.switcher = fromIndex;
            // }


            this.switcher = fromIndex;
        }
    },

}
</script>
<style>
.box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8; /* for demo purpose  */
}
/* .shadowbox {
    box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0.35);
    @apply rounded-lg;
} */
img {
    position: relative;

    z-index: -2;
}

/*  */
</style>
