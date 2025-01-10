// desafio 1

export function calcularSoma(indice) {
  let soma = 0;
  let k = 0;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  return soma;
}


// desafio 2

export function isFibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === a || numero === b) return true;

  let next = a + b;
  while (next <= numero) {
    if (next === numero) return true;
    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

// desafio 3

/*
*   Obj faturamento -
*    [{
*     "dia": 1,
*     "valor": 22174.1664
* }]
*
* Array de objetos, que possuem duas chaves valores, sendo seus valores números
*
*
* */

export function analisarFaturamento(faturamento) {
  const diasValidos = faturamento.filter(dia => dia.valor > 0);

  const menorFaturamento = Math.min(...diasValidos.map(dia => dia.valor));
  const maiorFaturamento = Math.max(...diasValidos.map(dia => dia.valor));

  const somaFaturamento = diasValidos.reduce((soma, dia) => soma + dia.valor, 0);
  const mediaMensal = somaFaturamento / diasValidos.length;

  const diasAcimaMedia = diasValidos.filter(dia => dia.valor > mediaMensal).length;

  return {
    menorFaturamento: menorFaturamento.toFixed(2),
    maiorFaturamento: maiorFaturamento.toFixed(2),
    diasAcimaMedia
  };
}

// desafio 4

export function calcularParticipacaoFaturamento(faturamentoPorEstado) {
  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce(
    (total, valor) => total + valor,
    0
  );

  const participacaoPorEstado = {};
  for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
    participacaoPorEstado[estado] = ((valor / faturamentoTotal) * 100).toFixed(2) + '%';
  }

  return {
    faturamentoTotal: faturamentoTotal.toFixed(2),
    participacaoPorEstado,
  };
}

// desafio 5

export function inverterString(string) {
  let stringInvertida = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  return stringInvertida;
}