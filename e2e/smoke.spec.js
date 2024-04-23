import { GrapetoolApp } from "app/e2e/environment/GrapetoolApp.js";
const { test, expect } = require("@playwright/test");

test("smoke", async () => {
  const grapetoolApp = await GrapetoolApp.initialize();
  await grapetoolApp.openFile("test.log");
  await grapetoolApp.grep("error");
  await expect(
    grapetoolApp.window.locator('div.q-tab__label:has-text("root error")'),
  ).toBeVisible();
  await grapetoolApp.application.close();
});
