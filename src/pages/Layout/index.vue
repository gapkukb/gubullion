<template>
	<div class="app">
		<Header />
		<router-view v-slot="{ Component, route }">
			<transition
				:name="route.meta.transition || 'slide-left'"
				mode="out-in"
			>
				<keep-alive v-if="route.meta.keepAlive">
					<component
						:is="Component"
						:key="route.path"
					/>
				</keep-alive>
				<component
					v-else
					:is="Component"
					:key="route.path"
				/>
			</transition>

			{{ route.meta.transition }}
		</router-view>
		<Footer />
	</div>
</template>
<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
<style lang="css">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	transition-timing-function: ease-in;
	transition: opacity 0.3s, transform 0.3s;
}
.slide-left-enter-from,
.slide-left-leave-to {
	opacity: 0;
	transform: translateX(-30%);
}
.slide-right-enter-from,
.slide-right-leave-to {
	opacity: 0;
	transform: translateX(30%);
}
</style>
