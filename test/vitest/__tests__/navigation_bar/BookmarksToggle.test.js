import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import BookmarksToggle from "components/navigation_bar/BookmarksToggle.vue";
import { setActivePinia, createPinia } from "pinia";

setActivePinia(createPinia());
installQuasarPlugin();

describe("BookmarksToggle", () => {
  it("shall emit toggle-bokmarks when clicked", async () => {
    const wrapper = mount(BookmarksToggle);
    await wrapper.trigger("click");
    expect(wrapper.emitted("toggle-bookmarks")).toBeTruthy();
  });
});
