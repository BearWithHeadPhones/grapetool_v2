<template>
  <q-drawer padding v-model="model" bordered :width="width" :breakpoint="700" class="text-white"
    style="background-color: #24759c">
    <div v-touch-pan.preserveCursor.prevent.mouse.horizontal="resizeDrawer" class="q-drawer__resizer"></div>
    <q-scroll-area class="fit">
      <div class="q-pa-sm">
        <div v-for="n in 1000" :key="n">Drawer {{ n }} / 50</div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useWindowStore } from 'stores/window-store'
const windowStore = useWindowStore();

let initialDrawerWidth;
const drawerWidth = ref(200);

const width = computed(() => {
  let maxWidth = windowStore.getInnerWidth / 4
  if (drawerWidth.value > maxWidth) {
    return maxWidth
  }
  return drawerWidth.value
})

function resizeDrawer(ev) {
  if (ev.isFirst === true) {
    initialDrawerWidth = drawerWidth.value;
  }
  drawerWidth.value = initialDrawerWidth + ev.offset.x;
}

const model = defineModel();
</script>

<style>
.q-drawer__resizer {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -1px;
  width: 1px;
  background-color: #3f52b5;
  cursor: ew-resize;
}

.q-drawer__resizer:after {
  content: "";
  position: absolute;
  top: 50%;
  height: 50px;
  left: -3px;
  right: -2px;
  transform: translateY(-50%);
  background-color: inherit;
  border-radius: 4px;
}
</style>
