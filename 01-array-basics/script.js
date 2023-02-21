let x;

// Array literal
const numbers = [12, 53, 24, 96, 53];
const mixed = [100, 'House', false, null];

// Array constructor
const fruits = new Array('apple', 'peach', 'banana', 'apricoot', 'pineapple', 'grape');

x = numbers[0] + numbers[1];
x = `${fruits[0]}s and ${fruits[3]}s are some of my favorite fruits`;
x = `My favorite number is ${numbers[0]} and my fav fruit is ${fruits[0]}`;
x = fruits.length;
fruits[5] = 'pear';
// fruits.length = 2;
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'orange';
fruits.push('peach');
console.log(x, typeof x, fruits);
