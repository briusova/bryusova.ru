<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <h1>{{ the.header }}</h1>

            <p><b style="color: rgb(75 85 99 / var(--un-text-opacity));">Прежде чем сделать заявку на консультацию,
                    ознакомьтесь, пожалуйста, с важной информацией!</b></p>
            <p>Обращение к психологу подразумевает, что Вы самостоятельно принимаете решение о начале консультаций и
                контролируете этот процесс.&nbsp;<span style="color: rgb(75 85 99 / var(--un-text-opacity));">Психолог
                    направляет, рекомендует, не настаивает и никак не влияет на него.&nbsp;</span><span style="color: rgb(75 85 99 / var(--un-text-opacity));">Ваша активная вовлечённость в терапию имеет
                    решающее значение.</span></p>
            <p><span style="color: rgb(75 85 99 / var(--un-text-opacity));"><b>Терапия </b>— процесс глубокой внутренней
                    работы, направленной на восстановление эмоционального баланса и личностного роста.&nbsp;</span><span style="color: rgb(75 85 99 / var(--un-text-opacity));">Это не быстрое решение отдельных проблем, а
                    системная работа над собой.</span></p>
            <p><span style="color: rgb(75 85 99 / var(--un-text-opacity));"><b>Важно</b>:</span></p>
            <p>🔸Наблюдать за своими эмоциями, мыслями, реакциями (ведение дневника по рекомендациям)<br><span style="color: rgb(75 85 99 / var(--un-text-opacity));">🔸Анализировать динамику: регулярно обсуждаем
                    изменения, корректируем стратегию<br></span><span style="color: rgb(75 85 99 / var(--un-text-opacity));">🔸Следовать договорённостям (упражнения,
                    практики, домашние задания)</span></p>
            <p><b>Помните</b>: Ваше эмоциональное благополучие зависит только от Вас.&nbsp;<span style="color: rgb(75 85 99 / var(--un-text-opacity));">Моя роль как терапевта — направлять,
                    поддерживать и предоставлять инструменты для Вашей работы.&nbsp;</span><span style="color: rgb(75 85 99 / var(--un-text-opacity));">Но результат зависит только от Вашего желания
                    и готовности работать над собой.</span></p>
            <p><span style="color: rgb(75 85 99 / var(--un-text-opacity));"><b>Первая консультация</b> — этап знакомства
                    и выстраивания доверительных отношений.</span></p>
            <p><b>На первой консультации</b>:</p>
            <p>🔹Исследуем Ваш запрос<br><span style="color: rgb(75 85 99 / var(--un-text-opacity));">🔹Обсуждаем,
                    подходят ли вам мои методы<br></span><span style="color: rgb(75 85 99 / var(--un-text-opacity));">🔹Определяем Вашу готовность к терапии</span>
            </p>
            <p><b>Решение о сотрудничестве всегда двустороннее</b>:</p>
            <p>🔸Вы оцениваете, подхожу ли я Вам как специалист<br><span style="color: rgb(75 85 99 / var(--un-text-opacity));">🔸Я определяю, смогу ли помочь в Вашей
                    ситуации</span></p>

<h4 class="mt-10">Стоимость услуг:</h4>


            <el-table :data="tableData" stripe="" class="w-full">
                <el-table-column label="">
                    <template #default="scope">
                        <router-link :to="scope.row.link" v-if="scope.row.link">{{ scope.row.name }}</router-link>
                        <div v-else="">{{ scope.row.name }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="">
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

            <p><span style="color: rgb(75 85 99 / var(--un-text-opacity));">Очные консультации в Калининграде и Москве. Онлайн — по всему миру!</span></p><p style="--un-translate-z: 0; --un-pan-x: ; --un-pan-y: ; --un-pinch-zoom: ; --un-scroll-snap-strictness: proximity; --un-ordinal: ; --un-slashed-zero: ; --un-numeric-figure: ; --un-numeric-spacing: ; --un-numeric-fraction: ; --un-border-spacing-x: 0; --un-border-spacing-y: 0; --un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-shadow: 0 0 rgb(0 0 0 / 0); --un-shadow-inset: ; --un-shadow: 0 0 rgb(0 0 0 / 0); --un-ring-inset: ; --un-ring-offset-width: 0px; --un-ring-offset-color: #fff; --un-ring-width: 0px; --un-ring-color: rgb(147 197 253 / .5); --un-blur: ; --un-brightness: ; --un-contrast: ; --un-drop-shadow: ; --un-grayscale: ; --un-hue-rotate: ; --un-invert: ; --un-saturate: ; --un-sepia: ; --un-backdrop-blur: ; --un-backdrop-brightness: ; --un-backdrop-contrast: ; --un-backdrop-grayscale: ; --un-backdrop-hue-rotate: ; --un-backdrop-invert: ; --un-backdrop-opacity: ; --un-backdrop-saturate: ; --un-backdrop-sepia: ; border-color: var(--un-default-border-color, #e5e7eb);">Приём только по предварительной записи.</p>

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
        name: "Консультация с МАК (метафорические ассоциативные карты)",
        price: " 4.000 руб / 60-90 минут"
    },
        {
        name: "Метафорический прогноз (МАК)",
        price: " 6.000 руб / 2 встречи",
    },
    {
        name: "Консультация по авторскому методу",
        price: " 10.000 руб / 2 встречи",
        link: "/статьи/консультация/"
    },
    {
        name: "Индивидуальное сопровождение",
        price: " от 70.000 руб / 1 месяц",
    },
    {
        name: "Отпуск с психологом",
        price: " по договорённости",
    },
        {
        name: "Ремонт с психологом",
        price: " по договорённости",
    },
       {
        name: "Аналитика цифровых проектов",
        price: " по договорённости",
    },
];
</script>
