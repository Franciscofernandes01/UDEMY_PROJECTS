let a = 5;
let b = 97;

console.log("A vale: " + a);
console.log("B vale: " + b);

//let temp = a;
//temp2 = b;
//b = temp;
//a = temp2;
//console.log("A agora vale " + a);
//console.log("B agora vale " + b);

[ a, b] = [b, a] // forma de fazer substituição sem criação de variável

console.log("A agora vale " + a);
console.log("B agora vale " + b);