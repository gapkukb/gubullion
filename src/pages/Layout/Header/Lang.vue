<template>
	<n-dropdown
		trigger="click"
		:options="options"
		:render-label="render"
		@select="handleSelect"
		class="w-screen lg:w-auto text-center"
	>
		<n-button
			secondary
			block
		>
			<img
				class="mr-xs"
				:src="img"
				width="24"
			/>
			<span>{{ $t(`lang.${lang}`) }}</span>
			<n-icon class="ml-xs">
				<KeyboardArrowDownOutlined />
			</n-icon>
		</n-button>
	</n-dropdown>
</template>

<script setup lang="ts">
import { changeLocale } from "@/locale";
import { AccessTimeOutlined, KeyboardArrowUpOutlined, KeyboardArrowDownOutlined } from "@vicons/material";
import type { DropdownOption } from "naive-ui";
const img = new URL("@/assets/logo.svg", import.meta.url).href;
const { t, locale, messages } = useI18n();
const options = [
	{ key: "en", label: t("lang.en") },
	{ key: "th", label: t("lang.th") },
	{ key: "zh-Hans", label: t("lang.zh-Hans") },
	{ key: "zh-Hant", label: t("lang.zh-Hant") },
];
function handleSelect(key: string) {
	changeLocale(key);
}
function render(option: DropdownOption) {
	return [h("img", { src: img, class: "inline mr-sm", width: 24 }), option.label!] as any;
}
const lang = locale.value;
</script>

<style>
.lang-dropdown {
	/* display: none; */
	position: absolute;
	top: 100%;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 4px 0 #ccc;
	width: 100%;
}
.langs {
	position: relative;
}
.langs:hover .lang-dropdown {
	display: block;
}

.lang-dropdown-item {
	padding: 2px 4px;
	font-size: 14px;
}
</style>
