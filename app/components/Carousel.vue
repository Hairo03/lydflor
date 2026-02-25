<script setup lang="ts">
import will from './assets/images/artists/will.jpg'
import karoline_mousing from './assets/images/artists/karoline_mousing.jpg'
import karla_korsbak from './assets/images/artists/karla_korsbak.jpg'
import holdo from './assets/images/artists/holdo.jpg'
import røverdatter from './assets/images/artists/røverdatter.jpg'
import von_quar from './assets/images/artists/von_quar.jpg'

const items = [
  will,
  karla_korsbak,
  karoline_mousing,
  holdo,
  røverdatter,
  von_quar
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
    :auto-scroll="{ startDelay: 1000, speed: 0.5 }"
  >
    <Card :title="item" :src="items[index]"/>
  </UCarousel>
</template>