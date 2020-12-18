import { v4 as uuidv4 } from 'uuid';
import Contact from './Contact';
import helpersFunc from './helpers';
// Obiekt charakteryzujący grupę kontaktów:
class Group {
  // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
  // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
  constructor(name, contactList) {
    this.id = uuidv4();
    this.name = name;
    this.contactList = helpersFunc.validateArray(contactList);
  }

  removeContact(email) {
    helpersFunc.validateEmail(email);
    const result = this.contactList.filter(
      (contact) => contact.email !== email
    );
    this.contactList = result;
  }

  addContact(name, surname, email) {
    helpersFunc.validateName(name);
    helpersFunc.validateSurname(surname);
    helpersFunc.validateEmail(email);
    this.contactList.forEach((contact) => {
      if (contact.email === email) {
        const message = `Email ${email} is already takien`;
        throw new Error(message);
      }
    });
    const contact = new Contact(name, surname, email);
    this.contactList.push(contact);
  }

  setName(name) {
    helpersFunc.validateName(name);
    this.name = name;
  }

  findContact(email) {
    helpersFunc.validateEmail(email);
    const result = this.contactList.filter(
      (contact) => contact.email === email
    )[0];
    return result;
  }
}

const contactList1 = [
  new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com'),
  new Contact('Jan', 'Nowak', 'jannowak@gmail.com'),
  new Contact('Marcin', 'Krol', 'marcinkrol@gmail.com'),
  new Contact('Mateusz', 'Zimny', 'mateuszzimny@gmail.com'),
];
const group1 = new Group('Group 1', contactList1);
group1.addContact('Tomasz', 'Niski', 'tomaszniski@o2.pl');
// console.log(group1.findContact('jankowalski@gmail.com'));
// group1.removeContact('jankowalski@gmail.com');
// group1.setName('New group 1');

// add duplicate email:
// group1.addContact('Tomasz', 'Niski', 'jankowalski@gmail.com');

// console.log(group1);
export default Group;
