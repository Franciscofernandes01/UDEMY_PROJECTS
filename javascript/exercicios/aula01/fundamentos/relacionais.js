console.log('1' == 1); // true
console.log('1' === 1); // false
console.log('1' != 1); // false
console.log('1' !== 1); // true

console.log('1' > 2); // false
console.log('1' >= 2); // false
console.log('1' < 2); // true
console.log('1' <= 2); // true
console.log('1' > '2'); // false

const date = new Date(0);
const date2 = new Date(0);
console.log(date == date2); // false
console.log(date === date2); // false
console.log(date != date2); // true
console.log(date !== date2); // true
console.log(date.getTime() === date2.getTime()); // true
console.log(date.getTime() == date2.getTime()); // true

console.log(undefined == null); // true
console.log(undefined === null); // false