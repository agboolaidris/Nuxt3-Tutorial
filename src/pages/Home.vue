<template>
  <div class="min-h-screen bg-gray-100">
    <div class="bg-indigo-700">
      <div
        class="max-w-7xl h-20 mx-auto px-4 sm:px-6 xl:px-8 flex items-center"
      >
        <div class="max-w-xs w-96 ml-auto">
          <Input v-model="email" placeholder="search for the author"> </Input>
        </div>
      </div>
    </div>

    <div
      class="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 mt-20"
    >
      <div class="">
        <PropertyCard @onAddClick="handleClick" />
      </div>
      <div class="">
        <PropertyCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Input from "../components/Input.vue";
import PropertyCard from "../components/PropertyCard.vue";

const email = ref("");

const handleClick = (value: string) => {
  alert(value);
};
</script>
