<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import tekst from "./assets/images/lydflor-tekst.png"
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
        <UContainer class="flex w-full items-center justify-between">
            <!-- <ULink class="content-center mr-3" to="/">
                <img :src="logo" class="w-30"/>
            </ULink> -->
            <div class="flex-1 flex justify-start">
                <UNavigationMenu color="neutral" :items="items" class="w-fit m-3" />
            </div>
            <ULink class="flex-1 flex justify-center mr-3" to="/">
                <img :src="tekst" class="w-50" />
            </ULink>
            <div class="flex-1"></div>
        </UContainer>
        <USeparator />
    </div>
</template>
