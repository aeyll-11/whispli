<script setup lang="ts">
import PageTree from '@/components/PageTree.vue';
</script>

<template>
  <main>
    <p>Please build the structure you see in <code>PageTree.png</code> in the file explorer.</p>
    <p>The data for this structure should be loaded from <code>fetchData.js</code>.</p>
    <p>Useful icon characters are ▼ ▶ •</p>
    <PageTree />
  </main>
</template>
