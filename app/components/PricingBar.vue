<script setup lang="ts">
const props = defineProps<{
    title: string,
    price: string,
    subtitle: string
}>()
</script>

<template>
    <div class="flex items-center border-1 rounded-md p-2 my-2 text-eerie_black-400">
        <div class="w-full">
            <div class="flex items-center justify-between">
                <p class="text-sm lg:text-xl">{{ title }}</p>
                <i class="ml-2 text-2xl font-black text-primary-400">{{ price }}</i>
            </div>
            <p class="text-xs mb-2"><i>{{ subtitle }}</i></p>
        </div>
        <div>
            <h2 class="text-2xl"></h2>
        </div>
    </div>
</template>