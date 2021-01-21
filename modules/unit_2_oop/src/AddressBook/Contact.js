import { v4 as uuidv4 } from 'uuid';
import helpersFunc from './helpers';
// Obiekt charakteryzujący pojedyńczy kontakt:
class Contact {
  // private _id: string
  // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
  // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
  constructor(name, surname, email) {
    this.id = uuidv4();
    // validate properties:
    helpersFunc.validateSimpleString(name);
    helpersFunc.validateSimpleString(surname);
    helpersFunc.validateEmail(email);
    this.name = name;
    this.surname = surname;
    this.email = email;

    const currentDate = new Date();
    this.modificationDate = currentDate.toLocaleString();
    this.createDate = currentDate.toLocaleString();
  }

  setSurname(surname) {
    helpersFunc.validateSimpleString(surname);
    this.surname = surname;
    this.updateDate();
  }

  // how to check if email is repeated?
  setEmail(email) {
    helpersFunc.validateEmail(email);
    this.email = email;
    this.updateDate();
  }

  updateDate() {
    const currentDate = new Date();
    this.modificationDate = currentDate.toLocaleString();
  }

  containsPhrase(phrase) {
    const phrase = new RegExp(phrase, 'gi');
    helpersFunc.validateSimpleString(phrase);
    // weź email, name, surname, id
    const name = this.name;
    const surname = this.surname;
    const email = this.email;

    if (!name.match(phrase) && !surname.match(phrase) && !email.match(phrase)) {
      return false;
    }
    return true;
  }
}

export default Contact;

const contact1 = new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com');
// console.log(contact1);
