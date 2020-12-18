import { v4 as uuidv4 } from 'uuid';
import helpersFunc from './helpers';
// Obiekt charakteryzujący pojedyńczy kontakt:
class Contact {
  // private _id: string
  // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
  // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
  constructor(name, surname, email) {
    this.id = uuidv4();
    this.name = helpersFunc.validateName(name);
    this.surname = helpersFunc.validateSurname(surname);
    this.email = helpersFunc.validateEmail(email);
    const currentDate = new Date(Date.now());
    this.modificationDate = currentDate.toLocaleString();
    this.createDate = currentDate.toLocaleString();
  }

  // czy mozna zbindowac setName etc, zeby nie dostawac undefined?
  // walidacje + zmiana modification date
  setName(name) {
    this.name = helpersFunc.validateName(name);
    const currentDate = new Date(Date.now());
    this.modificationDate = currentDate.toLocaleString();
  }

  setSurname(surname) {
    this.surname = helpersFunc.validateSurname(surname);
    const currentDate = new Date(Date.now());
    this.modificationDate = currentDate.toLocaleString();
  }

  // how to check if email is repeated?
  setEmail(email) {
    this.email = helpersFunc.validateEmail(email);
    const currentDate = new Date(Date.now());
    this.modificationDate = currentDate.toLocaleString();
  }
}

export default Contact;

// const contact1 = new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com');
// console.log(contact1);
