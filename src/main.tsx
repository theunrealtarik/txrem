import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { QueryClientProvider } from "@tanstack/react-query";
import { LoadingScreen } from "./components";

import { queryClient } from "./lib/utils.ts";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoadingScreen>
        <App />
      </LoadingScreen>
    </QueryClientProvider>
  </React.StrictMode>
);
