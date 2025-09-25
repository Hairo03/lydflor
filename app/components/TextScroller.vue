<script setup>
defineProps({
    text: {
        type: String,
        default: "Placeholder"
    },
    icon: {
        type: String,
        default: "lucide:slash"
    }
})

</script>

<template>
    <div class="w-full flex flex-nowrap overflow-hidden justify-center mask-x-from-90%">
        <ul class="flex items-center my-2 justify-start md:justify-start animate-infinite-scroll">
            <li v-for="n in 20" class="flex flex-row justify-center items-center gap-5 w-40">
                <h1 class="font-bold">{{ text }}</h1>
                <Icon :name="icon"/>
            </li>
        </ul>
    </div>
</template>