<template>
	<div class="2xl:container grid grid-flow-col gap-sm justify-end shadow-sm py-4">
		<Lang />
		<n-button
			v-for="item in options"
			:key="item.label"
			:bordered="item.bordered"
			:class="item.class"
			class="border-4"
		>
			<img
				v-if="item.icon"
				:src="item.icon"
				width="24"
				class="mr-sm"
			/>
			<span>{{ $t(item.label) }}</span>
		</n-button>
	</div>
</template>

<script setup lang="ts">
import Lang from "./Lang.vue";

const img = new URL("@/assets/logo.svg", import.meta.url).href;

const options = [
	{ icon: img, label: "common.topbar.txt1", bordered: false },
	{ icon: img, label: "common.topbar.txt2", bordered: false },
	{ label: "common.topbar.txt3", class: "border-yellow-500" },
	{ label: "common.topbar.txt4", class: "bg-yellow-500" },
];
</script>
