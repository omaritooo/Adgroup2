<template>
  <section
    class="absolute flex items-center justify-end w-screen h-screen max-h-[1080px] overflow-hidden transform insets-0 z-1 px-16"
  >
    <div class="flex items-center justify-end w-full h-full mt-64 transform -rotate-12">
      <div
        class="relative w-full max-w-[525px] h-full flex items-center justify-center flex-col gap-5 mx-6 z-10"
      >
        <div
          class="absolute transition-all transform-gpu duration-400 ease-overstep w-full h-full mt-12 max-w-[525px] bg-gradient-to-r from-[#9B9ED8] to-[#CADAE4] shadow-xl max-h-80 rounded-3xl"
          :class="
            stacked ? 'right-[-30rem] rotate-[7deg] mb-48' : 'rotate-0 right-0'
          "
        ></div>
      </div>
      <div class="w-full max-w-[525px] h-full flex items-center justify-center flex-col gap-5">
        <div
          class="absolute transition-all transform-gpu duration-300 ease-overstep w-full h-full max-w-[525px] bg-gradient-to-r from-[#FFCB83] to-[#EA6D66] shadow-xl max-h-80 rounded-3xl"
          :class="
            stacked
              ? 'right-28 -rotate-[5deg] top-1/2 -translate-y-1/2 mt-20'
              : 'rotate-0 right-0 top-[calc(15%+20rem+20px)]'
          "
        ></div>
        <div
          class="absolute transition-all transform-gpu duration-300 ease-overstep w-full h-full ms-10 max-w-[525px] bg-gradient-to-r from-[#BFF1C5] to-[#83BFB4] shadow-xl max-h-80 rounded-3xl"
          :class="
            stacked
              ? 'right-32 rotate-[12deg] !top-1/2 -translate-y-1/2'
              : 'right-0 top-[15%]'
          "
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["isStacked"],
  data() {
    return {
      stacked: this.$router.currentRoute.path === "/onboarding",
    };
  },

};
</script>

<style>
</style>