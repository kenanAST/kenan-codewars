testValues = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];

const isValidWalk = (walk) => {
	let x = 0;
	let y = 0;
	for (let i = 0; i < walk.length; i++) {
		switch (walk[i]) {
			case 'n':
				y++;
				break;
			case 's':
				y--;
				break;
			case 'w':
				x--;
				break;
			case 'e':
				x++;
				break;
		}
	}
	return walk.length === 10 && y === 0 && x === 0;
};

console.log(isValidWalk(testValues));
