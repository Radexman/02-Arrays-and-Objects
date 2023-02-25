let x;

// Array Literal
// const numbers = [12, 43, 432, 85, 23, 60];
// const mixed = [14, 'Hello', false];

// Array Constructor
// const strings = new Array('apple', 'grape', 'orange');

// x = numbers[0] + numbers[3];
// x = `My favorite froot is ${strings[0]}`;
// x = numbers.length;
// x = strings[1] = 'pear';
// strings[3] = 'strawberry';
// strings[strings.length] = 'blueberry';
// console.log(strings);

// const arr = [25, 54, 23, 76, 23, 96];
// arr.push(100);
// arr.pop();
// arr.unshift(99);
// arr.shift();
// arr.reverse();
// x = arr.includes(23);
// x = arr.indexOf(100);
// x = arr.slice(1, 4);
// x = arr.splice(2, 1);
// x = arr.splice(1, 4).reverse().toString().charAt(0);

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// const allFruits = [fruits, berries];

// x = allFruits[1][0];

x = fruits.concat(berries);

const allFruits = [...fruits, ...berries];

x = allFruits;

const arr = [1, 2, [3, 4], 5, [6, 7], 8];

console.log(arr.flat());
