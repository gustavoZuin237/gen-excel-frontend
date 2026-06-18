import { useState } from "react";

import * as s from "./styles";

import { importSpreadsheet } from "@shared/services/api/importFile";

import { FileInput } from "@components/FileInput";
import { Input } from "@components/Input";
import { PageContainer } from "@components/PageContainer";

import type { NormalizedRow } from "@shared/types/rowFormats";

import { flexRender } from "@tanstack/react-table";

import toast from "react-hot-toast";

import { useSearch } from "@shared/hooks/useSearch";

export function Search() {
  const [importedSheet, setImportedSheet] = useState<NormalizedRow[]>([]);

  const {
    globalFilter,
    setGlobalFilter,
    fornecedorFilter,
    setFornecedorFilter,
    secretariaFilter,
    setSecretariaFilter,
    table,
  } = useSearch(importedSheet);

  async function handleFileUpload(file: File) {
    try {
      if (!file) return;

      const results = await importSpreadsheet(file);

      setImportedSheet(results.rows);
    } catch {
      toast.error("Falha na importação do arquivo");
    }
  }

  return (
    <PageContainer title="Pesquisa">
      <s.ImportContainer>
        <FileInput onChange={handleFileUpload} />
      </s.ImportContainer>

      <s.SearchFieldsContainer>
        <Input
          value={secretariaFilter}
          onChange={(e) => setSecretariaFilter(e.target.value)}
          placeholder="Pesquisar por secretaria..."
        />

        <Input
          value={fornecedorFilter}
          onChange={(e) => setFornecedorFilter(e.target.value)}
          placeholder="Pesquisar por fornecedor..."
        />

        <Input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Pesquisar dados gerais..."
        />
      </s.SearchFieldsContainer>

      {importedSheet.length == 0 ? (
        <s.NoSheetMessage>Importe um arquivo para pesquisar</s.NoSheetMessage>
      ) : (
        <s.TableWrapper>
          <s.StyledTable>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <s.StyledTableHeader key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </s.StyledTableHeader>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <s.StyledTableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </s.StyledTableCell>
                  ))}
                </tr>
              ))}
            </tbody>
          </s.StyledTable>
        </s.TableWrapper>
      )}
    </PageContainer>
  );
}
