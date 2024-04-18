<template>
  <q-btn
    :ripple="{ center: true }"
    color="bg-indigo"
    label="Bookmarks"
    no-caps
    @click="$emit('toggle-bookmarks')"
  />
</template>

<script setup>
defineEmits(["toggle-bookmarks"]);
</script>
