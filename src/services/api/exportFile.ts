import { VITE_API_URL } from "./index";
import type { NormalizedRow } from "@shared/types/rowFormats.js";

export async function exportSpreadsheet(
  fileName: string,
  rows: NormalizedRow[]
) {
  if (!fileName || !rows) {
    throw new Error("Falha na exportação de arquivo");
  }

  const flattenedRows = rows.flat();

  const response = await fetch(`${VITE_API_URL}/spreadsheets/export`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileName,
      rows: flattenedRows,
    }),
  });

  if (!response.ok) {
    throw new Error("Falha na exportação de arquivo");
  } else {
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
}
