const library = [
	{
		title: 'It',
		author: 'Stephen King',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'Last Wish',
		author: 'Andrzej Sapkowski',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'Eragon',
		author: 'Christopher Paolini',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const string = JSON.stringify(library);

console.log(library[0].status.read);
console.log(library[1].status.read);
console.log(library[2].status.read);
console.log(firstBook);
console.log(string);
