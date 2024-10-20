import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultStore } from "jotai";
import { notificationAtom } from "./store/store.ts";
import i18n from "./i18n.ts";

const store = getDefaultStore();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
    mutations: {
      onError: () => {
        store.set(notificationAtom, (prev) => ({
          ...prev,
          message: i18n.t("error"),
          type: "error",
          isAutoClose: true,
        }));
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </BrowserRouter>
);
