<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
    {
        label: "Program",
        to: "/program",
        icon: "lucide:calendar"
    },
    {
        label: "Biletter",
        to: "/biletter",
        icon: "lucide:ticket"
    },
    {
        label: "Om os",
        to: "/om-os",
        icon: "lucide:info"
    }
])

</script>
<template>
    <div>
        <UContainer class="flex">
            <ULink class="content-center mr-5" to="/">
                <Icon name="lucide:audio-waveform" size="50" />
            </ULink>
            <UNavigationMenu color="neutral" :items="items" class="w-full justify-start m-3" />
        </UContainer>
        <USeparator class="m-1" />
    </div>
</template>
