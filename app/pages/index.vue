<script setup lang="ts">
import logo from "./assets/images/lydflor-no-bg.png"
</script>

<template>
    <!-- <div class="relative isolate px-6 pt-14 lg:px-8 -z-10">
        <div aria-hidden="true"
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#d0ec51] to-[#7ff1c2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75">
    </div>
</div>
</div> -->
    <div class="h-screen w-screen absolute top-0 -z-10">
        <img class="object-fill w-screen h-200 blur-xs mask-b-from-50%"
        src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    <UContainer class="pt-30">
        <div class="flex flex-col">
            <img :src="logo" class="w-50 place-self-center" />
            <div class="text-center mb-30">
                <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Hvor lyden
                    springer ud
                    i fuldt flor.</h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">Lyd:flor samler musikken,
                    menneskerne og stemningen i én oplevelse.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <UButton trailing-icon="i-lucide-arrow-right" size="xl" to="/biletter">Biletter</UButton>
                    <UButton trailing-icon="lucide:calendar" variant="outline" size="xl" to="/biletter">Program
                    </UButton>
                </div>
            </div>
        </div>
        <u-separator />
        <TextScroller class="mt-5" text=" 26. MAJ 2026"/>
        <div class="flex flex-wrap content-center my-5 w-full gap-10">
            <card title="Lineup" icon="lucide:music"
                description="Fra upcoming talenter til etablerede navne – oplev musikken i fuldt flor."
                src="https://images.unsplash.com/photo-1757997900698-946eaaa84e4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <card title="Atmosfære" icon="lucide:tree-pine"
                description="Unikke omgivelser, hvor lyd og rum smelter sammen til en helhedsoplevelse."
                src="https://images.unsplash.com/photo-1757642520329-b89ba3181784?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
    </UContainer>
</template>