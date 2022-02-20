<template>
  <div class="overflow-x-hidden bg-[#F7F6F6]">
    <Header />
    <What />
    <Description />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/Vreal/Footer.vue'
import Portfolio from '../../components/Vreal/Portfolio.vue'
import Description from '../../components/Vreal/Description.vue'
import Header from '../../components/Vreal/Header.vue'
import What from '~/components/Vreal/What.vue'
export default {
  components: {
    Footer,
    Description,
    Portfolio,
    What,
    Header
  },
}
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>