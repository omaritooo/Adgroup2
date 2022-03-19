<template>
    <div class="h-screen overflow-x-hidden bg-red-300">
        <div class="flex">
            <div class="flex h-screen">
                <div
                    :class="tester.test1 ? 'w-0 opacity-0' : 'w-full'"
                    class="transition-all duration-300 bg-gray-300"
                >
                    <div>
                        <img src="/smarty.svg" />
                    </div>
                </div>
                <div
                    class="h-screen my-auto text-center w-fit bg-amber-400"
                    @click="tester.test1 = !tester.test1"
                >
                    <div class="m-auto text-center rotate-90 text-7xl">Test</div>
                </div>
            </div>
            <div class="flex h-screen">
                <div
                    :class="tester.test2 ? 'w-0 opacity-0' : 'w-full'"
                    class="transition-all duration-300 bg-gray-300"
                >Test</div>
                <div class="h-screen w-fit bg-amber-400" @click="tester.test2 = !tester.test2">
                    <div class="mx-auto my-auto text-center rotate-90 text-7xl">Test</div>
                </div>
            </div>
            <div class="flex h-screen">
                <div
                    :class="tester.test3 ? 'w-0 opacity-0' : 'w-full'"
                    class="transition-all duration-300 bg-gray-300"
                >Test</div>
                <div class="h-screen w-fit bg-amber-400" @click="tester.test3 = !tester.test3">
                    <div class="w-full mx-auto my-auto text-center rotate-90 text-7xl">
                        <span class="rotate-90 -transform-y-32">Test</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tester:
            {
                test1: true,
                test2: true,
                test3: true,
            }
            ,
            items: [
                {
                    title: 'Vue Particles',
                    text: 'Vuejs Feed',
                    url: '#',
                    image: '/img13.png'
                },
                {
                    title: 'Vue Particles',
                    text: 'Vuejs Feed',
                    url: '#',
                    image: '/img13.png'
                },
                {
                    title: 'Vue Particles',
                    text: 'Vuejs Feed',
                    url: '#',
                    image: '/img13.png'
                },

            ],
            styles: {
                // this will be bound to the style attribute of all `div`s inside the accordion
                div: {
                    height: '350px'
                },
                // this will be bound to the style attribute of all `ul`s inside the accordion
                ul: {
                    color: '#F00'
                },
                // this will be bound to the style attribute of all `li`s inside the accordion
                li: {
                    fontSize: '22px'
                },
                // this will be bound to the style attribute of all `a`s inside the accordion
                a: {
                    padding: '30px'
                },
                // this will be bound to the style attribute of all `h2`s inside the accordion
                h2: {
                    marginTop: '100px'
                },
                // this will be bound to the style attribute of all `p`s inside the accordion
                p: {
                    textTransform: 'uppercase'
                }
            }
        }
    },
}
</script>

<style>
</style>