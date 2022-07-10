const testValue = 'camelCasing';

//Regex Solution
const regexBreakCamelCase = (string) => {
	return string.replace(/([A-Z])/g, ' $1');
};

//Person 2nd
const personalBreakCamelCase = (string) => {
	return string
		.split('')
		.map((element) => {
			return element.toUpperCase() === element ? ' ' + element : element;
		})
		.join('');
};

//Personal 1st
const breakCamelCase = (string) => {
	let breaked = '';
	for (let i = 0; i < string.length; i++) {
		string[i].toUpperCase() === string[i]
			? (breaked += ' ' + string[i])
			: (breaked += string[i]);
	}
	return breaked;
};

console.log(personalBreakCamelCase(testValue));
