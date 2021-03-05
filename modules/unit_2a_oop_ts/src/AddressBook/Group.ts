import { v4 as uuidv4 } from 'uuid';
import Contact from './Contact';
import helpersFunc from './helpers';
import { IContact, IGroup } from './addressBookDef';

// Obiekt charakteryzujący grupę kontaktów:
class Group implements IGroup {
	// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
	// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
	readonly id: string;
	name: string;
	contactList: IContact[];

	constructor(name: string) {
		helpersFunc.validateSimpleString(name);
		this.id = uuidv4();
		this.name = name;
		this.contactList = [];
	}

	addContact(contact: IContact): void {
		const index = this.contactList.findIndex(
			(currentContact) => currentContact.id === contact.id
		);
		if (index !== -1) {
			throw new Error('Contact with this id already exists');
		}
		this.contactList.push(contact);
	}

	removeContact(contact: IContact): void {
		const result = this.contactList.filter(
			(currentContact) => currentContact.id !== contact.id
		);
		helpersFunc.validateResult(result);
		this.contactList = result;
	}

	findContact(phrase: string): IContact[] {
		const result = this.contactList.filter((contact) =>
			contact.containsPhrase(phrase)
		);
		helpersFunc.validateResult(result);
		return result;
	}

	// private?
	containsPhrase(phrase: string): boolean {
		helpersFunc.validateSimpleString(phrase);
		const phraseRegex = new RegExp(phrase, 'gi');
		const name = this.name;
		const groupContainsPhrase = phraseRegex.test(name);
		return groupContainsPhrase;
	}

	findGroupByName(groupName: string): Group | void {
		if (this.containsPhrase(groupName)) {
			return this;
		}
		console.log('No group found');
	}

	setName(name: string): void {
		helpersFunc.validateSimpleString(name);
		this.name = name;
	}
}

const contactList1 = [
	new Contact('Jan', 'Kowalski', 'jankowalski@gmail.com'),
	new Contact('Jan', 'Nowak', 'jannowak@gmail.com'),
	new Contact('Marcin', 'Krol', 'marcinkrol@gmail.com'),
	new Contact('Mateusz', 'Zimny', 'mateuszzimny@gmail.com'),
];
// const contactList2 = [1, 2, 3, 4];
const group1 = new Group('Group 1');
const newContact1 = new Contact('Jan1', 'Kowalski1', 'jankowalski@gmail.com');
// console.log(newContact1);
// group1.removeContact(contactList1[0]);
group1.addContact(newContact1);
// const group1 = new Group('Group 1', contactList2);
// console.log(group1.findContact('jankowalski@gmail.com'));
// group1.removeContact('jankowalski@gmail.com');
// group1.setName('New group 1');

// console.log(group1);
export default Group;
