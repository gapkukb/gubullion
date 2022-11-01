<template>
	<div class="bg-orange-200">
		<div class="xl:container h-[80px] flex justify-end items-center text-white-90 gap-sm">
			<div class="mr-auto">{{ $t("common.foot.txt11") }}</div>
			<router-link to="/">{{ $t("common.foot.txt12") }}</router-link>
			<span>|</span>
			<router-link to="/">{{ $t("common.foot.txt13") }}</router-link>
			<span>|</span>
			<router-link to="/">{{ $t("common.foot.txt14") }}</router-link>
		</div>
	</div>
</template>
<script setup lang="ts"></script>
