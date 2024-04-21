<template>
  <router-view style="max-height: 100vh;
    overflow-x: scroll;" />
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
