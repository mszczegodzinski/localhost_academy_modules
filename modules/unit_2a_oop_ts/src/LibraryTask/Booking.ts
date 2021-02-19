import libraryHelpers from './libraryHelpers';
import Book from './Book';
import LibraryUser from './LibraryUser';
import { v4 as uuidv4 } from 'uuid';

interface IBooking {
	id: string;
	borrowingDate: string;
	returnDate: string;
	dailyFine: number;
	borrowedBooks: Book[];
	user: LibraryUser;
}

// Obiekt charakteryzujący wypożyczenie:
class Booking implements IBooking {
	// Ma mieć: datę wypożyczenia, datę zwrotu( +7d od wypożyczenia), id wypożyczonej pozycji, jej tytuł. kara
	// Ma umożliwiać:
	// - wypożyczenie ksiązki (jesli książki nie ma w liście - jest niedostepna/
	// wypożyczona ma zwracać informację) jesli jest dostępna usuwać książkę z listy
	// dostępnych,
	// - zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie -
	// każdy dzień zwłoki to naliczenie jakiejś kary.

	private readonly _id = uuidv4();
	private readonly _borrowingDate = new Date().toLocaleDateString();
	private readonly _returnDate = libraryHelpers.addDays(new Date(), 7);
	private readonly _dailyFine = 5;
	private _borrowedBooks: Book[] = [];

	constructor(private _user: LibraryUser) {
		this._user = _user;
	}

	// get id() {
	// 	return this._id;
	// }

	// get borrowingDate() {
	// 	return this._borrowingDate;
	// }

	// get returnDate() {
	// 	return this._returnDate;
	// }

	// get dailyFine() {
	// 	return this._dailyFine;
	// }

	// get borrowedBooks() {
	// 	return this._borrowedBooks;
	// }

	// set borrowedBooks(borrowedBooks: Book[]) {
	// 	this._borrowedBooks = borrowedBooks;
	// }

	// get user() {
	// 	return this._user;
	// }

	// set user(user: LibraryUser) {
	// 	this._user = user;
	// }

	// za mało logiki w stosunku do wybranej ścieżki rozwiazani
	borrowBooks(books: Book[]) {
		books.forEach((book) => {
			const result = this._borrowedBooks.filter(
				(currentBook) => currentBook.id === book.id
			);
			if (!result.length) {
				throw new Error('You cannot borrow book which is already borrowed');
			}
			this._borrowedBooks.push(book);
		});
	}

	returnBooks(books: Book[]) {
		books.forEach((book) => {
			const result = this._borrowedBooks.filter(
				(currentBook) => currentBook.id !== book.id
			);
			if (!result.length) {
				throw new Error('No book to remove found');
			}
			this._borrowedBooks = result;
		});
		// brak sprawdzenia czy oplata jest naliczona
	}
}

export default Booking;
const book1 = new Book(
	'book 1 title',
	'John Kowalsky',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit consectetur sed non in.'
);
const book2 = new Book(
	'book 2 title',
	'Jan Nowak',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit consectetur sed non in.'
);
const book3 = new Book(
	'book 3 title',
	'Marcin Marciniak',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit consectetur sed non in.'
);

const books = [book1, book2, book3];
const libraryUser1 = new LibraryUser('user1name', 'user1surname');
const libraryUser2 = new LibraryUser('user2name', 'user2surname');
const booking1 = new Booking(libraryUser1);
const booking2 = new Booking(libraryUser2);

// booking1.borrowBooks([book1]);
// console.log(booking1);

// booking1.borrowBooks([book3]);
// console.log(booking1);

// booking1.returnBooks([book1, book3]);
// console.log(booking1);

// booking2.borrowBooks([book2]);
// console.log(booking2);
