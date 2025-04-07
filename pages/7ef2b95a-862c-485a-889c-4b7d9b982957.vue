<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <h1>{{ the.header }}</h1>
            <p>Информация скоро появится</p><p>статьи/роп</p>
            <p></p>
          

           <h4 class="mt-10">Дополнительная информация:</h4>
            <div class="grid gap-y-1">
                <div><el-button class="not-prose w-full !justify-start" tag="a" href="tel:+79067921244">Позвонить +7
                        (906) 792-12-44 </el-button></div>
                <div><el-button class="not-prose w-full !justify-start" tag="a" href="https://wa.me/79067921244?text=Здравствуйте,%20хочу%20записаться%20на%20прием!" target="_blank" rel="noopener noreferrer"> Написать в WhatsApp
                    </el-button></div>
                <div><el-button class=" not-prose w-full !justify-start" tag="a" target="_blank" rel="noopener noreferrer" href="https://t.me/Sasha_Bryusova">Написать в
                        Telegram</el-button></div>
            </div>

            <p><el-button class="not-prose" type="primary" :icon="Back" tag="a" href="/услуги/обучение/">Обучение</el-button></p>

        </div>
    </section>
</template>
<script setup>
import { inject } from "vue";
import { Back } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
</script>
