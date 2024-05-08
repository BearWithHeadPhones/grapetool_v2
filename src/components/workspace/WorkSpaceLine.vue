<template>
  <pre :class="{ 'bg-indigo text-white': highlight }" class="text-left" style="white-space: pre; margin: 0"
    v-html="entryLine" />
</template>
<script setup>
import { computed, toRefs } from "vue";
const props = defineProps({
  globalIndex: Number,
  localIndex: Number,
  line: String,
  highlight: Boolean
})
const { globalIndex, localIndex, line, highlight } = toRefs(props)

const entryLine = computed(() => {



  let numbersPanel = (highlight.value ? '<span style="color:white; background-color:#3F51B5">' : '<span style="color:grey; background-color:#e0e0e0">') +

    " " + (globalIndex.value) +
    "|" +
    localIndex.value +
    " " +
    "</span>"

  return numbersPanel + setLineColor("error", line, "red");
})

function setLineColor(phrase, line, color) {
  if (line.value.indexOf(phrase) > -1) {
    return `<span style="color:${color};">` + line.value + "</span>";
  }
  return line.value;
};

</script>
