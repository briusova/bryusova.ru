<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <h1>{{ the.header }}</h1>

            <p>Очные консультации в Калининграде и Москве. Онлайн — по всему миру!</p><p>Приём только по предварительной
                записи.</p><p>Скидка на первую консультацию 50% (знакомство, принятие взаимного решения о работе).</p>




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

            <p></p>

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
        name: "Психологическая консультация",
        price: " 4.000 руб / 60-90 минут",
    },
    {
        name: "Консультация по авторскому методу",
        price: " 10.000 руб / 3 встречи",
        link: "/статьи/консультация/"
    },
       {
        name: "Абонемент на 5 консультаций",
        price: " 18.000 руб",
    },
       {
        name: "Абонемент на 10 консультаций",
        price: " 35.000 руб",
    },
    {
        name: "Индивидуальное сопровождение",
        price: " от 70.000 руб / 1 месяц",
    },
    {
        name: "Отпуск с психологом",
        price: " по договорённости",
    },
];
</script>
