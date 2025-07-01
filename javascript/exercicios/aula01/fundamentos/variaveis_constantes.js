var a = 3;
let b = 4;

var a = 30;/*em var declarar novamente ele entende que é um novo valor*/
b = 400;/*em let se colocar let b ele entende que está criando outra variavel com o mesmo nome, e ocorre um erro*/

console.log(a, b);

const c = 5;
/*c = 10;não pode atribuir um novo valor pois é uma constante*/
console.log(c);