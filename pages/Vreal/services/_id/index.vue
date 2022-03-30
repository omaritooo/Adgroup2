<template>
    <div class="lg:w-[4300px] 2xl:w-[5720px] h-[98vh] overflow-y-hidden bg-[#E5E5E5]">
        <!-- <Navbar class="relative z-30 bg-green-500 rounded-xl" /> -->
        <cursor-fx ref="cursor" outside-size="79px" oclor-hover="#000000" color="#23A491" />

        <div class="flex gap-y-5">
            <div class="relative flex flex-wrap gap-x-10 gap-y-10">
                <iframe class="w-[95vw] h-[99vh] rounded-lg" :src="folios.video_url"></iframe>
                <div
                    class="absolute px-6 py-4 my-auto rounded-3xl text-white bg-gradient-to-r from-[#0CA092] to-[#74C38B] right-4 top-1/2"
                >More ></div>
            </div>

            <div class="flex flex-col mb-20 gap-y-[30px] w-fit h-screen">
                <!-- <div class=""><img class="relative z-30" :src="folios.thumbnail_path" alt /></div> -->
                <!-- {{ folios.image_folios }} -->
                <div class="my-auto px-[120px] flex flex-col gap-y-5">
                    <h1 class="text-3xl text-center text-bold">{{ folios.title }}</h1>
                    <p
                        class="max-w-[413px] text-justify text-xl text-semibold"
                    >{{ folios.description }}</p>

                    <button
                        class="text-[16px] text-white py-4 rounded-lg bg-gradient-to-r from-[#0CA092] to-[#74C38B]"
                    >Request a Demo</button>
                </div>
            </div>
            <div class="flex h-screen px-20 bg-white w-fit gap-x-10 test">
                <h1 class="my-auto text-[24px] max-w-[142px]">Services Gallery</h1>

                <div class="flex my-auto gap-x-4">
                    <div class="relative z-30 w-[321.02px] h-[476.09px] translate-y-32">
                        <img class="object-cover" :src="folios.thumbnail_path" alt />
                    </div>
                    <div class="relative z-30 w-[321.02px] h-[476.09px]">
                        <img class="object-cover" :src="folios.thumbnail_path" alt />
                    </div>
                    <div class="relative z-30 w-[321.02px] h-[476.09px] translate-y-32">
                        <img class="object-cover" :src="folios.thumbnail_path" alt />
                    </div>
                    <div class="relative z-30 w-[321.02px] h-[476.09px]">
                        <img class="object-cover" :src="folios.thumbnail_path" alt />
                    </div>
                </div>
            </div>

            <div class="mx-auto my-auto">
                <div class="flex flex-col gap-y-5">
                    <form class="flex flex-col text-black gap-y-3">
                        <input
                            type="text"
                            name
                            placeholder="Name"
                            class="w-full px-4 py-4 placeholder-current bg-white border border-black border-opacity-50 rounded-3xl"
                        />
                        <div class="flex gap-x-3">
                            <input
                                type="text"
                                name
                                placeholder="Phone"
                                class="w-full px-4 py-4 placeholder-current bg-white border border-black border-opacity-50 rounded-3xl"
                            />
                            <input
                                type="text"
                                name
                                placeholder="Email"
                                class="w-full px-4 py-4 placeholder-current bg-white border border-black border-opacity-50 rounded-3xl"
                            />
                        </div>
                        <textarea
                            rows="5"
                            class="w-full p-4 placeholder-current bg-white border border-black border-opacity-50 rounded-3xl h-1/2"
                        ></textarea>
                        <button
                            class="w-full p-4 text-2xl text-white placeholder-current bg-gradient-to-r from-[#0CA092] to-[#74C38B] border rounded-b-lg shadow-xl border-opacity-20"
                        >Send</button>
                    </form>
                    <!-- <div class="flex justify-center gap-x-[91px]">
                        <svg
                            width="17"
                            height="28"
                            viewBox="0 0 17 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.5 1.5H11.75C10.0924 1.5 8.50269 2.15848 7.33058 3.33058C6.15848 4.50269 5.5 6.0924 5.5 7.75V11.5H1.75V16.5H5.5V26.5H10.5V16.5H14.25L15.5 11.5H10.5V7.75C10.5 7.41848 10.6317 7.10054 10.8661 6.86612C11.1005 6.6317 11.4185 6.5 11.75 6.5H15.5V1.5Z"
                                stroke="#A3EFCB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <svg
                            width="30"
                            height="26"
                            viewBox="0 0 30 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.75 1.75C27.553 2.59434 26.2276 3.24013 24.825 3.6625C24.0722 2.79688 23.0717 2.18336 21.9588 1.9049C20.8459 1.62645 19.6744 1.69649 18.6026 2.10556C17.5308 2.51464 16.6106 3.243 15.9662 4.19214C15.3219 5.14129 14.9846 6.26542 15 7.4125V8.6625C12.8033 8.71946 10.6266 8.23226 8.66376 7.2443C6.70093 6.25635 5.0129 4.79829 3.75 3C3.75 3 -1.25 14.25 10 19.25C7.42566 20.9975 4.35895 21.8737 1.25 21.75C12.5 28 26.25 21.75 26.25 7.375C26.2488 7.02681 26.2154 6.67949 26.15 6.3375C27.4258 5.07936 28.326 3.49089 28.75 1.75V1.75Z"
                                stroke="#A3EFCB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.175 8.025C28.0265 7.43176 27.7241 6.88821 27.2983 6.44926C26.8725 6.0103 26.3384 5.69148 25.75 5.525C23.6 5 15 5 15 5C15 5 6.39998 5 4.24998 5.575C3.66154 5.74148 3.12745 6.0603 2.70167 6.49926C2.27588 6.93821 1.97347 7.48176 1.82498 8.075C1.4315 10.2569 1.23903 12.4704 1.24998 14.6875C1.23596 16.9213 1.42844 19.1516 1.82498 21.35C1.98868 21.9248 2.29787 22.4477 2.72266 22.8681C3.14746 23.2885 3.67351 23.5923 4.24998 23.75C6.39998 24.325 15 24.325 15 24.325C15 24.325 23.6 24.325 25.75 23.75C26.3384 23.5835 26.8725 23.2647 27.2983 22.8257C27.7241 22.3868 28.0265 21.8432 28.175 21.25C28.5654 19.0845 28.7579 16.8879 28.75 14.6875C28.764 12.4537 28.5715 10.2234 28.175 8.025V8.025Z"
                                stroke="#A3EFCB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.1875 18.7751L19.375 14.6876L12.1875 10.6001V18.7751Z"
                                stroke="#A3EFCB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>-->
                </div>
            </div>
            <!-- <Footer /> -->
        </div>
    </div>
</template>

<script>
// import Navbar from "~/components/Vreal/Navbar.vue";
export default {
    // components: { Navbar },
    data() {
        return {
            id: this.$route.params.id,
            folios: {},
            loader: true
        };
    },
    async mounted() {
        // await this.$axios.get(`https://api.modernegy.tech/api/v1/folios/${this.id}`).then(res => (this.folios = res.data.data)).catch(error => {
        //     console.log(error)
        // })
        //     .finally(this.loader = true);
    },
    created() {
        this.$axios.get(`https://api.modernegy.tech/api/v1/services/${this.id}`).then(res => (this.folios = res.data.data)).catch(error => {
            console.log(error);
        })
            .finally(this.loader = true);
        ;
    }
}
</script>

<style scoped>
.test {
    border-radius: 71px 386px 0px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}
.box {
    border-radius: 0px 89px 100px 0px;
}
</style>