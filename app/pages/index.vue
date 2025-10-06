<script setup lang="ts">
import logo from "./assets/images/lydflor-no-bg.png"
import heroImg from "./assets/images/farvergården.jpg"
import Carousel from "~/components/Carousel.vue";
</script>

<template>
    <div class="flex flex-col h-screen w-screen relative bg-center items-center justify-center" id="home"
        :style="{ backgroundImage: `url(${heroImg})` }">

        <div class="absolute inset-0 w-full h-full backdrop-blur-sm z-0"></div>

        <UContainer class="z-10">
            <div class="flex flex-col">
                <img :src="logo" class="w-50 place-self-center" />
                <div class="text-center mb-30">
                    <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                        Musikfestival
                        i hjertet af Odense.</h1>
                    <p class="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">En endagsfestival, hvor musikken, menneskerne og stemningen står i fuldt flor</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <UButton trailing-icon="i-lucide-arrow-right" size="xl" to="/biletter">Billetter</UButton>
                        <UButton trailing-icon="lucide:calendar" variant="outline" size="xl" to="/biletter">Program
                        </UButton>
                    </div>
                </div>
            </div>
        </UContainer>

        <TextScroller class="w-screen absolute bottom-0" text="9. MAJ 2026" icon="lydflor:blomst" id="program" />
    </div>

    <UContainer class="my-15 flex">
        <Carousel />
        <PricingSection />
    </UContainer>

    <Countdown class="mt-10" :date="new Date('9-5-2026')" :show-background="true" />

    <UContainer id="om-os">
        <Collaborators />
    </UContainer>
</template>