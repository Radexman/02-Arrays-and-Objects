// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
// 	firstName,
// 	lastName,
// 	age,
// };

// console.log(person.age);

// Destructuring

const todo = {
	id: 1,
	title: 'Take out trash',
	user: {
		name: 'John',
	},
};

const {
	id: todoId,
	title: todoTitle,
	user: { name },
} = todo;

console.log(todoId, todoTitle, name);

// Destructure arrays
const numbers = [23, 63, 57, 99, 52];
// const [first, second, ...rest] = numbers;

console.log(first, second, rest);

const firstName = 'Radosław';
const lastName = 'Siek';
const age = 23;
const isMarried = false;

const person = {
	firstName,
	lastName,
	age,
	isMarried,
};

const car = {
	brand: 'BMW',
	model: 'MH543',
	prodYear: 1999,
	specs: {
		power: '600KM',
		acc: '3s to 100KM/h',
	},
};

const {
	brand: carBrand,
	model: carModel,
	prodYear: productionYear,
	specs: { power: carPower, acc: carAcceleration },
} = car;

const carSpecs = `This car brand is ${carBrand} and the model is ${carModel}. ${carModel} was produced in ${productionYear}, it has ${carPower} and this model gets in ${carAcceleration}.`;
console.log(carSpecs);

const fruits = ['orange', 'pineapple', 'banana', 'strawberry'];
const vegetables = ['potato', 'brocolli', 'leek'];
const fastFoods = ['kebab', 'pizza', 'hamburger'];
const food = [...fruits, ...vegetables, ...fastFoods];
const healthyFood = food.slice(0, 7);
const unhealthyFood = food.slice(7, 10);
healthyFood.push('olives');
unhealthyFood.unshift('chips');

console.log(healthyFood, unhealthyFood);

const [first, second, ...rest] = healthyFood;

console.log(first, second, rest);
