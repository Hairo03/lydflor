<script setup lang="ts">
import Volunteer from '~/components/Volunteer.vue';

</script>

<template>
    <UContainer class="pt-30">
        <div class="flex flex-row">
            <div class="flex flex-col space-y-4 w-full xl:w-1/2">
                <h1 class="text-4xl font-semibold mb-6">Bliv frivillig på Lyd:Flor 2026</h1>
                <p class="text-toned">
                    På Lyd:Flor er de frivillige det allervigtigste på festivalen! Lyd:Flor er bygget på frivillighed,
                    og
                    uden de frivillige ville festivalen ikke kunne finde sted.
                    Lyd:Flor har et særligt fokus på ungdommen, både når det gælder musikken, men også aktørerne og de
                    frivillige.
                    De frivillige er unge i forskellige aldre (Obs. du skal være fyldt 18 år), som synes, det er sjovt
                    at
                    være med til at skabe nye kulturoplevelser og som ønsker at være en del af et hyggeligt fællesskab.
                    Frivilligteamet vil ikke være så stort, hvilket giver os mulighed for at komme tættere på hinanden
                    og
                    skabe et trygt og hyggeligt fællesskab, hvor alle bliver hørt, og hvor der er plads til alle.
                </p>
                <p class="text-toned">
                    Som frivillig på Lyd:Flor møder du ind sammen med resten af frivilligteamet 3 timer før gæsterne.
                    Her bruger vi tiden på at møde hinanden og sætte de sidste ting op.
                    I løbet af dagen har du én vagt på 4 timer.
                    Vagten vil enten bestå af arbejde i baren eller billettjek.
                    Ved alle vagter vil du stå sammen med 1-2 andre frivillige, så du altid har nogen at hygge dig med
                    undervejs.
                </p>
                <p class="text-toned">
                    Ønsker du og en ven at melde jer som frivillige sammen, kan du skrive din vens fulde navn i det
                    nederste
                    felt ved tilmelding (husk, at din ven også skal gøre det samme). Vi vil derefter gøre vores bedste
                    for
                    at opfylde ønsket om, at I bliver sat på vagt sammen.

                </p>
                <div>
                    <p class="text-toned"><strong>Som frivillig får du:</strong></p>
                    <ul class="list-disc pl-5 text-toned">
                        <li>Mulighed for at opleve fede koncerter</li>
                        <li>Lyd:Flor frivillig-merch</li>
                        <li>Drikkebilletter, mad og forplejning</li>
                        <li>Erfaring med frivillighed og festivalarbejde</li>
                        <li>Nye venskaber</li>
                    </ul>
                </div>
                <p class="text-toned">
                    Derudover er du med til at skabe ny kultur for lokalsamfundets unge og være med til at
                    styrke
                    musikkulturen i byen.

                </p>
            </div>
            <img src="https://placehold.co/300x400" alt="Frivillige på Lyd:Flor" class="w-1/2 rounded-lg object-cover ml-10 hidden xl:block"/>
        </div>
        <div>
            <h2 class="text-3xl font-semibold mt-20 mb-6">Ansøg om at blive frivillig her</h2>
            <p class="text-toned mb-10">
                Udfyld formularen nedenfor for at ansøge om at blive frivillig på Lyd:Flor 2026. Vi glæder os til at
                høre fra dig!
            </p>
        </div>
        <Volunteer class="pb-20"/>
    </UContainer>
</template>

<style scoped></style>