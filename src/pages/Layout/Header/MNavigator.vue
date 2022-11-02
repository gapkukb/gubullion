<template>
	<n-collapse
		arrow-placement="right"
		accordion
	>
		<n-collapse-item
			v-for="(grand, gindex) in data"
			:key="grand.title"
			:title="grand.title"
			:name="gindex"
		>
			<div
				v-for="(parent, index) in grand.children"
				:key="index"
				class="bg-yellow-600 text-16 text-white grid grid-cols-2 border-b-2"
			>
				<div
					v-for="sub in parent"
					:key="index"
					class="flex items-center h-[42px] px-sm gap-xs cursor-pointer"
					:class="(sub.class || '') + ` col-span-${sub.span}`"
				>
					<n-icon>
						<component :is="sub.icon" />
					</n-icon>
					<span>{{ sub.name }}</span>
				</div>
			</div>
		</n-collapse-item>
	</n-collapse>
</template>
<script setup lang="ts">
import data from "./menu-data";
</script>
<style>
.n-collapse-item__header-main {
	justify-content: space-between;
}
.n-collapse-item__header-extra {
	display: none !important;
}
.n-collapse-item__content-inner {
	padding: 0 !important;
}
.n-collapse-item {
	--n-item-margin: 0;
}
.n-collapse-item__header--active {
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
	--n-title-text-color: #bf9d55;
	--n-arrow-color: #bf9d55;
}
.n-collapse-item__header .n-base-icon {
	font-size: 28px;
}
.n-collapse-item__header {
	padding: 16px !important;
	font-size: 16px !important;
}
</style>
