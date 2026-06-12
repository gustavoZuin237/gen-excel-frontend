import * as s from "./styles";

import { PieChart, Pie, Tooltip, type PieLabelRenderProps } from "recharts";

import type { NormalizedRow } from "@shared/types/rowFormats";

import { formatCurrency } from "@shared/utils/currency/formatCurrency";

import { defaultTheme, darkTheme } from "@styles/themes";

import { useThemeContext } from "@shared/hooks/useThemeContext";
interface Props {
  data: NormalizedRow[];
}

const sliceColors = [
  "#2563EB",
  "#DC2626",
  "#16A34A",
  "#CA8A04",
  "#9333EA",
  "#EA580C",
  "#0891B2",
  "#DB2777",
  "#4F46E5",
  "#65A30D",
  "#0F766E",
  "#7C3AED",
  "#BE123C",
  "#1D4ED8",
  "#15803D",
  "#B45309",
  "#4338CA",
  "#C026D3",
  "#0E7490",
  "#E11D48",
  "#854D0E",
  "#166534",
  "#1E40AF",
  "#9D174D",
  "#5B21B6",
  "#0369A1",
  "#A16207",
  "#BE185D",
  "#047857",
  "#7E22CE",
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export function PieCategoryChart({ data }: Props) {
  const { themeMode } = useThemeContext();

  const theme = themeMode == "dark" ? darkTheme : defaultTheme;

  const dataList = data.map((row, index) => {
    return {
      category: row.secretaria,
      totalSpending: row.valorTotalContrato,
      fill: sliceColors[index],
    };
  });

  const map = new Map<
    string,
    {
      category: string;
      totalSpending: number;
      fill: string;
    }
  >();

  for (const item of dataList) {
    const existing = map.get(item.category);

    if (existing) {
      existing.totalSpending += item.totalSpending ?? 0;
    } else {
      map.set(item.category, {
        category: item.category,
        totalSpending: item.totalSpending ?? 0,
        fill: item.fill,
      });
    }
  }

  const reducedList = Array.from(map.values());

  return (
    <div style={{ width: "100%", height: 500 }}>
      <s.StyledResponsiveContainer>
        <PieChart
          style={{
            maxWidth: "1000px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={reducedList}
            dataKey="totalSpending"
            nameKey="category"
            cx="50%"
            cy="52%"
            outerRadius={180}
            labelLine={false}
            label={renderCustomizedLabel}
            stroke={theme.surfaceAlt}
            strokeWidth={2}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: `${theme.surfaceAlt}`,
              border: `1px solid ${theme.border}`,
              borderRadius: "8px",
              color: `${theme.text}`,
            }}
            itemStyle={{
              color: `${theme.text}`,
            }}
            labelStyle={{
              color: `${theme.text}`,
              fontWeight: 600,
            }}
            formatter={(value: unknown, name: unknown) => [
              formatCurrency(value),
              `Gastos totais - ${name}`,
            ]}
          />
        </PieChart>
      </s.StyledResponsiveContainer>
    </div>
  );
}
