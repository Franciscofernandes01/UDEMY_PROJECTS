const [a, b, c, d] = [10, 20, 30, 40];

const soma = a + b + c + d;
const subtracao = a - b ;
const multiplicacao =  b * c * d;
const divisao = a /  c / d;
const modulo = a % b % c % d;

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${-divisao}`);// add o (-) deixando negativo, operador nário
console.log(`Módulo: ${modulo}`);