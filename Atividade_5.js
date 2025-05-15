function inverterString(str) {
  let stringInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  return stringInvertida;
}

const minhaString = "Olá, Mundo!";
const stringInvertidaResultado = inverterString(minhaString);

console.log(`String original: ${minhaString}`);
console.log(`String invertida: ${stringInvertidaResultado}`);
