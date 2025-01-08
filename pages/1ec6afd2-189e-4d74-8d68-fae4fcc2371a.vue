<template>
  <section class="py-14 not-prose overflow-hidden" un-cloak>
    <div class="px-4 md:px-8">
      <p class="text-center text-sm text-gray-700 font-semibold">{{ the.title }}</p>
      <div class="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6 text-gray-600 text-sm">
        <a class="w-64 flex flex-col pa-4 items-center rounded-xl text-center hover:shadow-xl"
          v-for="{ src, title, href } in part" :href="href" target="_blank" rel="noopener noreferrer"><img :src="src"
            class="h-20 mb-2 rounded" decoding="async">{{ title }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const part = [
  {
    src: "my_images/komplemed.png",
    title: "Оздоровительный Центр Комплемед",
    href: "https://komplemed.ru",
  },
    {
    src: "my_images/nanm.png",
    title: "НАМН",
    href: "https://nanmprof.org",
  },
  {
    src: "my_images/argo.png",
    title: "Информационный центр Арго",
    href: "https://argo-centr39.ru",
  },
  {
    src: "my_images/prof.png",
    title: "Компания Проф-Диалог",
    href: "https://prof-dialog.ru",
  },
  {
    src: "my_images/school.png",
    title: "Школа саморегуляции",
    href: "https://natalie-school.ru",
  },
  {
    src: "my_images/med.png",
    title: "Компания Вся Медицина",
    href: "https://savamed.ru",
  },
  {
    src: "my_images/bach.png",
    title: "Цветочная терапия Баха",
    href: "https://bach-flowers.ru",
  },
];
</script>