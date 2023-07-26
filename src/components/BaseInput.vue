<template>
  <div>
    <label :for="name">{{ modelValue }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      :value="modelValue"
      @input="updateModelValue"
    />
  </div>
</template>

<script setup lang="ts">
//import { defineProps, defineEmits, ref } from "vue";

defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, default: "text" },
  modelValue: { type: [String, Number], required: true },
});

const emit = defineEmits();

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
