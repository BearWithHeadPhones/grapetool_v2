import { defineStore } from "pinia";
import { useWorkSpaceStore } from "stores/workspace-store";

export const useFileStore = defineStore("fileStore", {
  state: () => ({
    originalFileContent: "",
  }),
  getters: {
    getOriginalFileContent: (state) => state.originalFileContent,
    getFileContentSplitted: (state) => state.fileContentSplitted,
  },
  actions: {
    setOriginalFileContent(content) {
      this.originalFileContent = content;
      const workSpaceStore = useWorkSpaceStore();

      workSpaceStore.setWorkspaces([
        {
          index: 0,
          label: "root",
          content: content.split("\n").map((line, index) => {
            return {
              index: index + 1,
              line: line.trim(),
            };
          }),
        },
      ]);

      workSpaceStore.setCurrentWorkspaceIndex(0);

      console.log(workSpaceStore.getWorkspaces);
    },
  },
});
