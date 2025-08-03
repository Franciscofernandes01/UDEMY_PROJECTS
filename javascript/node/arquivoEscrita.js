const fs = require('fs');// Módulo para manipulação de arquivos

const produto = {// Define um objeto produto com propriedades
    nome: 'Celular',
    preco: 1999.90,
    desconto: 0.15
};

fs.writeFile(__dirname + '/arquivoEscrita.json', JSON.stringify(produto), (err) => {// Escreve o objeto produto em um arquivo JSON
    console.log(err || 'Arquivo salvo com sucesso!'); // Exibe mensagem de sucesso ou erro
});