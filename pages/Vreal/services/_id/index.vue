<template>
    <vue-horizontal responsive>
        <div class>
            <!-- <Navbar class="relative z-30 bg-green-500 rounded-xl" /> -->
            <div class="flex gap-y-5">
                <div class="flex flex-wrap mx-auto gap-x-10 gap-y-10">
                    <iframe class="w-screen h-screen mx-auto" :src="folios.video_url"></iframe>
                </div>
                <div class="flex flex-col mb-20 gap-y-[30px]">
                    <img class="relative z-30 mx-auto" :src="folios.thumbnail_path" alt />
                    <!-- {{ folios.image_folios }} -->
                    <h1 class="mx-auto text-3xl text-center text-bold">{{ folios.title }}</h1>
                    <p
                        class="mx-auto max-w-[800px] text-center text-xl text-semibold"
                    >{{ folios.description }}</p>
                </div>
            </div>
            <Footer />
        </div>
    </vue-horizontal>
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

<style>
</style>