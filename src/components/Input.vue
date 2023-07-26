<template>
  <div class="text-sm text-gray-800">
    <label>{{ label }}</label>
    <div class="relative h-10">
      <div
        class="z-10 relative bg-gray-600 w-max flex justify-start items-center h-full"
      >
        <slot name="left-icon"> </slot>
      </div>
      <input
        class="w-full inset-0 absolute border-gray-100 rounded focus:border-indigo-600 text-sm"
        :value="modelValue"
        @input="onInput"
      />
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
export type InputProps = {
  label?: string;
  modelValue: string;
};

withDefaults(defineProps<InputProps>(), {
  label: "Password",
});

const emit = defineEmits();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
