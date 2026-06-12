import type { NormalizedRow } from "@shared/types/rowFormats";

import { parseDate } from "@shared/utils/dates/parseDate";
import { parseNumber } from "@shared/utils/parsing/parseNumber";
import { parseCurrency } from "@shared/utils/currency/parseCurrency";

export function formatChartData(rows: NormalizedRow[]) {
  const chartData = rows.map((row) => ({
    ...row,
    valorTotalContrato: parseCurrency(row.valorTotalContrato),
    valorMensal: parseCurrency(row.valorMensal),
    valor2024: parseCurrency(row.valor2024),
    valor2025: parseCurrency(row.valor2025),
    valor2026: parseCurrency(row.valor2026),
    valor2027: parseCurrency(row.valor2027),
    valor2028: parseCurrency(row.valor2028),
    valor2029: parseCurrency(row.valor2029),
    valorAnual: parseCurrency(row.valorAnual),
    reajusteAnual: parseCurrency(row.reajusteAnual),
    aditivoAnual: parseCurrency(row.aditivoAnual),
    supressaoAnual: parseCurrency(row.supressaoAnual),
    valorTotalAnual: parseCurrency(row.valorTotalAnual),

    prazoMeses: parseNumber(row.prazoMeses),

    dataInicio: parseDate(row.dataInicio),
    dataTermino: parseDate(row.dataVencimento),
    dataPagamento: parseDate(row.dataPagamento),
  }));

  return chartData;
}
