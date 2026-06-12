import React from "react";

import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";

import { ThemeProviderContext } from "@contexts/ThemeContext.tsx";
import { AppThemeProvider } from "@contexts/AppThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProviderContext>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </ThemeProviderContext>
  </React.StrictMode>
);
