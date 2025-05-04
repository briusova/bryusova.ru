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





        </div>
    </section>
</template>

<script setup vapor>
import { inject } from "vue";
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const features = [

    {
        title: "Кто я",
        desc: ["сертифицированный специалист НАНМ",
            "член Общероссийской профессиональной психотерапевтической лиги (ОППЛ)",
            "психолог-консультант оздоровительного центра \"Комплемед\"",
            "основное направление моей работы — ресурс-ориентированная психотерапия (РОП)"]
    },

    {
        title: "Приходите на консультацию, и я помогу",
        desc: ["найти ответы на интересующие вопросы",
            "разобраться с эмоциями и чувствами",
            "освободиться от негативных убеждений, страхов и навязчивых мыслей",
            "принять себя, повысить самооценку и наладить отношения с близкими",
            "активировать ваши внутренние ресурсы"]
    },
    {
        title: "В работе использую",
        desc: ["МАК (метафорические ассоциативные карты)",
            "технику эмоциональной свободы (EFT / ТЭС)",
            "метод ДПДГ / EMDR (десенсибилизация и переработка движением глаз)",
            "технику спонтанной визуализации",
            "и ещё десятки авторских методик, из которых некоторые даже не переведены на русский язык"]
    }
];

</script>
