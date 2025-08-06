const porta = 3003;

const express = require('express');
const app = express();
app.use(express.json());

const database = require('../bandoDados');


app.get('/produtos', (req, res) => {
    res.send(database.getProdutos());
})

app.get('/produtos/:id', (req, res) => {
    res.send(database.getProduto(req.params.id));
})

app.post('/produtos', (req, res) => {
    console.log("Requisição recebida com sucesso!", req.body);
    const produto = database.salvarProduto({
        nome:req.body.name,// Changed 'name' to 'nome' to match the database structure
        preco:req.body.preco});// Changed 'price' to 'preco' to match the database structure
    res.send(`O produto ${produto.nome} foi salvo com sucesso!`);// Changed the response to include the product name
});


app.delete('/produtos/:id', (req, res, next) => {
    const produto = database.excluirProdutos(req.params.id);
    res.send(produto);
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
});
// The middlewares are executed in sequence, modifying the context object.