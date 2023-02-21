let x;
const array = [1, 34, 55, 95, 15];
array.push(100);
array.unshift(1);
x = array.includes(70);
x = array.indexOf(340);
x = array.slice(1, 4);
x = array.splice(3, 1);
x = array.splice(1, 4).reverse().toString().charAt(0);
console.log(x);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.pop();
numbers.unshift(0);
numbers.shift();
// numbers.reverse();
x = numbers.includes(7);
x = numbers.indexOf(1);
x = numbers.toString();
x = numbers.join();
const newArr = numbers.splice(1, 1);

console.log(newArr, numbers);
