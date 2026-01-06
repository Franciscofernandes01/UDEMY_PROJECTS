function noticiaBoa(noticia){
    if(noticia >=7){
        console.log("Aprovado com " + noticia);
    }
}

noticiaBoa(8);
noticiaBoa(6);

function verificaValor(valor){
    if(valor){
        console.log('é verdadeiro..' + valor);
    }
}

verificaValor(1);// vai imprimir pq é true
verificaValor('');// não vai imprimir nada pq é false