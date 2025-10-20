<script setup lang="ts">

const prices = [
    {
        title: "All Access - u. 26/studerende",
        subtitle: "(6 koncerter fordelt på Magasinet og Frølageret)", 
        price: "250 kr."
    },
    {
        title: "All Access - Almen",
        subtitle: "(6 koncerter fordelt på Magasinet og Frølageret)", 
        price: "400 kr."
    },
    {
        title: "Half Access - u. 26/studerende",
        subtitle: "(3 koncerter på Magasinet)", 
        price: "200 kr."
    },
    {
        title: "Half Access - Almen",
        subtitle: "(3 koncerter på Magasinet)", 
        price: "300 kr."
    },
]

</script>

<template>
    <div class="bg-white-500 w-full h-fit max-h-133 rounded-lg p-10">
        <div class="flex justify-between flex-col md:flex-row">
            <div>
                <h1 class="font-bold text-5xl">Billetter</h1>
                <p class="text-lg mt-2 text-nowrap text-eerie_black-400">Billetsalget til <span>
                        <Icon name="lydflor:text" size="16" class="align-middle mx-1 text-eerie_black-400" />
                    </span> starter d. 1. november 2025</p>
                <div v-for="price in prices">
                    <PricingBar :title="price.title" :subtitle="price.subtitle" :price="price.price"/>
                </div>
                <UButton target="_blank" trailing-icon="lucide:external-link" class="mt-2" size="xl">Køb billet</UButton>
            </div>
            <Icon class="text-white self-center align-middle m-auto mr-9 lg:-mr-5 hidden md:block lg:hidden xl:block" name="lydflor:logo-text-black" size="300" />
        </div>
    </div>
</template>