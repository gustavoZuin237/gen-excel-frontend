import { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme } from "@styles/themes";
import { useThemeContext } from "@shared/hooks/useThemeContext";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const { themeMode } = useThemeContext();

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : defaultTheme}>
      {children}
    </ThemeProvider>
  );
}
