// File: javascript/node/exportar.js
// exportando variaveis usando diferentes formas
// 1. this
// 2. exports
// 3. module.exports

this.a = 1;
exports.b = 2;
module.exports.c = 3;

console.log(this.a);
console.log(exports.b);
console.log(module.exports.c);

//module.exports = {
   // nome:"teste"
//}