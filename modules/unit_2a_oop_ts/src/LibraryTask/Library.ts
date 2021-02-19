import Book from './Book';
import Booking from './Booking';
import LibraryUser from './LibraryUser';
// Stwórz strukturę danych związaną z wypożyczaniem książek
// Obiekt charakteryzujący bibliotekę:
class Library {
	// Ma miec: listę książek, listę wypożyczeń oraz listę wypożyczonych książek
	// Ma umożliwiać:
	// - dodawanie książek do listy
	// - usuwanie książek z listy
	// - wypożyczanie książki dla usera X
	// - oddanie wypożyczania książki
	private _books: Book[] = [];
	private _bookings: Booking[] = [];
	private _borrowedBooks: Book[] = [];

	addBooks(books: Book[]) {
		books.forEach((book) => {
			this._books.push(book);
		});
	}

	removeBooks(books: Book[]) {
		books.forEach((book) => {
			const result = this._books.filter(
				(currentBook) => currentBook.id !== book.id
			);
			if (!result.length) {
				throw new Error('No book to remove found');
			}
			if (this._borrowedBooks.length) {
				books.forEach((book) => {
					this._borrowedBooks.forEach((borrowedBook) => {
						if (borrowedBook.id === book.id) {
							throw new Error('You cannot remove a borrowed book');
						}
					});
				});
			}
			this._books = result;
		});
	}

	createBooking(user: LibraryUser, books: Book[]) {
		books.forEach((book) => {
			if (this._borrowedBooks.length) {
				this._borrowedBooks.forEach((borrowedBook) => {
					if (borrowedBook.id === book.id) {
						// tu zamiast errora console.log
						throw new Error('You cannot borrow book which is already borrowed');
					}
				});
			}
		});
		const booking = new Booking(user);
		booking.borrowBooks(books);
		this._bookings.push(booking);
	}

	removeBooking(booking: Booking) {
		// check if were books to remove:
		const result = this._bookings.filter(
			(currentBooking) => currentBooking.id !== booking.id
		);
		if (!result.length) {
			throw new Error('No booking to remove found');
		}
		// remove books which are currently borrowed:
		booking.borrowedBooks.forEach((book, i) => {
			this._borrowedBooks.forEach((currentBook) => {
				if (currentBook.id === book.id) {
					this._borrowedBooks.splice(i, 1);
				}
			});
		});
		this._bookings = result;
	}
}

export default Library;

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
const book4 = new Book(
	'book 4 title',
	'Maja Maja',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit consectetur sed non in.'
);
const book5 = new Book(
	'book 5 title',
	'No name',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit consectetur sed non in.'
);

const libraryUser1 = new LibraryUser('user1name', 'user1surname');
const libraryUser2 = new LibraryUser('user2name', 'user2surname');

const library = new Library();
library.addBooks([book1, book2, book3, book4, book5]);

console.log(library);
