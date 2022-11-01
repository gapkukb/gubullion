<template>
	<main
		class="p-sm"
		style="background-color: blue; height: 20vh"
	>
		Register
	</main>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>
<script lang="ts">
export default {
	name: "Register",
};
</script>
