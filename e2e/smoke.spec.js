const { _electron: electron } = require("playwright");
const { test, expect } = require("@playwright/test");

test("appStarts", async () => {
  console.log(process.cwd());
  const electronApp = await electron.launch({
    args: [process.cwd() + "/dist/electron/UnPackaged/electron-main.js"],
  });
  const window = await electronApp.firstWindow();
  await electronApp.close();
});
