<script setup lang="ts">
import heroImg from "./assets/images/farvergården.jpg"
import Carousel from "~/components/Carousel.vue";
</script>

<template>
    <div class="flex flex-col h-screen w-screen relative bg-center items-center justify-center" id="home"
        :style="{ backgroundImage: `url(${heroImg})` }">

        <div class="absolute inset-0 w-full h-full backdrop-blur-sm z-0"></div>

        <UContainer class="z-10">
            <div class="flex flex-col items-center my-auto">
                <Icon name="lydflor:logo-test" size="250" class="sm:size-[10rem] size-[7rem] text-white-400" />
                <div class="text-center">
                    <h1 class="text-4xl font-semibold tracking-tight text-balance text-white-400 sm:text-7xl">
                        Musikfestival
                        i hjertet af Odense.</h1>
                    <p class="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">En endagsfestival, hvor musikken, menneskerne og stemningen står i fuldt flor</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <UButton trailing-icon="lucide:external-link" size="xl" to="https://kulturmaskinen.dk/events/lyd-flor">Billetter</UButton>
                        <UButton trailing-icon="lucide:calendar" variant="outline" size="xl" to="/#program">Program</UButton>
                    </div>
                </div>
            </div>
        </UContainer>

        <TextScroller class="w-screen absolute bottom-0" text="9. MAJ 2026" icon="lydflor:blomst" id="program" />
    </div>

    <UContainer class="my-15 flex flex-col lg:flex-row items-center justify-center gap-5">
        <Carousel />
        <PricingSection />
    </UContainer>
    
    <ClientOnly>
        <Countdown class="mt-10" :date="new Date('2026-05-09T15:00:00')" :show-background="true" />
    </ClientOnly>
    
    <span id="om-os"/>
    <UContainer>
        <FAQ/>
        <Collaborators />
    </UContainer>
</template>