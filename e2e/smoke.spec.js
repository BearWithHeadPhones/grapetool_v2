const { _electron: electron } = require("playwright");
const { test, expect, keyboard } = require("@playwright/test");
var path = require("path");

test("smoke", async () => {
  const electronApp = await electron.launch({
    args: [process.cwd() + "/dist/electron/UnPackaged/electron-main.mjs"],
  });
  const window = await electronApp.firstWindow();
  await window.waitForLoadState();
  await window.click("#fileMenu");
  await expect(window.locator("#open")).toBeVisible();
  const fileChooserPromise = window.waitForEvent("filechooser");
  await window.click("#open");
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(path.join(__dirname + "/test-files", "test.log"));
  await window.keyboard.press("Control+g");
  let grepInput = await window.getByLabel("Grep");
  await expect(grepInput).toBeVisible();
  await grepInput.fill("error");
  await window.keyboard.press("Enter");
  await expect(
    window.locator('div.q-tab__label:has-text("root error")'),
  ).toBeVisible();
  await electronApp.close();
});
