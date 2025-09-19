<script setup>
defineProps({
  title: {
    type: String,
    default: "Placeholder"
  },
  src: {
    type: String
  },
  description: {
    type: String,
    default: "Lorem Ipsum Dolor"
  },
  icon: {
    type: String
  }
})
</script>
<template>
  <div
    class="flex flex-col items-center rounded-lg shadow-sm md:flex-row md:max-w-xl  bg-neutral-600">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src="src"
      alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <div class="flex items-center gap-2">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
        <Icon :name="icon" size="20"/>
      </div>
      <p class="mb-3 font-normal">{{ description }}</p>
    </div>
  </div>
</template>