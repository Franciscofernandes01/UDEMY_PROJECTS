//Number.prototype.entre = function(inicio, fim) { // Criação do método entre para verificar se um número está entre dois valores
    //return this >= inicio && this <= fim;// true ou false
//}

//const verificarValor = function(valor) { // Função para verificar o valor e imprimir a mensagem correspondente
    //if (valor.entre(9, 10)) {
       // console.log("Quadro de Honra com " + valor);
   // } else if (valor.entre(7, 8.9)) {
      //  console.log("Aprovado com " + valor);
   // } else if ( valor.entre(4, 6.9)) {
    //    console.log("Recuperação com " + valor);
    //} else if (valor.entre(0, 3.9)) {
      //  console.log("Reprovado com " + valor);
    //} else {
      //  console.log("Valor inválido: " + valor);
   // }

//console.log("Fim!");
//}

//verificarValor(10);
//verificarValor(8);
//verificarValor(6);
//verificarValor(-1);
//verificarValor(11);

Number.prototype.entre = function(inicio,fim){ //criando o método "entre" para todos os números, e atribuindo a função um inicio e fim
    return this >= inicio && this <= fim; // retornando true ou false se o número está entre o inicio e o fim
}

const verificaValor = function(valor){ // função para verificar o valor
    if(valor.entre(9,10)){ // se o valor estiver entre 9 e 10
        console.log("Quadro de Honra com " + valor);
    } else if(valor.entre(7,8.9)){
        console.log("Aprovado com " + valor);
    }else{
        console.log('número inválido: ' + valor);
    }
}

verificaValor(10); // chamando a função com o valor 10
verificaValor(6); // chamando a função com o valor 8