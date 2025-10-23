<script setup lang="ts">
import will from './assets/images/artists/will.jpg'
import tba from './assets/images/artists/tba.jpg'

const items = [
  will,
  tba,
  will,
  tba,
  will,
  tba
]
</script>

<template>
  <UCarousel
    v-slot="{ item, index }"
    class-names
    loop
    :items="items"
    :ui="{
      item: 'basis-[auto] lg:basis-[auto]'
    }"
    class="w-full lg:w-120 cursor-grab mx-10 lg:mx-0.5"
    :auto-scroll="{ speed: 0.5 }"
  >
    <Card :title="item" :src="items[index]"/>
  </UCarousel>
</template>