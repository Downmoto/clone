const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("captureApi", {
  getSourceData: (callback) => ipcRenderer.on("RECIEVE_SOURCE", callback),
  sendSelectedSource: (data) => ipcRenderer.send("SELECT_SOURCE", data)
});
