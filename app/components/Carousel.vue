<script setup lang="ts">
import will from './assets/images/artists/will.jpg'

const items = [
  will,
  will,
  will
]

const artists = [
    'Artist 1',
    'Artist 2',
    'Artist 3'
]
</script>

<template>
  <UCarousel
    v-slot="{ item, index }"
    class-names
    loop
    :items="artists"
    :ui="{
      item: 'basis-[auto] lg:basis-[auto]'
    }"
    class="w-full lg:w-120 cursor-grab mx-10 lg:mx-0.5"
    :auto-scroll="{ speed: 0.5 }"
  >
    <Card :title="item" :src="items[index]"/>
  </UCarousel>
</template>