import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import type { NormalizedRow } from "@shared/types/rowFormats";

interface Props {
  data: NormalizedRow[];
}

const testData = [
  {
    month: "Jan",
    sales: 400,
    expenses: 250,
  },
  {
    month: "Feb",
    sales: 500,
    expenses: 320,
  },
  {
    month: "Mar",
    sales: 650,
    expenses: 400,
  },
];

export function CustomLineChart({ data }: Props) {
  // TODO Make actual functionality instead of example
  console.log(data);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={testData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="sales"
          name="Exemplo 1"
          stroke="#217346"
        />

        <Line
          type="monotone"
          dataKey="expenses"
          name="Exemplo 2"
          stroke="#20c1c7"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
