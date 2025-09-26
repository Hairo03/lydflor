<script setup lang="ts">
import tuborg from "./assets/images/collaborators/tuborg.png"
import odense from "./assets/images/collaborators/odensekommune.png"
</script>

<template>
    <UContainer class="flex flex-col items-center gap-15 mt-30 mb-35">
        <div class="">
            <h1 class="text-5xl bold">Tak til vores partnere.</h1>
        </div>
        <div class="flex gap-20">
            <img :src="tuborg" class="w-auto h-40"/>
            <img :src="odense" class="w-auto h-40"/>
        </div>
    </UContainer>
</template>