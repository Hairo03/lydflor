<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Program',
        to: '/#program',
        active: route.path.startsWith('/program'),
        icon: "lucide:calendar"
    },
    {
        label: 'Billetter',
        to: '/billetter',
        active: route.path.startsWith('/biletter'),
        icon: "lucide:ticket"
    },
    {
        label: 'Om os',
        to: '/#om-os',
        active: route.path.startsWith('/om-os'),
        icon: "lucide:info"
    }
])

let showBackground = ref(false);
const isIndex = computed(() => route.path === "/")

onMounted(() => {
  window.addEventListener("scroll", () => {
    showBackground.value = window.scrollY > 800
  })
})

</script>

<template>
    <UHeader :ui="{ header: 'bg-primary-400', content: 'bg-primary-400' } " mode="slideover" class="top-0 z-50 fixed w-screen bg-primary-400 transition-colors duration-300"
        :class="{ 'bg-primary-400/0 border-none backdrop-blur-none': !showBackground && isIndex }">
        <template #left>
            <UNavigationMenu class="hidden lg:block " :items="items" />
            <ULink class="lg:hidden ml-5 text-white-400 hover:text-secondary-400 transition-colors duration-200 " to="/#home">
                <Icon name="lydflor:text" size="35" />
            </ULink>
        </template>
        <ULink class="hidden md:block text-white-400 hover:text-secondary-400 transition-colors duration-200 " to="/#home">
            <Icon name="lydflor:text" size="35" />
        </ULink>

        <template #right>
            <div class="flex gap-3 place-items-center">
                <ULink class="flex place-content-center" to="/instagram">
                    <Icon name="lucide:instagram" size="20" />
                </ULink>
                <ULink class="flex place-content-center" to="/facebook">
                    <Icon name="lucide:facebook" size="20" />
                </ULink>
            </div>
        </template>

        <template #body>
            <UNavigationMenu orientation="vertical" :items="items" />
        </template>
    </UHeader>
</template>
