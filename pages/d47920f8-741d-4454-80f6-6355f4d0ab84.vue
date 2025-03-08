<template>
    <section class="py-14 not-prose" un-cloak>
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div class="max-w-xl space-y-3">
                <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
                <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ the.title }}</p>
                <p>{{ the.description }}</p>
            </div>
            <div class="mt-12">
                <ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                    <li v-for="(item, idx) in features" :key="idx" class="space-y-3">
                        <div class="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                            <icon icon="mdi:check" class="size-6"></icon>
                        </div>
                        <h4 class="text-lg text-gray-800 font-semibold">{{ item.title }}</h4>
                        <ul class="list-disc list-inside">
                            <li v-for="desc in item.desc">{{ desc }}</li>
                        </ul>
                    </li>
                </ul>
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
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const features = [

    {
        title: "Кто я",
        desc: ["член Национальной профессиональной ассоциации специалистов народной медицины и оздоровительных практик (НАНМ)",
            "член Общероссийской профессиональной психотерапевтической лиги (ОППЛ)",
            "консультант оздоровительного центра \"Комплемед\"",
            "основное направление моей работы — ресурс-ориентированная психотерапия (РОП)"]
    },

    {
        title: "Приходите на консультацию и я помогу",
        desc: ["найти ответы на интересующие вопросы",
            "разобраться с эмоциями и чувствами",
            "освободиться от негативных убеждений, страхов и навязчивых мыслей",
            "принять себя, повысить самооценку и наладить отношения с близкими",
            "активировать ваши внутренние ресурсы",
            "создать запас прочности, чтобы сложные ситуации не выбивали из колеи"]
    },
    {
        title: "В работе использую",
        desc: ["МАК (метафорические ассоциативные карты)",
            "технику эмоциональной свободы (EFT / ТЭС)",
            "метод ДПДГ / EMDR (десенсибилизация и переработка движением глаз)",
            "технику спонтанной визуализации",
            "психологическое тестирование",
            "и ещё десятки проверенных универсальных авторских методик, из которых некоторые даже не переведены на русский язык"]
    }
],
    anima = ref(false);

</script>
