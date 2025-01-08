<template>
    <section class="py-14" un-cloak>
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div class="max-w-xl space-y-3 not-prose mb-6">
                <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
                <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ the.title }}</p>
                <p>{{ the.description }}</p>
            </div>
            

<ul class="not-prose list-disc list-inside">
    <li v-for="{header, to} in the.$children"><el-button tag="router-link" link :to="to">{{header}}</el-button></li>
</ul>


        </div>
    </section>
</template>

<script setup>
import { inject } from "vue";
const { id } = defineProps(["id"]);
const pages = inject("pages");
const the = pages[id];
</script>