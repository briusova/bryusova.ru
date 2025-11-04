<template>
  <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
    <div class="rounded-3xl overflow-hidden shadow-2xl mb-24">
      <img src="my_images/veAOAZWU-Ys.jpg" alt="" decoding="async" class="h-auto min-w-2xl">
    </div>
    <div class="max-w-xl space-y-3">
      <h3 class="text-indigo-600 font-semibold">{{ the.name }}</h3>
      <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">{{ visible }}<span class="blink underline decoration-slate-800 decoration-2 text-transparent">{{ title[length]
          }}</span><span class="invisible">{{ invisible }}</span></p>
   <p class="mb-6">Выберите удобный способ связи: телефон, мессенджер или электронная почта. <br>📍 Очные консультации в Калининграде (ул. Степана Разина, 20)
<br>💻 Онлайн консультации по видеосвязи</p>
    </div>



    <!--el-form :model="form" label-width="auto" ref="formRef" class="max-w-96 my-12" label-position="top">
      <el-form-item label="Ваше имя" prop="name" :rules="[
        {
          required: true,
          message: 'Пожалуйста, введите своё имя',
          trigger: 'blur',
        },
      ]">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Ваш телефон" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="Ваш емейл" prop="email" :rules="[
        {
          required: true,
          message: 'Пожалуйста, введите адрес электронной почты',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Пожалуйста, введите корректный адрес электронной почты',
          trigger: ['blur', 'change'],
        },
      ]">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Сообщение" prop="desc" :rules="[
        {
          required: true,
          message: 'Пожалуйста, введите своё сообщение',
          trigger: 'blur',
        },
      ]">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="throttledFn">Отправить заявку</el-button>
        <el-button @click="resetForm(formRef)">Очистить форму</el-button>
      </el-form-item>
    </el-form-->
    <ul class="flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
      <li v-for="(item, idx) in contactMethods" :key="idx">
        <h4 class="text-gray-800 text-lg font-medium">{{ item.title }}</h4>
        <div class="mt-3 flex items-center gap-x-3">
          <icon class="text-gray-400 size-7" :icon="item.icon"></icon>
          <a target="_blank" rel="noopener noreferrer" :href="item.href">{{ item.contact }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>







<script setup vapor>
//import { useThrottleFn } from "@vueuse/core";
import { ref, inject, computed } from "vue";
//import { ElMessage } from "element-plus";

const { id } = defineProps(["id"]),
  the = inject("pages")[id],
  /*formRef = ref(),
  method = "POST",
  headers = {
    "Content-Type": "application/json",
  },
  form = reactive({
    name: "",
    phone: "",
    email: "",
    desc: "",
  }),*/
  contactMethods = [
    {
      icon: "la:phone",
      contact: "+7 (906) 792-1244",
      title: "Телефон",
      href: "tel:+79067921244",
    },
    {
      icon: "la:whatsapp",
      contact: "+79067921244",
      title: "WhatsApp",
      href: "https://wa.me/+79067921244",
      target: true,
    },
    {
      icon: "la:telegram",
      contact: "@Sasha_Bryusova",
      title: "Телеграм",
      href: "https://t.me/Sasha_Bryusova",
      target: true,
    },
     {
      icon: "la:envelope",
      contact: "alexandra.bryusova@yandex.ru",
      title: "E-mail",
      href: "mailto:alexandra.bryusova@yandex.ru",
    },
  ];
  //throttledFn = useThrottleFn(sendForm, 6000);

/*function resetForm(formEl) {
  formEl?.resetFields();
}

function sendForm() {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      const body = JSON.stringify(form);
      try {
        ElMessage("Отправка запроса...");
        const response = await fetch("https://form.bryusova.ru", {
          method,
          headers,
          body,
        });
        ElMessage.closeAll();
        if (response.ok) {
          ElMessage.success(await response.text());
          formRef.value?.resetFields();
        } else ElMessage.error(`Ошибка: ${await response.text()}`);
      } catch ({ message }) {
        ElMessage.closeAll();
        ElMessage.error(`Ошибка: ${message}`);
      }
    } else ElMessage.error("Пожалуйста, заполните форму");
  });
}
*/

const title = `${the.title}_`;
const index = ref(0);
setInterval(() => {
  index.value += 1;
}, 200);
const length = computed(() => {
  const count = Math.floor(index.value / title.length);
  return count % 2 ? title.length - 1 : index.value - count * title.length;
});

const visible = computed(() => title.substring(0, length.value));
const invisible = computed(() => title.substring(length.value + 1));
</script>















<style scoped>
.blink {
  animation: blinker 1s step-start infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
