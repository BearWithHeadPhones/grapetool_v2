<template>
  <q-page flex>
    <NavigationBar @toggle-bookmarks="bookmarksOpened = !bookmarksOpened" />
    <BookmarksDrawer v-model="bookmarksOpened" />

    <q-tab-panel style="padding: 0" :key="workspace.index" v-for="workspace in workspaces" highlight separator bordered
      :name="workspace.index">
      <div class="container">
        <q-virtual-scroll q-page-sticky component="q-list" :style="height" :items="fileStore.getFileContentSplitted"
          dense @virtual-scroll="onVirtualScroll">
          <template v-slot="{ item, index }">
            <q-item clickable :key="index" style="min-height: 0; padding: 0; line-height: 1">
              <pre v-html="item.index + item.line" style="margin: 0.4px; color: #000000" />
            </q-item>
          </template>
        </q-virtual-scroll>
      </div>
    </q-tab-panel>
    <q-footer class="bg-black" ref="foota">
      <q-bar dense class="bg-black text-white">
        V1.1 bartosz.cwynar@yahoo.com
        <q-space />
        <div style="padding-right: 30px">
          line:{{ currentLine + 1 }}/{{ linesnumber }}
        </div>
      </q-bar>
    </q-footer>
  </q-page>
</template>

<script setup>
const bookmarksOpened = ref(true);
import NavigationBar from "components/navigation_bar/NavigationBar.vue";
import BookmarksDrawer from "components/BookmarksDrawer.vue";

import { ref, computed } from "vue";
import { useFileStore } from 'stores/file-store'
import { useWindowStore } from 'stores/window-store'

const fileStore = useFileStore()
const windowStore = useWindowStore()

const workspaces = ref([{ index: 1 }])
const height = computed(() => {
  return "height: " + (windowStore.getInnerHeight - 88) + "px;";
})

defineOptions({
  name: "IndexPage",
});
</script>
