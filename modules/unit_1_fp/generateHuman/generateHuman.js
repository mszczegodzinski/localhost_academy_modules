// Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85), phoneNr:random 9 numbers ,country:oneOf([PL,UK,USA])}
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid
const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');
import { uuid } from '../node_modules/uuid';

function generateName(minLength = 3, maxLength = 10) {
	if (typeof minLength !== 'number' || typeof maxLength !== 'number') {
		throw new Error('min and max name or surname length have to be a number');
	}

	if (isNaN(parseInt(minLength)) || isNaN(parseInt(maxLength))) {
		throw new Error('Incorrect name / surname length');
	}

	if (minLength <= 0 || maxLength <= 0) {
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
function generateAge(minAge = 18, maxAge = 85) {
	//else if usunac
	if (typeof minAge !== 'number' || typeof maxAge !== 'number') {
		throw new Error('min and max age have to be a number');
	} else if (isNaN(parseInt(minAge)) || isNaN(parseInt(maxAge))) {
		throw new Error('Incorrect age format');
	} else if (minAge < 18 && maxAge > 85) {
		throw new Error('min age and max age have to be in <18,85> range');
	} else if (minAge > maxAge) {
		throw new Error('min age have to be less than or equal to max age');
	}
	const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
	return age;
}

function generateCountry() {
	const countries = ['PL', 'UK', 'USA'];
	const country = countries[Math.floor(Math.random() * 4)];
	return country;
}

function generatePhoneNr() {
	const minPhoneNr = 100000000;
	const maxPhoneNr = 999999999;
	const phoneNr =
		Math.floor(Math.random() * (maxPhoneNr - minPhoneNr + 1)) + minPhoneNr;
	//zmienic na string
	return phoneNr;
}

function generateHuman() {
	const name = generateName();
	const surname = generateName(4, 20);
	const email = `${name}_${surname}@gmail.com`;
	const age = generateAge();
	const country = generateCountry();
	const phoneNr = generatePhoneNr();
	const id = uuid();
	console.log(id);

	const human = {
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

const human = generateHuman();
console.log(human);
