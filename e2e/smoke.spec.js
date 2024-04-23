import { GrapetoolApp } from "app/e2e/environment/GrapetoolApp.js";
const { test, expect } = require("@playwright/test");
var path = require("path");

test("smoke", async () => {
  const grapetoolApp = await GrapetoolApp.initialize();
  await grapetoolApp.openFile("test.log");
  await grapetoolApp.window.keyboard.press("Control+g");
  let grepInput = await grapetoolApp.window.getByLabel("Grep");
  await expect(grepInput).toBeVisible();
  await grepInput.fill("error");
  await grapetoolApp.window.keyboard.press("Enter");
  await expect(
    grapetoolApp.window.locator('div.q-tab__label:has-text("root error")'),
  ).toBeVisible();
  await grapetoolApp.application.close();
});
