import { defineStore } from "pinia";

function dynamicContent(workspace, content) {
  return content.filter((elem) => {
    if (workspace.greps.length > 0) {
      return workspace.greps.every((grepPhrase) => {
        return RegExp(grepPhrase, "i").test(elem.line);
      });
    }
    return true;
  });
}

export const useWorkSpaceStore = defineStore("workSpaceStore", {
  state: () => ({
    workspaces: [],
    currentWorkspaceIndex: 0,
  }),
  getters: {
    getWorkspaces: (state) => state.workspaces,
    getCurrentWorkspaceIndex: (state) => state.currentWorkspaceIndex,
    getCurrentWorkspace(state) {
      if (!state.workspaces.length) {
        return {};
      }
      let currentWorkspace = state.workspaces[state.currentWorkspaceIndex];
      currentWorkspace.content = dynamicContent(
        currentWorkspace,
        state.workspaces[0].content,
      );
      return state.workspaces[state.currentWorkspaceIndex];
    },
    getCurrentLabel: (state) =>
      state.workspaces[state.currentWorkspaceIndex].label,
    getHighestIndex: (state) => state.workspaces.at(-1).index,
  },
  actions: {
    setWorkspaces(workspaces) {
      this.workspaces = workspaces;
    },
    addWorkspace(workspace) {
      this.workspaces.push(workspace);
    },
    setCurrentWorkspaceIndex(index) {
      this.currentWorkspaceIndex = index;
    },

    triggerGrep(phrase) {
      let newIndex = this.getHighestIndex + 1;
      let currentWorkspace = this.getCurrentWorkspace;

      let workspace = {
        index: newIndex,
        greps: currentWorkspace.greps.map((x) => x),
        label: currentWorkspace.label + ">" + phrase,
        content: [],
      };
      workspace.greps.push(phrase);
      console.log(workspace);
      this.addWorkspace(workspace);

      this.setCurrentWorkspaceIndex(newIndex);
    },
  },
});
