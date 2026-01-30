<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Program',
        to: '/#program',
        active: route.path.startsWith('/#program'),
        icon: "lucide:calendar"
    },
    {
        label: 'Billetter',
        to: 'https://kulturmaskinen.dk/events/lyd-flor',
        target: '_blank',
        active: route.path.startsWith('/#billetter-external-link'),
        icon: "lucide:ticket"
    },
    {
        label: 'Om os',
        to: '/#om-os',
        active: route.path.startsWith('/#om-os'),
        icon: "lucide:info"
    },
    {
        label: 'Bliv frivillig',
        to: '/blivfrivillig',
        active: route.path.startsWith('/blivfrivillig'),
        icon: "lucide:users"
    }
])

let showBackground = ref(false);
const isIndex = computed(() => route.path === "/")

onMounted(() => {
    window.addEventListener("scroll", () => {
        showBackground.value = window.scrollY > window.innerHeight - 100
    })
})

</script>

<template>
    <UHeader :ui="{ header: 'bg-primary-400', content: 'bg-primary-400' }" mode="slideover"
        class="top-0 z-50 fixed w-screen bg-primary-400 transition-colors duration-300"
        :class="{ 'bg-primary-400/0 border-none backdrop-blur-none': !showBackground && isIndex }">
        <template #left>
            <UNavigationMenu class="hidden lg:block " :items="items" />
            <ULink class="lg:hidden ml-5 text-white-400 hover:text-secondary-400 transition-colors duration-200 "
                to="/#home">
                <Icon name="lydflor:text" size="35" />
            </ULink>
        </template>

        <ULink class="hidden md:block text-white-400 hover:text-secondary-400 transition-colors duration-200 "
            to="/#home">
            <Icon name="lydflor:text" size="35" />
        </ULink>

        <template #right>
            <div class="flex gap-3 place-items-center">
                <ULink class="flex place-content-center" to="https://www.instagram.com/lydflorfestival/" target="_blank">
                    <Icon name="lucide:instagram" size="20" />
                </ULink>
                <ULink class="flex place-content-center" to="https://www.facebook.com/lydflorfestival/" target="_blank">
                    <Icon name="lucide:facebook" size="20" />
                </ULink>
            </div>
        </template>

        <template #body>
            <UNavigationMenu :ui="{ link: 'py-8 text-lg'}" orientation="vertical" :items="items" />
        </template>
    </UHeader>
</template>
