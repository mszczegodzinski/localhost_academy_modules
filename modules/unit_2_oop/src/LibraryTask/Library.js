import Book from './Book';
import Booking from './Booking';
import libraryHelpers from './libraryHelpers';
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
  constructor() {
    this.books = [];
    this.bookings = [];
    this.borrowedBooks = [];
  }

  addBooks(books) {
    libraryHelpers.validateSpecificInstanceInArray(books, Book);
    books.forEach((book) => {
      this.books.push(book);
    });
  }

  removeBooks(books) {
    libraryHelpers.validateSpecificInstanceInArray(books, Book);
    books.forEach((book) => {
      const result = this.books.filter(
        (currentBook) => currentBook.id !== book.id
      );
      if (!result.length) {
        throw new Error('No book to remove found');
      }
      if (this.borrowedBooks.length) {
        books.forEach((book) => {
          this.borrowedBooks.forEach((borrowedBook) => {
            if (borrowedBook.id === book.id) {
              throw new Error('You cannot remove a borrowed book');
            }
          });
        });
      }
      this.books = result;
    });
  }

  createBooking(user, books) {
    libraryHelpers.validateSpecificInstance(user, LibraryUser);
    libraryHelpers.validateSpecificInstanceInArray(books, Book);
    const booking = new Booking(user);
    books.forEach((book) => {
      if (this.borrowedBooks.length) {
        this.borrowedBooks.forEach((borrowedBook) => {
          if (borrowedBook.id === book.id) {
            throw new Error('You cannot borrow book which is already borrowed');
          }
        });
      }
    });
    booking.borrowBook(books);
    this.bookings.push(booking);
  }

  removeBooking(booking) {
    libraryHelpers.validateSpecificInstance(booking, Booking);
    // check if were books to remove:
    const result = this.bookings.filter(
      (currentBooking) => currentBooking.id !== booking.id
    );
    if (!result.length) {
      throw new Error('No book to remove found');
    }
    // remove books which are currently borrowed:
    if (this.borrowedBooks.length) {
      booking.borrowedBook.forEach((book, i) => {
        if (currentBook.id === book.id) {
          this.borrowedBook.splice(i, 1);
        }
      });
    }

    this.bookings = result;
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
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

console.log(library);
