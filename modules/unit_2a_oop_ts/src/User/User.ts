// potrzebna bylaby abstrakcja np. App, ktore zawieraloby wszystkich userow, setEmail  , userType === "admin" - dodac

import moment from 'moment';
import userHelpers from './userHelpers';
import { Gender, UserType } from './userHelpers';
// Stwórz strukturę danych związaną z użytkownikami
// Obiekt charakteryzujący użytkownika:

class User {
	//     Ma mieć: Imię, Nazwisko, datę urodzenia, haslo, płeć, adres email, poziom dostepu = ""user""
	//     Ma umożliwiać: zmianę email, zmianę hasła
	private _birthDateResult: string;
	constructor(
		private readonly _id: number,
		private _name: string,
		private _surname: string,
		private _birthDate: string,
		private _password: string,
		private _gender: Gender,
		private _email: string,
		private readonly _type: UserType
	) {
		userHelpers.validateSimpleString(_name);
		userHelpers.validateSimpleString(_surname);
		userHelpers.validateDate(_birthDate);
		userHelpers.validatePassword(_password);
		userHelpers.validateEmail(_email);

		this._id = _id;
		this._name = _name;
		this._surname = _surname;
		this._birthDateResult = moment(_birthDate).format('MM/DD/YYYY');
		this._password = _password;
		this._gender = _gender;
		this._email = _email;
		this._type = _type;
	}

	// jakis generator do getteros i setterow?
	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	set name(name: string) {
		userHelpers.validateSimpleString(name);
		this._name = name;
	}
	get surname() {
		return this._surname;
	}
	set surname(surname: string) {
		userHelpers.validateSimpleString(surname);
		this._surname = surname;
	}
	get birthDateResult() {
		return this._birthDateResult;
	}
	set birthDateResult(birthDate: string) {
		userHelpers.validateDate(birthDate);
		this._birthDateResult = moment(birthDate).format('MM/DD/YYYY');
	}
	get password() {
		return this._password;
	}
	set password(password: string) {
		userHelpers.validatePassword(password);
		this._password = password;
	}
	get gender() {
		return this._gender;
	}
	set gender(gender: Gender) {
		this._gender = gender;
	}
	get email() {
		return this._email;
	}
	set email(email: string) {
		userHelpers.validateEmail(email);
		this._email = email;
	}
	get type() {
		return this._type;
	}
	// set type? czy uzytkownik moze zmieniac typ czy wtedy powinien byc tworzony nowy z innym typem?
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
