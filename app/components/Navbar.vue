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
    <UHeader>
        <template #left>
            <UNavigationMenu :items="items"/>
        </template>
        <ULink to="/">
            <Icon name="lydflor:tekst" size="35"/>
        </ULink>
        
        <template #right>
            <UButton color="primary" variant="ghost" to="/" target="_blank"
                icon="i-simple-icons-facebook" aria-label="Facebook" />
            <UButton color="primary" variant="ghost" to="/" target="_blank"
                icon="i-simple-icons-instagram" aria-label="Instagram" />
        </template>
    </UHeader>
</template>
