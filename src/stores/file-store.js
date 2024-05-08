import { defineStore } from "pinia";
import { useWorkSpaceStore } from "stores/workspace-store";

function createWorkspace(content, sort) {
  content = content.split("\n");
  if (sort) {
    content = content.sort();
  }
  let workspace = {
    index: 0,
    greps: [],
    label: "root",
    content: content.map((line, index) => {
      return {
        index: index + 1,
        line: line.trim(),
      };
    }),
  };
  return workspace;
}

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

      workSpaceStore.setWorkspaces([createWorkspace(content, false)]);

      workSpaceStore.setCurrentWorkspaceIndex(0);
    },
  },
});
