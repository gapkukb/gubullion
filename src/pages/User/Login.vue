<template>
	<main
		class="p-sm"
		style="background-color: red; height: 60vh"
	>
		Login
	</main>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>
<script lang="ts">
export default {
	name: "Login",
};
</script>
