<template>
	<img
		src="~@/assets/logo.svg"
		class="mr-auto"
		:class="`h-[${size}px]`"
		@click="$router.push('/')"
	/>
</template>

<script setup lang="ts">
defineProps({
	size: {
		type: Number,
		default: 80,
	},
});
</script>
<script lang="ts">
export default {
	name: "logo",
};
</script>
