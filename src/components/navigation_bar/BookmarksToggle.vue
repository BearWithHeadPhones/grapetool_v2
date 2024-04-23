<template>
  <q-btn id="bookmarksToggle" flat dense icon="menu" @click="$emit('toggle-bookmarks')" />
</template>

<script setup>
defineEmits(["toggle-bookmarks"]);
</script>
