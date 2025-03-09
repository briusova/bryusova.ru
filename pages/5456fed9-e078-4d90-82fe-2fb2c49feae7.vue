<template>


    <section class="not-prose py-14">
        <div class="max-w-screen-xl mx-auto md:px-8">
            <div class="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                <div class="flex-1 sm:hidden lg:block">
                    <img :src="the.images[0].url" class="md:max-w-lg sm:rounded-lg" alt="">
                </div>
                <div class="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                    <h3 class="text-indigo-600 font-semibold">
                        {{ the.name }}
                    </h3>
                    <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        {{ the.title }}
                    </p>
                    <p class="mt-3 text-gray-600">
                    </p>
                    <p><font size="4"><b>Открыта запись на Марафон "Мой внутренний ресурс"</b></font></p><p><span style="color: rgb(75, 85, 99); font-family: ui-sans-serif, system-ui, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium;">На Марафоне вы научитесь практическим методам работы, которые помогут справляться с негативными эмоциями и снизить напряжённость. Марафон полезен для всех, кто занимается саморазвитием, для студентов-психологов и для тех, кто хочет познакомиться с направлением ресурс-ориентированной психотерапии (РОП)</span></p>
                    <p></p>
                    <router-link :to="the.$children[0].to" class="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                        подробнее
                        <el-icon>
                            <right>
                            </right>
                        </el-icon>
                    </router-link>
                </div>
            </div>


<div
                class="sm:py-24 font-light antialiased [&amp;>*]:font-[Helvetica_Neue,Helvetica,Arial,sans-serif] text-slate-800 overflow-hidden">
                <h2 class="mb-6 mt-6 text-2xl sm:text-5xl">Гармония —</h2>
                <h2 class="text-2xl sm:text-5xl">это не отсутствие <span
                        class="text-white bg-red-500 italic">&nbsp;проблем&nbsp;</span></h2>
                <h1 class="sm:mt-24 text-3xl sm:text-7xl animate__animated"
                    v-intersection-observer="([{ isIntersecting }]) => { anima = isIntersecting }"
                    :class="{ animate__fadeInRight: anima, animate__fadeOutRight: !anima, }">а умение преодолевать 
                    их, <span class="text-white bg-slate-800 italic">&nbsp;не теряя&nbsp;</span> себя</h1>
            </div>




        </div>
    </section>
</template>




<script setup>
import { vIntersectionObserver } from "@vueuse/components";
import { inject, ref } from "vue";
import { Right } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const anima = ref(false);
</script>
