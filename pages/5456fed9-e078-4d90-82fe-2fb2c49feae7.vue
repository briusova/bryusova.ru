<template>
    <section class="not-prose py-14">
        <div class="max-w-screen-xl mx-auto md:px-8">
            <div class="bg-indigo-600">
                <div class="max-w-screen-xl mx-auto px-4 py-3 items-center justify-between text-white sm:flex md:px-8">
                    <div class="flex gap-x-4">
                        <div class="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                </path>
                            </svg>
                        </div>
                        <p class="py-2 font-medium">
                            Открыта запись на Марафон "Мой внутренний ресурс"
                        </p>
                    </div>
                    <router-link :to="the.$children[0].to"
                        class="inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm">
                        записаться
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="not-prose pt-0 pb-14">
        <div class="max-w-screen-xl mx-auto md:px-8">
            <div class="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                <div class="flex-1 flex lg:block justify-center">
                    <img :src="the.images[0].url" class="md:max-w-lg sm:rounded-lg" alt="">
                </div>
                <div class="px-4 space-y-3 mt-6 sm:px-0 lg:mt-0">

                    <p>На Марафоне вы научитесь практическим методам работы, которые помогут справляться с негативными
                        эмоциями и снизить напряжённость. Марафон полезен для всех, кто занимается саморазвитием, для
                        студентов-психологов и для тех, кто хочет познакомиться с направлением ресурс-ориентированной
                        психотерапии (РОП)</p>
                    <p></p>


                    <router-link :to="the.$children[0].to"
                        class="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                        подробнее
                        <el-icon>
                            <right>
                            </right>
                        </el-icon>
                    </router-link>
                </div>
            </div>
            <!--div
                class="px-4 md:px-0 sm:pt-24 sm:pb-6 font-light antialiased [&amp;>*]:font-[Helvetica_Neue,Helvetica,Arial,sans-serif] text-slate-800 overflow-hidden">
                <h2 class="mb-6 mt-6 text-2xl sm:text-5xl">Гармония —</h2>
                <h2 class="text-2xl sm:text-5xl">это не отсутствие <span
                        class="text-white bg-red-500 italic">&nbsp;проблем&nbsp;</span></h2>
                <h1 class="sm:mt-24 text-3xl sm:text-7xl animate__animated"
                    v-intersection-observer="([{ isIntersecting }]) => { anima = isIntersecting }"
                    :class="{ animate__fadeInRight: anima, animate__fadeOutRight: !anima, }">а умение преодолевать
                    их, <span class="text-white bg-slate-800 italic">&nbsp;не теряя&nbsp;</span> себя</h1>
            </div-->
        </div>
    </section>
</template>
<script setup vapor>
import { vIntersectionObserver } from "@vueuse/components";
import { inject, ref } from "vue";
import { Right } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const anima = ref(false);
</script>
