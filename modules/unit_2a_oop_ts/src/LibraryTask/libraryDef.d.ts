export interface WithUUID {
	readonly id: string;
}
export interface ILibraryUser extends WithUUID {
	name: string;
	surname: string;
	setName(name: string): void;
	setSurname(surname: string): void;
}

export interface IBook extends WithUUID {
	readonly image: string;
	title: string;
	author: string;
	shortDescription: string;
	setTitle(title: string): void;
	setAuthor(author: string): void;
	setShortDescription(shortDescription: string): void;
}

export interface IBooking extends WithUUID {
	borrowingDate: string;
	plannedReturnDate: Date;
	dailyFine: number;
	borrowedBooks: IBook[];
	user: ILibraryUser;
	borrowBooks(books: IBook[]): void;
	returnBooks(books: IBook[], returnDate: Date): void;
	calculateFine(
		currentReturnDate: Date,
		plannedReturnDate: Date,
		idBook: string
	): number;
}

export interface ILibrary {
	books: IBook[];
	bookings: IBooking[];
	borrowedBooks: IBook[];
	addBooks(books: IBook[]): void;
	removeBooks(books: IBook[]): void;
	createBooking(user: ILibraryUser, books: IBook[]): void;
	removeBooking(user: ILibraryUser, books: IBook[]): void;
}
