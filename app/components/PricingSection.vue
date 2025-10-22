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
    <div class="bg-white-400 w-full h-fit rounded-lg py-10 px-5 pt-5">
        <div class="flex justify-between flex-col">
            <div>
                <h1 class="font-bold text-5xl">Billetter</h1>
                <USeparator class="mt-3" />
                <p class="text-lg mt-2 lg:text-nowrap text-toned">Billetsalget til <span>
                        <Icon name="lydflor:text" size="16" class="align-middle mx-1 text-toned" />
                    </span> starter d. 1. november 2025</p>
                <div v-for="price in prices">
                    <PricingBar :title="price.title" :subtitle="price.subtitle" :price="price.price" />
                </div>
                <UButton target="_blank" trailing-icon="lucide:external-link" class="mt-2" size="xl" to="https://kulturmaskinen.dk/events/lyd-flor">Køb billet
                </UButton>
            </div>
            <!-- <Icon
                class="text-white-400 self-center align-middle m-auto mr-9 lg:-mr-5 hidden md:block lg:hidden xl:block"
                name="lydflor:logo-text-black" size="300" /> -->
        </div>
    </div>
</template>