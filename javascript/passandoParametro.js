// passandoParametro.js
// Função que recebe múltiplos nomes e retorna saudações personalizadas
module.exports = function (...nomes) {// Retorna uma saudação personalizada para cada nome
    return nomes.map(nome => `Boa semana ${nome}!`);// Exemplo de uso da função
}