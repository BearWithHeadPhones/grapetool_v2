<template>
  <router-view />
</template>

<script setup>
import { useWindowStore } from 'stores/window-store'

const windowStore = useWindowStore()
window.addEventListener("resize", resize);
function resize() {
  windowStore.setInnerHeight(window.innerHeight);
  windowStore.setInnerWidth(window.innerWidth);
}

defineOptions({
  name: 'App'
});
</script>
