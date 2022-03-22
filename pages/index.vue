<template>
  <div class="relative">
    <Navbar id="navbar" class />
    <!-- <Sample /> -->
    <!-- <Header /> -->
    <Accordion />
    <!-- <Test /> -->
    <Innovation id="about" />
    <Three id="services" />
    <cursor-fx ref="cursor" outside-size="79px" oclor-hover="#FFFFFF" color="#FFFFFF" disabled />

    <Portfolio id="portfolio" />
    <Clients />
    <Footer id="contact" />
  </div>
</template>

<script>
import Accordion from "~/components/Accordion.vue";
// import Sample from "~/components/Sample.vue";
export default {
  components: { Accordion }
}
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>
