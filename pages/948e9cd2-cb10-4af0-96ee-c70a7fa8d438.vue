<template>
  <div class="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto not-prose" un-cloak>
    <div class="mt-4 items-center justify-between sm:flex">
      <div class="mt-4 sm:mt-0">
        <div class="mt-3 flex items-center gap-x-3">
          <icon class="text-gray-400 size-7" icon="la:map-marker"></icon>
          <div>Калининград, ул. Степана Разина, д. 20</div>
        </div>
      </div>
      <div class="mt-6 sm:mt-0">
        <ul class="flex items-center space-x-4">
          <li class="w-10 h-10 border rounded-full flex items-center justify-center"
            v-for="(item, idx) in contactMethods" :key="idx">
            <a :href="item.href" target="_blank" rel="noopener noreferrer">
              <icon :icon="item.icon" class="size-6"></icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <nav class="not-prose relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 lg:flex lg:space-x-6" un-cloak>
    <div class="flex justify-between">
      <router-link to="/">
        <img :src="the.images[1].url" width="100" height="50" decoding="async" />
      </router-link>
      <button class="text-gray-500 outline-none lg:hidden h-6 bg-white" @click="toggleMenu">
        <icon icon="mdi:close" class="h-6 w-6" v-if="isOpen"></icon>
        <icon icon="mdi:menu" class="h-6 w-6" v-else></icon>
      </button>
    </div>
    <div :class="isOpen ? 'absolute inset-x-0 px-4 border-b bg-white lg:border-none lg:static' : 'hidden'"
      class="flex-1 justify-between mt-12 lg:text-sm lg:font-medium lg:flex lg:mt-0">
      <ul class="items-center space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:ml-12">
        <li class="text-gray-500 hover:text-indigo-600" v-for="(item, idx) in the.$children.slice(1).slice(0, -1)"
          :key="idx">
          <router-link :to="item.to" v-text="item.name"></router-link>
        </li>
        <li class="order-2 py-5 lg:py-0">
          <router-link :to="the.children[1].to"
            class="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block lg:py-3 lg:inline">
            Приступим
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="min-h-dvh"><router-view></router-view></div>
  <footer class="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto not-prose" un-cloak>
    <div class="max-w-7xl sm:mx-auto sm:text-center">
      <img :src="the.images[1].url" class="w-20 sm:mx-auto" decoding="async" />
      <p class="leading-relaxed mt-2 text-[12px]">
        Копирование материала возможно только с согласия администрации сайта. Использование любой медицинской информации
        в личных целях требует дополнительной консультации врача. Все данные, опубликованные на сайте https://bryusova.ru,
        приведены исключительно для ознакомления, не могут служить поводом для самодиагностики или самолечения, носят
        информационный характер и не являются публичной офертой, определяемой положениями ч. 2 ст. 437 Гражданского
        кодекса РФ.
      </p>
    </div>
    <ul class="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
      <li class="hover:text-gray-800" v-for="(item, idx) in docs.$children" :key="idx">
        <router-link :to="item.to" v-text="item.name"></router-link>
      </li>
    </ul>
    <div class="mt-8 items-center justify-between sm:flex">
      <div class="mt-4 sm:mt-0">
        &copy; 2025 {{ the.title }}, ИНН: 771709237196
      </div>
      <div class="mt-6 sm:mt-0">
        <ul class="flex items-center space-x-4">
          <li class="w-10 h-10 border rounded-full flex items-center justify-center"
            v-for="(item, idx) in contactMethods" :key="idx">
            <a :href="item.href" target="_blank" rel="noopener noreferrer">
              <icon :icon="item.icon" class="size-6"></icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, inject } from "vue";
import { Icon } from '@iconify/vue';
import ElementPlus from "element-plus";
import "./node_modules/element-plus/dist/index.css";
import "./node_modules/animate.css/animate.min.css";

window.app.use(ElementPlus.default);
window.app.component("Icon", Icon);
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
const docs = computed(() => the.children.find(({ name }) => name === "документы"));
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const contactMethods = [
  {
    icon: "mdi:phone-outline",
    href: "tel:+79067921244",
  },
  {
    icon: "fa-brands:vk",
    href: "https://vk.com/abb_psy",
  },
  {
    icon: "mdi:envelope-outline",
    href: "mailto:briusova@gmail.com",
  },
  {
    icon: "mdi:telegram",
    href: "https://t.me/abb_psy",
  },
  {
    icon: "fa-brands:whatsapp",
    href: "https://wa.me/79067921244?text=Здравствуйте, хочу записаться на консультацию!",
  },

];
</script>
