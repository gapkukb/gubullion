<template>
	<p>User</p>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>
<script lang="ts">
export default {
	name: "User",
};
</script>
