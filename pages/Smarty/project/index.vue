<template>
    <div class="bg-[#222222] diver">
        <SmartyNav />
        <div class="container mx-auto">
            <h1
                class="2xl:text-[60px] font-bold max-w-[268px] 2xl:max-w-[320px] lg:text-[40px] text-[#00CFFF]"
            >
                Project
                <span>Name</span>
            </h1>
            <div class="flex flex-col mt-10 gap-y-16">
                <img class="relative z-30 lg:w-[900px]" src="/img14.png" alt />
                <p
                    class="text-white 2xl:w-[1400px] lg:w-[948px] lg:text-[18px] 2xl:text-[24px]"
                >Augmented reality helps teachers to simplify the subjects and engage the student more with the educational content. the student can watch the virtual objects and interact with it by downloading the AR application on their tablets or smart phones, there is no need for special hardware equipment to run the solution.</p>
            </div>
            <div class="mt-10">
                <div class="2xl:w-[1500px]">
                    <img class="relative z-30 2xl:w-[1240px] object-cover" src="/Group 113.png" />
                </div>
                <div class="relative flex h-full gap-x-4 z-30 ml-[4px]">
                    <div class="h-[756px] lg:w-[350px] 2xl:w-[454px]">
                        <img class="object-cover" src="/ball.png" alt />
                    </div>
                    <div class="flex flex-col gap-y-[62px]">
                        <div class="h-[256px] lg:w-[559px] 2xl:w-[759px]">
                            <img class="object-cover" src="/20180111vrtease.png" />
                        </div>
                        <div class="h-[256px] lg:w-[559px] 2xl:w-[759px]">
                            <img class="object-cover" src="/students-using-VR.png" />
                        </div>
                    </div>
                </div>
                <p
                    class="text-white 2xl:w-[1400px] lg:w-[948px] lg:text-[18px] 2xl:text-[24px]"
                >Augmented reality helps teachers to simplify the subjects and engage the student more with the educational content. the student can watch the virtual objects and interact with it by downloading the AR application on their tablets or smart phones, there is no need for special hardware equipment to run the solution.</p>
            </div>
        </div>
        <SmartProjects />
        <Smartfooter />
    </div>
</template>

<script>
import Smartfooter from "~/components/Smarty/Smartfooter.vue";
import SmartProjects from "~/components/Smarty/SmartProjects.vue";
export default {
    components: { Smartfooter, SmartProjects }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

.diver {
    font-family: "Montserrat", sans-serif;
}
</style>