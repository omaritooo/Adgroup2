<template>
    <div class="h-screen max-h-[1080px] w-screen overflow-x-hidden pt-20">
        <div
            class="flex relative justify-around w-screen px-[176px] py-36 rounded-t-3xl bg-gradient-to-r from-[#68BF8C] to-[#0CA092]"
        >
            <div class="flex flex-col gap-y-8">
                <div class="flex gap-x-12">
                    <img class="relative z-50 w-52 h-52" src="/vrealvert.svg" alt />
                    <img class="relative z-50 w-52 h-52" src="/adgroupvert.svg" alt />
                </div>
                <div class="flex flex-col text-2xl font-light text-white gap-y-3">
                    <div class="flex text-white gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-10 h-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="{2}"
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                        </svg>
                        <span>+2 123 532 678 | +2 123 532 678</span>
                    </div>
                    <div class="flex text-white gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 my-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="{2}"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span>Info@vividly.com</span>
                    </div>
                    <div class="flex text-white gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="{2}"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="{2}"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span>Fifth Settlement Compound Retaj (AD Group)</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-y-5">
                <form class="flex flex-col text-white gap-y-3">
                    <input
                        type="text"
                        name
                        placeholder="Name"
                        class="w-full px-4 py-4 placeholder-current bg-transparent border border-opacity-75 rounded-lg"
                    />
                    <div class="flex gap-x-3">
                        <input
                            type="text"
                            name
                            placeholder="Phone"
                            class="w-full px-4 py-4 placeholder-current bg-transparent border border-opacity-75 rounded-lg"
                        />
                        <input
                            type="text"
                            name
                            placeholder="Email"
                            class="w-full px-4 py-4 placeholder-current bg-transparent border border-opacity-75 rounded-lg"
                        />
                    </div>
                    <textarea
                        rows="5"
                        class="w-full p-4 placeholder-current bg-transparent border border-opacity-75 rounded-lg h-1/2"
                    ></textarea>
                    <button
                        class="w-full p-4 text-2xl text-black placeholder-current bg-white border rounded-b-lg shadow-xl border-opacity-20"
                    >Send</button>
                </form>
                <div class="flex justify-center gap-x-[91px]">
                    <svg
                        width="17"
                        height="28"
                        viewBox="0 0 17 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.5 1.5H11.75C10.0924 1.5 8.50269 2.15848 7.33058 3.33058C6.15848 4.50269 5.5 6.0924 5.5 7.75V11.5H1.75V16.5H5.5V26.5H10.5V16.5H14.25L15.5 11.5H10.5V7.75C10.5 7.41848 10.6317 7.10054 10.8661 6.86612C11.1005 6.6317 11.4185 6.5 11.75 6.5H15.5V1.5Z"
                            stroke="#A3EFCB"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <svg
                        width="30"
                        height="26"
                        viewBox="0 0 30 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28.75 1.75C27.553 2.59434 26.2276 3.24013 24.825 3.6625C24.0722 2.79688 23.0717 2.18336 21.9588 1.9049C20.8459 1.62645 19.6744 1.69649 18.6026 2.10556C17.5308 2.51464 16.6106 3.243 15.9662 4.19214C15.3219 5.14129 14.9846 6.26542 15 7.4125V8.6625C12.8033 8.71946 10.6266 8.23226 8.66376 7.2443C6.70093 6.25635 5.0129 4.79829 3.75 3C3.75 3 -1.25 14.25 10 19.25C7.42566 20.9975 4.35895 21.8737 1.25 21.75C12.5 28 26.25 21.75 26.25 7.375C26.2488 7.02681 26.2154 6.67949 26.15 6.3375C27.4258 5.07936 28.326 3.49089 28.75 1.75V1.75Z"
                            stroke="#A3EFCB"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28.175 8.025C28.0265 7.43176 27.7241 6.88821 27.2983 6.44926C26.8725 6.0103 26.3384 5.69148 25.75 5.525C23.6 5 15 5 15 5C15 5 6.39998 5 4.24998 5.575C3.66154 5.74148 3.12745 6.0603 2.70167 6.49926C2.27588 6.93821 1.97347 7.48176 1.82498 8.075C1.4315 10.2569 1.23903 12.4704 1.24998 14.6875C1.23596 16.9213 1.42844 19.1516 1.82498 21.35C1.98868 21.9248 2.29787 22.4477 2.72266 22.8681C3.14746 23.2885 3.67351 23.5923 4.24998 23.75C6.39998 24.325 15 24.325 15 24.325C15 24.325 23.6 24.325 25.75 23.75C26.3384 23.5835 26.8725 23.2647 27.2983 22.8257C27.7241 22.3868 28.0265 21.8432 28.175 21.25C28.5654 19.0845 28.7579 16.8879 28.75 14.6875C28.764 12.4537 28.5715 10.2234 28.175 8.025V8.025Z"
                            stroke="#A3EFCB"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12.1875 18.7751L19.375 14.6876L12.1875 10.6001V18.7751Z"
                            stroke="#A3EFCB"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <nuxt-link to>
                <div
                    class="absolute p-4 bg-gradient-to-t text-white from-[#68BF8C] to-[#0CA092] rounded-full -top-8 right-14"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="{2}"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </div>
            </nuxt-link>
        </div>
        <div
            class="py-10 text-2xl font-thin text-center text-white bg-gray-800"
        >All Rights Reserved © {{ new Date().getFullYear() }} VReal</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>