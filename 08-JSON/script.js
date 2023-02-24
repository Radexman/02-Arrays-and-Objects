const post = {
	id: 1,
	title: 'Post One',
	body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

const posts = [
	{
		id: 1,
		title: 'Post One',
		body: 'This is the body',
	},
	{
		id: 2,
		title: 'Post Two',
		body: 'This is the body',
	},
	{
		id: 3,
		title: 'Post Three',
		body: 'This is the body',
	},
];

const string = JSON.stringify(posts);

const objects = JSON.parse(string);

console.log(objects);
