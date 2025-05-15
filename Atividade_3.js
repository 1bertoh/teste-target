const vendasMes = require("./Atividade_3.json");

function analisarFaturamento(faturamentoDiario) {
  if (!faturamentoDiario || faturamentoDiario.length === 0) {
    return {
      menorFaturamento: 0,
      maiorFaturamento: 0,
      diasAcimaDaMedia: 0,
    };
  }

  let menorFaturamento = null;
  let maiorFaturamento = null;
  let somaFaturamento = 0;
  let diasFaturamentoValido = 0;

  // Encontra o primeiro dia com faturamento válido para inicializar menorFaturamento e maiorFaturamento
  for (const dia of faturamentoDiario) {
    if (dia.valor > 0) {
      menorFaturamento = dia.valor;
      maiorFaturamento = dia.valor;
      somaFaturamento += dia.valor;
      diasFaturamentoValido++;
      break; // Já encontramos o primeiro valor válido, podemos sair do loop
    }
  }

  // Se não houver dias com faturamento válido
  if (menorFaturamento === null) {
    return {
      menorFaturamento: 0,
      maiorFaturamento: 0,
      diasAcimaDaMedia: 0,
    };
  }

  // Continua a análise a partir do segundo dia (se houver)
  for (let i = 1; i < faturamentoDiario.length; i++) {
    const dia = faturamentoDiario[i];
    if (dia.valor > 0) {
      somaFaturamento += dia.valor;
      diasFaturamentoValido++;
      if (dia.valor < menorFaturamento) {
        menorFaturamento = dia.valor;
      }
      if (dia.valor > maiorFaturamento) {
        maiorFaturamento = dia.valor;
      }
    }
  }
  console.log(diasFaturamentoValido, 'dias validos')

  const mediaMensal = diasFaturamentoValido > 0 ? somaFaturamento / diasFaturamentoValido : 0;
  let diasAcimaDaMedia = 0;

  for (const dia of faturamentoDiario) {
    if (dia.valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorFaturamento: menorFaturamento,
    maiorFaturamento: maiorFaturamento,
    diasAcimaDaMedia: diasAcimaDaMedia,
  };
}

const resultados = analisarFaturamento(vendasMes);
console.log(resultados)
