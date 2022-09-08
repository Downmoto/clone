import React from "react";
import {createRoot} from "react-dom/client";

import Buttons from './components/buttons/index.jsx'
import VideoContainer from "./components/video/index.jsx";

const root = createRoot(document.getElementById('root'),)

root.render(
    <>
        <Buttons />
        <VideoContainer />
    </>
)