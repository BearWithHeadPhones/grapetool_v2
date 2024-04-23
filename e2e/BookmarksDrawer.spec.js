import { GrapetoolApp } from "app/e2e/environment/GrapetoolApp.js";
const { test, expect } = require("@playwright/test");

test("toggle bookmarks drawer", async () => {
  const grapetoolApp = await GrapetoolApp.initialize();
  await grapetoolApp.window.click("#bookmarksToggle");
  await expect(grapetoolApp.window.locator("#bookmarksDrawer")).toBeHidden();
  await grapetoolApp.application.close();
});
