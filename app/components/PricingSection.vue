<script setup lang="ts">

</script>

<template>
    <div class="bg-white-500 h-92 w-184 rounded-lg p-10">
        <div class="flex justify-between h-full">
            <div>
                <h1 class="font-bold text-5xl">Billetter</h1>
                <p class="text-lg mt-2">Billetsalget til <span>
                        <Icon name="lydflor:text" size="16" class="align-middle mx-1" />
                    </span> <br> starter d. 1. november 2025</p>
                <ul class="text-toned text-4xl py-5 flex flex-col gap-6">
                    <li><strong>Earlybird:</strong> <i class="text-fern_green-400">300 DKK.</i></li>
                    <li><strong>Partout:</strong> <i class="text-fern_green-400">500 DKK.</i></li>
                </ul>
                <UButton target="_blank" trailing-icon="lucide:external-link" class="mt-2" size="xl">Køb billet</UButton>
            </div>
            <Icon class="text-white self-center m-5" name="lydflor:logo-test" size="250"/>
        </div>
    </div>
</template>