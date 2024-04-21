<template>
  <q-page flex>
    <NavigationBar @toggle-bookmarks="bookmarksOpened = !bookmarksOpened" />
    <BookmarksDrawer v-model="bookmarksOpened" />
    <WorkSpace />
    <q-footer ref="foota">
      <q-bar dense class="bg-black text-grey">
        grapetool_v2.1 bartosz.cwynar@yahoo.com
        <q-space />
        <div style="padding-right: 30px">
          line:{{ currentLine + 1 }}/{{ linesnumber }}
        </div>
      </q-bar>
    </q-footer>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const bookmarksOpened = ref(true);
import NavigationBar from "components/navigation_bar/NavigationBar.vue";
import BookmarksDrawer from "components/BookmarksDrawer.vue";
import WorkSpace from "components/workspace/WorkSpace.vue";

defineOptions({
  name: "IndexPage",
});
</script>
