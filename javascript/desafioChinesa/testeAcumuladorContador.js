
//ACUMULADOR
const n = [2,3,4,5,6,7,8,9,10];


const acumulador = n.reduce((atual, comparacao) => {
    return atual < comparacao ? atual : comparacao; // Retorna o menor valor
});

console.log(acumulador); // Exibe o menor valor encontrado


//CONTADOR

// Chama a função 10 vezes para contar até 10
const incrementarContador = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i); // Exibe o contador de 1 até 10
    }
};

incrementarContador();
