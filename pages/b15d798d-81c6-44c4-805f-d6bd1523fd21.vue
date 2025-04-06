<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <h1>{{ the.header }}</h1>

            <p>Пройдите онлайн-тестирование и получите исчерпывающую информацию о подходящих вам профессиях и ключевых
                особенностях личности. </p>
            <p>В этом Вам поможет самый надёжный и полный психологический тест,
                разработанный доктором педагогических наук, профессором кафедры акмеологии и психологии профессиональной
                деятельности РАНХиГС при Президенте РФ <a href="https://knyazev-am.com/" target="_blank"
                    rel="noopener noreferrer" text-cyan-600="" hover:text-blue-600="">А.М. Князевым</a>.</p>
            <p><a href="https://career.prof-dialog.ru/test-total/" target="_blank" rel="noopener noreferrer"
                    text-cyan-600="" hover:text-blue-600="">Тест не имеет аналогов</a>, признан психологами во всём
                мире, доказал свою
                эффективность на выборке в 150.000 человек, применяется более 30 лет.</p>
            <p>Настоятельно рекомендую пройти этот тест перед консультацией. Результаты вашего теста станут ценным
                инструментом на консультации с психологом, значительно сократив
                время на выявление истинных причин запроса.</p>

            <p><b>Стоимость теста</b>: 2.990 рублей</p>
            <p><b>Скидка 7% по промокоду KOMPLEMED</b></p>
            <p>промокод действует на все услуги Проф-Диалога: тесты, курсы, консультации</p>
            <p><b>Время на прохождение теста</b> – 1
                час</p>
            <p></p>
            <p><el-button class="not-prose" type="danger" :icon="Right"><a
                        href="https://career.prof-dialog.ru/test-total#pricing" target="_blank"
                        rel="noopener noreferrer">ПРИОБРЕСТИ ТЕСТ</a></el-button></p>

            <p><el-button class="not-prose" type="info" :icon="Right"><a
                        href="https://prof-dialog.app/results-tphcd/1674025022846x113712781781893120" target="_blank"
                        rel="noopener noreferrer">ПОСМОТРЕТЬ ОБРАЗЕЦ ОТЧЁТА</a></el-button></p>




            <p></p>
            <p>ОПРОСНИК СОСТОИТ ИЗ 386 ВОПРОСОВ</p>
            <p>✓ ТАКОЕ КОЛИЧЕСТВО ВОПРОСОВ ОБЕСПЕЧИВАЕТ МАКСИМАЛЬНУЮ НАДЁЖНОСТЬ
                ТЕСТИРОВАНИЯ<br>✓ ДОСТОВЕРНОСТЬ РЕЗУЛЬТАТОВ
                ОПРЕДЕЛЯЕТСЯ ВСТРОЕННЫМИ В ТЕСТ ВОПРОСАМИ</p>


           <h4 class="mt-10">Дополнительная информация:</h4>
            <div class="grid gap-y-1">
                <div><el-button class="not-prose w-full !justify-start" tag="a" href="tel:+79067921244">Позвонить +7
                        (906) 792-12-44 </el-button></div>
                <div><el-button class="not-prose w-full !justify-start" tag="a"
                        href="https://wa.me/79067921244?text=Здравствуйте,%20хочу%20записаться%20на%20прием!"
                        target="_blank" rel="noopener noreferrer"> Написать в WhatsApp
                    </el-button></div>
                <div><el-button class=" not-prose w-full !justify-start" tag="a" target="_blank"
                        rel="noopener noreferrer" href="https://t.me/Sasha_Bryusova">Написать в
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
</script>
