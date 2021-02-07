import { v4 as uuidv4, validate } from 'uuid';
import Contact from './Contact';
import helpersFunc from './helpers';
// Obiekt charakteryzujący grupę kontaktów:
class Group {
  // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
  // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
  private readonly _id = uuidv4();
  constructor(private _name: string, private _contactList: Contact[]) {
    helpersFunc.validateSimpleString(_name);
    this._name = _name;
    this._contactList = _contactList;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    helpersFunc.validateSimpleString(name);
    this._name = name;
  }

  removeContact(id: string): void {
    this.validateId(id);
    const result = this._contactList.filter((contact) => contact.id !== id);
    helpersFunc.validateResult(result);
    this._contactList = result;
  }

  addContact(contact: Contact): void {
    this._contactList.push(contact);
  }

  setName(name: string): void {
    helpersFunc.validateSimpleString(name);
    this._name = name;
  }

  // czy nie powinno zwracac samego contact?
  findContact(phrase: string): Contact[] {
    const result = this._contactList.filter((contact) =>
      contact.containsPhrase(phrase)
    );
    helpersFunc.validateResult(result);
    return result;
  }

  validateId(id: string): void {
    if (!validate(id)) {
      throw new Error('Incorrect ID');
    }
  }
}

const contactList1 = [
  new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com'),
  new Contact('Jan', 'Nowak', 'jannowak@gmail.com'),
  new Contact('Marcin', 'Krol', 'marcinkrol@gmail.com'),
  new Contact('Mateusz', 'Zimny', 'mateuszzimny@gmail.com'),
];
// const contactList2 = [1, 2, 3, 4];
const group1 = new Group('Group 1', contactList1);
const newContact1 = new Contact('Jan1', 'Kowalski1', 'jankowalski@gmail.com');
// console.log(newContact1);
group1.removeContact(contactList1[0].id);
group1.addContact(newContact1);
// const group1 = new Group('Group 1', contactList2);
// console.log(group1.findContact('jankowalski@gmail.com'));
// group1.removeContact('jankowalski@gmail.com');
// group1.setName('New group 1');

// console.log(group1);
export default Group;
