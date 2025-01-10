// desafio 1

function calcularSoma(indice) {
  let soma = 0;
  let k = 0;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  return soma;
}

const resultado = calcularSoma(13);
console.log(resultado);

// desafio 2

function isFibonacci(numero) {
  let a = 0;
  let b = 1;

  if (num === a || num === b) return true;

  let next = a + b;
  while (next <= num) {
    if (next === num) return true;
    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

const numero = 21;
if (isFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

// desafio 3

function analisarFaturamento(faturamento) {
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