<template>
    <div class="h-screen px-48 pt-20 pb-48 bg-white">
        <transition name="card">
            <div class="relative flex flex-row justify-around mx-auto">
                <!-- <div class="w-1/4 p-56 translate-y-40 bg-green-400 rounded-lg h-1/2 -rotate-30"></div>
                <div class="w-1/4 p-56 duration-150 transform bg-green-400 hover:scale-y-125 h-1/2"></div>
                <div
                    class="w-1/4 p-56 transform translate-y-40 bg-green-400 rounded-lg hover:scale-y-125 h-1/2 rotate-30"
                ></div>-->
                <div
                    v-for="(t, index) in three"
                    :key="t.index"
                    :class="{
                        ' even:translate-x-96 even:rotate-30 even:translate-y-40 last:z-50 last:-translate-x-0 last:-translate-y-0 last:-rotate-0   ': switcher == 2,
                        ' even:-translate-x-96 even:-rotate-30 even:translate-y-40 first:z-50 first:-translate-x-0 first:-translate-y-0 first:-rotate-0   ': switcher == 0
                    }"
                    class="absolute w-1/2 transition-all duration-300 ease-in-out top-1/2 left-1/4 first:-translate-x-[600px] last:translate-x-[600px] first:-rotate-30 even:z-30 last:translate-y-40 first:translate-y-40 last:rotate-30 h-1/2"
                    @click="arraymove(three, index, 0)"
                >
                    <div class="relative rotate-0 rounded-lg w-fit group">
                        <div
                            v-if="t.status"
                            :class="{ 'bg-orange-500': t.color === 'orange', 'bg-yellow-500': t.color === 'yellow', 'bg-gradient-to-r from-[#00BDD6] via-[#33C6C6] to-[#7BD4AF]': 'green' === t.color }"
                            class="w-[100%] h-[100%] rounded-lg absolute top-0 left-0 z-20"
                        >
                            <div class="flex flex-col py-8 gap-y-5">
                                <h1 class="text-3xl text-center text-white top-10">{{ t.title }}</h1>
                                <p
                                    class="px-10 text-xl font-light text-justify text-white"
                                >{{ t.desc }}</p>
                            </div>
                        </div>
                        <div class="rounded-g">
                            <img width class="rounded-lg shadow-inner" :src="t.img" alt />
                        </div>
                    </div>
                </div>
            </div>
        </transition>
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
                    status: false
                },
                {
                    title: 'Vividly',
                    img: '/img14.png',
                    color: 'orange',
                    desc: 'Imagine your customer checking their new houses while setting at your work office',

                    status: false

                },
                {
                    title: 'Smarty',
                    img: '/img15.png',
                    color: 'yellow',
                    desc: 'Imagine your customer checking their new houses while setting at your work office',

                    status: false

                },
            ],
            switcher: ''
        }
    },
    methods: {
        arraymove(arr, fromIndex, toIndex) {
            if (fromIndex === 1) {
                arr[fromIndex].status = !arr[fromIndex].status;
                arr[fromIndex - 1].status = false;
                arr[fromIndex + 1].status = false;
                this.switcher = fromIndex;
            }
            else {
                const element = arr[fromIndex];
                arr.splice(fromIndex, 1);
                arr.splice(toIndex, 0, element);
                if (fromIndex === 0) {
                    arr[fromIndex].status = false;
                    arr[fromIndex + 1].status = true;
                    arr[fromIndex + 2].status = false;
                    this.switcher = fromIndex;

                }
                if (fromIndex === 2) {
                    arr[fromIndex].status = false;
                    arr[fromIndex - 1].status = true;
                    arr[fromIndex - 2].status = false;
                    this.switcher = fromIndex;

                }
                console.log(arr)
            }
        }
    },

}
</script>
<style scoped>
.box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8; /* for demo purpose  */
}
.shadowbox {
    box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0.35);
    @apply rounded-lg;
}
img {
    position: relative;

    z-index: -2;
}

.card {
    transition: all 0.5s;
}
.card-enter, .card-leave-to
/* .card-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: scale(0);
}
.card-enter-to {
    opacity: 1;
    transform: scale(1);
}

.card-leave-active {
    /*position: absolute;*/
}

.card-move {
    opacity: 1;
    transition: all 0.5s;
}
</style>
