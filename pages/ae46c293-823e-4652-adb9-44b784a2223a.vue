<template>
  <section class="py-14 not-prose">
    <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div class="max-w-xl space-y-3">
        <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
        <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ the.title }}</p>
        <p>{{ the.description }}<br><b>Образование</b>:</p>
        <p>🔹Московский Государственный Социальный Университет / психолог, преподаватель психологических
          дисциплин<br>🔹Президентская академия РАНХиГС / аспирантура, кафедра акмеологии</p>
        <p><b>Повышение квалификации</b>:</p>
        <p><span style="color: rgb(75 85 99 / var(--un-text-opacity));">🔸</span>Общероссийская профессиональная
          психотерапевтическая лига / ресурс-ориентированная психотерапия<br>🔸АНО
          "Профессиональный стандарт" /психология со специализацией "Нумерология"<br>🔸Институт глобального
          образования и развития / психологическое консультирование<br>🔸Экспертно-аналитическое объединение
          "Проф-диалог" / психодиагностика личностно-профессиональных компетенций<br>🔸Школа саморегуляции Наталии
          Носачевой
          / система самодиагностики и самоисцеления человека</p>
      </div>
      <div class="my-12">
        <ul class="grid gap-8 lg:grid-cols-2">
          <li class="gap-8 sm:flex" v-for="(item, index) in maincert" :key="index">
            <div class="w-full h-60">
              <el-image :src="item.src" class="w-full h-full shadow-md rounded-xl border-2 border-sky-200"
                :alt="item.name" decoding="async" fit="cover" :preview-src-list="previewSrcList" :initial-index="index">
              </el-image>
            </div>
            <div class="w-full  mt-4 sm:mt-0">
              <h4 class="text-lg text-gray-700 font-semibold">{{ item.name }}</h4>
              <p class="text-indigo-600">{{ item.date }}</p>
              <p class="text-gray-600 mt-2">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
      <details
        class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
        <summary
          class="text-xl leading-6 text-slate-600 dark:text-white font-semibold select-none hover:cursor-pointer">
          Посмотреть все дипломы
        </summary>
        <div class="my-12">
          <ul class="grid gap-8 lg:grid-cols-2">
            <li class="gap-8 sm:flex" v-for="(item, index) in cert" :key="index">
              <div class="w-full h-60">
                <el-image :src="item.src" class="w-full h-full shadow-md rounded-xl border-2 border-sky-200"
                  :alt="item.name" decoding="async" loading="lazy" fit="cover" :preview-src-list="previewSrcList1"
                  :initial-index="index">
                </el-image>
              </div>
              <div class="w-full  mt-4 sm:mt-0">
                <h4 class="text-lg text-gray-700 font-semibold">{{ item.name }}</h4>
                <p class="text-indigo-600">{{ item.date }}</p>
                <p class="text-gray-600 mt-2">{{ item.desc }}</p>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <div class="my-12">
          <ul class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <li v-for="(item, index) in hcert" :key="index">
              <div class="w-full h-60 sm:h-52 md:h-56">
                <el-image :src="item.src" class="w-full h-full shadow-md rounded-xl border-2 border-sky-200"
                  :alt="item.name" decoding="async" loading="lazy" fit="cover" :preview-src-list="previewSrcList2"
                  :initial-index="index">
                </el-image>
              </div>
              <div class="mt-4">
                <h4 class="text-lg text-gray-700 font-semibold">{{ item.name }}</h4>
                <p class="text-indigo-600">{{ item.date }}</p>
                <p class="text-gray-600 mt-2">{{ item.desc }}</p>
              </div>
            </li>
          </ul>
        </div>
      </details>
    </div>
  </section>
</template>



<script setup>
import { inject } from "vue";
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];

const maincert = [{
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
}
];
const previewSrcList = maincert.map(({ src, src2 }) => src2 ?? src);

const cert = [
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
  },
];
const previewSrcList1 = cert.map(({ src, src2 }) => src2 ?? src);
const hcert = [
  {
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
];
const previewSrcList2 = hcert.map(({ src, src2 }) => src2 ?? src);
</script>
