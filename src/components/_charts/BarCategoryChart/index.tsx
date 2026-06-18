import * as s from "./styles";

import type { NormalizedRow } from "@shared/types/rowFormats";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import { defaultTheme, darkTheme } from "@styles/themes";

import { useThemeContext } from "../../../hooks/useThemeContext";

interface Props {
  data: NormalizedRow[];
}

export function BarCategoryChart({ data }: Props) {
  const { themeMode } = useThemeContext();

  const theme = themeMode == "dark" ? darkTheme : defaultTheme;

  console.log(data);

  return (
    <s.StyledResponsiveContainer>
      <CartesianGrid strokeDasharray="3 3" stroke={theme.chartLines} />

      <BarChart data={data}>
        <XAxis
          dataKey="numeroProcesso"
          tick={{ fill: theme.text, fontSize: "1rem" }}
          axisLine={{ stroke: theme.chartLines }}
        />

        <YAxis
          tick={{ fill: theme.text, fontSize: "1rem" }}
          axisLine={{ stroke: theme.chartLines }}
        />

        <Bar
          dataKey="valorTotalAnual"
          fill={theme.accent}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </s.StyledResponsiveContainer>
  );
}
