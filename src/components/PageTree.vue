<script setup lang="ts">
import { fetchData } from '@/composables/fetchData';
import type { Data } from '@/interfaces/data.interface';
import { onMounted, ref } from 'vue';
import PageTreeItem from './PageTreeItem.vue';
const items = ref<Data[]>([]);

onMounted(async () => {
  items.value = await fetchData();
});
</script>

<template>
  <div>
    <PageTreeItem v-for="item in items" :data="item" :key="item.id" />
  </div>
</template>
