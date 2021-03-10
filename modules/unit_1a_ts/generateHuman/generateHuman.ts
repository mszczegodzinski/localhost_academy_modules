// Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85), phoneNr:random 9 numbers ,country:oneOf([PL,UK,USA])}
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid
const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');
import { v4 as uuidv4 } from 'uuid';

function generateName(minLength = 3, maxLength = 10): string {
	const regex = /^\d+$/i;

	if (!regex.test(minLength.toString()) || !regex.test(maxLength.toString())) {
		throw new Error('Incorrect input data');
	}
	if (minLength === 0 || maxLength === 0) {
		throw new Error('min name or surname length have to be bigger than 0');
	}

	if (minLength > maxLength) {
		throw new Error(
			'min name or surname length have to be less than or equal to max length'
		);
	}

	const nameLength =
		Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
	let result = '';
	for (let i = 0; i < nameLength; i++) {
		//letter index is between 0 to 23:
		const currentLetter = Math.floor(Math.random() * 24);
		result += alphabet[currentLetter];
	}
	return result;
}
//is age range hardcoded or user can pass their own range?
function generateAge(minAge = 18, maxAge = 85): number {
	const regex = /^\d+$/i;
	if (!regex.test(minAge.toString()) || !regex.test(maxAge.toString())) {
		throw new Error('Incorrect input data');
	}
	if (minAge < 18 && maxAge > 85) {
		throw new Error('min age and max age have to be in <18,85> range');
	}
	if (minAge > maxAge) {
		throw new Error('min age have to be less than or equal to max age');
	}
	const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
	return age;
}

function generateCountry(): string {
	const countries = ['PL', 'UK', 'USA'];
	const country = countries[Math.floor(Math.random() * 4)];
	return country;
}

function generatePhoneNr(): string {
	const minPhoneNr = 100000000;
	const maxPhoneNr = 999999999;
	const phoneNr = (
		Math.floor(Math.random() * (maxPhoneNr - minPhoneNr + 1)) + minPhoneNr
	).toString();

	return phoneNr;
}

interface IHuman {
	_id: string;
	name: string;
	surname: string;
	email: string;
	age: number;
	phoneNr: string;
	country: string;
}

function generateHuman(): IHuman {
	const name = generateName();
	const surname = generateName(4, 20);
	const email = `${name}_${surname}@gmail.com`;
	const age = generateAge();
	const country = generateCountry();
	const phoneNr = generatePhoneNr();
	const id = uuidv4();

	const human: IHuman = {
		_id: id,
		name: name,
		surname: surname,
		email: email,
		age: age,
		phoneNr: phoneNr,
		country: country,
	};

	return human;
}

export default generateHuman;
