const numeros = [1,2,3,4,5];//crio um array com os valores de 1 a 5

for (let numeral in numeros){ //crio o laço for in, inicializo a variável numeral que vai receber os índices do array
    console.log(numeral, numeros[numeral]);//imprimo o índice e o valor do array na posição do índice
}


const pessoa = {//crio um objeto pessoa
    nome: 'Ana',
    idade: 25,
    cidade: 'São Paulo'
}

for (let atributo in pessoa){//crio o laço for in, inicializo a variável atributo que vai receber os atributos do objeto
    console.log(pessoa[atributo]);
}

console.log(pessoa.cidade);//imprimo o valor do atributo cidade do objeto pessoa