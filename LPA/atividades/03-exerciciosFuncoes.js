/*****************************************************
Lista de Exercícios
*****************************************************/
/*
1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.

2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o
 veículo faz uma média de 12 Km/L.
*/

// 1. Crie uma função que receba como parâmetro o ano
// de nascimento de uma pessoa a retorne sua idade.
function idade(anoAtual, anoNascimento) {
  return anoAtual - anoNascimento;
}
console.log("A pessoa tem", idade(2026, 2001), "anos.");

// 2. Crie uma função que receba a quantidade de combus-
// tível de um carro e retorne quantos Kms ele pode
// viajar com esse combustível. Considere que o
// veículo faz uma média de 12 Kms/L.
function distancia(combustivel) {
  const desempenho = 12; // 12 Kms por litro
  return combustivel * desempenho;
}
console.log("Carro 1: 20L -> Percorre", distancia(20), "Km.");
console.log("Carro 2: 8L -> Percorre", distancia(8), "Km.");
console.log("Carro 3: 2L -> Percorre", distancia(2), "Km.");
