<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <h1>{{ the.header }}</h1>

            <p><span style="color: rgb(75 85 99 / var(--un-text-opacity));">Провожу как индивидуальные, так и групповые занятия. Это и семинары, и учебные онлайн марафоны.</span></p>
            



            <el-table :data="tableData" stripe="" class="w-full">
                <el-table-column label="Наименование услуги">
                    <template #default="scope">
                        <router-link :to="scope.row.link" v-if="scope.row.link">{{ scope.row.name }}</router-link>
                        <div v-else="">{{ scope.row.name }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="Стоимость">
                </el-table-column></el-table>

            <h4 class="mt-10">Запись и дополнительная информация:</h4>
            <div class="grid gap-y-1">
                <div><el-button class="not-prose w-full !justify-start" tag="a" href="tel:+79067921244">Позвонить +7
                        (906) 792-12-44 </el-button></div>
                <div><el-button class="not-prose w-full !justify-start" tag="a" href="https://wa.me/79067921244?text=Здравствуйте,%20хочу%20записаться%20на%20прием!" target="_blank" rel="noopener noreferrer"> Написать в WhatsApp
                    </el-button></div>
                <div><el-button class=" not-prose w-full !justify-start" tag="a" target="_blank" rel="noopener noreferrer" href="https://t.me/Sasha_Bryusova">Написать в
                        Telegram</el-button></div>
            </div>


            <p><br></p>
            <p style="--un-translate-z: 0; --un-pan-x: ; --un-pan-y: ; --un-pinch-zoom: ; --un-scroll-snap-strictness: proximity; --un-ordinal: ; --un-slashed-zero: ; --un-numeric-figure: ; --un-numeric-spacing: ; --un-numeric-fraction: ; --un-border-spacing-x: 0; --un-border-spacing-y: 0; --un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-shadow: 0 0 rgb(0 0 0 / 0); --un-shadow-inset: ; --un-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-inset: ; --un-ring-offset-width: 0px; --un-ring-offset-color: #fff; --un-ring-width: 0px; --un-ring-color: rgb(147 197 253 / .5); --un-blur: ; --un-brightness: ; --un-contrast: ; --un-drop-shadow: ; --un-grayscale: ; --un-hue-rotate: ; --un-invert: ; --un-saturate: ; --un-sepia: ; --un-backdrop-blur: ; --un-backdrop-brightness: ; --un-backdrop-contrast: ; --un-backdrop-grayscale: ; --un-backdrop-hue-rotate: ; --un-backdrop-invert: ; --un-backdrop-opacity: ; --un-backdrop-saturate: ; --un-backdrop-sepia: ; border-color: var(--un-default-border-color, #e5e7eb);">Делиться знаниями и опытом — это то, что делает меня по-настоящему счастливой. Преподавание позволяет мне помочь большему количеству людей разобраться в своих проблемах и найти новые возможности для роста.</p><p style="--un-translate-z: 0; --un-pan-x: ; --un-pan-y: ; --un-pinch-zoom: ; --un-scroll-snap-strictness: proximity; --un-ordinal: ; --un-slashed-zero: ; --un-numeric-figure: ; --un-numeric-spacing: ; --un-numeric-fraction: ; --un-border-spacing-x: 0; --un-border-spacing-y: 0; --un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-shadow: 0 0 rgb(0 0 0 / 0); --un-shadow-inset: ; --un-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-inset: ; --un-ring-offset-width: 0px; --un-ring-offset-color: #fff; --un-ring-width: 0px; --un-ring-color: rgb(147 197 253 / .5); --un-blur: ; --un-brightness: ; --un-contrast: ; --un-drop-shadow: ; --un-grayscale: ; --un-hue-rotate: ; --un-invert: ; --un-saturate: ; --un-sepia: ; --un-backdrop-blur: ; --un-backdrop-brightness: ; --un-backdrop-contrast: ; --un-backdrop-grayscale: ; --un-backdrop-hue-rotate: ; --un-backdrop-invert: ; --un-backdrop-opacity: ; --un-backdrop-saturate: ; --un-backdrop-sepia: ; border-color: var(--un-default-border-color, #e5e7eb);">Я верю, что каждый способен изменить свою жизнь к лучшему, и, когда вижу, как мои слушатели начинают расти и развиваться, это наполняет меня радостью и вдохновением.&nbsp;<span style="color: rgb(75 85 99 / var(--un-text-opacity));">Я просто хочу помогать людям. И я это делаю. Хочу, чтобы люди ощущали поддержку на своём пути, и с каждым занятием надеюсь, что смогу внести небольшой, но важный позитивный вклад в их жизнь.&nbsp;</span><span style="color: rgb(75 85 99 / var(--un-text-opacity));">Также, я являюсь тренером-наставником в "Школе саморегуляции по методике Наталии Носачевой".</span></p>

            <p><el-button class="not-prose" type="danger" tag="a" href="https://natalie-school.ru" target="_blank" rel="noopener noreferrer">Школа саморегуляции<el-icon class="el-icon--right">
                        <right>
                        </right>
                    </el-icon></el-button></p>

            <el-button class="not-prose" tag="router-link" :to="the.parent.to" :icon="Back" type="primary">{{
                the.parent.header }}</el-button>

        </div>
    </section>
</template>
<script setup>
import { inject } from "vue";
import { Back, Right } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];

const tableData = [
     {
        name: "Учебный марафон",
        price: "от 2.500 руб / 6 недель",
        link: "/новости/марафон/"
    },
    {
        name: "Обучение авторскому методу",
        price: "5.000 руб / 1 занятие",
        link: "/статьи/метод/"
    },
];
</script>
