import { z } from "zod";

import {
  type FieldConfig,
  REGEX,
  requiredString,
  optionalString,
  sanitize,
} from "@shared/types/fieldConfiguration";

export const FIELDS: Record<string, FieldConfig> = {
  secretaria: {
    label: "Secretaria",
    placeholder: "Nome da secretaria",
    type: "text",
    required: true,
    regex: REGEX.freeText,
    schema: requiredString(
      z.string().regex(REGEX.freeText, "Preencha o nome da secretaria")
    ),
    sanitize: sanitize.none,
  },

  orgao: {
    label: "Órgão",
    placeholder: "xx.xx.xx",
    type: "masked",
    mask: "orgao",
    required: true,
    regex: REGEX.orgao,
    schema: requiredString(
      z.string().regex(REGEX.orgao, "Formato esperado: xx.xx.xx")
    ),
    sanitize: sanitize.maskedNumeric,
  },

  numeroProcesso: {
    label: "N° do Processo",
    placeholder: "xxxxxx/xx",
    type: "masked",
    mask: "processo",
    required: true,
    regex: REGEX.processo,
    schema: requiredString(
      z.string().regex(REGEX.processo, "Formato esperado: xxxxxx/xx")
    ),
    sanitize: sanitize.processoChars,
  },

  tipoContrato: {
    label: "Tipo do contrato",
    placeholder: "tipo número/ano",
    type: "masked",
    mask: "contrato",
    required: true,
    regex: REGEX.contrato,
    schema: requiredString(
      z.string().regex(REGEX.contrato, "Formato esperado: nome xx/xx")
    ),
    sanitize: sanitize.contratoChars,
  },

  fornecedor: {
    label: "Fornecedor",
    placeholder: "Nome do fornecedor",
    type: "text",
    required: true,
    regex: REGEX.freeText,
    schema: requiredString(
      z.string().regex(REGEX.freeText, "Preencha o nome do fornecedor")
    ),
    sanitize: sanitize.none,
  },

  objetoContrato: {
    label: "Objeto do contrato",
    placeholder: "Descrição do objeto do contrato",
    type: "text",
    required: true,
    regex: REGEX.freeText,
    schema: requiredString(
      z.string().regex(REGEX.freeText, "Preencha o objeto do contrato")
    ),
    sanitize: sanitize.none,
  },

  ficha: {
    label: "Ficha",
    placeholder: "xxxx",
    type: "text",
    inputMode: "numeric",
    required: true,
    regex: REGEX.ficha,
    schema: requiredString(
      z.string().regex(REGEX.ficha, "Até 4 dígitos numéricos").max(4)
    ),
    sanitize: sanitize.digitsOnly,
    maxLength: 4,
  },

  dotacaoOrcamentaria: {
    label: "Dotação Orçamentária",
    placeholder: "xxxxxx.xxxx.xx.xx.xxx.xxxx.xxxx",
    type: "masked",
    mask: "dotacao",
    required: true,
    regex: REGEX.dotacao,
    schema: requiredString(
      z
        .string()
        .regex(
          REGEX.dotacao,
          "Formato esperado: xxxxxx.xxxx.xx.xx.xxx.xxxx.xxxx"
        )
    ),
    sanitize: sanitize.maskedNumeric,
  },

  fonte: {
    label: "Fonte",
    placeholder: "xx",
    type: "text",
    inputMode: "numeric",
    required: true,
    regex: REGEX.fonte,
    schema: requiredString(
      z.string().regex(REGEX.fonte, "Exatamente 2 dígitos")
    ),
    sanitize: sanitize.digitsOnly,
    maxLength: 2,
  },

  codigoAplicacao: {
    label: "Código de aplicação",
    placeholder: "xxxxxxx",
    type: "text",
    inputMode: "numeric",
    required: true,
    regex: REGEX.codAplicacao,
    schema: requiredString(
      z.string().regex(REGEX.codAplicacao, "7 dígitos numéricos")
    ),
    sanitize: sanitize.digitsOnly,
    maxLength: 7,
  },

  quantidadeProduto: {
    label: "Quantidade/Produto",
    placeholder: "Quantidade ou produto",
    type: "text",
    required: false,
    regex: REGEX.qtdProduto,
    schema: requiredString(
      z.string().regex(REGEX.qtdProduto, "Apenas letras, números e espaços")
    ),
    sanitize: sanitize.alphanumeric,
  },

  dataInicio: {
    label: "Data de Início",
    placeholder: "dd/mm/aa",
    type: "text",
    mask: "data",
    required: true,
    regex: REGEX.data,
    schema: requiredString(
      z.string().regex(REGEX.data, "Formato esperado: dd/mm/aa")
    ),
    sanitize: sanitize.dateChars,
  },

  prazoMeses: {
    label: "Prazo (em meses)",
    placeholder: "xx",
    type: "text",
    inputMode: "numeric",
    required: true,
    regex: REGEX.numeric,
    schema: requiredString(z.string().regex(REGEX.numeric, "Apenas números")),
    sanitize: sanitize.digitsOnly,
    maxLength: 2,
  },

  dataVencimento: {
    label: "Data de Término/Vencimento",
    placeholder: "dd/mm/aa",
    type: "text",
    mask: "data",
    required: true,
    regex: REGEX.data,
    schema: requiredString(
      z.string().regex(REGEX.data, "Formato esperado: dd/mm/aa")
    ),
    sanitize: sanitize.dateChars,
  },

  valorTotalContrato: {
    label: "Valor Total do Contrato",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valorMensal: {
    label: "Valor Mensal",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valor2024: {
    label: "Valor de 2024",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valor2025: {
    label: "Valor de 2025",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valor2026: {
    label: "Valor de 2026",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: true,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valor2027: {
    label: "Valor de 2027",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: true,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valor2028: {
    label: "Valor de 2028",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valor2029: {
    label: "Valor de 2029",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valorAnual: {
    label: "Valor Anual do Início do Contrato",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  reajusteAnual: {
    label: "Reajuste Anual",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  aditivoAnual: {
    label: "Aditivo Anual",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  supressaoAnual: {
    label: "Supressão Anual",
    placeholder: "xxxx,xx",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    required: false,
    regex: REGEX.dinheiro,
    schema: optionalString(
      z.string().regex(REGEX.dinheiro, "Formato esperado: 1.000,00")
    ),
    sanitize: sanitize.currency,
  },

  valorTotalAnual: {
    label: "Valor Total Anual",
    placeholder: "",
    type: "text",
    inputMode: "decimal",
    mask: "dinheiro",
    readOnly: true,
    required: false,
    sanitize: sanitize.none,
  },

  dataPagamento: {
    label: "Data de Pagamento",
    placeholder: "dd/mm/aa",
    type: "text",
    mask: "data",
    required: false,
    regex: REGEX.data,
    schema: optionalString(
      z.string().regex(REGEX.data, "Formato esperado: dd/mm/aa")
    ),
    sanitize: sanitize.dateChars,
  },

  gestorContrato: {
    label: "Gestor do contrato",
    placeholder: "Nome e sobrenome do gestor do contrato",
    type: "text",
    required: true,
    regex: REGEX.gestor,
    schema: optionalString(
      z
        .string()
        .regex(
          REGEX.gestor,
          "Formato incorreto. O formato esperado é: Nome Sobrenome"
        )
    ),
    sanitize: sanitize.none,
  },

  alterador: {
    label: "Responsável pelo Preenchimento",
    placeholder: "Nome e sobrenome do responsável pelo preenchimento",
    type: "text",
    required: true,
    regex: REGEX.gestor, // reutilized the regex and sanitization rules
    schema: optionalString(
      z
        .string()
        .regex(
          REGEX.gestor,
          "Formato incorreto. O formato esperado é: Nome Sobrenome"
        )
    ),
    sanitize: sanitize.none,
  },

  observacao: {
    label: "Observação",
    placeholder: "Observação sobre o contrato",
    type: "text",
    required: false,
    regex: REGEX.anyOrEmpty,
    schema: optionalString(z.string().regex(REGEX.anyOrEmpty, "")),
    sanitize: sanitize.none,
  },
};

export const formSchema = z.object(
  Object.fromEntries(
    Object.entries(FIELDS)
      .filter(([, config]) => config.schema !== undefined)
      .map(([name, config]) => [name, config.schema!])
  )
);

export type FormValues = z.infer<typeof formSchema>;
