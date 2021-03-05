import libraryHelpers from './libraryHelpers';
import Book from './Book';
import LibraryUser from './LibraryUser';
import { v4 as uuidv4 } from 'uuid';
import { IBooking, ILibraryUser, IBook } from './libraryDef';
import helpersFunc from './libraryHelpers';
// Obiekt charakteryzujący wypożyczenie:
class Booking implements IBooking {
	// Ma mieć: datę wypożyczenia, datę zwrotu( +7d od wypożyczenia), id wypożyczonej pozycji, jej tytuł. kara
	// Ma umożliwiać:
	// - wypożyczenie ksiązki (jesli książki nie ma w liście - jest niedostepna/
	// wypożyczona ma zwracać informację) jesli jest dostępna usuwać książkę z listy
	// dostępnych,
	// - zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie -
	// każdy dzień zwłoki to naliczenie jakiejś kary.
	private readonly _id: string;
	borrowingDate: string;
	plannedReturnDate: Date;
	dailyFine: number;
	borrowedBooks: IBook[];
	user: ILibraryUser;

	constructor(user: ILibraryUser) {
		this._id = uuidv4();
		this.borrowingDate = new Date().toLocaleDateString();
		this.plannedReturnDate = libraryHelpers.addDays(new Date(), 7);
		this.dailyFine = 5;
		this.borrowedBooks = [];
		this.user = user;
	}

	get id() {
		return this._id;
	}

	borrowBooks(books: IBook[]): void {
		books.forEach((book) => {
			const index = this.borrowedBooks.findIndex(({ id }) => id === book.id);
			if (index !== -1) {
				console.log(
					`You cannot borrow book with ID ${book.id} because it is already borrowed`
				);
			} else {
				this.borrowedBooks.push(book);
			}
		});
	}

	returnBooks(books: IBook[], returnDate: Date): void {
		let totalFine = 0;
		books.forEach((book) => {
			const index = this.borrowedBooks.findIndex(({ id }) => id === book.id);
			// check if passed book is borrowed:
			if (index === -1) {
				console.log(`Book with id ${book.id} was not found`);
			} else {
				// check if uset have to pay fine and calculate it:
				const plannedReturnDate = this.plannedReturnDate;
				const currentReturnDate = returnDate;
				const partFine = this.calculateFine(
					currentReturnDate,
					plannedReturnDate,
					book.id
				);
				totalFine += partFine;
				// delete returned book:
				this.borrowedBooks.splice(index, 1);
			}
		});
		if (totalFine) {
			console.log(`Your total fine is ${totalFine}PLN`);
		}
	}

	calculateFine(
		currentReturnDate: Date,
		plannedReturnDate: Date,
		idBook: string
	): number {
		let partFine = 0;
		const oneDayInMilliSeconds = 1000 * 60 * 60 * 24;
		if (currentReturnDate > plannedReturnDate) {
			const delayInDays = (
				(Date.parse(currentReturnDate.toString()) -
					Date.parse(plannedReturnDate.toString())) /
				oneDayInMilliSeconds
			).toFixed(0);
			partFine = parseInt(delayInDays) * this.dailyFine;
			console.log(
				`Your delay is ${delayInDays} days. You have to pay ${partFine}PLN fine for book with ID ${idBook}`
			);
		}
		return partFine;
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

const result = booking1.borrowingDate;
// console.log(new Date(booking1.borrowingDate) > new Date('4.03.2021'));
// console.log(Date.parse(booking1.borrowingDate));

booking1.borrowedBooks = [book1, book2, book3];
let retDate = new Date();
const resultDate = helpersFunc.addDays(retDate, 40);
// const argument = new Date(resultDate);
booking1.returnBooks([book1, book2], resultDate);

// booking1.borrowBooks([book1]);
// console.log(booking1);

// booking1.borrowBooks([book3]);
// console.log(booking1);

// booking1.returnBooks([book1, book3]);
// console.log(booking1);

// booking2.borrowBooks([book2]);
// console.log(booking2);
