<template>
    <section class="py-14" un-cloak>
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div class="max-w-xl space-y-3 not-prose mb-6">
                <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
                <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ the.title }}</p>
                <p>Перед консультацией всегда возникает много вопросов: «Смогу ли я открыться? Поймёт ли меня психолог? Будет ли результат?» — и самый важный из них: «Получится ли изменить то, что не устраивает в жизни?»</p>

<p>Вы — автор своей жизни, я — наставник, который помогает освоить «грамматику» перемен. От букв (понимание себя) — к слогам (навыкам), от слов (решений) — к предложениям (вашей новой жизни). Ключ к успеху — готовность начать, доверие и терпение.</p>
            </div>


            <section class="not-prose mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
                <div class="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  
                    <article v-for="{ title, description, images, to } in the.$children"
                        class="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
                        <router-link :to="to">
                            <el-image :src="images[0].url" lazy :alt="images[0].alt" fit="cover"
                                class="w-full h-auto rounded-t-md"></el-image>
                            <div class="pt-3 ml-4 mr-2 mb-3">
                                <h3 class="text-xl text-gray-900">
                                    {{ title }}
                                </h3>
                                <p class="text-gray-400 text-sm mt-1">{{ description }}</p>
                            </div>
                            <el-button :to="to" class="ma-4">подробнее<el-icon class="el-icon--right"><Right /></el-icon></el-button>
                        </router-link>
                        
                    </article>
                </div>
            </section>



        </div>
    </section>
</template>

<script setup>
import { ElImage } from "element-plus";
import { inject } from "vue";
import { Right } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];


</script>
