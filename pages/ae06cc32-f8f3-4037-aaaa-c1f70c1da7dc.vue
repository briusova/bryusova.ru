<template>
    <section class='py-14'>
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div class="max-w-xl space-y-3 not-prose mb-6">
                <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
                <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ the.title }}</p>

            </div>
            <div class='mt-16 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                <div v-for="(plan, index) in plans" :key="index"
                    class="relative flex flex-col items-stretch rounded-xl border-2 mt-6">
                    <div class="p-8 space-y-4 border-b">
                        <span class='text-indigo-600 font-medium'>
                            {{ plan.name }}
                        </span>
                        <div class='text-gray-800 text-3xl font-semibold'>
                            от {{ plan.price }} <span class="text-xl text-gray-600 font-normal"> рублей</span>
                        </div>
                        <p>
                            {{ plan.desc }}
                        </p>
                        <div class="flex flex-col"><router-link :to="the.$children[index].to"
                                class='px-3 py-3 rounded-lg text-center font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150'>
                                выбрать услугу
                            </router-link></div>
                    </div>
                    <ul class='p-8 space-y-3'>

                        <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                            class='flex items-center gap-5'>
                            <icon icon="mdi:checkbox-marked-circle-outline" class="h-5 w-5 text-indigo-600"></icon>
                            {{ feature }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup vapor>

import { inject } from "vue";

const { id } = defineProps(["id"]);
const the = inject("pages")[id];
const plans = [
    {
        name: "Консультации",
        desc: "индивидуальная поддержка в решении психологических, эмоциональных и личностных задач",
        price: 4000,

        features: [
            "психологическая консультация",
            "консультация с МАК-картами",
            "метафорический прогноз",
            "отпуск с психологом",
        ],
    },
    {
        name: "Тест \"Тотал\"",
        desc: "тест платформы Проф-Диалог для профориентации и психологической диагностики",
        price: 2990,

        features: [
            "особенности личности",
            "подходящие профессии",
            "выраженность компетенций",
            "психологический портрет",
        ],
    },
    {
        name: "Обучение",
        desc: "учебные марафоны, вебинары и тренинги, курс ресурс-ориентированной психотерапии для психологов",
        price: 2500,

        features: [
            "управление эмоциями",
            "антистресс-стратегии",
            "техники самопомощи",
            "практики осознанности",
        ],
    },
];

</script>