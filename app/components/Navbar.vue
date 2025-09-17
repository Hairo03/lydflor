<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
    {
        label: "Hjem",
        to: "/",
        icon: "lucide:house"
    },
    {
        label: "Program",
        to: "/program",
        icon: "lucide:calendar"
    },
    {
        label: "Biletter",
        to: "/biletter",
        icon: "lucide:ticket"
    }
])

</script>
<template>
    <UNavigationMenu :items="items" class="w-full justify-center" />
</template>
