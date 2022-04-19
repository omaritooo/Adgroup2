<template>
  <div class="relative">
    <Navbar id="navbar" class />
    <!-- <MobileNav class="block lg:hidden" /> -->
    <!-- <Sample /> -->
    <!-- <Header /> -->
    <cursor-fx ref="cursor" outside-size="79px" oclor-hover="#000000" color="#000000" />

    <Accordion />
    <!-- <Test /> -->
    <Innovation id="about" />
    <!-- <Three id="services" /> -->
    <!-- <cursor-fx ref="cursor" outside-size="79px" oclor-hover="#FFFFFF" color="#FFFFFF" disabled /> -->

    <Portfolio id="portfolio" />
    <Clients />
    <!-- <SmartCarousel /> -->
    <Footer id="contact" />
  </div>
</template>

<script>
import Accordion from "~/components/Accordion.vue";
import Navbar from "~/components/Navbar.vue";
// import SmartCarousel from "~/components/Smarty/SmartCarousel.vue";
// import MobileNav from "~/components/MobileNav.vue";
// import Sample from "~/components/Sample.vue";
export default {
  components: { Accordion, Navbar
  
  }
}
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>
