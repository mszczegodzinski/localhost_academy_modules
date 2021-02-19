import { v4 as uuidv4 } from 'uuid';
import libraryHelpers from './libraryHelpers';

interface ILibraryUser {
	id: string;
	name: string;
	surname: string;
}

class LibraryUser implements ILibraryUser {
	private readonly _id = uuidv4();
	constructor(private _name: string, private _surname: string) {
		libraryHelpers.validateSimpleString(_name);
		libraryHelpers.validateSimpleString(_surname);
		this._name = _name;
		this._surname = _surname;
	}

	// get id() {
	// 	return this._id;
	// }

	// get name() {
	// 	return this._name;
	// }

	// set name(name: string) {
	// 	libraryHelpers.validateSimpleString(name);
	// 	this._name = name;
	// }

	// get surname() {
	// 	return this._surname;
	// }

	// set surname(surname: string) {
	// 	libraryHelpers.validateSimpleString(surname);
	// 	this._surname = surname;
	// }
}

export default LibraryUser;
