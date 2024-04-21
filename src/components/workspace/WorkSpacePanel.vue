<template>
  <q-virtual-scroll type="table" q-virtual-scroll--with-prev v-if="workspace" q-page-sticky component="q-list"
    :style="height" :items="workspace.content" dense @virtual-scroll="onVirtualScroll" v-slot="{ item, index }">
    <q-item clickable :key="index" style="min-height: 0; padding: 0; line-height: 1">
      <WorkSpaceLine :globalIndex="item.index" :localIndex="item.index" :line="item.line" />
    </q-item>
  </q-virtual-scroll>
</template>

<script setup>
import { computed } from "vue";
import { useWindowStore } from 'stores/window-store'
import WorkSpaceLine from "./WorkSpaceLine.vue";

const windowStore = useWindowStore()
const height = computed(() => {
  return "height: " + (windowStore.getInnerHeight - 126) + "px;";
})

const props = defineProps({
  workspace: []
})
</script>

<style>
::-webkit-scrollbar {
  height: 12px;
  width: 14px;
  background: transparent;
  z-index: 12;
  overflow: visible;
}

::-webkit-scrollbar-thumb {
  width: 10px;
  background-color: #c1c1c1;
  border-radius: 10px;
  z-index: 12;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  transition: background-color .32s ease-in-out;
  margin: 4px;
  min-height: 32px;
  min-width: 32px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c1c1c1;
}
</style>
