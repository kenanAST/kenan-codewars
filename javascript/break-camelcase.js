const testValue = 'camelCasing';

//Regex Solution
const regexBreakCamelCase = (string) => {
	return string.replace(/([A-Z])/g, ' $1');
};

const breakCamelCase = (string) => {
	let breaked = '';
	for (let i = 0; i < string.length; i++) {
		string[i].toUpperCase() === string[i]
			? (breaked += ' ' + string[i])
			: (breaked += string[i]);
	}
	return breaked;
};
