<template>
    <nav class="px-[130px] flex justify-between w-screen">
        <div class="flex justify-between w-screen">
            <img class="w-32 h-32" src="/vrealvert.svg" alt />
            <div class="flex my-auto text-white gap-x-7">
                <nuxt-link class="hover-underline-animation" to>Home</nuxt-link>
                <nuxt-link class="hover-underline-animation" to>About Us</nuxt-link>
                <nuxt-link class="hover-underline-animation" to>Services</nuxt-link>
                <nuxt-link class="hover-underline-animation" to>Portfolio</nuxt-link>
                <nuxt-link class="hover-underline-animation" to>Contact Us</nuxt-link>
            </div>
            <img class="w-32 h-32" src="/adgroupvert.svg" />
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.hover-underline-animation {
    display: inline-block;
    position: relative;
    color: white;
}

.hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>