<template>
  <q-dialog v-model="grepPrompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Grep</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="grepPhrase" autofocus @keyup.enter="grep" @keyup.esc="grepPrompt = false" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Grep" v-close-popup @click="grep" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>

import { ref } from "vue";

const grepPrompt = defineModel()
const grepPhrase = ref("");
import { grepImpl } from "./GrepPrompt.js";

function grep() {
  grepImpl(grepPhrase.value);
  grepPrompt.value = false;
}



</script>
