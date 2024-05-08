<template>
  <q-item clickable v-ripple @click="$emit('bookmark-triggered', bookmark.workspaceItem.index)"
    style="min-height: 0; padding: 0; margin: 0; line-height: 1">
    <q-item-section>
      <pre v-html="computedBookmark" style="margin: 0.4px; color: #f4f6f6" />
      <q-tooltip>
        {{ bookmark.workspaceItem.line }}
      </q-tooltip>
    </q-item-section>
  </q-item>
</template>


<script setup>
const props = defineProps({
  bookmark: {}
})

import { computed, toRefs } from "vue";
const { bookmark } = toRefs(props)

const computedBookmark = computed(() => {
  console.log(bookmark)
  return bookmark.value.workspaceItem.index + "|" + bookmark.value.emoji + bookmark.value.name;
})

</script>
