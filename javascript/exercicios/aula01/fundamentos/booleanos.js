isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3);/*somente ! significa não (tendo os dois significa não duas vezes, ou seja o não falso)*/
console.log(!!-1);
console.log(!! ' ');
console.log(!![]);//array
console.log(!!{});//objeto
console.log(!! Infinity);
console.log(!! (isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo=false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || ''));

let nome ='francisco';
console.log(nome || 'desconhecido');
