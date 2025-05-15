const faturamentoMensalPorEstado = require('./Atividade_4.json')

function calcularPercentualFaturamento(faturamentoPorEstado) {
  let totalFaturamento = 0;

  for (const estado in faturamentoPorEstado) {
    totalFaturamento += faturamentoPorEstado[estado];
  }

  const percentuais = {};

  for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
    percentuais[estado] = parseFloat(percentual.toFixed(2));
  }

  return percentuais;
}

const percentuaisDeRepresentacao = calcularPercentualFaturamento(faturamentoMensalPorEstado);
console.log(percentuaisDeRepresentacao)