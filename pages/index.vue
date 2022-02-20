<template>
  <div class="relative">
    <Navbar id="navbar" />
    <!-- <Graphics /> -->
    <Innovation id="about" />
    <Three id="services" />

    <Portfolio id="portfolio" />
    <Clients />
    <Footer id="contact" />
  </div>
</template>

<script>
import initThree from '@/mixins/initThree'
export default {
  mixins: [initThree]

}
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>
