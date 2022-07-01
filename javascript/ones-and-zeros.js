testValue = [0, 1, 1, 1];

//Top Rated Solution
const top_solution_binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

const binaryArrayToNumber = (arr) => {
	let value = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === 1) {
			value += 2 ** (arr.length - 1 - i);
		}
	}
	return value;
};

console.log(binaryArrayToNumber(testValue));
