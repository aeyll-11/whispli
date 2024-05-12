<script setup lang="ts">
import { useData } from '@/composables/fetchData';
import { onMounted } from 'vue';
import PageTreeItem from './PageTreeItem.vue';

const { fetchData, isLoading, items } = useData();

onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <div v-if="!isLoading">
    <PageTreeItem v-for="item in items" :data="item" :key="item.id" />
  </div>
  <div v-else>...Loading</div>
</template>
