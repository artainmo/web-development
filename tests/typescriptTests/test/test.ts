document.writeln("Hello, "world"!")
function add(n1: number, n2: number): number
{
	return n1 + n2;
}

console.log(add(18, 94));

const person: {name: string, age: number, hobbies: string[], role: [number, string]} = {
	name: "Bryan",
	age: 30,
	hobbies: ['tennis', 'piano'],
	role: [2, 'author']
};

console.log(person.name);
for (const hobby of person.hobbies)
	console.log(hobby.toUpperCase());
