let x;

// Array Literal
const numbers = [12, 43, 432, 85, 23, 60];
const mixed = [14, 'Hello', false];

// Array Constructor
const strings = new Array('apple', 'grape', 'orange');

x = numbers[0] + numbers[3];
x = `My favorite froot is ${strings[0]}`;
x = numbers.length;
x = strings[1] = 'pear';
strings[3] = 'strawberry';
strings[strings.length] = 'blueberry';
console.log(strings);
