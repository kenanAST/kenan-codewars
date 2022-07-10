const testValue = 'camelCasing';

const breakCamelCase = (string) => {
	let breaked = '';
	for (let i = 0; i < string.length; i++) {
		string[i].toUpperCase() === string[i]
			? (breaked += ' ' + string[i])
			: (breaked += string[i]);
	}
	return breaked;
};
