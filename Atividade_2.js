function verificarFibonacci(numero) {
  let a = 0;
  let b = 1;
  let sequencia = [a, b];

  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
    sequencia.push(b);
  }

  if (sequencia.includes(numero)) {
    return `O número ${numero} pertence à sequência de Fibonacci: ${sequencia.join(', ')}`;
  } else {
    return `O número ${numero} não pertence à sequência de Fibonacci: ${sequencia.join(', ')}`;
  }
}

console.log(verificarFibonacci(9))