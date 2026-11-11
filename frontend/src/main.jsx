import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../styles.css";
import "../pages.css";

function mount() {
  const container = document.getElementById("root");

  if (!container) {
    return false;
  }

  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );

  return true;
}

if (!mount()) {
  document.addEventListener("DOMContentLoaded", mount, { once: true });
}
