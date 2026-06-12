import * as s from "./styles";

import type { ChartPresetOption } from "@shared/data/chartPresets";
import type { NormalizedRow } from "@shared/types/rowFormats";

import { BarCategoryChart } from "@components/_charts/BarCategoryChart";
import { PieCategoryChart } from "@components/_charts/PieCategoryChart";
import { CustomLineChart } from "@components/_charts/CustomLineChart";

type ChartRendererProps = {
  preset: ChartPresetOption | string;
  chartData: NormalizedRow[];
};

export function ChartRenderer({ preset, chartData }: ChartRendererProps) {
  if (chartData.length === 0) {
    return (
      <s.NoGraphicMessage>
        Não há gráfico ou arquivo selecionado
      </s.NoGraphicMessage>
    );
  }

  switch (preset) {
    case "gastosPorSecretaria":
      return <PieCategoryChart data={chartData} />;

    case "gastosAnuaisPorProcesso":
      return <BarCategoryChart data={chartData} />;

    case "testeLinha":
      return <CustomLineChart data={chartData} />;

    default:
      return (
        <s.NoGraphicMessage>
          Não há gráfico ou arquivo selecionado
        </s.NoGraphicMessage>
      );
  }
}
