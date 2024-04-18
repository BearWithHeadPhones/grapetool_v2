<template>
  <q-header elevated class="bg-indigo">
    <q-bar class="q-electron-drag">
      <q-icon class="text-dark" size="sm">
        <img src="~assets/favicon-32x32.png" />
      </q-icon>
      <div>grapetool</div>

      <q-space />

      <q-btn dense flat icon="minimize" @click="minimize" />
      <q-btn dense flat icon="crop_square" @click="toggleMaximize" />
      <q-btn dense flat icon="close" @click="closeApp" />
    </q-bar>
    <BookmarksToggle @toggle-bookmarks="$emit('toggle-bookmarks')" />
  </q-header>
</template>

<script setup>
import BookmarksToggle from "components/navigation_bar/BookmarksToggle.vue";
defineEmits(["toggle-bookmarks"]);

function minimize() {
  window.myWindowAPI?.minimize();
}

function toggleMaximize() {
  window.myWindowAPI?.toggleMaximize();
}

function closeApp() {
  window.myWindowAPI?.close();
}
</script>
