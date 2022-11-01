<template>
    <main class="p-sm">
        {{ $t('lang.en') }}
        {{ userStore.count }}
    </main>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()

</script>
<script lang="ts">
export default {
    name: 'Home'
}
</script>

