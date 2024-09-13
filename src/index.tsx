import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MediaContextProvider } from "./provider/MediaContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MediaContextProvider>
    <App />
  </MediaContextProvider>
);
