const { _electron: electron } = require("playwright");
const { expect } = require("@playwright/test");
var path = require("path");

export class GrapetoolApp {
  constructor(application, window) {
    this.application = application;
    this.window = window;
  }

  async openFile(file) {
    await this.window.click("#fileMenu");
    await expect(this.window.locator("#open")).toBeVisible();
    const fileChooserPromise = this.window.waitForEvent("filechooser");
    await this.window.click("#open");
    const fileChooser = await fileChooserPromise;
    console.log(path.join(process.cwd(), "e2e", "test-files", file));
    await fileChooser.setFiles(
      path.join(process.cwd(), "e2e", "test-files", file),
    );
  }

  async grep(phrase) {
    await this.window.keyboard.press("Control+g");
    await expect(this.window.getByLabel("Grep")).toBeFocused();
    await this.window.keyboard.insertText(phrase);
    await this.window.keyboard.press("Enter");
  }

  static async initialize() {
    const application = await electron.launch({
      args: [process.cwd() + "/dist/electron/UnPackaged/electron-main.mjs"],
    });
    const window = await application.firstWindow();
    await window.waitForLoadState();
    return new GrapetoolApp(application, window);
  }
}
