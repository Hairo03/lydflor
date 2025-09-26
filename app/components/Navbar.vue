<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Program',
        to: '/program',
        active: route.path.startsWith('/program'),
        icon: "lucide:calendar"
    },
    {
        label: 'Biletter',
        to: '/biletter',
        active: route.path.startsWith('/biletter'),
        icon: "lucide:ticket"
    },
    {
        label: 'Om os',
        to: '/om-os',
        active: route.path.startsWith('/om-os'),
        icon: "lucide:info"
    }
])

</script>

<template>
    <UHeader class="bg-primary-500/75 backdrop-">
        <template #left>
            <UNavigationMenu :items="items" />
        </template>
        <ULink to="/">
            <Icon name="lydflor:text" size="35" />
        </ULink>

        <template #right>
            <ULink to="/instagram">
                <Icon name="lucide:instagram" size="20" />
            </ULink>
            <ULink to="/facebook">
                <Icon name="lucide:facebook" size="20" />
            </ULink>
        </template>
    </UHeader>
</template>
