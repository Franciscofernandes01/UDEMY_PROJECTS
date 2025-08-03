const fs = require('fs');// Módulo para manipulação de arquivos


const caminho = __dirname + '/arquivo.json';// Define o caminho do arquivo JSON

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8');// Lê o arquivo JSON de forma síncrona
console.log(conteudo);// Exibe o conteúdo do arquivo JSON lido de forma síncr

// Assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);// Converte o conteúdo do arquivo JSON em um objeto JavaScript
    console.log(`${config.db.host}:${config.db.port}`);// Exibe o host e a porta do banco de dados
});

const config = require('./arquivo.json');// Importa o arquivo JSON como um módulo
console.log(config.db);// Exibe o objeto de configuração do banco de dados

fs.readdir(__dirname, (err, arquivos) => {// Lê o diretório atual
    console.log('Conteúdo da pasta...');// Exibe uma mensagem indicando o conteúdo da pasta
});