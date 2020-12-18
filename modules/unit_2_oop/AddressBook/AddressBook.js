import Group from './Group';
import Contact from './Contact';
import helpersFunc from './helpers';

// Obiekt charakteryzujący książke adresową
class AddressBook {
  // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
  // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
  constructor(groups, contacts) {
    this.groups = helpersFunc.validateArray(groups);
    this.contacts = helpersFunc.validateArray(contacts);
  }

  findGroupByName(groupName) {
    helpersFunc.validateName(groupName);
    const phrase = new RegExp(groupName, 'gi');
    const result = this.groups.filter((group) => group.name.match(phrase));
    return result;
  }

  findContactByEmailPhrase(emailPhrase) {
    helpersFunc.validateName(emailPhrase);
    const phrase = new RegExp(emailPhrase, 'gi');
    const result = this.contacts.filter((contact) =>
      contact.email.match(phrase)
    );
    return result;
  }

  removeGroupByName(groupName) {
    const phrase = new RegExp(groupName, 'gi');
    const result = this.groups.filter((group) => !group.name.match(phrase));
    this.groups = result;
  }

  removeContactByName(emailPhrase) {
    const phrase = new RegExp(emailPhrase, 'gi');
    const result = this.contacts.filter(
      (contact) => !contact.email.match(phrase)
    );
    this.contacts = result;
  }

  // addNewContact
  // modify contact
  // add new group
  // modify group
}

const contactList1 = [
  new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com'),
  new Contact('Jan', 'Nowak', 'jannowak@gmail.com'),
  new Contact('Marcin', 'Krol', 'marcinkrol@gmail.com'),
  new Contact('Mateusz', 'Zimny', 'mateuszzimny@gmail.com'),
];
const contactList2 = [
  new Contact('Jan1', 'Kowalski', 'jan1kowalski@gmail.com'),
  new Contact('Jan2', '1Nowak', 'jan21nowak@gmail.com'),
  new Contact('Marcin', '5Krol', 'marcin5krol@gmail.com'),
  new Contact('Mateusz', 'Zimny', 'mateuszzimny@gmail.com'),
];
const group1 = new Group('Group 1', contactList1);
const group2 = new Group('Group 2', contactList2);
// czy zmienne przechowujace klase z wielkiek litery?
const addressBook = new AddressBook(
  [group1, group2],
  [...contactList1, ...contactList2]
);

// console.log(group1);
// console.log('=====================');
// console.log(group2);
console.log('=====================');
// console.log(addressBook);
// console.log(addressBook.findContactByEmailPhrase('Jan'));
// console.log(addressBook.findGroupByName('Group'));
// console.log(addressBook.findGroupByName('1'));
// addressBook.removeGroupByName('1');
addressBook.removeContactByName('jan');
console.log(addressBook);

// co zrobić z duplikatami, ktore sa od poczatku w "bazie" ?
export default AddressBook;
