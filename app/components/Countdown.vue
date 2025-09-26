<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps<{
    date: Date
}>()


const targetTime = props.date.getTime();
const currentTime = ref(new Date().getTime());
const timeRemaining = computed(() => targetTime - currentTime.value);

const seconds = computed(() => Math.floor(timeRemaining.value / 1000));
const minutes = computed(() => Math.floor(seconds.value / 60));
const hours = computed(() => Math.floor(minutes.value / 60));
const days = computed(() => Math.floor(hours.value / 24));

function updateTime() {
    currentTime.value = new Date().getTime();
}


setInterval(updateTime, 1000, false)

</script>

<template>
    <div class="bg-accent-400 py-20 mt-20">
        <UContainer class="flex flex-col items-center">
            <div class="flex flex-col items-center mb-5">
                <Icon name="lydflor:text" size="40" />
                <p>starter om...</p>
            </div>
            <div class="flex justify-center gap-10">
                <div class="flex flex-col items-center">
                    <h1 class="text-6xl">{{ days }}</h1>
                    <h2>Dage</h2>
                </div>
                <div class="flex flex-col items-center">
                    <h1 class="text-6xl">{{ hours % 24 }}</h1>
                    <h2>Timer</h2>
                </div>
                <div class="flex flex-col items-center">
                    <h1 class="text-6xl">{{ minutes % 60 }}</h1>
                    <h2>Minutter</h2>
                </div>
                <div class="flex flex-col items-center">
                    <h1 class="text-6xl">{{ seconds % 60 }}</h1>
                    <h2>Sekunder</h2>
                </div>
            </div>
        </UContainer>
    </div>
</template>