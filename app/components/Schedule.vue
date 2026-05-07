<script setup lang="ts">
const scheduleItems = [
	{
		artist: "Røverdatter",
		time: "16:00"
	},
	{
		artist: "Karoline Mousing",
		time: "17:00"
	},
	{
		artist: "Karla Korsbak",
		time: "19:00"
	},
	{
		artist: "Will",
		time: "20:15"
	},
	{
		artist: "Holdo",
		time: "21:30"
	},
	{
		artist: "Von Quar",
		time: "23:00"
	}
]
</script>

<template>
	<div class="bg-white-400 w-full h-fit rounded-lg py-10 px-5 pt-5">
		<h1 class="font-bold text-5xl">Tidsplan</h1>
		<USeparator class="mt-3" />
		<p class="text-lg mt-2 text-toned">Lørdag d. 9. maj 2026</p>

		<div class="mt-5 flex flex-col gap-3">
			<div v-for="item in scheduleItems" :key="item.artist"
				class="flex items-center justify-between border-b border-primary-300/40 pb-2 last:border-b-0">
				<h2 class="text-xl sm:text-2xl font-semibold text-eerie_black-400">{{ item.artist }}</h2>
				<span class="text-lg sm:text-xl text-eerie_black-400">{{ item.time }}</span>
			</div>
		</div>
	</div>
</template>
