import { contextBridge } from "electron";
import { BrowserWindow } from "@electron/remote";
var fs = require("fs");
import path from "path";

contextBridge.exposeInMainWorld("myWindowAPI", {
  minimize() {
    BrowserWindow.getFocusedWindow().minimize();
  },

  toggleMaximize() {
    const win = BrowserWindow.getFocusedWindow();

    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  },

  close() {
    BrowserWindow.getFocusedWindow().close();
  },

  readFile(filepath) {
    //console.log(path.resolve(__dirname, process.env.QUASAR_PUBLIC_FOLDER));
    return fs.readFileSync(filepath).toString();
  },
});
