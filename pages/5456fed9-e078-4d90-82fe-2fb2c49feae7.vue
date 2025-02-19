<template>


    <section class="not-prose py-14">
        <div class="max-w-screen-xl mx-auto md:px-8">
            <div class="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                <div class="flex-1 sm:hidden lg:block">
                    <img :src="the.images[0].url" class="md:max-w-lg sm:rounded-lg" alt="">
                </div>
                <div class="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                    <h3 class="text-indigo-600 font-semibold">
                        {{ the.name }}
                    </h3>
                    <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        {{ the.title }}
                    </p>
                    <p class="mt-3 text-gray-600">
                    </p>
                    <p><font size="4"><b>Как справиться с негативными эмоциями за 10 минут?</b></font></p>
                    <p>Владение навыками эмоциональной саморегуляции — ключ к гармонии в жизни и инструмент для
                        достижения своих целей. Обучение проверенным практическим методам позволяет управлять своими
                        эмоциями, справляться с тревожными состояниями и сложными жизненными ситуациями. Марафон «Мой
                        внутренний ресурс» — отличная возможность:&nbsp;</p>
                    <p>🔸<span style="color: var(--un-prose-body);">&nbsp;узнать, как формируется тревожность <br>🔸
                            научиться
                            принимать себя, свои чувства и эмоции <br>🔸 нарастить ресурс, вернуть себе
                            уверенность</span></p>
                    <p></p>
                    <router-link :to="the.$children[0].to" class="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                        подробнее
                        <el-icon>
                            <right>
                            </right>
                        </el-icon>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject } from "vue";
import { Right } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
</script>
