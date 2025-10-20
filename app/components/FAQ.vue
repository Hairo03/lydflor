<script setup lang="ts">
const items = ref([
    {
        label: 'Hvor og hvornår finder Lyd:Flor sted?',
        slot: 'content-1',
        content: `
Lyd:Flor afholdes **lørdag den 9. maj 2026** i hjertet af Odense - nærmere bestemt **Farvergården i Odense C**.

Festivalens koncerter er fordelt på to scener under Kulturmaskinen:

- **Magasinet** (den store scene)
- **Frølageret** (den lille scene)

Mellem de to scener finder du festivalens hangout-område - et hyggeligt fællesrum midt i Farvergården, hvor du kan slappe af, mødes med venner, nyde en øl eller en sodavand og suge stemningen til dig mellem koncerterne.
    `
    },
    {
        label: 'Hvilke billettyper findes der?',
        slot: 'content-2',
        content: `
Der findes to forskellige billettyper:

- **All Access-billet** - Giver adgang til alle 6 koncerter, både på Magasinet og Frølageret.
- **Half Access-billet** - Giver adgang til de 3 største koncerter på Magasinet.
    `
    },
    {
        label: 'Hvad er forskellen på de to billetter?',
        slot: 'content-3',
        content: `
**All Access-billetten** giver dig hele oplevelsen! Du får adgang til både Magasinet og Frølageret, og kan dermed se alle 6 koncerter i løbet af dagen.

**Half Access-billetten** er for dig, der primært er interesseret i de artister der spiller på Magasinet. Her får du adgang til de 3 koncerter på Magasinet - og stadig en kæmpe festivaloplevelse!
    `
    },
    {
        label: 'Hvorfor kan jeg ikke vælge frit mellem scenerne?',
        slot: 'content-4',
        content: `
Det skyldes kapaciteten på de to venues:

- **Magasinet** har plads til 600 publikummer.
- **Frølageret** har kun plads til 300 publikummer.

For at sikre en god oplevelse for alle, har vi derfor begrænset All Access-billetterne til 300 personer - så alle med denne billet er garanteret adgang til begge scener.
    `
    },
    {
        label: 'Kontakt',
        slot: 'content-5',
        content: `
Har du spørgsmål - hvad enten du er gæst, booker eller bare nysgerrig på Lyd:Flor - er du altid velkommen til at skrive til os på:

**william@lydflor.dk**
    `
    }
])
</script>

<template>
    <UAccordion :ui="{
        root: 'text-eerie_black-400', label: 'text-xl',
        body: '-mt-5'
    }" class="mt-10" :items="items"
    :unmount-on-hide="false"
    type="multiple"
    >
        <template #content-1="{ item }">
            <MDC :value="item.content" />
        </template>
        <template #content-2="{ item }">
            <MDC :value="item.content" />
        </template>
        <template #content-3="{ item }">
            <MDC :value="item.content" />
        </template>
        <template #content-4="{ item }">
            <MDC :value="item.content" />
        </template>
        <template #content-5="{ item }">
            <MDC :value="item.content" />
        </template>
    </UAccordion>
</template>