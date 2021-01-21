import libraryHelpers from './libraryHelpers';
import Book from './Book';
import LibraryUser from './LibraryUser';
import { v4 as uuidv4 } from 'uuid';

// Obiekt charakteryzujący wypożyczenie:
class Booking {
  // Ma mieć: datę wypożyczenia, datę zwrotu( +7d od wypożyczenia), id wypożyczonej pozycji, jej tytuł. kara
  // Ma umożliwiać:
  // - wypożyczenie ksiązki (jesli książki nie ma w liście - jest niedostepna/
  // wypożyczona ma zwracać informację) jesli jest dostępna usuwać książkę z listy
  // dostępnych,
  // - zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie -
  // każdy dzień zwłoki to naliczenie jakiejś kary.

  // w konstruktorze powinien byc tylko user, a wypozyczone ksiazki powinny byc dodawane przez metode borrowBook
  constructor(user) {
    libraryHelpers.validateSpecificInstance(user, LibraryUser);

    this.id = uuidv4();
    this.borrowingDate = new Date().toLocaleDateString();
    this.returnDate = libraryHelpers.addDays(new Date(), 7);
    this.dailyFine = 5;
    this.user = user;
    this.borrowedBooks = [];
  }

  // borrowBook(books, user) {
  borrowBooks(books) {
    libraryHelpers.validateSpecificInstanceInArray(books, Book);
    // libraryHelpers.validateSpecificInstance(user, LibraryUser);
    // manipulowac na this.books czy robic kopie i zwracac?
    books.forEach((book) => {
      this.borrowedBooks.push(book);
    });
  }

  returnBooks(books) {
    libraryHelpers.validateSpecificInstanceInArray(books, Book);

    books.forEach((book) => {
      const result = this.borrowedBooks.filter(
        (currentBook) => currentBook.id !== book.id
      );
      this.borrowedBooks = result;
    });
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
