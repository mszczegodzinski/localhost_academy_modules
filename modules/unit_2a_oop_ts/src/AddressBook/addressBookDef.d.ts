export interface IContact {
	readonly id: string;
	readonly currentDate: Date;
	modificationDate: string;
	readonly createDate: string;
	name: string;
	surname: string;
	email: string;
	setEmail: (email: string) => void;
	setName: (name: string) => void;
	setSurname: (surname: string) => void;
	containsPhrase: (phrase: string) => boolean;
	findContactByEmailPhrase: (emailPhrase: string) => IContact | void;
}

export interface IGroup {
	id: string;
	name: string;
	contactList: IContact[];
	addContact: (contact: IContact) => void;
	removeContact: (contact: IContact) => void;
	findContact: (phrase: string) => IContact[];
	findGroupByName: (groupName: string) => IGroup | void;
	containsPhrase: (phrase: string) => boolean;
	setName: (name: string) => void;
}

export type Property = 'name' | 'surname' | 'email';

export interface IAddressBookManageGroup {
	groups: IGroup[];
	removeGroup(group: IGroup): void;
	addContactToGroup(group: IGroup, contact: IContact): void;
	addGroupToAddressBook(newGroup: IGroup): void;
	editGroupName(group: IGroup, name: string): void;
}

export interface IAddressBookManageContacts {
	contacts: IContact[];
	removeContact(contact: IContact): void;
	editContact(contact: IContact, property: Property, propValue: string): void;
}
