import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi, test } from "vitest";
import NavigationBar from "components/navigation_bar/NavigationBar.vue";
import BookmarksToggle from "components/navigation_bar/BookmarksToggle.vue";
import EditMenu from "components/navigation_bar/EditMenu.vue";
import { setActivePinia, createPinia } from "pinia";

setActivePinia(createPinia());
installQuasarPlugin();

describe("NavigationBar", () => {
  it("shall emit toggle-bokmarks when BookmarksToggle is clicked", async () => {
    const wrapper = mount(NavigationBar);
    await wrapper.findComponent(BookmarksToggle).trigger("click");
    expect(wrapper.emitted("toggle-bookmarks")).toBeTruthy();
  });

  it("shall emit toggle-grep when EditMenu grep is clicked", async () => {
    const wrapper = mount(NavigationBar);
    const editMenuWrapper = wrapper.findComponent(EditMenu);
    editMenuWrapper.vm.$emit("toggle-grep");
    expect(wrapper.emitted("toggle-grep")).toBeTruthy();
  });

  test.each([["minimize"], ["toggleMaximize"], ["close"]])(
    "shall call %s on myWindowAPI",
    async (method) => {
      window.myWindowAPI = myWindowAPIFake;
      const spy = vi.spyOn(myWindowAPIFake, method);
      const wrapper = mount(NavigationBar);
      await wrapper.find("#" + method).trigger("click");
      expect(spy).toHaveBeenCalledTimes(1);
    },
  );

  let myWindowAPIFake = {
    minimize: function () {},
    toggleMaximize: function () {},
    close: function () {},
  };
});
