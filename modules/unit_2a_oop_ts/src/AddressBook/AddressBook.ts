import Group from './Group';
import Contact from './Contact';
import helpersFunc from './helpers';

// Obiekt charakteryzujący książke adresową
class AddressBook {
  // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
  // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
  constructor(private _groups: Group[], private _contacts: Contact[]) {
    this._groups = _groups;
    this._contacts = _contacts;
  }

  findGroupByName(groupName: string): Group[] {
    helpersFunc.validateSimpleString(groupName);
    const phrase = new RegExp(groupName, 'gi');
    // group.containsPhrase(name)

    const result = this._groups.filter((group) => group.name.match(phrase));
    helpersFunc.validateResult(result);
    return result;
  }

  findContactByEmailPhrase(emailPhrase: string): Contact[] {
    helpersFunc.validateSimpleString(emailPhrase);
    const phrase = new RegExp(emailPhrase, 'gi');
    const result = this._contacts.filter((contact) =>
      contact.email.match(phrase)
    );
    helpersFunc.validateResult(result);
    return result;
  }

  removeGroupByName(groupName: string): void {
    const phrase = new RegExp(groupName, 'gi');
    const result = this._groups.filter((group) => !group.name.match(phrase));
    helpersFunc.validateResult(result);
    this._groups = result;
  }

  removeContactByName(emailPhrase: string): void {
    const phrase = new RegExp(emailPhrase, 'gi');
    const result = this._contacts.filter(
      (contact) => !contact.email.match(phrase)
    );
    helpersFunc.validateResult(result);
    this._contacts = result;
  }

  addContactToGroup(groupName: string, name: string, surname: string, email: string): void {
    helpersFunc.validateSimpleString(groupName);
    helpersFunc.validateSimpleString(name);
    helpersFunc.validateSimpleString(surname);
    helpersFunc.validateEmail(email);

    const firstGroupMatched = this.findGroupByName(groupName);
    helpersFunc.validateResult(firstGroupMatched);
    // wziąć 1 element

    const contact = new Contact(name, surname, email);
    firstGroupMatched[0].addContact(contact);
    this._contacts.push(contact);
  }

  editContactName(emailPhrase: string, newName: string): void {
    const firstEmailMatched = this.findContactByEmailPhrase(emailPhrase);
    helpersFunc.validateResult(firstEmailMatched);

    helpersFunc.validateSimpleString(newName);
    firstEmailMatched[0].name = newName;
  }

  editContactSurame(emailPhrase: string, newSurname: string) {
    const firstEmailMatched = this.findContactByEmailPhrase(emailPhrase);
    helpersFunc.validateResult(firstEmailMatched);

    helpersFunc.validateSimpleString(newSurname);
    firstEmailMatched[0].surname = newSurname;
  }

  editContactEmail(emailPhrase: string, newEmail: string): void {
    const firstEmailMatched = this.findContactByEmailPhrase(emailPhrase);
    helpersFunc.validateResult(firstEmailMatched);

    helpersFunc.validateEmail(newEmail);
    firstEmailMatched[0].setEmail(newEmail);
  }

  addGroupToAddressBook(groupName: string, contactList: Contact[]): void {
    helpersFunc.validateSimpleString(groupName);
    const newGroup = new Group(groupName, contactList);
    this._groups.push(newGroup);
  }

  editGroupName(groupPhrase: string, newGroupName: string): void {
    const firstGroupMatched = this.findGroupByName(groupPhrase);
    helpersFunc.validateSimpleString(newGroupName);
    helpersFunc.validateResult(firstGroupMatched)
    firstGroupMatched[0].name = newGroupName;
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
