<template>
  <div class="container" style="overflow-x: auto;">
    <WorkSpaceTabs v-model="index" :workspaces="workSpaceStore.getWorkspaces" />
    <q-separator inset />
    <WorkSpacePanel :workspace="workSpaceStore.getWorkspaces[index]" />

  </div>
</template>



<script setup>
import WorkSpaceTabs from './WorkSpaceTabs.vue';
import WorkSpacePanel from './WorkSpacePanel.vue';
import { useWorkSpaceStore } from 'stores/workspace-store'
import { ref } from 'vue'
const index = ref(0)
const workSpaceStore = useWorkSpaceStore()
</script>
