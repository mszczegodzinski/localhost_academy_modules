import { v4 as uuidv4 } from 'uuid';
import libraryHelpers from './libraryHelpers';

// Obiekt charakteryzujący książkę:
class Book {
  // Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
  constructor(title, author, shortDescription) {
    libraryHelpers.validateSimpleString(title);
    libraryHelpers.validateSimpleString(author);
    libraryHelpers.validateSimpleString(shortDescription);

    this.id = uuidv4();
    this.title = title;
    this.author = author;
    this.image = libraryHelpers.generateRandomImagePath();
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
