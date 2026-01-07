const resultadoNota = function(nota){
    switch (Math.floor(nota)){
        case 10://por ter a mesma ação, podemos agrupar os cases
        case 9://se for 9 ou 10
            console.log("Quadro de Honra com " + nota);
            break;
        case 8: case 7://se for 7 ou 8
            console.log("Aprovado com " + nota);
            break;
        case 6: case 5: case 4://se for 4, 5 ou 6
            console.log("Recuperação com " + nota);
            break;
        case 3: case 2: case 1: case 0://se for 0, 1, 2 ou 3
            console.log("Reprovado com " + nota);
            break;
        default://se não for nenhum dos casos acima
            console.log("Valor inválido: " + nota);
    }
}

resultadoNota(10);
resultadoNota(8.2);
resultadoNota(6);
resultadoNota(3);
resultadoNota(-1);
resultadoNota(11);