<script setup lang="ts">
import will from './assets/images/artists/will.jpg'
import karoline_mousing from './assets/images/artists/karoline_mousing.jpg'
import karla_korsbak from './assets/images/artists/karla_korsbak.jpg'
import holdo from './assets/images/artists/holdo.jpg'
import tba from './assets/images/artists/tba.jpg'

const items = [
  will,
  karla_korsbak,
  karoline_mousing,
  holdo,
  tba,
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
    :auto-scroll="{ startDelay: 2000, speed: 0.5 }"
  >
    <Card :title="item" :src="items[index]"/>
  </UCarousel>
</template>