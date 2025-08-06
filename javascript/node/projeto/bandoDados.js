const sequence = {
    _id: 1,
    get id() { return this._id++; }
};

const produtos = {};

function salvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequence.id;
    }
    produtos[produto.id] = produto;
    return produto;
}


function getProduto(id){
    return produtos[id] || {};
}

function getProdutos() {
    return Object.values(produtos);
}

function excluirProdutos(id){
    delete produtos[id];
    return produtos;
}



//console.log(salvarProduto({ nome: 'Notebook', preco: 2199.49 }));
//console.log(salvarProduto({ nome: 'Celular', preco: 1199.99 }));
//console.log(produtos[3]);
//console.log(getProduto(1));
//console.log(excluirProdutos(1));
//console.log(getProdutos());


module.exports = {
    salvarProduto, 
    getProduto,
    getProdutos,
    excluirProdutos
};