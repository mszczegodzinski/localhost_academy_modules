import { WithUUID } from './libraryDef';

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

const addDays = (date: Date, days: number): Date => {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

const findElementById = <T extends WithUUID>(element: T, list: T[]) => {
	const result = list.find((el) => element.id === el.id);
	return result;
};

const findIndexById = <T extends WithUUID>(element: T, list: T[]) => {
	const result = list.findIndex((el) => element.id === el.id);
	return result;
};

const throwErrorOnFindCondition = (condition: number, message = 'Error') => {
	if (condition === -1) {
		throw new Error(message);
	}
};

const throwErrorOnFindIndexCondition = (
	condition: boolean,
	message = 'Error'
) => {
	if (condition) {
		throw new Error(message);
	}
};

const libraryHelpers = {
	validateSimpleString,
	generateRandomImagePath,
	addDays,
	findElementById,
	findIndexById,
	throwErrorOnFindCondition,
	throwErrorOnFindIndexCondition,
};

export default libraryHelpers;
