<template>
	<header class="h-[70px] fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center">
		<LOGO :size="40" />
		<n-button
			secondary
			class="text-yellow-600"
			@click="active = !active"
		>
			<n-icon size="30">
				<MenuFilled
					v-if="!active"
					width="30"
				/>
				<CloseRound
					v-else
					width="30"
				/>
			</n-icon>
			<span v-if="!active">{{ $t("common.topbar.txt5") }}</span>
		</n-button>
		<n-drawer
			v-model:show="active"
			:placement="placement"
			style="padding-top: 65px"
			:z-index="10"
			height="100vh"
			width="100%"
		>
			<n-drawer-content body-style="--n-body-padding:0">
				<MNavigator />
				<div class="flex gap-md px-sm py-md border-b border-yellow-800">
					<button class="flex-1 border-2 rounded-md text-16 border-yellow-600 h-[54px] text-black">
						{{ $t("common.topbar.txt3") }}
					</button>
					<button
						:bordered="false"
						class="flex-1 rounded-md text-20 bg-yellow-600 h-[54px] text-white"
					>
						{{ $t("common.topbar.txt4") }}
					</button>
				</div>
				<div>
					<router-link to="/login">
						<n-button
							block
							secondary
						>
							<template #icon>
								<n-icon>
									<DiamondFilled />
								</n-icon>
							</template>
							{{ $t("common.topbar.txt1") }}
						</n-button>
					</router-link>
				</div>
				<div><Lang /></div>
			</n-drawer-content>
		</n-drawer>
	</header>
</template>
<script setup lang="ts">
import LOGO from "./LOGO.vue";
import Lang from "./Lang.vue";
import MNavigator from "./MNavigator.vue";
import { MenuFilled, CloseRound, DiamondFilled } from "@vicons/material";
import type { DrawerPlacement } from "naive-ui";
import nav from "./nav";

const active = ref(false);
const placement = ref<DrawerPlacement>("left");
</script>
