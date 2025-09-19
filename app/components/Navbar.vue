<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import logo from "./assets/images/lydflor-no-bg.png"

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
    <div class="backdrop-blur-lg">
        <UContainer class="flex">
            <ULink class="content-center mr-3" to="/">
                <img :src="logo" class="w-15"/>
            </ULink>
            <UNavigationMenu color="neutral" :items="items" class="w-full justify-start m-3" />
        </UContainer>
        <USeparator />
    </div>
</template>
