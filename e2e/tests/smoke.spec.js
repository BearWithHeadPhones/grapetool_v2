const { _electron: electron } = require("playwright");
const { test, expect } = require("@playwright/test");
async function startApp() {
  // Launch Electron app.
  const electronApp = await electron.launch({
    args: ["../src-electron/electron-main.js"],
  });

  // Evaluation expression in the Electron context.
  const appPath = await electronApp.evaluate(async ({ app }) => {
    // This runs in the main Electron process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.getAppPath();
  });
  console.log(appPath);

  // Get the first window that the app opens, wait if necessary.
  const window = await electronApp.firstWindow();
  // Print the title.
  console.log(await window.title());
  // Capture a screenshot.
  await window.screenshot({ path: "intro.png" });
  // Direct Electron console to Node terminal.
  window.on("console", console.log);
  // Click button.
  await window.click("text=Click me");
  // Exit app.
  await electronApp.close();
}

test("appStarts", async () => {
  const electronApp = await electron.launch({
    args: [
      "/home/runner/work/grapetool_v2/grapetool_v2/dist/electron/dist/electron/UnPackaged/electron-main.js",
    ],
  });
  const window = await electronApp.firstWindow();
  await electronApp.close();
});
