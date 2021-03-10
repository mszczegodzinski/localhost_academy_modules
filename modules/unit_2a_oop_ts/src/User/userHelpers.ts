import User from './User';
import { WithID } from './userDef';

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

const validateEmail = (email: string): void => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (!email.match(emailRegex)) {
		throw new Error('Incorrect email. You have to pass a valid email');
	}
	if (email.includes('>') || email.includes('<') || email.includes('/')) {
		throw new Error('Incorrect sign in the email. >, <, / is not allowed.');
	}
};

const validatePassword = (password: string): void => {
	// at least 1 upper case, 1 lower case, 1 special sign, min 8 signs length
	// {1,3}
	const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)/; // sprawdzic z nawiasami kwadratowymi lub bez.
	validateSimpleString(password);
	if (password.trim().length < 8) {
		throw new Error(
			'Incorrect data length. Password must have at least 8 signs'
		);
	}
	if (!passwordRegex.test(password)) {
		throw new Error(
			'Invalid password pattern. Password must have at least 1 upper case, 1 lower case and 1 special sign'
		);
	}
};

const validateDate = (inputDate: string) => {
	const parsedDate = new Date(inputDate);
	if (isNaN(parsedDate.getFullYear())) {
		throw new Error('Invalid date');
	}
};

const validateUserType = (inputData: string) => {
	const genderPattern = /^admin$|^regular$/i;
	if (!genderPattern.test(inputData)) {
		throw new Error('Incorrect user type. Only admin or regular is allowed.');
	}
};

const checkUserAccess = (userToModify: User, modifierUser: User) => {
	validateUserType(userToModify.type);
	validateUserType(modifierUser.type);
	if (userToModify.id !== modifierUser.id && modifierUser.type !== 'admin') {
		throw new Error('Only admin can modify user data');
	}
};

const findIndexById = <T extends WithID>(element: T, list: T[]) => {
	const index = list.findIndex((el) => element.id === el.id);
	return index;
};

const findElementById = <T extends WithID>(element: T, list: T[]) => {
	const result = list.find((el) => element.id === el.id);
	return result;
};

const throwErrorOnCondition = (condition: number, message = 'Error') => {
	if (condition === -1) {
		throw new Error(message);
	}
};

export type Gender = 'male' | 'female';
export type UserType = 'regular' | 'admin';

const libraryHelpers = {
	validateDate,
	validateEmail,
	validatePassword,
	validateSimpleString,
	checkUserAccess,
	validateUserType,
	findIndexById,
	findElementById,
	throwErrorOnCondition,
};

export default libraryHelpers;
