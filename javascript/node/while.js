/*//while equivale a "enquanto", ou seja, enquanto uma condição for verdadeira, o bloco de código será executado

function contagem (max, min){//função que realiza a contagem de um número máximo até um número mínimo
    const valor = Math.random() * (max - min) + min; //gerando um número aleatório entre o valor máximo e mínimo
    return Math.floor(valor); //arredondando para baixo o número gerado
}

let opcao = 0; //inicializando a variável opção com 0

while(opcao != -1){
    opcao = contagem(-1, 10); //atribuindo a variavel opção o intervalo entre -1 e 10
    console.log(`número válido escolhido : ${opcao}`); //imprimindo o valor da variável opção
}
console.log("Fim!"); //imprimindo "Fim!" quando o laço while terminar*/




/*function contagem(min,max){//crio a função e passo os parametros min e max
    const valor = Math.random() * (max - min) + min;//essa linha gera o numero aleatório entre o valor máximo e mínimo
    return Math.floor(valor);//essa linha pega o valor gerado e arredonda para baixo
}

let opcao = 0;//inicializo a variável opção com 0


while (opcao != -1){
    opcao = contagem(-1,10);//chamo a função contagem com os valores -1 e 10
    console.log(`número válido escolhido: ${opcao}`);//imprimo o valor da variável opção
}*/


function loteria(min,max){//crio a função e passo os parametros min e max
    const numero = Math.random() * (max - min) + min;//essa linha gera o numero aleatório entre o valor máximo e mínimo
    return Math.floor(numero);//essa linha pega o valor gerado e arredonda para baixo
}


for(let i = 0; i < 6; i++){
    console.log(`número válido sorteado: ${loteria(1,60)}`);



