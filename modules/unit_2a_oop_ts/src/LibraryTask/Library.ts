import Book from './Book';
import Booking from './Booking';
import LibraryUser from './LibraryUser';
import { IBook, IBooking, ILibrary, ILibraryUser } from './libraryDef';
// Stwórz strukturę danych związaną z wypożyczaniem książek
// Obiekt charakteryzujący bibliotekę:
class Library implements ILibrary {
	// Ma miec: listę książek, listę wypożyczeń oraz listę wypożyczonych książek
	// Ma umożliwiać:
	// - dodawanie książek do listy
	// - usuwanie książek z listy
	// - wypożyczanie książki dla usera X
	// - oddanie wypożyczania książki
	private _books: IBook[] = [];
	private _bookings: IBooking[] = [];
	private _borrowedBooks: IBook[] = [];

	get books() {
		return this._books;
	}

	get bookings() {
		return this._bookings;
	}

	get borrowedBooks() {
		return this._borrowedBooks;
	}

	setBorrowedBooks(borrowedBooks: IBook[]): void {
		this._borrowedBooks = [...this._borrowedBooks, ...borrowedBooks];
	}

	addBooks(books: IBook[]): void {
		books.forEach((book) => {
			const index = this._books.findIndex(({ id }) => id === book.id);
			if (index !== -1) {
				console.log(`The book with id ${book.id} is already exists`);
			} else {
				this._books.push(book);
				console.log(`The book with id ${book.id} was added successfully.`);
			}
		});
	}

	removeBooks(books: IBook[]): void {
		books.forEach((book) => {
			const booksIndex = this._books.findIndex(({ id }) => id === book.id);
			const borrowedBooksIndex = this._borrowedBooks.findIndex(
				({ id }) => id === book.id
			);
			if (booksIndex === -1) {
				console.log(`The book with id ${book.id} was not found.`);
			}
			if (borrowedBooksIndex !== -1) {
				console.log(
					`The book with id ${book.id} is borrowed. It isn't possible to delete borrowed book.`
				);
			}
			if (booksIndex !== -1 && borrowedBooksIndex === -1) {
				this._books.splice(booksIndex, 1);
				console.log(`The book with id ${book.id} was removed successfully.`);
			}
		});
	}

	createBooking(user: ILibraryUser, books: IBook[]): void {
		// books what are not borrowed yet:
		const nonBorrowedBooks: IBook[] = [];
		// check what books are already borrowed:
		books.forEach((book) => {
			const index = this._borrowedBooks.findIndex(({ id }) => id === book.id);
			if (index !== -1) {
				console.log(`Book with id ${book.id} is already borrowed.`);
			}
			if (index === -1) {
				nonBorrowedBooks.push(book);
				console.log(
					`Book with id ${book.id} was added to borrowedBooks successfully.`
				);
			}
		});
		const booking = new Booking(user);
		// add non borrowed books to new booking:
		booking.borrowBooks(nonBorrowedBooks);
		this._bookings.push(booking);
		// add non borrowed books to borrowed books array in the Library:
		this._borrowedBooks = [...this._borrowedBooks, ...nonBorrowedBooks];
	}

	removeBooking(user: ILibraryUser, books: IBook[]): void {
		const bookingsToRemove = this._bookings.filter(
			(booking) => booking.user.id === user.id
		);

		if (!bookingsToRemove.length) {
			console.log('No booking to remove found');
		}

		// remove books from every booking for specific user
		books.forEach((book) => {
			bookingsToRemove.forEach((bookingToRemove) => {
				const index = bookingToRemove.borrowedBooks.findIndex(
					({ id }) => id === book.id
				);
				// remove speficiv book:
				if (index !== -1) {
					bookingToRemove.borrowedBooks.splice(index, 1);
					console.log(
						`The book with id ${book.id} was removed from booking with id ${bookingToRemove.id}`
					);
				}
				// remove booking if its current length is 0:
				if (!bookingToRemove.borrowedBooks.length) {
					const bookingIndex = this._bookings.findIndex(
						({ id }) => id === bookingToRemove.id
					);
					this._bookings.splice(bookingIndex, 1);
				}
			});
		});
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
// library.addBooks([book1, book2, book3, book4, book5]);
// library.removeBooks([book1, book2, book3, book4]);
// library.setBorrowedBooks([book1, book2, book3]);
library.createBooking(libraryUser1, [book1, book4]);
library.createBooking(libraryUser1, [book5]);

console.log(library.bookings);

library.removeBooking(libraryUser1, [book5]);

console.log(library.bookings);
