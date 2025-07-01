const escola = 'cod3r';

console.log(escola.charAt(4));//irá dizer qual a quarta letra
console.log(escola.charAt(5));//não encontra pois não tem uma quinta letra
console.log(escola.charCodeAt(3));//código do caractere
console.log(escola.indexOf('3'));//

console.log(escola.substring(1));//vai apartir do indice 1
console.log(escola.substring(0,3));//vai do indice 0 até o 3

console.log('escola '.concat(escola).concat(' !'));//concatenação
console.log(escola.replace(3, 'e'));//substitui os elementos mencionados

console.log('ana, pedro, maria'.split(','));//utiliza o split que usa uma string para quebrar um array