// let x;
// const person = {
// 	name: 'John Doe',
// 	age: 30,
// 	isAdmin: true,
// 	address: {
// 		street: '123 Main st',
// 		city: 'Boston',
// 		state: 'MA',
// 	},
// 	hobbies: ['coding', 'guitar', 'fishing'],
// };

// x = person.name;
// x = person['age'];
// x = person.address.state;
// person.hobbies.push('hiking');
// x = person.hobbies;
// person.name = 'Radosław Siek';
// x = person.name;
// person['isAdmin'] = false;
// x = person;
// delete person.age;
// person.hasChildern = false;
// person.greet = function () {
// 	console.log(`Hello, my name is ${this.name}`);
// };

// person.greet();

// const radek = {
// 	'first name': 'Radosław',
// 	'last name': 'Siek',
// };

// x = radek['first name'];

// console.log(x);

// const fruits = ['banana', 'orange', 'strawberry'];
// const vegetables = ['carrot', 'potato', 'leek'];
// const food = [...fruits, ...vegetables];
// food.push('pizza');
// food.reverse();

// console.log(food);

const house = {
	family: 'Siek',
	location: 'Koszęcin',
	hasBasement: true,
	occupants: ['Piotr', 'Katarzyna', 'Bartosz', 'Radosław'],
};

house.year = 2011;
house.greeting = function () {
	console.log(`${this.family} family lives in here.`);
};

delete house.occupants[3];

house.greeting();
console.log(house.occupants[3]);
