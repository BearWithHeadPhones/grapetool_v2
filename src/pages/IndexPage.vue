<template>
  <q-page flex>
    <NavigationBar @toggle-bookmarks="bookmarksOpened = !bookmarksOpened" @toggle-grep="grepPrompt = true" />
    <BookmarksDrawer v-model="bookmarksOpened" />
    <WorkSpace />
    <GrepPrompt v-model="grepPrompt" />
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
import { ref, onMounted } from "vue";
const bookmarksOpened = ref(true);
const grepPrompt = ref(false);
import NavigationBar from "components/navigation_bar/NavigationBar.vue";
import BookmarksDrawer from "components/BookmarksDrawer.vue";
import WorkSpace from "components/workspace/WorkSpace.vue";
import GrepPrompt from "src/components/prompts/grep/GrepPrompt.vue";

window.addEventListener('keydown', (e) => {
  if (e.key === "g" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault(); // present "Save Page" from getting triggered.
    grepPrompt.value = true;
  }
});

defineOptions({
  name: "IndexPage",
});
</script>
