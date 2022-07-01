const digital_root = (n) => {
	return n % 9 === 0 && n != 0 ? 9 : n % 9;
};

console.log(digital_root(0));
console.log(digital_root(5));
console.log(digital_root(27));
console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));
