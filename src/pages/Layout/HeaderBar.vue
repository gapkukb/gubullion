<template>
	<div class="2xl:container grid grid-flow-col gap-sm justify-end">
		<Lang />
		<router-link
			class=""
			to="/login"
			>会员登录</router-link
		>
		<router-link
			class=""
			to="/login"
			>在线客服</router-link
		>
		<router-link
			class=""
			to="/login"
			>用户中心</router-link
		>
		<router-link
			class="border-2 border-red-400"
			to="/login"
			>立即开户</router-link
		>
	</div>
</template>
<script setup lang="ts">
import { NIcon, type MenuOption } from "naive-ui";
import Lang from "./Lang.vue";
</script>
