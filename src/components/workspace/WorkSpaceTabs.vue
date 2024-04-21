<template>
  <q-tabs v-model="index" dense no-caps class="text-grey" active-color="indigo" indicator-color="indigo" align="left"
    inline-label>
    <q-tab :key="workspace.index" v-for="workspace in workspaces" highlight separator :name="workspace.index"
      :label="workspace.label">
      <q-btn size="8px" v-if="isNotRoot(workspace.index)" flat dense color="deep-orange" icon="close"
        @click="closeTab(workspace.index)" />
    </q-tab>
  </q-tabs>
</template>

<script setup>

import { ref } from 'vue'
const index = defineModel()

function isNotRoot(index) {
  return !(index === 0);
}

const props = defineProps({
  workspaces: []
})

</script>
