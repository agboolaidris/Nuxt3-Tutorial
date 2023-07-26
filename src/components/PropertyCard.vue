<template>
  <div class="w-full h-96 rounded-md bg-gray-50 relative overflow-hidden">
    <button
      @click="onAdd"
      class="w-8 h-8 bg-indigo-700 absolute right-0 top-0 flex justify-center items-center text-gray-50 hover:bg-indigo-500 rounded-bl-md"
    >
      +
    </button>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: "onAddClick", id: string): void;
}>();

const onAdd = () => {
  emit("onAddClick", "hhh");
};
</script>
