<script setup lang="ts">
const items = [
  'https://picsum.photos/528/528?random=1',
  'https://picsum.photos/528/528?random=2',
  'https://picsum.photos/528/528?random=3',
  'https://picsum.photos/528/528?random=4',
  'https://picsum.photos/528/528?random=5',
  'https://picsum.photos/528/528?random=6'
]

const artists = [
    'Artist 1',
    'Artist 2',
    'Artist 3'
]
</script>

<!-- TODO: Make arrows work when autoscrolling -->

<template>
  <UCarousel
    v-slot="{ item, index }"
    class-names
    loop
    :items="artists"
    prev-icon="lucide:chevron-left"
    next-icon="lucide:chevron-right"
    :ui="{
      item: 'basis-[70%]'
    }"
    class="mx-auto max-w-sm mx-5"
    :auto-scroll="{ startDelay:2000, speed: 0.5 }"
  >
    <Card :title="item" :src="items[index]"/>
  </UCarousel>
</template>