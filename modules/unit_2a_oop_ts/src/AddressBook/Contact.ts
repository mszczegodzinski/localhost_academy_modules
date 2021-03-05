import { v4 as uuidv4 } from 'uuid';
import helpersFunc from './helpers';
import { IContact, Property } from './addressBookDef';
// Obiekt charakteryzujący pojedyńczy kontakt:
class Contact implements IContact {
	// private id: string
	// Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
	// Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
	protected readonly _id: string;
	protected _modificationDate: string;
	protected readonly _createDate: string;
	name: string;
	surname: string;
	email: string;
	readonly currentDate: Date;

	constructor(name: string, surname: string, email: string) {
		helpersFunc.validateSimpleString(name);
		helpersFunc.validateSimpleString(surname);
		helpersFunc.validateEmail(email);

		this._id = uuidv4();
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.currentDate = new Date();
		this._modificationDate = this.currentDate.toLocaleString();
		this._createDate = this.currentDate.toLocaleString();
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

		const name = this.name;
		const surname = this.surname;
		const email = this.email;

		const contactContainsPhrase =
			phraseRegex.test(name) ||
			phraseRegex.test(surname) ||
			phraseRegex.test(email);
		return contactContainsPhrase;
	}

	findContactByEmailPhrase(emailPhrase: string): Contact | void {
		if (this.containsPhrase(emailPhrase)) {
			return this;
		}
		console.log('No contact found');
	}
	
}

export default Contact;

const contact1 = new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com');
// console.log(contact1);
