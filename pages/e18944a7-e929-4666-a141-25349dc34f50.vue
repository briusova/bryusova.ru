<template>
  <main class="py-14 not-prose" un-cloak>
    <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div class="rounded-3xl overflow-hidden shadow-2xl mb-24">
        <img src="my_images/veAOAZWU-Ys.jpg" alt="" decoding="async" class="h-auto min-w-2xl">
      </div>
      <div class="max-w-xl space-y-3">
        <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
        <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ the.title }}</p>
        <p>{{ the.description }}</p>
      </div>
      <div>
        <ul class="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
          <li v-for="(item, idx) in contactMethods" :key="idx">
            <h4 class="text-gray-800 text-lg font-medium">{{ item.title }}</h4>
            <div class="mt-3 flex items-center gap-x-3">
              <icon class="text-gray-400 size-7" :icon="item.icon"></icon>
              <a :target="item.target && '_blank'" rel="noopener noreferrer" :href="item.href">{{ item.contact }}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
import { inject } from "vue";
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const contactMethods = [
  {
    icon: "la:map-marker",
    contact: "ул. Степана Разина, д. 20",
    title: "Калининград"
  },
  {
    icon: "la:map-marker",
    contact: "площадь Журавлёва, д. 10",
    title: "Москва"
  },
  {
    icon: "la:phone",
    contact: "+7 (906) 792-1244",
    title: "Телефон",
    href: "tel:+79067921244"
  },
  {
    icon: "la:envelope",
    contact: "briusova@gmail.com",
    title: "E-mail",
    href: "mailto:briusova@gmail.com"
  },
  {
    icon: "la:telegram",
    contact: "https://t.me/abb_psy",
    title: "Телеграм",
    href: "https://t.me/abb_psy",
    target: true
  },
  {
    icon: "la:vk",
    contact: "https://vk.com/abb_psy",
    title: "ВКонтакте",
    href: "https://vk.com/abb_psy",
    target: true
  },
];

</script>
