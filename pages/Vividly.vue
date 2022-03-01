<template>
    <div class="bg-[#202020] max-w-screen overflow-x-hidden">
        <Navbar class="relative z-30" />
        <Headly />
        <Portfolio />
        <Stories />
        <cursor-fx outside-size="79px" oclor-hover="#FFFFFF" color="#FFFFFF" />
        <Footly />
    </div>
</template>

<script>
import Portfolio from "../components/Vividly/Portfolio.vue";
import Stories from "../components/Vividly/Stories.vue"
import Navbar from "~/components/Vividly/Navbar.vue";
import Headly from "~/components/Vividly/Headly.vue";
import Footly from "~/components/Vividly/Footly.vue";
export default {
    components: { Navbar, Headly, Portfolio, Stories, Footly }
}
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap");
html {
    font-family: "Cairo", sans-serif;
    cursor: none;
}
</style>