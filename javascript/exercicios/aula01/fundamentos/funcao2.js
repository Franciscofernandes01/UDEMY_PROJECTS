//armazena uma funcao de uma variavel
const imprimirSoma = function(a,b){
    console.log(a+b);
}

imprimirSoma(2,3);

//armazena uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a+b;
}

console.log(2,3);

//retorna implicito

const subtracao = (a,b) => a-b
console.log(subtracao(2,3));

const imprimir2 = a => console.log(a)
imprimir2('legall!!');