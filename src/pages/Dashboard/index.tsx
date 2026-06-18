import { useState } from "react";

import * as s from "./styles";

import { importSpreadsheet } from "@shared/services/api/importFile";
import { formatChartData } from "@shared/utils/charts/formatChartData";

import { FileInput } from "@components/FileInput";
import { ChartRenderer } from "@components/ChartRenderer";
import { Dropdown } from "@components/Dropdown";
import { PageContainer } from "@components/PageContainer";

import type { NormalizedRow } from "@shared/types/rowFormats";

import { chartPresetOptionList } from "@shared/data/chartPresets";

import toast from "react-hot-toast";

export function Dashboard() {
  const [importedSheet, setImportedSheet] = useState<NormalizedRow[]>([]);
  const [selectedPreset, setSelectedPreset] = useState("vazio");

  async function handleFileUpload(file: File) {
    try {
      if (!file) return;

      let results;

      results = await importSpreadsheet(file);

      const chartData = formatChartData(results.rows);

      setImportedSheet(chartData);
    } catch {
      toast.error("Falha na importação do arquivo");
      return;
    }
  }

  return (
    <PageContainer title="Gráficos">
      <s.ImportContainer>
        <FileInput onChange={handleFileUpload} />
      </s.ImportContainer>

      <Dropdown
        options={chartPresetOptionList}
        value={selectedPreset.toString()}
        onChange={setSelectedPreset}
      />

      <ChartRenderer chartData={importedSheet} preset={selectedPreset} />
    </PageContainer>
  );
}
