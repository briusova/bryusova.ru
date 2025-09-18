<template>
    <section class="py-14" un-cloak>
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div class="max-w-xl space-y-3 not-prose mb-6">
                <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
                <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ the.title }}</p>
                <p>Больше статей на сайте психологов №1 <a href="https://www.b17.ru/briusova"
                        target="_blank" rel="noopener noreferrer" text-cyan-600=""
                        hover:text-blue-600="">https://www.b17.ru/briusova</a>, а также в моём <a
                        href="https://t.me/abb_psy" target="_blank" rel="noopener noreferrer" text-cyan-600=""
                        hover:text-blue-600="">Телеграм-канале</a>, где я делюсь актуальными материалами и советами.</p>
            </div>

            <ul class="divide-y divide-slate-100 not-prose">
                <li v-for="{ header, to, images } in the.$children">
                    <RouterLink :to="to" class="flex items-start gap-4 px-4 py-3">
                        <div class="flex items-center shrink-0">
                            <img :src="images[0]?.url" :alt="images[0]?.alt" class="w-20 rounded">
                        </div>
                        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                            <h4 class="text-base text-slate-700 ">{{ header }}</h4>
                            <p class="w-full text-sm text-slate-500">{{ description }}</p>
                        </div>
                    </RouterLink>
                </li>
            </ul>


        </div>
    </section>
</template>

<script setup vapor>
import { inject } from "vue";
const { pid: id } = defineProps(["pid"]);
const pages = inject("pages");
const the = pages[id];
</script>