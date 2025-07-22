// / Desafio: Encontrar a mulher chinesa com o menor salário
// -const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
// -const axios = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';// URL do arquivo JSON
const axios = require('axios');// Biblioteca para fazer requisições HTTP

axios.get(url).then((response) => {// Faz a requisição HTTP para obter os dados
    const cidadao = response.data;// Obtém os dados da resposta
    const mulheresChinesas = cidadao.filter((pessoa) => {// Filtra as mulheres chinesas
        return pessoa.genero === 'F' && pessoa.pais === 'China';// Verifica se o gênero é feminino e o país é China
    });
   const mulherMenorSalario = mulheresChinesas.reduce((menor, atual) => {// Compara os salários para encontrar a mulher com o menor salário
        return atual.salario < menor.salario ? atual : menor;// Retorna a mulher com o menor salário
    });
    const nomeMulherMenorSalario = mulherMenorSalario.nome;// Obtém o nome da mulher com o menor salário
    const valorSalarioMenor = mulherMenorSalario.salario;// Obtém o salário da mulher com o menor salário
    console.log(mulheresChinesas);// Exibe todas as mulheres chinesas
    console.log(`Esse é o nome da mulher com menor salário: ${nomeMulherMenorSalario}`);
    console.log(`Seu salário é de: ${valorSalarioMenor}`)// Exibe a mulher chinesa com o menor salário
});



