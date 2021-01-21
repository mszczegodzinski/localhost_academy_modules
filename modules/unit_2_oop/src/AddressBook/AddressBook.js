import Group from './Group';
import Contact from './Contact';
import helpersFunc from './helpers';

// Obiekt charakteryzujący książke adresową
class AddressBook {
  // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
  // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
  constructor(groups, contacts) {
    helpersFunc.validateArray(groups);
    helpersFunc.validateArray(contacts);
    this.groups = groups;
    this.contacts = contacts;
  }

  findGroupByName(groupName) {
    helpersFunc.validateSimpleString(groupName);
    const phrase = new RegExp(groupName, 'gi');
    // group.containsPhrase(name)

    const result = this.groups.filter((group) => group.name.match(phrase));
    helpersFunc.validateResult(result);
    helpersFunc.validateSpecificInstance(result, Group);
    return result;
  }

  findContactByEmailPhrase(emailPhrase) {
    helpersFunc.validateSimpleString(emailPhrase);
    const phrase = new RegExp(emailPhrase, 'gi');
    const result = this.contacts.filter((contact) =>
      contact.email.match(phrase)
    );
    helpersFunc.validateResult(result);
    helpersFunc.validateSpecificInstance(result, Contact);
    return result;
  }

  removeGroupByName(groupName) {
    const phrase = new RegExp(groupName, 'gi');
    const result = this.groups.filter((group) => !group.name.match(phrase));
    helpersFunc.validateResult(result);
    helpersFunc.validateSpecificInstance(result, Group);
    this.groups = result;
  }

  removeContactByName(emailPhrase) {
    const phrase = new RegExp(emailPhrase, 'gi');
    const result = this.contacts.filter(
      (contact) => !contact.email.match(phrase)
    );
    helpersFunc.validateResult(result);
    helpersFunc.validateSpecificInstance(result, Contact);
    this.contacts = result;
  }

  addContactToGroup(groupName, name, surname, email) {
    helpersFunc.validateSimpleString(groupName);
    helpersFunc.validateSimpleString(name);
    helpersFunc.validateSimpleString(surname);
    helpersFunc.validateEmail(email);

    const firstGroupMatched = this.findGroupByName(groupName)[0];
    // null.length
    helpersFunc.validateResult(firstGroupMatched);
    // wziąć 1 element

    const contact = new Contact(name, surname, email);
    firstGroupMatched.addContact(contact);
    this.contacts.push(contact);
  }

  editContact(contact, key, newValue) {}

  editContactName(emailPhrase, newName) {
    const firstEmailMatched = this.findContactByEmailPhrase(emailPhrase)[0];
    helpersFunc.validateResult(firstEmailMatched);

    helpersFunc.validateSimpleString(newName);
    firstEmailMatched.setName(newName);
  }

  editContactSurame(emailPhrase, newSurname) {
    const firstEmailMatched = this.findContactByEmailPhrase(emailPhrase)[0];
    helpersFunc.validateResult(firstEmailMatched);

    helpersFunc.validateSimpleString(newSurname);
    firstEmailMatched.setSurname(newSurname);
  }

  editContactEmail(emailPhrase, newEmail) {
    const firstEmailMatched = this.findContactByEmailPhrase(emailPhrase)[0];
    helpersFunc.validateResult(firstEmailMatched);

    helpersFunc.validateEmail(newEmail);
    firstEmailMatched.setEmail(newEmail);
  }

  addGroupToAddressBook(groupName, contactList) {
    helpersFunc.validateSimpleString(groupName);
    helpersFunc.validateArray(contactList);
    helpersFunc.validateSpecificInstance(contactList, Contact);
    const newGroup = new Group(groupName, contactList);
    this.groups.push(newGroup);
  }

  editGroupName(groupPhrase, newGroupName) {
    const firstGroupMatched = this.findGroupByName(groupPhrase)[0];
    const newName = helpersFunc.validateSimpleString(newGroupName);
    firstGroupMatched.setName(newName);
  }
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
