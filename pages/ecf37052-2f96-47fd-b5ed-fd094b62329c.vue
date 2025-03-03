<template>
  <section class="py-16 not-prose overflow-hidden">
    <div class="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between  md:flex md:px-8">
      <div class="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl relative">
        <h1 class="text-sm text-indigo-600 font-medium">индивидуальный подход к самопознанию</h1>
        <h2 class="text-4xl text-gray-800 font-extrabold md:text-5xl">{{ the.title }}</h2>
        <p><b>Постоянная тревога — как назойливая мелодия, которая заглушает вашу жизнь.</b><br>Я знаю, вы устали от мыслей «а что, если…», превращающих каждый день в полосу препятствий, от напряжения в теле и конфликтов «на пустом месте». Вы замечаете, как беспокойство крадёт вашу радость и мешает сделать даже маленький шаг вперёд.&nbsp;</p><p><b>Моя работа — не «исправить» вас, а помочь</b>:<br>→ найти источники вашего напряжения, даже скрытые от вашего сознания
<br>→ научиться&nbsp;<span style="font-size: 12pt; line-height: 115%; font-family: Aptos, sans-serif;">«</span>перезаряжать<span style="--un-rotate: 0; --un-rotate-x: 0; --un-rotate-y: 0; --un-rotate-z: 0; --un-scale-x: 1; --un-scale-y: 1; --un-scale-z: 1; --un-skew-x: 0; --un-skew-y: 0; --un-translate-x: 0; --un-translate-y: 0; --un-translate-z: 0; --un-pan-x: ; --un-pan-y: ; --un-pinch-zoom: ; --un-scroll-snap-strictness: proximity; --un-ordinal: ; --un-slashed-zero: ; --un-numeric-figure: ; --un-numeric-spacing: ; --un-numeric-fraction: ; --un-border-spacing-x: 0; --un-border-spacing-y: 0; --un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-shadow: 0 0 rgb(0 0 0 / 0); --un-shadow-inset: ; --un-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-inset: ; --un-ring-offset-width: 0px; --un-ring-offset-color: #fff; --un-ring-width: 0px; --un-ring-color: rgb(147 197 253 / .5); --un-blur: ; --un-brightness: ; --un-contrast: ; --un-drop-shadow: ; --un-grayscale: ; --un-hue-rotate: ; --un-invert: ; --un-saturate: ; --un-sepia: ; --un-backdrop-blur: ; --un-backdrop-brightness: ; --un-backdrop-contrast: ; --un-backdrop-grayscale: ; --un-backdrop-hue-rotate: ; --un-backdrop-invert: ; --un-backdrop-opacity: ; --un-backdrop-saturate: ; --un-backdrop-sepia: ; border-color: var(--un-default-border-color, #e5e7eb);"><span style="--un-rotate: 0; --un-rotate-x: 0; --un-rotate-y: 0; --un-rotate-z: 0; --un-scale-x: 1; --un-scale-y: 1; --un-scale-z: 1; --un-skew-x: 0; --un-skew-y: 0; --un-translate-x: 0; --un-translate-y: 0; --un-translate-z: 0; --un-pan-x: ; --un-pan-y: ; --un-pinch-zoom: ; --un-scroll-snap-strictness: proximity; --un-ordinal: ; --un-slashed-zero: ; --un-numeric-figure: ; --un-numeric-spacing: ; --un-numeric-fraction: ; --un-border-spacing-x: 0; --un-border-spacing-y: 0; --un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-shadow: 0 0 rgb(0 0 0 / 0); --un-shadow-inset: ; --un-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-inset: ; --un-ring-offset-width: 0px; --un-ring-offset-color: #fff; --un-ring-width: 0px; --un-ring-color: rgb(147 197 253 / .5); --un-blur: ; --un-brightness: ; --un-contrast: ; --un-drop-shadow: ; --un-grayscale: ; --un-hue-rotate: ; --un-invert: ; --un-saturate: ; --un-sepia: ; --un-backdrop-blur: ; --un-backdrop-brightness: ; --un-backdrop-contrast: ; --un-backdrop-grayscale: ; --un-backdrop-hue-rotate: ; --un-backdrop-invert: ; --un-backdrop-opacity: ; --un-backdrop-saturate: ; --un-backdrop-sepia: ; border-color: var(--un-default-border-color, #e5e7eb); font-size: 12pt; line-height: 18.4px; font-family: Aptos, sans-serif;">»</span></span>&nbsp;психику простыми практиками
<br>→ вспомнить свою силу и создать запас прочности, чтобы сложные ситуации не выбивали из колеи</p><p><b>Гармония — это не отсутствие проблем, а умение проходить через них, не теряя себя</b>.&nbsp;</p>
        <div class="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
          <router-link :to="the.$next.to" class="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
            Давайте начнём
          </router-link>
          <router-link to="/приём/" class="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">Записаться
            <icon icon="mdi:arrow-right"></icon>
          </router-link>
        </div>
        <div class="v-bg position-absolute -inset-x-48 -inset-y-96 -z-10">
          <div aria-hidden="true" class="opacity-20 size-full"></div>
        </div>
      </div>
      <div class="flex-none mt-14 md:mt-0 md:max-w-xl">
        <img :src="the.images[1].url" class=" md:rounded-tl-[108px]" alt="" decoding="async">
      </div>
    </div>
  </section>
</template>



<script setup>
import { inject } from "vue";
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
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
