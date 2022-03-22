<template>
  <div class="overflow-x-hidden relative bg-[#F7F6F6]">
    <Header />
    <Returner />
    <What />
    <Carousel />
    <Description id="why" />

    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Vreal/Footer.vue'
import Portfolio from '~/components/Vreal/Portfolio.vue'
import Description from '~/components/Vreal/Description.vue'
import Header from '~/components/Vreal/Header.vue'
import What from '~/components/Vreal/What.vue'
import Carousel from '~/components/Vreal/Carousel.vue'
import Returner from '~/components/Returner.vue'
// import Returner from '~/components/Returner.vue'
export default {
  components: {
    Footer,
    Description,
    Portfolio,
    What,
    Header,
    Carousel,
    Returner
  },
}
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>