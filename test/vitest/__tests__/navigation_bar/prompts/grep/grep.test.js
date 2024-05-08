import { setActivePinia, createPinia } from "pinia";
import { useWorkSpaceStore } from "src/stores/workspace-store";
import { grepImpl } from "src/components/prompts/grep/grep";
import { describe, beforeEach, expect, test } from "vitest";

describe("WorkSpaceStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const workSpaceStore = useWorkSpaceStore();
    workSpaceStore.addWorkspace({
      index: 0,
      label: "root",
      greps: [],
      content: [
        { index: 1, line: "error" },
        { index: 2, line: "warning" },
        { index: 3, line: "error" },
      ],
    });
  });

  test.each([
    [
      "error",
      1,
      {
        index: 1,
        label: "root>error",
        greps: ["error"],
        content: [
          { index: 1, line: "error" },
          { index: 3, line: "error" },
        ],
      },
    ],
    [
      "nothing",
      1,
      {
        index: 1,
        label: "root>nothing",
        greps: ["nothing"],
        content: [],
      },
    ],
    [
      "warning",
      1,
      {
        index: 1,
        greps: ["warning"],
        label: "root>warning",
        content: [{ index: 2, line: "warning" }],
      },
    ],
  ])(
    "Shall grep %s phrase and create new workspace with content",
    async (phrase, newIndex, expectedWorkspace) => {
      console.log("test", phrase);
      const workSpaceStore = useWorkSpaceStore();
      console.log("test", workSpaceStore.getCurrentWorkspaceIndex);
      workSpaceStore.triggerGrep(phrase);
      expect(workSpaceStore.getCurrentWorkspaceIndex).toEqual(newIndex);
      expect(workSpaceStore.getCurrentWorkspace).toEqual(expectedWorkspace);
      workSpaceStore.setWorkspaces([]);
    },
  );
});
