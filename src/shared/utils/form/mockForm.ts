export function mockForm(iterator: number) {
  const MOCK_FORM = {
    secretaria: `Secretaria de Teste ${iterator}`,
    orgao: "10.10.10",
    numeroProcesso: `${iterator}/${iterator < 10 ? `0${iterator}` : iterator}`,
    tipoContrato: `abc ${iterator < 10 ? iterator * 10 : iterator}/${iterator < 10 ? `0${iterator}` : iterator}`,
    fornecedor: `Fornecedor de Teste ${iterator}`,
    objetoContrato: `Objeto de Teste ${iterator}`,
    ficha: "1234",
    dotacaoOrcamentaria: "101010.1010.10.10.101.0101.0101",
    fonte: `${iterator < 10 ? iterator * 10 : iterator}`,
    codigoAplicacao: "1234567",
    quantidadeProduto: "1 Produto de Teste",
    dataInicio: new Date(2001, 10, 10),
    dataVencimento: new Date(2001, 10, 10),
    dataPagamento: new Date(2021, 0),
    prazoMeses: 12,
    valorTotalContrato: 1000 * iterator,
    valorMensal: 1000,
    valorAnual: 1000 * iterator,
    reajusteAnual: 1000 * iterator,
    aditivoAnual: 1000 * iterator,
    supressaoAnual: 1000 * iterator,
    valorTotalAnual: 0,
    gestorContrato: `Gestor de Teste ${iterator}`,
    alterador: `Responsável de Teste ${iterator}`,
    observacao: `Observação de Teste ${iterator}`,
    valor2024: 1000,
    valor2025: 1000,
    valor2026: 1000,
    valor2027: 1000,
    valor2028: 1000,
    valor2029: 1000,
    dataExportacao: new Date(2021, 0),
  };

  MOCK_FORM.valorTotalAnual =
    MOCK_FORM.valorAnual +
    MOCK_FORM.reajusteAnual +
    MOCK_FORM.aditivoAnual -
    MOCK_FORM.supressaoAnual;

  return MOCK_FORM;
}
