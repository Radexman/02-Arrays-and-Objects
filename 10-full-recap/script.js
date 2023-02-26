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

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// const allFruits = [fruits, berries];

// x = allFruits[1][0];

// x = fruits.concat(berries);

// const allFruits = [...fruits, ...berries];

// x = allFruits;

// const arr = [1, 2, [3, 4], 5, [6, 7], 8];

// console.log(arr.flat());

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.unshift(0);
// arr.reverse();

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// const arr3 = [...arr1, ...arr2];
// arr3.splice(4, 1);
// console.log(arr3);

// const person = {
// 	name: 'John Doe',
// 	age: 30,
// 	isAdmin: true,
// 	address: {
// 		street: '123 Main st',
// 		city: 'Boston',
// 		state: 'MA',
// 	},
// 	hobbies: ['music', 'sports'],
// };

// x = person.name;
// x = person['age'];
// x = person.address.state;
// x = person.hobbies[0];
// person.name = 'Jane Doe';
// person['isAdmin'] = false;
// delete person.age;
// person.hasChildern = true;
// person.greet = function () {
// 	console.log(`Hello, my name is ${this.name}`);
// };
// person.greet();
// const person2 = {
// 	'first name': 'Brad',
// 	'last name': 'Traversy',
// };

// console.log(person2);

const todo = new Object();
todo.id = 1;
(todo.name = 'Buy milk'), (todo.compleated = false);
x = todo;

const person = {
	address: {
		coords: {
			lat: 42.7463,
			lng: -71.6354,
		},
	},
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
	{ id: 1, name: 'Buy milk' },
	{ id: 2, name: 'Take out trash' },
	{ id: 3, name: 'Wash the car' },
];

x = todos[0].name;

x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty('age');

console.log(x);
