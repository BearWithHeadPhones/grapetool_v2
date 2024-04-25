<template>
  <q-dialog v-model="grepPrompt" persistent>
    <q-card id="grepPrompt" style="min-width: 350px">
      <q-card-section class="q-pt-none">
        <q-input label="Grep" dense v-model="grepPhrase" :autofocus="true" @keyup.enter="grep"
          @keyup.esc="grepPrompt = false" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn id="grepBtn" flat label="Grep" v-close-popup @click="grep" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>

import { ref } from "vue";

const grepPrompt = defineModel()
const grepPhrase = ref("");
import { grepImpl } from "./grep.js";

function grep() {
  grepImpl(grepPhrase.value);
  grepPhrase.value = "";
  grepPrompt.value = false;
}



</script>
