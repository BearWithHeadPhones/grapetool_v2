const { _electron: electron } = require("playwright");
const { test, expect } = require("@playwright/test");

test("appStarts", async () => {
  const electronApp = await electron.launch({
    args: ["./dist/electron/UnPackaged/electron-main.js"],
  });
  const window = await electronApp.firstWindow();
  await electronApp.close();
});
