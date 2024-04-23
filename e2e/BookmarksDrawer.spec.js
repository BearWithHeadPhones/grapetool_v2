const { _electron: electron } = require("playwright");
const { test, expect } = require("@playwright/test");

test("toggle bookmarks drawer", async () => {
  const electronApp = await electron.launch({
    args: [process.cwd() + "/dist/electron/UnPackaged/electron-main.mjs"],
  });
  const window = await electronApp.firstWindow();
  await window.waitForLoadState();
  await window.click("#bookmarksToggle");
  await expect(window.locator("#bookmarksDrawer")).toBeHidden();
  await electronApp.close();
});
