<template>
  <section class="py-28 not-prose overflow-hidden" un-cloak>
    <div class="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between  md:flex md:px-8">
      <div class="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl relative">
        <h1 class="text-sm text-indigo-600 font-medium">индивидуальный подход к самопознанию</h1>
        <h2 class="text-4xl text-gray-800 font-extrabold md:text-5xl">{{ the.title }}</h2>
        <p>{{ the.description }}</p>
        <div class="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
          <router-link :to="the.$next.to"
            class="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
            Давайте начнём
          </router-link>
          <router-link to="/приём/"
            class="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">Записаться
            <icon icon="mdi:arrow-right"></icon>
          </router-link>
        </div>
        <div class="v-bg position-absolute -inset-x-48 -inset-y-96">
          <div aria-hidden="true" class="opacity-20 size-full" />
        </div>
      </div>
      <div class="flex-none mt-14 md:mt-0 md:max-w-xl">
        <img :src="the.images[1].url" class=" md:rounded-tl-[108px]" alt="" decoding="async" />
      </div>
    </div>
    <div class="mt-14 px-4 md:px-8">
      <p class="text-center text-sm text-gray-700 font-semibold">Мои партнёры</p>
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
    src: "images/0b824cb3-7b69-474f-8367-6a786ea48537.png",
    title: "Оздоровительный Центр Комплемед",
    href: "https://komplemed.ru",
  },
    {
    src: "my_images/nanm.png",
    title: "НАМН",
    href: "https://nanmprof.org",
  },
  {
    src: "images/89f869d7-1b3d-482c-80d9-861efe50c0ed.jpeg",
    title: "Информационный центр Арго",
    href: "https://argo-centr39.ru",
  },
  {
    src: "images/0b67be88-cc37-48b7-bc9b-c470f8fa542b.png",
    title: "Компания Проф-Диалог",
    href: "https://prof-dialog.ru",
  },
  {
    src: "my_images/school.png",
    title: "Школа саморегуляции",
    href: "https://natalie-school.ru",
  },
  {
    src: "images/f21c70d4-3842-4a70-93b5-e12661856160.png",
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

<style scoped>
.v-bg {
  filter: blur(56px);
  pointer-events: none;
}

.v-bg>div {
  background: linear-gradient(to bottom right,
      rgb(33, 150, 243),
      rgb(176, 0, 32));
  z-index: -10;
  clip-path: polygon(20% 50%, 27% 66%, 41% 66%, 50% 50%, 41% 34%, 27% 34%, 20% 50%, 55% 50%, 62% 66%, 76% 66%, 85% 50%, 76% 34%, 62% 34%, 55% 50%, 30% 50%, 37% 66%, 51% 66%, 60% 50%, 51% 34%, 37% 34%, 30% 50%);
}
</style>
