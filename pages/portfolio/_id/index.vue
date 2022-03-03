<template>
    <div>
        <Navbar />
        <div class="flex flex-col mb-20 gap-y-[30px]">
            <img class="mx-auto" :src="folios.thumbnail_path" alt />
            <!-- {{ folios.image_folios }} -->
            <h1 class="mx-auto text-3xl text-center text-bold">{{ folios.title }}</h1>
            <p
                class="mx-auto max-w-[800px] text-center text-xl text-semibold"
            >{{ folios.description }}</p>
            <div class="mx-auto flex flex-wrap max-w-[1200px] gap-x-10 gap-y-10">
                <div v-for="fol in folios.image_folios" :key="fol.index" class="mx-auto">
                    <div class="max-w-[300px] max-h-[300px]">
                        <img class="object-cover" :src="fol.image_path" alt />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            folios: {},
            loader: true
        }
    },
    async mounted() {
        // await this.$axios.get(`https://api.modernegy.tech/api/v1/folios/${this.id}`).then(res => (this.folios = res.data.data)).catch(error => {
        //     console.log(error)
        // })
        //     .finally(this.loader = true);
    },
    created() {
        this.$axios.get(`https://api.modernegy.tech/api/v1/folios/${this.id}`).then(res => (this.folios = res.data.data)).catch(error => {
            console.log(error)
        })
            .finally(this.loader = true);;
    },
}
</script>

<style>
</style>