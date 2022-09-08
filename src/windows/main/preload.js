const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld('captureApi', {
  getDisplaySources: () => ipcRenderer.send('GET_SOURCE'),
})

ipcRenderer.on("SET_SOURCE", async (event, sourceID) => {
  console.log(sourceID);
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceID
        }
      },
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceID,
          minWidth: 1280,
          maxWidth: 1280,
          minHeight: 720,
          maxHeight: 720,
        },
      },
    });
    handleStream(stream);
  } catch (e) {
    handleError(e);
  }
});


function handleStream(stream) {
  const video = document.querySelector("video");
  video.srcObject = stream;
  video.onloadedmetadata = (e) => video.play();

}

function handleError(e) {
  console.log(e);
}
