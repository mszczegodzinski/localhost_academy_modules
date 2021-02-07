import { v4 as uuidv4 } from 'uuid';
import helpersFunc from './helpers';
// Obiekt charakteryzujący pojedyńczy kontakt:
class Contact {
  // private _id: string
  // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
  // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
  private readonly _id = uuidv4();
  private currentDate = new Date();
  private _modificationDate = this.currentDate.toLocaleString();
  private _createDate = this.currentDate.toLocaleString();
  constructor(private _name: string, private _surname: string, private _email: string) {
    helpersFunc.validateSimpleString(_name);
    helpersFunc.validateSimpleString(_surname);
    helpersFunc.validateEmail(_email);
    this._name = _name;
    this._surname = _surname;
    this._email = _email;
  }

	get id(){
		return this._id;
	}

  get name(){
    return this._name;
  }

	set name(name: string) {
    helpersFunc.validateSimpleString(name);
    this._name = name;
    this.updateDate();
  }

  get surname(){
    return this._surname;
  }

	set surname(surname: string) {
    helpersFunc.validateSimpleString(surname);
    this._surname = surname;
    this.updateDate();
  }

	get email(){
    return this._email;
  }

  setEmail(email: string): void {
    helpersFunc.validateEmail(email);
    this._email = email;
    this.updateDate();
  }

  updateDate(): void {
    const currentDate = new Date();
    this._modificationDate = currentDate.toLocaleString();
  }

  containsPhrase(phrase: string): boolean {
    const phraseRegex = new RegExp(phrase, 'gi');
    helpersFunc.validateSimpleString(phrase);
    // weź email, name, surname, id
    const name = this._name;
    const surname = this._surname;
    const email = this._email;

    if (!phraseRegex.test(name) && !phraseRegex.test(surname) && !phraseRegex.test(email)) {
      return false;
    }
    return true;
  }
}

export default Contact;

const contact1 = new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com');
// console.log(contact1);
