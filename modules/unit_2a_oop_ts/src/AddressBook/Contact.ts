import { v4 as uuidv4 } from 'uuid';
import helpersFunc from './helpers';
import { IContact } from './addressBookDef';
// Obiekt charakteryzujący pojedyńczy kontakt:
class Contact implements IContact {
	// private id: string
	// Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
	// Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
	private readonly _id: string;
	private _modificationDate: string;
	private readonly _createDate: string;
	name: string;
	surname: string;
	email: string;

	constructor(name: string, surname: string, email: string) {
		helpersFunc.validateSimpleString(name);
		helpersFunc.validateSimpleString(surname);
		helpersFunc.validateEmail(email);

		this._id = uuidv4();
		this.name = name;
		this.surname = surname;
		this.email = email;

		const currentDate = new Date();
		this._modificationDate = currentDate.toLocaleString();
		this._createDate = currentDate.toLocaleString();
	}

	get id() {
		return this._id;
	}

	get createDate() {
		return this._createDate;
	}

	get modificationDate() {
		return this._modificationDate;
	}

	setEmail(email: string): void {
		helpersFunc.validateEmail(email);
		this.email = email;
		this._updateDate();
	}

	setName(name: string): void {
		helpersFunc.validateSimpleString(name);
		this.name = name;
		this._updateDate();
	}

	setSurname(surname: string): void {
		helpersFunc.validateSimpleString(surname);
		this.surname = surname;
		this._updateDate();
	}

	private _updateDate(): void {
		const currentDate = new Date();
		this._modificationDate = currentDate.toLocaleString();
	}

	containsPhrase(phrase: string): boolean {
		const phraseRegex = new RegExp(phrase, 'gi');
		helpersFunc.validateSimpleString(phrase);
		const { name, surname, email } = this;

		const contactContainsPhrase = [name, surname, email].some((el) =>
			phraseRegex.test(el)
		);

		return contactContainsPhrase;
	}
}

export default Contact;

const contact1 = new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com');
// console.log(contact1);
