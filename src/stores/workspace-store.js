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
    currentWorkspaceIndex: 0,
  }),
  getters: {
    getWorkspaces: (state) => state.workspaces,
    getCurrentWorkspaceIndex: (state) => state.currentWorkspaceIndex,
    getCurrentWorkspace: (state) =>
      state.workspaces[state.currentWorkspaceIndex],
    getCurrentLabel: (state) =>
      state.workspaces[state.currentWorkspaceIndex].label,
    getHighestIndex: (state) => state.workspaces.at(-1).index,
  },
  actions: {
    setWorkspaces(workspaces) {
      this.workspaces = workspaces;
    },
    addWorkspace(workspace) {
      console.log(workspace);
      this.workspaces.push(workspace);
    },
    setCurrentWorkspaceIndex(index) {
      this.currentWorkspaceIndex = index;
    },
  },
});
