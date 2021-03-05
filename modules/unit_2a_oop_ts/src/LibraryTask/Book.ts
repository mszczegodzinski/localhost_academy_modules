import { v4 as uuidv4 } from 'uuid';
import libraryHelpers from './libraryHelpers';
import { IBook } from './libraryDef';
class Book implements IBook {
	// Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
	private readonly _id: string;
	private readonly _image: string;
	title: string;
	author: string;
	shortDescription: string;

	constructor(title: string, author: string, shortDescription: string) {
		libraryHelpers.validateSimpleString(title);
		libraryHelpers.validateSimpleString(author);
		libraryHelpers.validateSimpleString(shortDescription);

		this._id = uuidv4();
		this._image = libraryHelpers.generateRandomImagePath();
		this.title = title;
		this.author = author;
		this.shortDescription = shortDescription;
	}

	get id() {
		return this._id;
	}

	get image() {
		return this._image;
	}

	setTitle(title: string): void {
		libraryHelpers.validateSimpleString(title);
		this.title = title;
	}

	setAuthor(author: string): void {
		libraryHelpers.validateSimpleString(author);
		this.author = author;
	}

	setShortDescription(shortDescription: string): void {
		libraryHelpers.validateSimpleString(shortDescription);
		this.shortDescription = shortDescription;
	}
}

export default Book;

const book1 = new Book(
	'book 1 title',
	'John Kowalsky',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit consectetur sed non in.'
);
// console.log(book1);
