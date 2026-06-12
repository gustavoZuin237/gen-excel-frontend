import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./styles/themes";

import { GlobalStyle } from "./styles/global";

import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { SpreadsheetProvider } from "@contexts/SpreadsheetContext";

import { useThemeContext } from "@shared/hooks/useThemeContext";

export function App() {
  const { themeMode } = useThemeContext();

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : defaultTheme}>
      <SpreadsheetProvider>
        <BrowserRouter>
          <Toaster />

          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </SpreadsheetProvider>
    </ThemeProvider>
  );
}
