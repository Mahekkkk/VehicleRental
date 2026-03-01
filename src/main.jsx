import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ Use HashRouter
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);