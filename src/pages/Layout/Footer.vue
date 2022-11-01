<template>
	<footer class="bg-black text-white-80">
		<div class="xl:container py-[80px]">
			<div class="grid grid-cols-3">
				<div>
					<div class="text-18">{{ $t("common.foot.txt1") }}</div>
					<div class="flex flex-wrap mt-sm">
						<div>{{ $t("common.foot.txt4") }}</div
						>|
						<div>{{ $t("common.foot.txt5") }}</div>
					</div>
					<div>{{ $t("common.foot.txt17") }}</div>
				</div>
				<div class="border-l pl-xl">
					<div class="text-18">{{ $t("common.foot.txt5") }}</div>
					<div class="grid grid-cols-4 gap-y-sm mt-sm">
						<router-link
							to="/"
							class="hover:opacity-80"
							>{{ $t("common.nav.txt1") }}</router-link
						>
						<router-link
							to="/"
							class="hover:opacity-80"
							>{{ $t("common.nav.txt2") }}</router-link
						>
						<router-link
							to="/"
							class="hover:opacity-80"
							>{{ $t("common.nav.txt3") }}</router-link
						>
						<router-link
							to="/"
							class="hover:opacity-80"
							>{{ $t("common.nav.txt4") }}</router-link
						>
						<router-link
							to="/"
							class="hover:opacity-80"
							>{{ $t("common.nav.txt5") }}</router-link
						>
						<router-link
							to="/"
							class="hover:opacity-80"
							>{{ $t("common.nav.txt6") }}</router-link
						>
						<router-link
							to="/"
							class="hover:opacity-80"
							>{{ $t("common.nav.txt7") }}</router-link
						>
					</div>
				</div>
				<div class="border-l pl-xl">
					<div class="text-18">{{ $t("common.foot.txt6") }}</div>
					<div class="mt-sm flex gap-xl">
						<button class="h-36 flex-1 text-black rounded-sm bg-orange-200">{{ $t("common.foot.txt6") }}</button>
						<button class="h-36 flex-1 text-orange-200 rounded-sm border-2">{{ $t("common.foot.txt16") }}</button>
					</div>
				</div>
			</div>
			<ul class="grid gap-sm mt-xl">
				<li class="">{{ $t("common.foot.txt7") }}</li>
				<li class="">{{ $t("common.foot.txt8") }}</li>
				<li class="">{{ $t("common.foot.txt9") }}</li>
				<li class="">{{ $t("common.foot.txt10") }}</li>
			</ul>
			<div class="text-16 mt-xl">{{ $t("common.foot.txt15") }}</div>
		</div>
		<FooterBar />
	</footer>
</template>
<script setup lang="ts">
import FooterBar from "./FooterBar.vue";
</script>
