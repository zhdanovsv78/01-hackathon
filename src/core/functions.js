
export function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//Возвращает случайное число от min до max

export function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}