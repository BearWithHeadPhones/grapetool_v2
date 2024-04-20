<template>
  <q-btn flat dense icon="menu" @click="$emit('toggle-bookmarks')" />
</template>

<script setup>
defineEmits(["toggle-bookmarks"]);
</script>






<q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
