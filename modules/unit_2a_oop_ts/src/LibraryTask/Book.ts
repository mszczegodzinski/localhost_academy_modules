import { v4 as uuidv4 } from 'uuid';
import libraryHelpers from './libraryHelpers';

// Obiekt charakteryzujący książkę:
interface IBook {
	id: string;
	image: string;
	title: string;
	author: string;
	shortDescription: string;
}
class Book implements IBook {
	// Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
	private readonly _id = uuidv4();
	private readonly _image = libraryHelpers.generateRandomImagePath();
	constructor(
		private _title: string,
		private _author: string,
		private _shortDescription: string
	) {
		libraryHelpers.validateSimpleString(_title);
		libraryHelpers.validateSimpleString(_author);
		libraryHelpers.validateSimpleString(_shortDescription);

		this._title = _title;
		this._author = _author;
		this._shortDescription = _shortDescription;
	}

	// get id() {
	// 	return this._id;
	// }

	// get image() {
	// 	return this._image;
	// }

	// get title() {
	// 	return this._title;
	// }

	// set title(title: string) {
	// 	libraryHelpers.validateSimpleString(title);
	// 	this._title = title;
	// }

	// get author() {
	// 	return this._author;
	// }

	// set author(author: string) {
	// 	libraryHelpers.validateSimpleString(author);
	// 	this._author = author;
	// }

	// get shortDescription() {
	// 	return this._shortDescription;
	// }

	// set shortDescription(shortDescription: string) {
	// 	libraryHelpers.validateSimpleString(shortDescription);
	// 	this._shortDescription = shortDescription;
	// }
}

export default Book;

const book1 = new Book(
	'book 1 title',
	'John Kowalsky',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit consectetur sed non in.'
);
// console.log(book1);
