// potrzebna bylaby abstrakcja np. App, ktore zawieraloby wszystkich userow, setEmail  , userType === "admin" - dodac

import moment from 'moment';
import userHelpers from './userHelpers';
import { Gender, UserType } from './userHelpers';
import { IUser } from './userDef';
// Stwórz strukturę danych związaną z użytkownikami
// Obiekt charakteryzujący użytkownika:

class User implements IUser {
	//     Ma mieć: Imię, Nazwisko, datę urodzenia, haslo, płeć, adres email, poziom dostepu = ""user""
	//     Ma umożliwiać: zmianę email, zmianę hasła
	readonly id: number;
	name: string;
	surname: string;
	birthDate: string;
	password: string;
	gender: Gender;
	email: string;
	readonly type: UserType;

	constructor(
		id: number,
		name: string,
		surname: string,
		birthDateParam: string,
		password: string,
		gender: Gender,
		email: string,
		type: UserType
	) {
		userHelpers.validateSimpleString(name);
		userHelpers.validateSimpleString(surname);
		userHelpers.validateDate(birthDateParam);
		userHelpers.validatePassword(password);
		userHelpers.validateEmail(email);

		this.id = id;
		this.name = name;
		this.surname = surname;
		// nazwa do zmiany
		this.birthDate = moment(birthDateParam).format('MM/DD/YYYY');
		this.password = password;
		this.gender = gender;
		this.email = email;
		this.type = type;
	}
	changeEmail(email: string): void {
		userHelpers.validateEmail(email);
		this.email = email;
	}

	changePassword(password: string): void {
		userHelpers.validatePassword(password);
		this.password = password;
	}

	// get type() {
	// 	return this._type;
	// }
}

export default User;

const user1 = new User(
	1,
	'Jan1',
	'Kowalski',
	'09-01-2020',
	'a#a3456B',
	'male',
	'jankowalski@gmail.com',
	'regular'
);

const user2 = new User(
	2,
	'Admin1',
	'Admin1',
	'09-01-2020',
	'1Dxa#a3456B',
	'female',
	'janadmin@gmail.com',
	'admin'
);

// console.log(user1);
// console.log(user2);

// passwoard regex /(?=.*[a-z])(?=.*[0-9])(?=.*\W)/i -> dowolny znak minimum jeden znak a-z, minimum jedna cyfra, minimum jeden znak specjalny (not word) , flaga i - ignore case

// Dodatkowo User ma mieć walidacje wykonaną za pomocą is.js oraz datę obsługiwaną przez bibliotekę moment.js
// - email ma być poprawnym emailem
// - password ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny
// - płeć musi być ze zbioru [male, female]
// - data (nieważne jaka wejdzie) do propa musi wejść w formacie MM/DD/YYYY
// - imię i nazwisko musi być niepuste
// jeśli któraś z walidacji się nie powiedzie obiekt ma nie być tworzony, tylko ma zwracać error z odpowiednimi komunikatami o niepowiedzionej walidacji
