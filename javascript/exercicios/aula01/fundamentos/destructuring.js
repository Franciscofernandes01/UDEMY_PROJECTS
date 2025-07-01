// Desestruturação de objetos
const pessoa = {
    nome:"francisco",
    idade:"24",
    profissao:"programador",
    endereco: {
        rua: "Rua 1",
        numero: 123,   
        cidade: "Pau dos ferros"
    }
}   

console.log(pessoa.nome); // "francisco"
console.log(pessoa.idade); // "24" 
console.log(pessoa.profissao); // "programador"
console.log(pessoa.endereco.cidade); // "Rua 1"

const { nome, idadde} = pessoa; // Desestruturação
console.log(nome, idade); // "francisco" "24"

const{nome: name, idade: age} = pessoa; // Renomeando variáveis
console.log(name, age); // "francisco" "24"