import type { NormalizedRow } from "@shared/types/rowFormats.js";

export interface ExportSpreadsheetBody {
  fileName: string;
  rows: NormalizedRow[];
}
