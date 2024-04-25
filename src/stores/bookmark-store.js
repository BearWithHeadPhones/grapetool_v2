import { defineStore } from "pinia";

export const useBookmarkStore = defineStore("bookmarkStore", {
  state: () => ({
    bookmarks: [
      {
        emoji: "😊",
        name: "customBookmark------------------------------------------------------------------------------------------------",
        workspaceItem: { index: 1, line: "costam " },
      },
    ],
  }),
  getters: {
    getBookmarks: (state) => state.bookmarks,
  },
  actions: {
    addBookmarkForLine(name, workspaceItem, emoji) {
      bookmarks.push({
        emoji: emoji | "",
        name: name,
        workspaceItem: workspaceItem,
      });
    },
  },
});
