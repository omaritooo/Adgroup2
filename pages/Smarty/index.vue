<template>
    <div class="bg-[#222222]">
        <SmartyNav />
        <SmartHeader />
        <Whatis />
        <VR />
        <SmartProjects />
        <Smartfooter />
    </div>
</template>

<script>
import SmartHeader from "~/components/Smarty/SmartHeader.vue";

import SmartyNav from "~/components/Smarty/SmartyNav.vue";
import Whatis from "~/components/Smarty/Whatis.vue";
import VR from "~/components/Smarty/VR.vue";
import SmartProjects from "~/components/Smarty/SmartProjects.vue";
import Smartfooter from "~/components/Smarty/Smartfooter.vue";
export default {
    components: { SmartyNav, Whatis, SmartHeader, VR, SmartProjects, Smartfooter }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

html {
    font-family: "Montserrat", sans-serif;
}
</style>