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
        title: "Обо мне",
        desc: ["психолог-консультант (практика с 2010 года)",
            "член Общероссийской профессиональной психотерапевтической лиги (ОППЛ)",
            "специалист по оздоровлению (с 2023 года)",
            "член Национальной ассоциации народной медицины (НАНМ)"]
    },

    {
        title: "Помогаю своим клиентам",
        desc: ["освободиться от негативных убеждений, страхов, навязчивых мыслей",
            "восстановить эмоциональное равновесие",
            "принять себя, повысить самооценку",
            "наладить отношения с близкими",
            "активировать внутренние ресурсы"]
    },
    {
        title: "Методы моей работы",
        desc: ["ресурс-ориентированная психотерапия (РОП), которая объединяет лучшие методы из КПТ, гештальт-терапии, ЭОТ и психоанализа",
            "развиваю авторское направление — оздоровительную психологию, где психика и тело рассматриваются как единое целое"]
    }
];

</script>
