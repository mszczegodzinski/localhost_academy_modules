import { v4 as uuidv4 } from 'uuid';
import libraryHelpers from './libraryHelpers';

class LibraryUser {
  constructor(name, surname) {
    libraryHelpers.validateSimpleString(name);
    libraryHelpers.validateSimpleString(surname);

    this.id = uuidv4();
    this.name = name;
    this.surname = surname;
  }
}

export default LibraryUser;
