// potrzebna bylaby abstrakcja np. App, ktore zawieraloby wszystkich userow, setEmail  , userType === "admin" - dodac

import moment from 'moment';
import userHelpers from './userHelpers';
// Stwórz strukturę danych związaną z użytkownikami
// Obiekt charakteryzujący użytkownika:
class User {
  //     Ma mieć: Imię, Nazwisko, datę urodzenia, haslo, płeć, adres email, poziom dostepu = ""user""
  //     Ma umożliwiać: zmianę email, zmianę hasła
  constructor(id, name, surname, birthDate, password, gender, email, type) {
    userHelpers.validateSimpleString(name);
    userHelpers.validateSimpleString(surname);
    userHelpers.validateDate(birthDate);
    userHelpers.validatePassword(password);
    userHelpers.validateGender(gender);
    userHelpers.validateEmail(email);
    userHelpers.validateUserType(type);

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthDate = moment(birthDate).format('MM/DD/YYYY');
    this.password = password;
    this.gender = gender;
    this.email = email;
    this.type = type;
    this.modifiedBy = null;
  }
}

export default User;

const user1 = new User(
  1,
  'Jan1',
  'Kowalski',
  new Date('09-01-2020'),
  'a#a3456B',
  'male',
  'jankowalski@gmail.com',
  'regular'
);

const user2 = new User(
  2,
  'Admin1',
  'Admin1',
  new Date('09-01-2020'),
  '1Dxa#a3456B',
  'female',
  'janadmin@gmail.com',
  'admin'
);

// console.log(user1);
// console.log(user2);

// passwoard regex /(?=.*[a-z])(?=.*[0-9])(?=.*\W)/i -> dowolny znak minimum jeden znak a-z, minimum jedna cyfra, minimum jeden znak specjalny (not word) , flaga i - ignore case

// Dodatkowo User ma mieć walidacje wykonaną za pomocą is.js oraz datę obsługiwaną przez bibliotekę moment.js
// - email ma być poprawnym emailem
// - password ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny
// - płeć musi być ze zbioru [male, female]
// - data (nieważne jaka wejdzie) do propa musi wejść w formacie MM/DD/YYYY
// - imię i nazwisko musi być niepuste
// jeśli któraś z walidacji się nie powiedzie obiekt ma nie być tworzony, tylko ma zwracać error z odpowiednimi komunikatami o niepowiedzionej walidacji
