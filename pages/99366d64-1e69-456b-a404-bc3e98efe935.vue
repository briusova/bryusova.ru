<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <h1>{{ the.header }}</h1>

            <p><b>Дорогие друзья! Приглашаю вас 17 апреля в 20.30 мск на онлайн встречу «ЧИСТЫЙ ЧЕТВЕРГ — ОЧИЩЕНИЕ
                МЫСЛЕЙ»</b>🌺</p>
            <p>&nbsp;</p>
            <p>🍀Чистота ума — ключ к внутренней гармонии. В преддверии Пасхи поговорим о том:</p>
            <p></p>
            <p>🔸как очищать не только свои мысли, но и эмоции<br>🔸почему вообще важно следить за чистотой мыслей<br>🔸как "истинная" подсознательная мысль может перевернуть всю жизнь</p>
            <p></p>
            <p>🍀Расскажу про техники и практики, которые помогут вам освободиться от внутреннего мусора и настроиться
                на позитивные изменения, где и как их можно изучить.</p>
            <p></p>
            <p>🍀Поделюсь с вами книгами, которые:</p>
            <p></p>
            <p>🔹помогут освободиться от токсичных установок и родовых сценариев<br>🔹научат гармонизировать отношения с собой и близкими<br>🔹откроют техники очищения сознания от деструктивных программ<br>🔹расскажу, как создать пространство лёгкости и изобилия в вашей жизни</p>
            <p></p>
            <p>❣️участие — <b>благотворительное</b><br>❣️минимальный взнос — <b>200 рублей</b>, но вы можете внести любую сумму, которую считаете нужной<br>❣️все собранные средства будут направлены в <b>Центр реабилитации диких животных Калининградской области
                Биосфера Балтики&nbsp;</b></p>
            <p></p>
            <p><b>Чтобы принять участие в онлайн-встрече</b>:</p>
            <p></p>
            <p>1️⃣сделайте перевод по ссылке: <a href="https://balticbiosphere.ru/howtohelp/" target="_blank" rel="noopener noreferrer" text-cyan-600="" hover:text-blue-600="">https://balticbiosphere.ru/howtohelp/</a>
                
                
             <br>2️⃣пришлите мне скриншот подтверждения (контакты ниже👇)<br>3️⃣получите ссылку для доступа в закрытый Telegram-канал</p>
            <p></p>
            <p><b>До встречи 17 апреля в 20.30 мск!</b>🤗</p>
            <p>Кто не сможет в это время —<b> будет запись</b>!🎥</p>


           <h4 class="mt-10">Дополнительная информация:</h4>
            <div class="grid gap-y-1 mb-8">
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



                <el-button class="not-prose" type="primary" :icon="ArrowLeft" tag="router-link" :to="the.parent.to">На главную</el-button>
                
           



        </div>
    </section>
</template>

<script setup vapor>
import { inject } from "vue";
import { ArrowLeft } from '@element-plus/icons-vue';
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
</script>
