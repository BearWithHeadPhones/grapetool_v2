<template>
  <div class="container" style="overflow-x: auto;">
    <WorkSpaceTabs v-model="index" :workspaces="workSpaceStore.getWorkspaces" />
    <q-separator inset />
    <WorkSpacePanel :workspace="workSpaceStore.getCurrentWorkspace" />

  </div>
</template>

<script setup>
import WorkSpaceTabs from './WorkSpaceTabs.vue';
import WorkSpacePanel from './WorkSpacePanel.vue';
import { useWorkSpaceStore } from 'stores/workspace-store'
import { ref, computed } from 'vue'
const workSpaceStore = useWorkSpaceStore()

const index = computed({
  get() {
    return workSpaceStore.getCurrentWorkspaceIndex
  },
  set(val) {
    workSpaceStore.setCurrentWorkspaceIndex(val)
  }
})

</script>
