const { BrowserWindow, ipcMain, desktopCapturer } = require("electron");

let displaysWindow;

async function getDisplaySources() {
  const sources = await desktopCapturer.getSources({
    types: ["window", "screen"],
    thumbnailSize: { width: 1000, height: 300 },
  });
  let srcArr = [];
  for await (var source of sources) {
    srcArr.push({
      name: source.name,
      thumbnail: source.thumbnail.toDataURL(),
      id: source.id,
    });
  }
  return srcArr;
}

ipcMain.on("GET_SOURCE", async () => {
  const sources = await getDisplaySources();
  createDisplaysWindow(sources);
});

ipcMain.on("SELECT_SOURCE", () => displaysWindow.hide())

const createDisplaysWindow = (data) => {
  
    if (displaysWindow) {
        displaysWindow.show()
        return
    }

    displaysWindow = new BrowserWindow({
        show: false,
        width: 300,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            preload: DISPLAY_WINDOW_PRELOAD_WEBPACK_ENTRY
        }
    }) 
    displaysWindow.loadURL(DISPLAY_WINDOW_WEBPACK_ENTRY)


    displaysWindow.once('ready-to-show', () =>{
        displaysWindow.show()
        displaysWindow.webContents.send("RECIEVE_SOURCE", data);
    })
}
