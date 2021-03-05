const validateSimpleString = (simpleString: string): void => {
	if (!simpleString.trim().length) {
		throw new Error('Incorrect data length. Length cannot be 0');
	}
	if (
		simpleString.includes('>') ||
		simpleString.includes('<') ||
		simpleString.includes('/')
	) {
		throw new Error(
			'Incorrect sign in the input string. >, <, / is not allowed.'
		);
	}
};

const generateRandomImagePath = () => {
	const paths = [
		'./images/book1.png',
		'./images/book2.png',
		'./images/book3.png',
		'./images/book4.png',
		'./images/book5.png',
	];

	const pathIndex = Math.floor(Math.random() * 5);
	return paths[pathIndex];
};

// const addDays = (date: Date, days: number): string => {
const addDays = (date: Date, days: number): Date => {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	// return result.toLocaleDateString();
	return result;
};

const libraryHelpers = {
	validateSimpleString,
	generateRandomImagePath,
	// validateUuid,
	addDays,
};

export default libraryHelpers;
