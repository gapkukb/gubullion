<template>
	<div class="navigator 2xl:container h-[120px] flex gap-xl justify-end items-center">
		<LOGO />
		<router-link
			v-for="item in data"
			:key="item.title"
			class="p-sm hover:opacity-50 border-b-4 border-transparent"
			:to="item.to"
			@click="item.click"
			@mouseenter="focus(item)"
			@mouseleave="blur"
		>
			{{ item.title }}
		</router-link>

		<Teleport to="body">
			<div
				v-if="open"
				class="header-drawer flex"
				@mouseenter="focus2"
				@mouseleave="blur"
			>
				<div
					v-for="(item, index) in subData"
					:key="index"
					class="flex-1 bg-white m-4 rounded-sm p-xl hover:bg-yellow-600"
				>
					<div
						v-for="(subItem, index) in item"
						:key="index"
					>
						{{ subItem.name }}
					</div>
				</div>
			</div>
		</Teleport>
	</div>
</template>
<script setup lang="ts">
import LOGO from "./LOGO.vue";
import data from "./menu-data";
import { MenuFilled, CloseRound, DiamondFilled } from "@vicons/material";
let timer = 0;
const open = ref(true);
const subData = ref<typeof data[0]["children"]>([]);

function focus(item: typeof data[0]) {
	window.clearTimeout(timer);
	subData.value = item.children;
	open.value = true;
}
function blur() {
	// subData.value = [];
	timer = window.setTimeout(() => {
		open.value = false;
	}, 300);
}
function focus2() {
	window.clearTimeout(timer);
	open.value = true;
}
</script>
<style>
.navigator .router-link-active {
	border-bottom-color: #bf9d55 !important;
}
.header-drawer {
	position: absolute;
	left: 0;
	top: 162px;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
