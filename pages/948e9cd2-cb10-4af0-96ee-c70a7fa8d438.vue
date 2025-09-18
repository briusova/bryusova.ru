<template>
  <div class="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto not-prose" un-cloak>
    <div class="mt-4 items-center justify-between sm:flex">
      <div class="mt-4 sm:mt-0">
        <div class="mt-3 flex items-center gap-x-3">
          <icon class="text-gray-400 size-7" icon="la:map-marker"></icon>
          <div>Калининград, Степана Разина, 20</div>
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
  <nav class="not-prose relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 space-x-6 hidden lg:flex" un-cloak>
    <div class="flex justify-between">
      <router-link to="/">
        <img :src="the.images[1].url" width="80" height="50" decoding="async" />
      </router-link>
    </div>
    <div class="flex-1 justify-between text-sm font-medium flex mt-0">
      <ul class="items-center flex space-x-6 space-y-0 ml-12">
        <li class="text-gray-500 hover:text-indigo-600" v-for="(item, idx) in the.$children.slice(1).slice(0, -1)"
          :key="idx">
          <router-link :to="item.to" v-text="item.name"></router-link>
        </li>
        <li class="order-2 py-0">
          <router-link :to="the.children[1].to"
            class="px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 py-3 inline">
            Приступим
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="min-h-dvh mt-16 lg:mt-0"><router-view></router-view></div>
  <footer class="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto not-prose" un-cloak>
    <div class="max-w-7xl sm:mx-auto sm:text-center">
      <router-link to="/"><img :src="the.images[1].url" class="w-20 sm:mx-auto" decoding="async" /></router-link>
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

<script setup vapor>
import { computed, inject, getCurrentInstance } from "vue";
import { Icon } from '@iconify/vue';
import ElementPlus from "element-plus";

const { appContext: { app } } = getCurrentInstance();
app.use(ElementPlus);
app.component("Icon", Icon);
const { pid: id } = defineProps(["pid"]);
const pages = inject("pages");
const the = pages[id];
const docs = computed(() => the.children.find(({ name }) => name === "документы"));
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
<style>
@import "./node_modules/element-plus/dist/index.css";
@import "./node_modules/animate.css/animate.min.css";
</style>
