import Group from './Group';
import Contact from './Contact';
import helpersFunc from './helpers';
import {
	IManageContacts,
	IManageGroup,
	IContact,
	IGroup,
	Property,
} from './addressBookDef';

// Obiekt charakteryzujący książke adresową
class AddressBook implements IManageContacts, IManageGroup {
	// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
	// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
	private _groups: IGroup[];
	private _contacts: IContact[];

	constructor() {
		this._groups = [];
		this._contacts = [];
	}

	get groups() {
		return this._groups;
	}

	get contacts() {
		return this._contacts;
	}

	removeGroup(group: IGroup): void {
		const index = helpersFunc.findIndexById(group, this._groups);
		const condition = index === -1 ? true : false;
		const message = 'No group to remove';
		helpersFunc.throwErrorOnCondition(condition, message);

		this._groups.splice(index, 1);
	}

	removeContact(contact: IContact): void {
		const index = helpersFunc.findIndexById(contact, this._contacts);
		const condition = index === -1 ? true : false;
		const message = 'No contact to remove';
		helpersFunc.throwErrorOnCondition(condition, message);

		this._contacts.splice(index, 1);
	}

	addContactToGroup(group: IGroup, contact: IContact): void {
		// const result = this._groups.find(({ id }) => id === group.id);
		const result = helpersFunc.findElementById(group, this._groups);
		const message = "This group doesn't exist in the Address Book yet";
		helpersFunc.throwErrorOnCondition(!result, message);
		result!.addContact(contact);
	}

	editContact(contact: IContact, property: Property, propValue: string): void {
		const result = this._contacts.find(({ id }) => id === contact.id);
		if (!result) {
			console.log('No contact to edit');
		}
		if (result && property === 'email') {
			result.setEmail(propValue);
			console.log('Email was updated');
		}
		if (result && property === 'surname') {
			result.setSurname(propValue);
			console.log('Surname was updated');
		}
		if (result && property === 'email') {
			result.setName(propValue);
			console.log('Name was updated');
		}
	}

	addGroupToAddressBook(newGroup: IGroup): void {
		const result = helpersFunc.findIndexById(newGroup, this._groups);
		if (result !== -1) {
			throw new Error('This group is already in the Address Book');
		}
		this._groups.push(newGroup);
	}

	editGroupName(group: IGroup, name: string): void {
		helpersFunc.validateSimpleString(name);
		const result = helpersFunc.findElementById(group, this._groups);
		if (!result) {
			console.log('No group found');
		}
		if (result) {
			result.setName(name);
			console.log('Group name was updated');
		}
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
const group1 = new Group('Group 1');
const group2 = new Group('Group 2');
// czy zmienne przechowujace klase z wielkiek litery?
// const addressBook = new AddressBook(
// 	[group1, group2],
// 	[...contactList1, ...contactList2]
// );

// console.log(group1);
// console.log('=====================');
// console.log(group2);
console.log('=====================');
// console.log(addressBook);
// console.log(addressBook.findContactByEmailPhrase('Jan'));
// console.log(addressBook.findGroupByName('Group'));
// console.log(addressBook.findGroupByName('1'));
// addressBook.removeGroupByName('1');
// addressBook.removeContact('jan');
// console.log(addressBook);

// co zrobić z duplikatami, ktore sa od poczatku w "bazie" ?
export default AddressBook;
