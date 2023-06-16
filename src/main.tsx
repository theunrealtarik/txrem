import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LoadingScreen } from "./components";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadingScreen>
      <App />
    </LoadingScreen>
  </React.StrictMode>
);
