<template>
  <div class="cursor-pointer non-selectable q-electron-drag--exception">
    Edit
    <q-menu>
      <q-list dense style="min-width: 100px">
        <q-item clickable v-close-popup @click="$emit('toggle-grep')">
          <q-item-section>Grep... Ctrl+G</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup>

defineEmits([" toggle-grep"]);
async function grep(path) { console.log("grep") }

</script>
