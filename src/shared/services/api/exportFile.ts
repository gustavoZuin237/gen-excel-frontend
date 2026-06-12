import { API_URL } from "./index";
import type { NormalizedRow } from "@shared/types/rowFormats.js";

export async function exportSpreadsheet(
  fileName: string,
  rows: NormalizedRow[]
) {
  const flattenedRows = rows.flat()

  const response = await fetch(
    `${API_URL}/spreadsheets/export`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName,
        rows: flattenedRows,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to export spreadsheet");
  }

  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);

  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = `${fileName}.xlsx`;

  document.body.appendChild(anchor);

  anchor.click();

  anchor.remove();

  window.URL.revokeObjectURL(url);
}