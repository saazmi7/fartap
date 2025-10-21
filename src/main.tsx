import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NeynarProvider } from "@neynar/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NeynarProvider>
      <App />
    </NeynarProvider>
  </React.StrictMode>
);
