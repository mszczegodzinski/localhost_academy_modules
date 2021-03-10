// Wygeneruj tablicę zawierającą X całkowitych liczb losowych z zakresu min i max

export function generateArrayWithRandomNumbers(
	howManyNumbers = 10,
	min = 1,
	max = 10
): number[] {
	if (howManyNumbers <= 0) {
		throw new Error('Amount of drawn numbers should be greater than 0');
	}
	if (min > max) {
		throw new Error('Min value have to be less than or equal to max value');
	}

	const resultArr = [];
	for (let i = 0; i < howManyNumbers; i++) {
		resultArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	// [... new Array(howManyNumbers)].map(...)
	return resultArr;
}

export function generateArrayOfArrays(
	howManyArrays = 10,
	howManyNumbers = 10,
	min = 1,
	max = 10
): number[][] {
	const regex = /^\d+$/i;
	if (
		!regex.test(howManyArrays.toString()) ||
		!regex.test(howManyNumbers.toString()) ||
		!regex.test(min.toString()) ||
		!regex.test(max.toString())
	) {
		throw new Error('Incorrect input data. All parameters have to be number');
	}
	if (!howManyArrays || !howManyNumbers || !min || !max) {
		throw new Error('All parameters have to be greater than 0');
	}
	const arrayOfArrays: number[][] = [];
	for (let i = 0; i < howManyArrays; i++) {
		const simpleArr = generateArrayWithRandomNumbers(howManyNumbers, min, max);
		arrayOfArrays.push(simpleArr);
	}
	return arrayOfArrays;
}
