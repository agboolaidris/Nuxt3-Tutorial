<template>
  <div class="text-sm text-gray-800">
    <label>{{ label }}</label>
    <div class="relative h-10" :class="class">
      <button class="z-10 relative px-2 flex justify-start items-center h-full">
        <slot name="leftIcon"> </slot>
      </button>
      <input
        class="w-full inset-0 absolute border-gray-100 rounded focus:border-indigo-600 text-sm"
        :class="{ 'pl-7': $slots.leftIcon, 'pr-7': $slots.rightIcon }"
        :value="modelValue"
        @input="onInput"
        :type="type"
        :placeholder="placeholder"
      />
      <button class="z-10 relative px-2 flex justify-start items-center h-full">
        <slot name="rightIcon"></slot>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
export type InputProps = {
  label?: string;
  modelValue: string;
  type?: string;
  placeholder?: string;
  class?: string;
};

withDefaults(defineProps<InputProps>(), {
  type: "text",
});

const emit = defineEmits();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
