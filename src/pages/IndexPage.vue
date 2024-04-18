<template>
  <q-page class="flex flex-center">
    <NavigationBar @toggle-bookmarks="bookmarksOpened = !bookmarksOpened" />
    <BookmarksDrawer v-model="bookmarksOpened" />
  </q-page>
</template>

<script setup>
const bookmarksOpened = ref(true);
function bookmarksToggle() {
  console.log(bookmarksOpened);
}
import NavigationBar from "components/navigation_bar/NavigationBar.vue";
import BookmarksDrawer from "components/BookmarksDrawer.vue";

import { ref } from "vue";

defineOptions({
  name: "IndexPage",
});
</script>
