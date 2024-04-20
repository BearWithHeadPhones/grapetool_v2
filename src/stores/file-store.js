import { defineStore } from "pinia";

export const useFileStore = defineStore("fileStore", {
  state: () => ({
    originalFileContent: "",
    fileContentSplitted: [{ index: 1, line: "" }],
  }),
  getters: {
    getOriginalFileContent: (state) => state.originalFileContent,
    getFileContentSplitted: (state) => state.fileContentSplitted,
  },
  actions: {
    setOriginalFileContent(content) {
      this.originalFileContent = content;

      this.fileContentSplitted = content.split("\n").map((line, index) => {
        return {
          index: index + 1,
          line: line.trim(),
        };
      });

      console.log(this.fileContentSplitted);
    },
  },
});
