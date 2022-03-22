<template>
    <div class="fixed z-[100] p-4 bg-white rounded-full shadow-2xl group bottom-6 right-4 w-fit">
        <div
            class="absolute px-2 text-black transition-opacity duration-200 bg-white opacity-0 rounded-3xl -top-8 group-hover:opacity-100 -left-12"
        >Back to home</div>
        <nuxt-link to="/">
            <img class="w-12 h-12" src="/adgroup.svg" />
        </nuxt-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>