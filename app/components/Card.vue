<script setup>
defineProps({
  src: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: false
  }
})
</script>
<template>
  <div :style="{ backgroundImage: `url(${src})` }" class="flex flex-col w-70 h-90 md:h-127 md:w-100 items-start justify-end rounded-lg bg-center bg-cover">
    <!-- <div class="flex flex-col justify-center p-4">
      <div class="flex items-center gap-2">
        <h5 class="select-none mb-2 text-2xl font-bold tracking-tight text-white">{{ title }}</h5>
      </div>
      <p class="select-none mb-3 font-normal text-white">{{ description }}</p>
    </div> -->
  </div>
</template>