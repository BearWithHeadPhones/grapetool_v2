<template>
  <q-file v-if="true" ref="filePicker" v-model="file" style="width: 0" />
  <div id="fileMenu" class="cursor-pointer non-selectable q-electron-drag--exception">
    File
    <q-menu>
      <q-list dense style="min-width: 100px">
        <q-item id="open" clickable @click="pickFile" v-close-popup>
          <q-item-section>Open...</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup>
import { useFileStore } from 'stores/file-store'
import { ref, watch } from 'vue'

const fileStore = useFileStore()
const filePicker = ref(null)
const file = ref('')

watch(file, async (newFile, oldFile) => {
  if (newFile && newFile != oldFile) {
    openFile(newFile.path)
  }
})

function pickFile() {
  filePicker.value.pickFiles();
}

async function openFile(path) {
  fileStore.setOriginalFileContent(window.myWindowAPI?.readFile(path))
}

</script>
