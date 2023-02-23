let x;
const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.compleated = false;
x = todo;

const person = {
	address: {
		street: 'Słoneczna 15',
		city: 'Koszęcin',
		postCode: 42 - 286,
	},
};

x = person.address.city;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, obj2 };
const obj4 = Object.assign(obj1, obj2);

const todos = [
	{ id: 1, name: 'Buy Milk' },
	{ id: 2, name: 'Wash the car' },
	{ id: 3, name: 'Repair tap' },
];

x = todos[2].name;
x = Object.values(todo);
x = Object.keys(todo).length;
x = Object.entries(todo);
x = todo.hasOwnProperty('car');

console.log(x);

const todo = new Object();
todo.id = 1;
todo.title = 'Buy milk';
todo.compleated = false;

const person = {
	address: {
		coords: {
			lat: 42.3801,
			lng: -71.0589,
		},
	},
};

console.log(person.address.coords.lat);

const objA = { a: 1, b: 2, c: 3 };
const objB = { d: 4, e: 5, f: 6 };
const objC = { ...objA, ...objB };
// const objC = Object.assign(objA, objB);
console.log(objC);

const people = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Sara' },
	{ id: 3, name: 'Mike' },
];

console.log(people[1].name);

console.log(Object.entries(todo));
console.log(todo.hasOwnProperty('plane'));
