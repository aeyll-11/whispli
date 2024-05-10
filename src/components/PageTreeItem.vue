<script lang="ts" setup>
import type { Data } from '@/interfaces/data.interface';
import { computed, ref } from 'vue';

const props = defineProps<{ data: Data }>();

const hasChildren = computed<boolean>(() => Array.isArray(props.data.children));

/**
 * Handle icon display logic
 */
const icon = computed(() => {
  if (hasChildren.value) {
    return '▶';
  }
  return '•';
});

const isOpen = ref<boolean>(false);

const toggle = (): void => {
  if (hasChildren.value) {
    isOpen.value = !isOpen.value;
  }
};
</script>

<template>
  <ul>
    <li @click="toggle" :style="hasChildren ? 'cursor:pointer' : ''">
      <span>
        {{ isOpen ? '▼' : icon }}
      </span>
      {{ props.data.name }}
    </li>
    <template v-if="$props.data.children && isOpen">
      <PageTreeItem v-for="item in $props.data.children" :data="item" :key="item.id" />
    </template>
  </ul>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
