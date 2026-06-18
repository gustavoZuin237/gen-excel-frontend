import { useContext } from "react";

import { CustomThemeContext } from "@contexts/ThemeContext";

export function useThemeContext() {
  return useContext(CustomThemeContext);
}
