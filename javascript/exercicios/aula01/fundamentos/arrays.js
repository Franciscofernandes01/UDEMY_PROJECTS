const valores = [7.7, 8.9, 6.3, 9.2];/*dados dinâmicos, ordena os valores do primeiro até o indice selecionado, começando no 0,1,2..*/
console.log(valores[0], valores[3]);
console.log(valores[4]);//se tentar retornar um indice que não existe ele retorna undefined

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');//tira um valor o método push
console.log(valores);

console.log(valores.pop());
delete valores[0];//exclui um elemento o delete
console.log(valores);

console.log(typeof valores);//todo array é do tipo objeto