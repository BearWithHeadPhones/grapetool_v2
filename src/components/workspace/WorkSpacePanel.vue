<template>
  <q-virtual-scroll type="table" q-virtual-scroll--with-prev v-if="workspace" q-page-sticky component="q-list"
    :style="height" :items="workspace.content" dense @virtual-scroll="onVirtualScroll" v-slot="{ item, index }">
    <q-item clickable :key="index" style="min-height: 0; padding: 0; line-height: 1">
      <WorkSpaceLine :style="fontSize" :globalIndex="index" :localIndex="item.index" :line="item.line" />
    </q-item>
  </q-virtual-scroll>
</template>

<script setup>
import { computed, ref } from "vue";
import { useWindowStore } from 'stores/window-store'
import WorkSpaceLine from "./WorkSpaceLine.vue";

const windowStore = useWindowStore()
const height = computed(() => {
  return "height: " + (windowStore.getInnerHeight - 126) + "px;";
})


const fontSize = computed(() => {
  return "font-size: " + fontSizeNumber.value + "px";
})

let fontSizeNumber = ref(14);

function calculateFontSize(modify) {
  if (modify) {
    fontSizeNumber.value++
    if (fontSizeNumber.value > 30) {
      fontSizeNumber.value = 30;
    }
  }
  else {
    fontSizeNumber.value--
    if (fontSizeNumber.value < 12) {
      fontSizeNumber.value = 12
    }
  }
}

const props = defineProps({
  workspace: []
})


window.addEventListener('mousewheel', (e) => {
  if (e.ctrlKey) {
    calculateFontSize(e.deltaY < 0);
  }
}
);
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
