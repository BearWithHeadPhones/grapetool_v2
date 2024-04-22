import { setActivePinia, createPinia } from "pinia";
import { useWorkSpaceStore } from "src/stores/workspace-store";
import { grepImpl } from "src/components/prompts/grep/grep";
import { describe, beforeEach, expect, it, vi, test } from "vitest";

describe("Grep", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const workSpaceStore = useWorkSpaceStore();
    workSpaceStore.setWorkspaces([
      {
        index: 0,
        label: "root",
        content: [
          { index: 1, line: "error" },
          { index: 2, line: "warning" },
          { index: 3, line: "error" },
        ],
      },
      {
        index: 1,
        label: "grep",
        content: [
          { index: 1, line: "warning" },
          { index: 2, line: "info" },
        ],
      },
    ]);
  });

  test.each([
    [
      "error",
      0,
      2,
      {
        index: 2,
        label: "root error",
        content: [
          { index: 1, line: "error" },
          { index: 3, line: "error" },
        ],
      },
    ],
    [
      "error",
      1,
      2,
      {
        index: 2,
        label: "grep error",
        content: [],
      },
    ],
    [
      "warning",
      0,
      2,
      {
        index: 2,
        label: "root warning",
        content: [{ index: 2, line: "warning" }],
      },
    ],
  ])(
    "Shall grep %s phrase and create new workspace with content",
    async (phrase, currentIndex, newIndex, expectedWorkspace) => {
      const workSpaceStore = useWorkSpaceStore();
      workSpaceStore.setCurrentWorkspaceIndex(currentIndex);
      grepImpl(phrase);
      expect(workSpaceStore.getCurrentWorkspaceIndex).toEqual(newIndex);
      expect(workSpaceStore.getCurrentWorkspace).toEqual(expectedWorkspace);
    },
  );
});
