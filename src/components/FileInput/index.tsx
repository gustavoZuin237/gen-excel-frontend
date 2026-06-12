import { useRef, useState } from "react";

import * as s from "./styles";

import { Button } from "@components/Button";

interface Props {
  onChange: (arg0: File) => void;
}

export function FileInput({ onChange }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <s.FileImportContainer>
      <input
        ref={inputRef}
        type="file"
        accept=".xlsx,.xls"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFileName(file.name);
            onChange(file);
          }
        }}
        style={{
          display: "none",
        }}
      />

      <s.FileNameLabel>
        {fileName ?? "Nenhum arquivo selecionado"}
      </s.FileNameLabel>

      <Button onClick={() => inputRef.current?.click()}>
        Importar arquivo
      </Button>
    </s.FileImportContainer>
  );
}
