import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
