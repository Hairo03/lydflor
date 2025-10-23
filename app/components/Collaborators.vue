<script setup lang="ts">
import tuborg from "./assets/images/collaborators/tuborg.png"
import odense from "./assets/images/collaborators/odensekommune.png"
import km from "./assets/images/collaborators/kulturmaskinen.svg"
import albani from "./assets/images/collaborators/albani.png"
import skf from "./assets/images/collaborators/statenskulturfond.png"
</script>

<template>
    <UContainer class="flex flex-col items-center gap-15 mt-10 mb-35">
        <div>
            <h1 class="text-5xl font-bold">Tak til vores partnere.</h1>
        </div>
        <div class="flex flex-col gap-5 px-10 items-center justify-center">
            <div class="flex flex-col md:flex-row gap-5 md:gap-20 items-center">
                <img :src="km" class="h-20 w-auto object-contain" />
                <img :src="tuborg" class="h-30 w-auto object-contain" />
            </div>
            <div class="flex flex-col md:flex-row gap-5 md:gap-20 items-center">
                <img :src="albani" class="h-50 w-auto object-contain" />
                <img :src="odense" class="ml-10 h-25 w-auto object-contain" />
                <img :src="skf" class="h-60 w-auto object-contain" />
            </div>
        </div>
    </UContainer>
</template>