const { NOMEM } = require("sqlite3");

console.log(typeof console);

const obj1 = {}
obj1.nome = 'bola';
//obj1 ['nome'] = 'bola2';
console.log(obj1.nome);
//console.log(obj1['nome']);

function obj(nome) {
    this.nome = nome// o uso do this torna publico  obj e o parametro nome pode ser atribuido vários valores fora
}

const obj2 = new obj('carro');
const obj3 = new obj('moto');
const obj4 = new obj('avião');
console.log(obj2.nome);
