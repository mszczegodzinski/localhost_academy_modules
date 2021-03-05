import { v4 as uuidv4 } from 'uuid';
import libraryHelpers from './libraryHelpers';
import { ILibraryUser } from './libraryDef';
class LibraryUser implements ILibraryUser {
	private readonly _id: string;
	name: string;
	surname: string;

	constructor(name: string, surname: string) {
		libraryHelpers.validateSimpleString(name);
		libraryHelpers.validateSimpleString(surname);
		this._id = uuidv4();
		this.name = name;
		this.surname = surname;
	}

	get id() {
		return this._id;
	}

	setName(name: string): void {
		libraryHelpers.validateSimpleString(name);
		this.name = name;
	}

	setSurname(surname: string): void {
		libraryHelpers.validateSimpleString(surname);
		this.surname = surname;
	}
}

export default LibraryUser;
