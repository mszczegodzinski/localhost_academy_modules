export interface WithUUID {
	readonly id: string;
}

export interface IContact extends WithUUID {
	modificationDate: string;
	readonly createDate: string;
	name: string;
	surname: string;
	email: string;
	setEmail: (email: string) => void;
	setName: (name: string) => void;
	setSurname: (surname: string) => void;
	containsPhrase: (phrase: string) => boolean;
}

export interface IGroup extends WithUUID {
	name: string;
	contactList: IContact[];
	addContact: (contact: IContact) => void;
	removeContact: (contact: IContact) => void;
	findContact: (phrase: string) => IContact[];
	containsPhrase: (phrase: string) => boolean;
	setName: (name: string) => void;
}

export type Property = 'name' | 'surname' | 'email';

export interface IManageGroup {
	groups: IGroup[];
	removeGroup(group: IGroup): void;
	addContactToGroup(group: IGroup, contact: IContact): void;
	addGroupToAddressBook(newGroup: IGroup): void;
	editGroupName(group: IGroup, name: string): void;
}

export interface IManageContacts {
	contacts: IContact[];
	removeContact(contact: IContact): void;
	editContact(contact: IContact, property: Property, propValue: string): void;
}
