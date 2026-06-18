import { useState } from "react";

import * as s from "./styles";

import { FormFields } from "@components/FormFields/FormFields";
import { Button } from "@components/Button";
import { PageContainer } from "@components/PageContainer";
import { FileNameDialog } from "@components/FileNameDialog";

import { useContractForm } from "../../hooks/useContractForm";
import { useFileExport } from "../../hooks/useFileExport";

import { mockForm } from "../../utils/form/mockForm";

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

  const {
    fileInputRef,
    dialogRef,
    handleAppendFile,
    handleCreateNewFile,
    handleExport,
    save,
  } = useFileExport(rows, setRows);

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
