<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 md:px-8">
            <div class="max-w-xl space-y-3">
                <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
                <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ the.title }}</p>
                <p>{{ the.description }}</p>
            </div>
            <div class="max-w-3xl mx-auto text-center">
                <div v-for="(testimonial, index) in cert" :key="index" v-show="currentTestimonial === index">
                    <figure>
                        <div class="mt-6">
                             <el-image :src="testimonial.src"
                                class="w-auto h-96 shadow-md rounded-xl border-2 border-sky-200 mx-auto"
                                :alt="testimonial.name" decoding="async" fit="cover" :preview-src-list="previewSrcList"
                                :initial-index="index">
                            </el-image>
                            <div class="mt-3">
                                <span class="block text-gray-800 font-semibold">{{ testimonial.name }} // {{ testimonial.date }}</span>
                                <span class="block text-gray-600 text-sm mt-0.5">{{ testimonial.desc }}</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
            <div class="mt-6">
                <ul class="flex gap-x-3 justify-center">
                    <li v-for="(testimonial, index) in cert" :key="index">
                        <button class="w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring"
                            :class="{ 'bg-indigo-600': currentTestimonial === index, 'bg-gray-300': currentTestimonial !== index }"
                            @click="currentTestimonial = index"></button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, inject } from "vue";

const { id } = defineProps(["id"]);
const the = inject("pages")[id];
const currentTestimonial = ref(0),
    cert = reactive([{
        name: "Диплом психолога, преподавателя психологических дисциплин",
        date: "2005 год",
        desc: "Московский государственный социальный университет Министерства труда и социального развития Российской Федерации",
        src: "images/076f7e6f-9bcb-425e-bbac-f709291d7906.jpeg"
    },
    {
        name: "Специалист по оздоровлению",
        date: "с 2023 года",
        desc: "Национальная профессиональная ассоциация специалистов народной медицины и оздоровительных практик",
        src: "my_images/2025nanm.jpg"
    },
    {
        name: "Ресурс-ориентированная психотерапия",
        date: "2024 год",
        desc: "Общероссийская профессиональная психотерапевтическая лига",
        src: "images/e8a168e4-e417-4bae-936a-7c211b4c4f55.jpeg",
        src2: "images/aa4c0919-ad30-4a09-b1cc-ce591ee8f60c.jpeg"
    },
    {
        name: "Психолог-консультант",
        date: "2023 год",
        desc: "Система добровольной сертификации \"Консалтинг, аудит, экспертиза, оценка\"",
        src: "images/da3db03d-a698-48fa-9ab9-67882c338642.jpeg"
    },
    {
        name: "Свидетельство",
        date: "2025 год",
        desc: "Общероссийская профессиональная психотерапевтическая лига",
        src: "my_images/opl.jpg"
    },
    {
        name: "Психолог, нумеролог-консультант",
        date: "2023 год",
        desc: "АНО \"Профессиональный стандарт\"",
        src: "images/b1ca00d0-c1d6-40bd-b535-21c619d5b193.jpeg"
    },
    {
        name: "Психолог-консультант",
        date: "2018 год",
        desc: "Институт глобального образования и развития",
        src: "images/26d838d8-573c-42ba-a2ac-0555c6d61652.jpeg"
    },
    {
        name: "Психодиагностика личностно-профессиональных компетенций",
        date: "2020 год",
        desc: "Экспертно-аналитическое объединение \"Проф-диалог\"",
        src: "images/8b3e3c2a-dbbd-4fbf-8cd9-e7e9b465c7a0.jpeg"
    },
    {
        name: "Система самодиагностики и самоисцеления человека на основе радиэстезического метода",
        date: "2019 год",
        desc: "Национальная профессиональная ассоциация специалистов народной медицины и оздоровительных практик",
        src: "images/bc1cdcbc-298a-4095-988b-0067427d6878.jpeg"
    }, {
        name: "Безопасная работа с травмой в ресур-ориентированном подходе",
        date: "2024 год",
        desc: "",
        src: "my_images/rop.png"
    },
    {
        name: "Работа с тревожными клиентами на первой консультации по системе РОП",
        date: "2023 год",
        desc: "",
        src: "images/dac425fa-01c5-47fb-ac4b-b60e1e4a82b1.png"
    },
    {
        name: "Уникальный дизайн судьбы человека",
        date: "2023 год",
        desc: "Школа развития сознания",
        src: "images/788bd79b-a8c8-4161-87b0-9459cea4ff65.jpeg"
    },
    {
        name: "Путь души",
        date: "2023 год",
        desc: "Академия астрологии Ирины Чайки",
        src: "images/415a48e6-bbe9-4a63-b827-28295356ced0.png"
    },
    {
        name: "Семейные конфликты как психологу с ними работать",
        date: "2023 год",
        desc: "Школа развития эмоций",
        src: "images/732c9fb8-339a-451c-b75c-455d3e2aaefb.png"
    },
    {
        name: "Техники работы психолога",
        date: "2022 год",
        desc: "Школа развития эмоций",
        src: "images/d3fb8e56-9759-431d-b77f-898345357982.jpeg"
    },
    ]);
const previewSrcList = cert.map(({ src, src2 }) => src2 ?? src);
</script>
