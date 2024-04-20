import { defineStore } from "pinia";

export const useWindowStore = defineStore("windowStore", {
  state: () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  }),
  getters: {
    getInnerHeight: (state) => state.innerHeight,
    getInnerWidth: (state) => state.innerWidth,
  },
  actions: {
    setInnerHeight(height) {
      this.innerHeight = height;
    },
    setInnerWidth(width) {
      this.innerWidth = width;
    },
  },
});
