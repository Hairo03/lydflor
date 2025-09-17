<template>
    <div class="relative isolate px-6 pt-14 lg:px-8 -z-10">
        <div aria-hidden="true"
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75">
            </div>
        </div>
    </div>
    <div class="text-center my-30">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Hvor lyden springer ud i fuldt flor.</h1>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Lyd:flor samler musikken, menneskerne og stemningen i én oplevelse.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <UButton trailing-icon="i-lucide-arrow-right" size="xl" to="/biletter">Biletter</UButton>
            <UButton trailing-icon="lucide:calendar"variant="outline" size="xl" to="/biletter">Program</UButton>
        </div>
    </div>
</template>