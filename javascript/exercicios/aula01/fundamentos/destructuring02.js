const [a] = [10];
console.log(a); // 10

const[n1, , n3, n4,n5 =0] = [10, 30, 40];
console.log(n1, n3, n4, n5); // 10 30

// desestruturação de arrays
const numeros = [1, 2, 3, 4, 5,6];
const [primeiro, segundo, ...resto] = numeros;
console.log(resto); // 1