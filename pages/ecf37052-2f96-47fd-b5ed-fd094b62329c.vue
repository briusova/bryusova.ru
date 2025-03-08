<template>
  <section class="py-16 not-prose overflow-hidden  overflow-visible">
    <div
      class="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between  md:flex md:px-8  overflow-visible">
      <div class="flex-none px-4 sm:max-w-lg md:px-0 lg:max-w-xl relative overflow-visible">
        <h1 class="text-sm text-indigo-600 font-medium">индивидуальный подход к самопознанию</h1>
        <h2 class="text-4xl text-gray-800 font-extrabold md:text-5xl">{{ the.title }}</h2>

        <p class="border-l-4 pl-2 border-slate-400 text-xl mt-10 mb-6">психолог-консультант</p>
        <p class="border-l-4 pl-2 border-slate-400 text-xl mt-6 mb-6">специалист по оздоровлению</p>
                <p class="border-l-4 pl-2 border-slate-400 text-xl mt-6 mb-10">практика с 2010 года</p>

        <div class="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
          <router-link :to="the.$next.to"
            class="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
            Давайте начнём
          </router-link>
          <router-link to="/приём/"
            class="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 bg-white active:bg-gray-100 border rounded-lg md:inline-flex">Записаться
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
