<template>
  <div class="h-screen bg-gray-100 flex justify-center items-center">
    <div class="p-8 bg-white w-full max-w-xl rounded space-y-8">
      <Input :label="emailText" v-model="email">
        <template v-slot:leftIcon>kk</template>
      </Input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Input from "../components/Input.vue";

const email = ref("kkkk");

const emailText = computed(() => `email length is ${email.value.length}`);
</script>
