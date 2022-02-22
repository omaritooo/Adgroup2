<template>
    <div class="w-full relative h-[80vh] overflow-x-hidden">
        <Navbar class="absolute top-0 z-30" />
        <div class="absolute top-0 bg">
            <span class="text">The New Revolution of Real estate Technology</span>
        </div>
    </div>
</template>

<script>
import Navbar from '../Vreal/Navbar.vue'
export default {
    components: { Navbar }
}
</script>

<style scoped>
.bg {
    width: 100%;
    height: 80vh;
    background: url("/header.png");
    background-position: center;
    background-size: cover;
}
.text {
    position: absolute;
    width: 363px;
    height: 24px;
    left: 80px;
    top: 72vh;

    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    color: #ffffff;
}
</style>