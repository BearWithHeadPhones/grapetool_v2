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

      content = content.split("\n");
      let sort = true;
      if (sort) {
        content = content.sort();
      }
      let workspace = {
        index: 0,
        label: "root",
        content: content.map((line, index) => {
          return {
            index: index + 1,
            line: line.trim(),
          };
        }),
      };

      workspace.content.sort();
      workSpaceStore.setWorkspaces([workspace]);

      workSpaceStore.setCurrentWorkspaceIndex(0);
    },
  },
});
