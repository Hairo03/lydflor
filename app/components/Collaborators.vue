<script setup lang="ts">
import tuborg from "./assets/images/collaborators/tuborg.png"
import odense from "./assets/images/collaborators/odensekommune.png"
</script>

<template>
    <UContainer class="flex flex-col items-center gap-15 mt-30 mb-35">
        <div class="">
            <h1 class="text-5xl bold">Tak til vores partnere.</h1>
        </div>
        <div class="flex lg:flex-row flex-col gap-20 px-10">
            <img :src="tuborg" class="max-w-100% max-h-50"/>
            <img :src="odense" class="max-w-100% max-h-50"/>
        </div>
    </UContainer>
</template>