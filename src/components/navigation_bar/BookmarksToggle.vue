<template>
  <q-btn flat dense icon="menu" @click="$emit('toggle-bookmarks')" />
</template>

<script setup>
defineEmits(["toggle-bookmarks"]);
</script>
