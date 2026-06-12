// contexts/CustomThemeContext.tsx

import { createContext, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

interface CustomThemeContextData {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CustomThemeContext = createContext({} as CustomThemeContextData);

export function ThemeProviderContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeMode("dark");
    }
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((current) => {
      const next = current === "light" ? "dark" : "light";

      localStorage.setItem("theme", next);

      return next;
    });
  };

  return (
    <CustomThemeContext.Provider
      value={{
        themeMode,
        toggleTheme,
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
}
