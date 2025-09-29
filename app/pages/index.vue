<script setup lang="ts">
import logo from "./assets/images/lydflor-no-bg.png"
import heroImg from "./assets/images/farvergården.jpg"
</script>

<template>
    <div class="h-screen w-screen absolute top-0 -z-10">
        <img class="object-cover w-screen h-220 blur-sm" style="transform: scale(1.02);" :src="heroImg" />
    </div>

    <UContainer class="pt-30">
        <div class="flex flex-col pb-30 pt-10">
            <img :src="logo" class="w-50 place-self-center" />
            <div class="text-center mb-30">
                <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Musikfesitval i hjertet af Odense.</h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">Lyd:flor samler musikken,
                    menneskerne og stemningen i én oplevelse.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <UButton trailing-icon="i-lucide-arrow-right" size="xl" to="/biletter">Biletter</UButton>
                    <UButton trailing-icon="lucide:calendar" variant="outline" size="xl" to="/biletter">Program
                    </UButton>
                </div>
            </div>
        </div>
    </UContainer>

    <TextScroller class="w-screen" text=" 9. MAJ 2026" />
    
    <UContainer class="mt-20">
        <div class="flex flex-wrap content-center w-full gap-5">
            <card title="Lineup" icon="lucide:music"
            description="Fra upcoming talenter til etablerede navne – oplev musikken i fuldt flor."
            src="https://images.unsplash.com/photo-1757997900698-946eaaa84e4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <card title="Atmosfære" icon="lucide:tree-pine"
            description="Unikke omgivelser, hvor lyd og rum smelter sammen til en helhedsoplevelse."
            src="https://images.unsplash.com/photo-1757642520329-b89ba3181784?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
    </UContainer>

    <Countdown :date="new Date('9-5-2026')" :show-background="true"/>

    <UContainer>
        <Collaborators/>
    </UContainer>
</template>