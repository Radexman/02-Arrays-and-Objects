let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
fruits.push(berries);
x = fruits[3][1];
const allFruits = [fruits, berries];
x = allFruits[1][0];
x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object

x = Array.isArray('Hello World');
x = Array.from('12345');
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x);

let x;
const cars = ['testarossa', 'purosangue', 'sf90'];
const lamborgini = ['gallardo', 'hurican', 'aventador'];
const newArr = [...cars, ...lamborgini];
const arr = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, [11, 12]]]];
x = arr.flat(Infinity);
x = Array.isArray(cars);
x = Array.from('6789');
const q = 10;
const w = 15;
const e = 20;
x = Array.of(q, w, e);

console.log(x);
