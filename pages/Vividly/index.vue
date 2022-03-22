<template>
    <div class="bg-[#202020] max-w-screen overflow-hidden">
        <Navbar class="relative z-30" />
        <Headly />
        <Returner />
        <Portfolio />
        <Stories />
        <cursor-fx ref="cursor" outside-size="79px" oclor-hover="#FFFFFF" color="#FFFFFF" disabled />
        <Footly />
    </div>
</template>

<script>
import Portfolio from "~/components/Vividly/Portfolio.vue";
import Stories from "~/components/Vividly/Stories.vue"
import Navbar from "~/components/Vividly/Navbar.vue";
import Headly from "~/components/Vividly/Headly.vue";
import Footly from "~/components/Vividly/Footly.vue";
import Returner from "~/components/Returner.vue";
export default {
    components: { Navbar, Headly, Portfolio, Stories, Footly, Returner },
    mounted() {
        this.$refs.cursor.start()
    },
    methods: {
        others() {

            // destroy
            this.$refs.cursor.destroy();

            // -> refresh automate: `destroy()` and `start()`
            this.$refs.cursor.refresh();

        },
    }
}
</script>

<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap");
html {
    font-family: "Cairo", sans-serif;
    cursor: none;
}
</style>