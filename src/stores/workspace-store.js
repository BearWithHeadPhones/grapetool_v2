import { defineStore } from "pinia";

export const useWorkSpaceStore = defineStore("workSpaceStore", {
  state: () => ({
    workspaces: [
      {
        index: 0,
        label: "root",
        content: [
          { index: 1, line: "error" },
          { index: 2, line: "costamtego" },
        ],
      },
      {
        index: 1,
        label: "grep",
        content: [
          { index: 1, line: "tegotam" },
          { index: 2, line: "itamtego" },
        ],
      },
    ],
  }),
  getters: {
    getWorkspaces: (state) => state.workspaces,
  },
  actions: {
    setWorkspaces(workspaces) {
      this.workspaces = workspaces;
    },
    addWorkspace(workspace) {
      this.workspaces.push(workspace);
    },
  },
});
