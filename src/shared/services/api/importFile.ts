import { API_URL } from "./index";

export async function importSpreadsheet(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_URL}/spreadsheets/import`, {
    method: "POST",
    body: formData,
  });

  return response.json();
}

export async function importMultipleSpreadsheets(
  files: FileList
) {
  const filesArray = Array.from(files)

  const results = await Promise.all(
    filesArray.map((file) => importSpreadsheet(file))
  );

  return results
}