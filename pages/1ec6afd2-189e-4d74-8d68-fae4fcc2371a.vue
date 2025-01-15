<template>
  <section class="py-14 not-prose overflow-hidden" un-cloak>
    <div class="px-4 md:px-8">
      <p class="text-center text-sm text-gray-700 font-semibold">{{ the.title }}</p>
      <p class="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto not-prose text-center">Жизнь невероятно щедра
        ко
        мне – сколько себя помню, меня всегда окружали интересные люди. В их числе представители разных
        профессий: артисты, врачи, писатели, композиторы, учителя, учёные, музыканты, художники. Список, если хорошенько
        покопаться в памяти, можно продолжать до бесконечности. Каждый логотип ниже — не просто проект или организация.
        Это символ взаимной поддержки, плодотворного сотрудничества и общей цели. Вместе мы стремимся сделать мир лучше.
      </p>
      <div class="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6 text-gray-600 text-sm">
        <a class="w-64 flex flex-col pa-4 items-center rounded-xl text-center hover:shadow-xl"
          v-for="{ src, title, href } in part" :href="href" target="_blank" rel="noopener noreferrer"><img :src="src"
            class="h-20 mb-2 rounded" decoding="async">{{ title }}</a>
      </div>
    </div>
    <div class="container mx-auto mt-28">
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>
    </div>
  </section>
</template>

<script setup>
import { StarFilled } from '@element-plus/icons-vue';
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
  {
    src: "my_images/eko.png",
    title: "Фестиваль Экотворец",
    href: "https://ekotvorec.ru",
  },
  {
    src: "my_images/book4.png",
    title: "Мёртвые души, том 2",
    href: "https://deadsouls2.ru",
  },
];
</script>