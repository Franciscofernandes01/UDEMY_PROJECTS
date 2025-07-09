// File: javascript/node/exportarCliente.js
// Importando o módulo 'clientes' que foi exportado no arquivo 'exportar.js'
// e acessando as propriedades 'a', 'b' e 'c' exportadas por ele.
const clientes = require('./exportar.js')

console.log(clientes.a);
console.log(clientes.b);
console.log(clientes.c);

console.log(clientes.nome);