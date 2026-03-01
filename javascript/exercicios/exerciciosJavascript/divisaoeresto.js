/*### 04) Divisão e Resto

Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

let dividir = function(dividendo, divisor) {
    console.log(`O resultado da divisão é: ${Math.floor(dividendo / divisor)}`);
    console.log(`O resto da divisão é: ${dividendo % divisor}`);
}

dividir(10, 3);