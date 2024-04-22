<template>
  <pre class="text-left" style="white-space: pre; margin: 0" v-html="entryLine" />
</template>
<script setup>
import { computed, toRefs } from "vue";
const props = defineProps({
  globalIndex: Number,
  localIndex: Number,
  line: String
})
const { globalIndex, localIndex, line } = toRefs(props)

const entryLine = computed(() => {


  let numbersPanel = '<span style="color:grey; background-color:#e0e0e0">' +

    " " + (globalIndex.value + 1) +
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
