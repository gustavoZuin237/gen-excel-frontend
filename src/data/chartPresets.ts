export type ChartPreset =
  | "gastosPorSecretaria"
  | "gastosAnuaisPorProcesso"
  | "testeLinha"
  | "vazio"
  | string;

export interface ChartPresetOption {
  value: ChartPreset;
  label: string;
}

export const chartPresetOptionList: ChartPresetOption[] = [
  {
    value: "gastosPorSecretaria",
    label: "Gastos Totais por Secretaria",
  },

  {
    value: "gastosAnuaisPorProcesso",
    label: "Gastos Anuais por Processo",
  },

  {
    value: "testeLinha",
    label: "Exemplo de gráfico de linha",
  },

  {
    value: "vazio",
    label: "--- Selecione uma opção ---",
  },
];
