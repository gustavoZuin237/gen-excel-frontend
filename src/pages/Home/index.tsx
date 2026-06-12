import { useRef, useState } from "react";

import * as s from "./styles";

import { FormFields } from "@components/FormFields/FormFields";
import { Button } from "@components/Button";
import { PageContainer } from "@components/PageContainer";
import {
  FileNameDialog,
  type FileNameDialogHandle,
} from "@components/FileNameDialog";

import { useContractForm } from "@shared/hooks/useContractForm";

import { exportSpreadsheet } from "@shared/services/api/exportFile";
import { importSpreadsheet } from "@shared/services/api/importFile";

import type { NormalizedRow } from "@shared/types/rowFormats";

import toast from "react-hot-toast";

import { mockForm } from "@shared/utils/form/mockForm";

export function Home() {
  const [debugIterator, setDebugIterator] = useState(1);

  const {
    rows,
    setRows,
    control,
    handleSubmit,
    reset,
    errors,
    valorTotalAnualDisplay,
    allRequiredFilled,
    handleChange,
    onValidSubmit,
  } = useContractForm();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<FileNameDialogHandle>(null);

  const pendingMergedRowsRef = useRef<NormalizedRow[] | null>(null);

  async function handleAppendFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const existingData = await importSpreadsheet(file);

      const mergedRows = [...existingData.rows, ...rows];

      pendingMergedRowsRef.current = mergedRows;
      dialogRef.current?.showModal();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar planilha.");
    }

    event.target.value = "";
  }

  function handleCreateNewFile() {
    if (!rows.length) {
      toast.error("Nenhuma linha para exportar");
      return;
    }

    dialogRef.current?.showModal();
  }

  function handleExport(fileName: string) {
    if (pendingMergedRowsRef.current) {
      exportSpreadsheet(fileName, pendingMergedRowsRef.current);
      pendingMergedRowsRef.current = null;
      setRows([]);
    } else {
      exportSpreadsheet(fileName, rows);
      setRows([]);
    }
    toast.success("Planilha exportada com sucesso!");
  }

  function save() {
    if (!rows.length) {
      toast.error("Nenhuma linha para exportar");
      return;
    }

    fileInputRef.current?.click();
  }

  function debugForm() {
    setRows([...rows, mockForm(debugIterator)]);
    setDebugIterator(debugIterator + 1);
  }

  return (
    <PageContainer title="Registro de Contratos">
      <s.InputContainer onSubmit={handleSubmit(onValidSubmit)} noValidate>
        <FormFields
          control={control}
          errors={errors}
          valorTotalAnualDisplay={valorTotalAnualDisplay}
          onFieldChange={handleChange}
        />

        <s.ButtonContainer>
          <Button type="submit" variant="primary" disabled={!allRequiredFilled}>
            Adicionar linha
          </Button>
          <Button
            type="button"
            variant="secondary"
            disabled={rows.length === 0}
            onClick={handleCreateNewFile}
          >
            Novo arquivo
          </Button>
          <Button
            type="button"
            variant="secondary"
            disabled={rows.length === 0}
            onClick={save}
          >
            Atualizar arquivo
          </Button>
          <Button type="button" variant="danger" onClick={() => reset()}>
            Limpar formulário
          </Button>

          {import.meta.env.DEV && (
            <Button type="button" variant="ghost" onClick={() => debugForm()}>
              DEBUG
            </Button>
          )}
        </s.ButtonContainer>
      </s.InputContainer>

      {rows.length > 0 && (
        <s.RowCount>
          {rows.length}{" "}
          {rows.length === 1 ? "linha adicionada" : "linhas adicionadas"}
          <Button
            variant="danger"
            onClick={() => {
              setRows([]);
            }}
          >
            Limpar linhas adicionadas
          </Button>
        </s.RowCount>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx,.xls"
        style={{ display: "none" }}
        onChange={handleAppendFile}
      />

      <FileNameDialog
        ref={dialogRef}
        onConfirm={handleExport}
        onCancel={() => {}}
      />
    </PageContainer>
  );
}
